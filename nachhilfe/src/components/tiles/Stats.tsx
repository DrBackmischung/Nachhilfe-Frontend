import React from 'react';
import { Avatar, VStack, Box, Center, Flex } from 'native-base';

export const Example = () => {
	return (
		// <VStack justifyContent="center" w="80%">
        //     <Avatar
        //         alignSelf="center"
        //         size="xl"
        //         _light={{ bg: 'blue.300' }}
        //         _dark={{ bg: 'blue.400' }}
        //         _text={{ opacity: 30 }}
        //         source={{ uri: "https://static.vecteezy.com/system/resources/previews/005/568/820/original/ranking-factor-icon-in-trendy-long-shadow-style-isolated-on-soft-blue-background-free-vector.jpg" }}
        //     >

        //     </Avatar>
		// </VStack>
        <>
        <Flex direction="row">
            <Flex direction="column" mb="2.5" mt="1.5">
                <Center size="4" bg="primary.100" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
                <Center size="4" bg="primary.200" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
                <Center bg="primary.300" size="4" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
                <Center size="4" bg="primary.400" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
            </Flex>
            <Flex direction="column-reverse" mb="2.5" mt="1.5">
                <Center size="4" bg="primary.100" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
                <Center size="4" bg="primary.400" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
            </Flex>
            <Flex direction="column-reverse" mb="2.5" mt="1.5">
                <Center size="4" bg="primary.100" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
                <Center size="4" bg="primary.200" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
                <Center bg="primary.300" size="4" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
            </Flex>
            <Flex direction="column-reverse" mb="2.5" mt="1.5">
                <Center size="4" bg="green.300" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
                <Center size="4" bg="green.200" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
                <Center bg="green.100" size="4" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
                <Center size="4" bg="green.300" _text={{
                    color: "coolGray.800"
                }}>
                </Center>
            </Flex>
        </Flex>
    </>
	);
};
