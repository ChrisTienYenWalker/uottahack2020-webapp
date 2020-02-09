import React from 'react';
import styled from 'styled-components';
import Default from '../../../img/cat.jpeg';
import FirebaseApp from '../../../firebase.js';

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

const DeleteButton = styled.div`
    margin-top: 1em;
    width: 25%;
    border: solid red 0.2em;
    border-radius: 0.5em;
    text-align: center;
    padding: 0.2em 0;
    color: red;
    transition: all 0.25s;
    cursor: pointer;
    &:hover {
        background-color: red;
        color: white;
    }
`;

const Time = styled.h4`
    font-size: 1.25em;
`;

const TimeContainer = styled.div`
    display: flex;
    width: 100%;
`;

const ShowTime = styled.h4`
    margin: 0;
    margin-right: 0.5em;
`;

function Medication(props) {
    const del = async () => {
        var firebaseAuth = FirebaseApp.auth();
        let db = await FirebaseApp.firestore();
        let res = await db.collection('users').doc(props.user.user.uid).get();
        let data = res.data();
        let newArr = [];
        data.medications.map(ele => {
            if (ele.name != props.name) {
                newArr.push(ele)
            }
        })
        await db.collection('users').doc(props.user.user.uid).update({ medications: newArr });
        props.update();
    }

    return (
        <Component>
            {console.log(props.image)}
            <Image src={props.image} />
            <TextContainer>
                <Name>{props.name}</Name>
                <Desc>{props.desc}</Desc>
                <Time>Times (24 hour clock):</Time>
                <TimeContainer>
                    {
                        props.times.map(ele => <ShowTime>{ele.time},</ShowTime>)
                    }
                </TimeContainer>
                <DeleteButton onClick={del}>Delete</DeleteButton>
            </TextContainer>
        </Component>
    );
}

export default Medication;