import React from 'react';
import { Avatar, VStack, Box, Flex, Center, HStack } from 'native-base';
import { Text } from 'react-native-svg';

export const Example = () => {
	return (
		// <VStack justifyContent="center" w="80%">
        //     <Avatar
        //         alignSelf="center"
        //         size="xl"
        //         _light={{ bg: 'red.300' }}
        //         _dark={{ bg: 'red.400' }}
        //         _text={{ opacity: 30 }}
        //         source={{ uri: "https://media.istockphoto.com/id/1251324633/pt/vetorial/calendar-image-with-specific-date-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=BJzwVNOkzK1Vu8283UmJOdDNm5IZIkayfIC6hMmKdqI=" }}
        //     >

        //     </Avatar>
		// </VStack>
        <>
            <HStack
                space={3}
                alignItems="center"
                m={4}
                p={2}
                rounded="md"
                _light={{
                    bg: 'orange.200',
                }}
                _dark={{
                    bg: 'orange.500',
                }}
                w="70%"
            >
                <Flex direction="row">
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="2" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.300" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="2" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.200" _text={{
                            color: "coolGray.800"
                        }}><Text fontSize="xs">1</Text>
                        </Center>
                        <Center size="5" bg="primary.300" _text={{
                            color: "coolGray.800"
                        }}><Text fontSize="xs">8</Text>
                        </Center>
                        <Center size="5" bg="primary.400" _text={{
                            color: "coolGray.800"
                        }}><Text fontSize="xs">15</Text>
                        </Center>
                        <Center size="5" bg="primary.500" _text={{
                            color: "coolGray.800"
                        }}><Text fontSize="xs">22</Text>
                        </Center>
                        <Center size="5" bg="primary.200" _text={{
                            color: "coolGray.800"
                        }}><Text fontSize="xs">29</Text>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.300" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="red.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.300" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.300" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="red.700" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.300" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.300" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="yellow.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="2" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                    </Flex>
                    {/* <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="secondary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.300" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="secondary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.300" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="blue.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.300" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.300" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="red.800" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="red.800" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="red.800" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.300" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                    </Flex>
                    <Flex direction="column" mb="2.5" mt="1.5">
                        <Center size="5" bg="primary.0" _text={{
                            color: "white.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.300" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.400" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.500" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Center size="5" bg="secondary.200" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                    </Flex> */}
                </Flex>
            </HStack>
        </>
	);
};
