import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MedicationSelect from './MedicationSelect';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FirebaseApp from '../../../firebase.js';

const AddMoreButton = styled.div`
    width: 20%;
    border: solid lightgreen 0.2em;
    border-radius: 0.5em;
    text-align: center;
    padding: 0.5em 0;
    color: lightgreen;
    transition: all 0.25s;
    cursor: pointer;
    &:hover {
        background-color: lightgreen;
        color: white;
    }
`;

const Component = styled.div`
    height: fit-content;
`;

const TimeOfDay = styled.div`
    padding: 0.5em 0;
    width: 75%;
    border: black solid 0.1em;
    display: flex;
    margin: 0 auto;
    margin-bottom: 0.5em;
`;

const Time = styled.p`
    font-size: 1em;
    margin: auto 1em;
`;

const TimeSelector = styled.div`
    margin-top: 0.5em;
    display: flex;
`;

const TwoDigitInput = styled.input`
    width: 1.5em;
    border: none;
    border-bottom: thin black solid;
    text-align: center;
    height: fit-content;
    margin: auto 0;
`;

const SubmitTime = styled.div`
    width: 20%;
    height: fit-content;
    border: solid lightgreen 0.2em;
    border-radius: 0.5em;
    text-align: center;
    padding: 0.1em 0;
    color: lightgreen;
    transition: all 0.25s;
    cursor: pointer;
    font-size: 1em;
    &:hover {
        background-color: lightgreen;
        color: white;
    }
    margin-left: auto;
`;

const DelButton = styled.div`
    height: fit-content;
    width: 20%;
    margin: auto 0.5em;
    background-color: red;
    color: white;
    padding: 0.1em 0;
    margin-left: auto;
    text-align: center;
    border-radius: 0.5em;
    cursor: pointer;
`;

function AddMedication(props) {
    const [addingMore, setAddingMore] = useState(false);
    const [medications, setMedications] = useState([
        { name: "Med 1", id: 0, checked: false },
        { name: "Medication", id: 1, checked: false },
        { name: "Med 45", id: 2, checked: false },
        { name: "med 420", id: 3, checked: false },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [selectedMed, setSelectedMed] = useState("");
    const [timesOfDay, setTimesOfDay] = useState([]); // {time: "00-00"}
    const [hourInput, setHourInput] = useState("00");
    const [minInput, setMinInput] = useState("00");

    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = async () => {
        try {
            var firebaseAuth = await FirebaseApp.auth();
            await firebaseAuth.signInWithEmailAndPassword("william.t2039@gmail.com", "Google123456");
            let db = await FirebaseApp.firestore();
            const snapshot = await db.collection('medication_info').get()
            let data = snapshot.docs.map(doc => doc.data());
            console.log(data);
            let medInfo = [];
            data.map(ele => {
                if (ele.name != undefined) {
                    medInfo.push({ desc: ele.description, name: ele.name });
                }
            })
            console.log(medInfo)
            setMedications(medInfo)
        } catch (err) {
            console.log(err)
        }
    }

    const select = (id) => {
        setMedications(medications.map(ele => {
            if (ele.id == id) {
                return { ...ele, checked: !ele.checked }
            }
            return ele;
        }))
    }

    const addMed = (name, desc) => {
        setShowModal(true);
        setSelectedMed({name: name, desc: desc});
    }

    const close = () => {
        setShowModal(false);
        setTimesOfDay([]);
    }

    const submit = async () => {
        //send to server
        try {
            var firebaseAuth = FirebaseApp.auth();
            let user = await firebaseAuth.signInWithEmailAndPassword("william.t2039@gmail.com", "Google123456");
            let db = await FirebaseApp.firestore();
            let data = null;
            let res = await db.collection('users').doc(user.user.uid).get().then((querySnapshot) => {
                data = querySnapshot.data();
            });
            console.log(data)
            let dataToInsert = { name: selectedMed.name, desc: selectedMed.desc, times: timesOfDay };
            if (data.medications == undefined) {
                await db.collection('users').doc(user.user.uid).update({ medications: [dataToInsert] });
            } else {
                await db.collection('users').doc(user.user.uid).update({ medications: [...data.medications, dataToInsert] });
            }
            props.setUpdate(!props.update)
        } catch (err) {
            console.log("Error");
            console.log(err);
        }
        setShowModal(false);
    }

    const timeInputChecker = (e, functionToUpdate) => {
        let value = e.target.value;
        if (!isNaN(value)) {
            if (value.length <= 2) {
                functionToUpdate(value)
            }
        }
    }

    const addTime = () => {
        let hourInputFormated = "";
        let minInputFormated = "";
        (hourInput.length == 1) ? hourInputFormated = "0" + hourInput : hourInputFormated = hourInput;
        (minInput.length == 1) ? minInputFormated = "0" + minInput : minInputFormated = minInput;
        setTimesOfDay(timesOfDay => [...timesOfDay, { time: hourInputFormated + ":" + minInputFormated }])
    }

    const delTime = (id) => {
        let newArr = [];
        timesOfDay.map((ele, i) => {
            if (i != id) {
                newArr.push(ele);
            }
        })
        setTimesOfDay(newArr);
    }

    return (
        <Component>
            <AddMoreButton onClick={() => { setAddingMore(!addingMore) }}>Add More Medications</AddMoreButton>
            {
                !addingMore ? '' :
                    <>
                        {
                            medications.map(ele => <MedicationSelect name={ele.name} id={ele.id} select={addMed} desc = {ele.desc} />)
                        }
                    </>
            }
            <Modal show={showModal}>
                <Modal.Header closeButton>
                    <Modal.Title>When do you need to take it?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        timesOfDay.map((ele, i) =>
                            <TimeOfDay>
                                <Time onClick={() => { }}>{ele.time}</Time>
                                <DelButton onClick={() => { delTime(i) }}>Delete</DelButton>
                            </TimeOfDay>
                        )
                    }
                    <TimeSelector>
                        <TwoDigitInput value={hourInput} onChange={(e) => { timeInputChecker(e, setHourInput) }} type="text" />:<TwoDigitInput value={minInput} onChange={(e) => { timeInputChecker(e, setMinInput) }} type="text" />
                        <SubmitTime onClick={addTime}>Submit</SubmitTime>
                    </TimeSelector>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </Component>
    )
}

export default AddMedication;