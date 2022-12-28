import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StatsDialog = (props: any) => {
    const {isOpen, close} = props
    const [currentUser, setCurrentUser] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");
    const [learningPoints, setLearingPoints] = useState(0.0);
    const [teachingPoints, setTeachingPoints] = useState(0.0);
    const [profilePoints, setProfilePoints] = useState(0.0);


    useEffect(() => {
        AsyncStorage.getItem('user').then((user) => {
            setCurrentUser(user)
            setIsLoggedIn(true)
        });
    }, [isOpen])

    useEffect(() => {
        if(isOpen) {
            setupData();
        }
    }, [isOpen, currentUser])

    const url = `${APIUrl}/users/${currentUser}/points`;

	const setupData = async () => {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        };
        
        const response = await fetch(url, requestOptions)
        if(response.status == 500) {
            setIsError(true);
            setErrorMsg("Server Fehler, bitte erneut versuchen")
        }
        if(response.ok) {
            setIsError(false);
            setErrorMsg("");
            const data: any = await response.json();
            setLearingPoints(data);
            setProfilePoints(data);
            setTeachingPoints(data);
            console.log(data)
        }
    };
    
    return <>
        <Modal isOpen={isOpen} onClose={() => close()} avoidKeyboard>
            <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Points</Modal.Header>
            <Modal.Body>
                <Center w="100%">
                    <>
                    {learningPoints === undefined ? (
                        <Spinner color="blue.500" />
                    ) : (<></>)
                    }
                     {teachingPoints === undefined ? (
                        <Spinner color="blue.500" />
                    ) : (<></>)
                    }
                     {profilePoints === undefined ? (
                        <Spinner color="blue.500" />
                    ) : (<></>)
                    }
                    </>
                </Center>
            </Modal.Body>
            <Modal.Footer>
                <Button flex="1" onPress={() => {
                    close(false);
                }}>
                Zurück
                </Button>
            </Modal.Footer>
            </Modal.Content>
        </Modal>
    </>
}