import React from 'react';
import styled from 'styled-components';

const Component = styled.div``;

function Medication(props) {
    return (
        <Component>
            <Name>{props.name}</Name>
        </Component>
    );
}

export default Medication;