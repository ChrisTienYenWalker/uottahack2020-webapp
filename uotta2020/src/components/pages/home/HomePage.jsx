import React from 'react';
import styled from 'styled-components';

const Page = styled.div`

`;

function HomePage(props) {
    return (
        <Page>
            <Title>
                Home Page
            </Title>
            <ShowMedications />
            <AddMedication />
        </Page>
    )
}

export default HomePage;