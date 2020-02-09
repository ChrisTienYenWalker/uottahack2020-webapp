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
    }, [])

    const fetchAPI = async () => {
        console.log(props.user)
        var firebaseAuth = FirebaseApp.auth();
        let db = await FirebaseApp.firestore();
        console.log(props.user.user.uid)
        let res = await db.collection('users').doc(props.user.user.uid).get();
        console.log(res)
        let data = res.data();
        console.log(data)
        setMedications(data.medications)
    }
    return (
        <Component>
            <Title>Your Medication</Title>
            <MedicationContainer>
                {
                    medications.map(ele => <Medication name={ele.name} desc={ele.desc} />)
                }
            </MedicationContainer>
        </Component>
    )
}

export default ShowMedication;