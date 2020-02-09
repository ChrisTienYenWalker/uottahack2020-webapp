import React, { useState } from 'react';
import styled from 'styled-components';
import ShowMedications from './ShowMedications';
import AddMedication from './AddMedication';

const Page = styled.div`
    padding-top: 2em;
    width: 65em;
    margin: auto;
`;

const Title = styled.h1`
`;

const BlackLine = styled.div`
    width: 100%;
    height: 0.1em;
    background-color: grey;
    margin-bottom: 1em;
`;

function HomePage(props) {
    const [update, setUpdate] = useState(true);
    return (
        <Page>
            <Title>
                DRUG TIME YAAAAAAAAA BOYS
            </Title>
            <BlackLine />
            <ShowMedications update = {update} user = {props.user} />
            <AddMedication update = {update} setUpdate = {setUpdate} />
        </Page>
    )
}

export default HomePage;