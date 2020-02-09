import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    width: 100%;
    border-bottom: lightgray 0.1em solid;
    display: flex;
    height: 4em;
`;

const Name = styled.h4`
    font-size: 1.25em;
    margin: auto 0;
    margin-right: auto;
`;

const AddMedication = styled.h4`
    color: green;
    cursor: pointer;
    margin: auto 0;
    &:hover {
        text-decoration: underline;
    }
`;

function MedicationSelect(props) {
    return (
        <Component>
            <Name>{props.name}</Name>
            <AddMedication onClick = {() => {props.select(props.name, props.desc)}}>Add A Medication</AddMedication>
        </Component>
    )
}

export default MedicationSelect;