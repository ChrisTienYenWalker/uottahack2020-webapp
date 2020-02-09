import React from 'react';
import styled from 'styled-components';
import Default from '../../../img/cat.jpeg';

const Component = styled.div`
    display: flex;
    margin-bottom: 1rem;
    width: 29rem;
    padding: 1rem;
    border: 0.3rem solid darkgrey;
    border-radius: 0.5rem;
    transition: all 0.5s;
    &:hover {
        border-color: black;
    }
`;

const Name = styled.h4`
    font-size: 1em;
    margin: 0;
`;

const Desc = styled.h4`
    font-size: 1em;
    margin: 0;
`;

const TextContainer = styled.div`
    width: 65%;
    margin-left: 5%;
`;

const Image = styled.img`
    width: 30%;
    object-fit: cover;
`;

const SeeMore = styled.p`
    color: blue;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

function Medication(props) {
    return (
        <Component>
            <Image src = {Default} />
            <TextContainer>
                <Name>{props.name}</Name>
                <Desc>{props.desc}</Desc>
                <SeeMore>See More</SeeMore>
            </TextContainer>
        </Component>
    );
}

export default Medication;