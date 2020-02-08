import React, { useEffect } from 'react';
import styled from 'styled-components';
import Medication from './Medication';

function ShowMedication(props) {
    const [medications, setMedications] = useEffect([]);
    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = () => {
        
    }
    return (
        <Component>
            {
                medications.map(ele => <Medication name = {ele.name} />)
            }
        </Component>
    )
}