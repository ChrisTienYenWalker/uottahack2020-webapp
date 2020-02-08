import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    width: 100%;
    background-color: lightgrey;
    border: thin solid darkgrey;
`;

const Name = styled.h4``;

const Desc = styled.h4``;

function Medication(props) {
    return (
        <Component>
            <Name>{props.name}</Name>
            <Desc>{props.desc}</Desc>
        </Component>
    );
}

export default Medication;