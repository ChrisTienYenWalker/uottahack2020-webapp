import React from 'react';
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
`;

function HomePage(props) {
    return (
        <Page>
            <Title>
                Insert Title Here
            </Title>
            <BlackLine />
            <ShowMedications />
            <AddMedication />
        </Page>
    )
}

export default HomePage;