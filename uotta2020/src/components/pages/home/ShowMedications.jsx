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
        var firebaseAuth = FirebaseApp.auth();
        let db = await FirebaseApp.firestore();
        let res = await db.collection('users').doc(user.user.uid)
        setMedications([
            { name: "Testing", desc: "This is a desc, so ya it works. Yeep do dah." },
            { name: "Advil", desc: "Make that pain go away. Yepp it de do dah it needs to be longer." }
        ]);
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