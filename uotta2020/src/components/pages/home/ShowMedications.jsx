import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Medication from './Medication';

const Component = styled.div``;

function ShowMedication(props) {
    const [medications, setMedications] = useState([]);
    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = () => {
        setMedications([
            {name: "Testing", desc: "This is a desc, so ya it works. Yeep do dah."}
        ]);
    }
    return (
        <Component>
            {
                medications.map(ele => <Medication name = {ele.name} desc = {ele.desc} />)
            }
        </Component>
    )
}

export default ShowMedication;