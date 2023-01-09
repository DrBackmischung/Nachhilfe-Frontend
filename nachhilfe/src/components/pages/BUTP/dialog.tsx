import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, Divider, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, TextArea, VStack } from 'native-base';

export const BUTPDialog = (props: any) => {
    const {isOpen, close} = props
        
    return <>
        <Modal isOpen={isOpen} onClose={() => close()} avoidKeyboard>
            <Modal.Content maxWidth="700">
                <Modal.CloseButton />
                <Modal.Header>BuTP</Modal.Header>
                <Modal.Body>
                    <Center w="100%">
                        <Heading size="md" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            Bildungs- und Teilhabeprogramm
                        </Heading>
                        <Center size="3" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Divider/>
                        <Center size="3" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            Leistungen aus dem Bildungs- und Teilhabepaket sollen verhindern, dass Kinder, Jugendliche und junge Erwachsene wegen mangelnder wirtschaftlicher Leistungsfähigkeit benachteiligt werden.
                        </Heading>
                        <Center size="3" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Divider/>
                        <Center size="3" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            Das Bildungs- und Teilhabepaket umfasst:
                        </Heading>
                        <Center size="2" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            1. Leistungen für Bildung und Teilhabe am sozialen und kulturellen Leben in der Gemeinschaft in Höhe von 15 Euro monatlich. Diese Leistungen können jedoch nur bis zur Vollendung des 18. Lebensjahres gewährt werden.
                        </Heading>
                        <Center size="2" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            2. Übernahme der Kosten für ein- und mehrtägige Ausflüge der Schulen und Kindertageseinrichtungen.
                        </Heading>
                        <Center size="2" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            3. Leistungen für die Ausstattung mit persönlichem Schulbedarf für Schülerinnen und Schülern in Höhe von 103 Euro zum Beginn des Schuljahres und 51,50 Euro zum Beginn des zweiten Schulhalbjahres.
                        </Heading>
                        <Center size="2" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{
                            color: "green.400"
                        }}>
                            4. Lernförderung bzw. Nachhilfe, soweit diese geeignet und zusätzlich erforderlich ist, um die nach den schulrechtlichen Bestimmungen festgelegten wesentlichen Lernziele zu erreichen.
                        </Heading>
                        <Center size="2" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            5. Übernahme der Kosten für die gemeinschaftliche Mittagsverpflegung an Schulen, Kindertageseinrichtungen sowie Horten (sofern diese einen Kooperationsvertrag mit der Schule geschlossen haben).
                        </Heading>
                        <Center size="2" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            6. Leistungen für die Schülerbeförderung, sofern die Kosten nicht bereits von einer anderen Stelle übernommen werden.
                        </Heading>
                        <Center size="3" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Divider/>
                        <Center size="3" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{
                            color: "green.400"
                        }}>
                            Die Leistungen für die Lernförderung können vom Jobcenter und vom Amt für Teilhabe und Soziales längstens für sechs Monate gewährt werden. Nach Ablauf dieses Zeitraumes muss auf jeden Fall ein erneuter Antrag gestellt werden. Hier sind die Hinweise in den Bewilligungsbescheiden zu beachten.
                        </Heading>
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