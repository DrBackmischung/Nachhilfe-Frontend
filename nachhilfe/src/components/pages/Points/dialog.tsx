import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PointsDialog = (props: any) => {
    const {isOpen, close} = props
    const [currentUser, setCurrentUser] = useState("");
	const [pointsData, setPointsData] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");

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
        if(response.status == 404) {
            setIsError(true);
            setErrorMsg("Dein Profil wurde nicht gefunden.")
        }
        if(response.status == 500) {
            setIsError(true);
            setErrorMsg("Server Fehler, bitte erneut versuchen")
        }
        if(response.ok) {
            setIsLoggedIn(true);
            setIsError(false);
            setErrorMsg("");
            const data: any = await response.json();
            setPointsData(data);
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
                    {pointsData === undefined ? (
                        <Spinner color="blue.500" />
                    ) : (<></>)
                    }
                    
                    {pointsData === undefined || pointsData.length === 0 ? (<></>) :
                        pointsData.map((s, _i) => {
                        return (
                            <Heading size="sm" justifySelf="left">{s.name} ({s.level})</Heading>
                        );
                        })
                    }

                    </>
                </Center>
            </Modal.Body>
            <Modal.Footer>
                <Button flex="1" onPress={() => {
                    close(false);
                }}>
                Weiter
                </Button>
            </Modal.Footer>
            </Modal.Content>
        </Modal>
    </>
}
}