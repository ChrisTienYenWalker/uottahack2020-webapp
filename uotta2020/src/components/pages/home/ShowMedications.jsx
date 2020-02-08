import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Medication from './Medication';

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
    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = () => {
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