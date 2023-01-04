import React from 'react';
import { Avatar, VStack, Box, Input, FormControl, Flex, Center, HStack } from 'native-base';

export const Example = () => {
    const date = new Date().toLocaleDateString()
	return (
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
                w="80%"
            >
                <FormControl w="75%" maxW="300px">
                    <Input isDisabled={true} m={1}  placeholder={date}/>
                    <Flex direction="row">
                        <Center rounded="md" m={1} size="5" bg="warmGray.200"></Center>
                        <Center rounded="md" m={1} size="5" bg="warmGray.300" />
                        <Center rounded="md" m={1} size="5" bg="warmGray.500" />
                        <Center rounded="md" m={1} size="5" bg="warmGray.400" />
                        <Center rounded="md" m={1} size="5" bg="warmGray.300" />
                        <Center rounded="md" m={1} size="5" bg="warmGray.500" />
                    </Flex>
                </FormControl>
                {/* <Input isDisabled={true} m={1} placeholder="*********"/> */}
            </HStack>
        </>
	);
};
