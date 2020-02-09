import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Medication from './Medication';
import FirebaseApp from '../../../firebase.js';

const Component = styled.div`
`;

const Title = styled.h4`
    font-size: 1.5em;
    width: fit-content;
    margin: 0;
    margin-bottom: 1em;
`;

const MedicationContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

function ShowMedication(props) {
    const [medications, setMedications] = useState([]);
    const { user } = props;
    useEffect(() => {
        fetchAPI();
    }, [props.update])

    const fetchAPI = async () => {
        console.log(props.user)
        try {
        var firebaseAuth = FirebaseApp.auth();
        let db = await FirebaseApp.firestore();
        console.log(props.user.user.uid)
        let res = await db.collection('users').doc(props.user.user.uid).get();
        console.log(res)
        let data = res.data()
        setMedications(data.medications)
        } catch(err) {
            
        }
    }
    return (
        <Component>
            <Title>Your Medication</Title>
            <MedicationContainer>
                {
                    medications.map(ele => <Medication update = {fetchAPI} user = {props.user} times = {ele.times} name={ele.name} desc={ele.desc} />)
                }
            </MedicationContainer>
        </Component>
    )
}

export default ShowMedication;