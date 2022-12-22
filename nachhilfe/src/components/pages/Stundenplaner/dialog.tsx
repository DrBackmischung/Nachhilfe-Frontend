import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, useToast, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerRouter } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const StundenplanerDialog = (props: any) => {
    const {isOpen, close} = props
    const toast = useToast();
    const [currentUser, setCurrentUser] = useState("");
    const [skillList, setSkillList] = useState();
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");
    const [skill, setSkill] = useState("");
    const [date, setDate] = useState(new Date());
    const [location, setLocation] = useState("");
    const [duration, setDuration] = useState(0.0);
    const [price, setPrice] = useState(0.0);
    const [created, setCreated] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('user').then((user) => {
            setCurrentUser(user)
        });
    }, [isOpen])

    useEffect(() => {
        if(isOpen) {
            setupData();
        }
    }, [isOpen, currentUser])

    const url = `${APIUrl}/users/${currentUser}/skills`;
    const urlAdd = `${APIUrl}/timeslots`;
  
    const setupData = async () => {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        };
        const response2 = await fetch(url, requestOptions)
        if(response2.status == 500) {
            setIsError(true);
            setErrorMsg("Server Fehler, bitte erneut versuchen")
        }
        if(response2.ok) {
            setIsError(false);
            setErrorMsg("");
            const data: any = await response2.json();
            setSkillList(data);
            console.log(data)
        }
    };

    const createAppointment = async () => {     
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                datum: date.toLocaleDateString('de-DE').replace('.', '-').replace('.', '-'),
                wochentag: date.toLocaleString('default', {weekday: 'long'}),
                ort: location,
                fach: skill,
                uhrzeit: date.toLocaleTimeString('de-DE'),
                dauer: duration,
                preis: price,
                bezahlungErfolgt: "",
                schuelerId: "",
                lehrerId: currentUser
            }),
        };
        const response3 = await fetch(urlAdd, requestOptions)
        if(response3.status == 500) {
            setIsError(false);
            setErrorMsg("");
            setCreated(true)
            toast.show({description: "Termin angelegt!"})
        }
    }
    
    return <>
        <Modal isOpen={isOpen} onClose={() => close()} avoidKeyboard>
            <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Skills</Modal.Header>
            <Modal.Body>
                <Center w="100%">
                    <Box maxW="300">
                    </Box>
                </Center>
            </Modal.Body>
            <Modal.Footer>
                <Button flex="2" marginRight="5" onPress={() => {
                    createAppointment()
                }}>
                    Termin anlegen
                </Button>
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