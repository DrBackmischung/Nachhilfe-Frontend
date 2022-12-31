import React from 'react';
import { Alert, HStack, VStack, Skeleton, Box } from 'native-base';

export const Example = () => {
	return (
        <>
            <HStack
                space={3}
                alignItems="center"
                m={4}
                p={2}
                rounded="md"
                _light={{
                    bg: 'error.100',
                }}
                _dark={{
                    bg: 'error.400',
                }}
                w="70%"
            >
            <VStack space={1} flex={1}>
                <Box
                    _light={{
                        bg: 'red.400',
                    }}
                    _dark={{
                        bg: 'gray.100',
                    }}
                    rounded="sm"
                    h="11px"
                    w="50%"
                />
                <Box
                    _light={{
                        bg: 'red.300',
                    }}
                    _dark={{
                        bg: 'gray.100',
                    }}
                    h="8px"
                    rounded="pill"
                    w="100%"
                />
                <Box
                    _light={{
                        bg: 'red.0',
                    }}
                    _dark={{
                        bg: 'gray.0',
                    }}
                    h="8px"
                    rounded="pill"
                    w="100%"
                />
                <Box
                    _light={{
                        bg: 'red.400',
                    }}
                    _dark={{
                        bg: 'gray.100',
                    }}
                    rounded="sm"
                    h="11px"
                    w="50%"
                />
                <Box
                    _light={{
                        bg: 'red.300',
                    }}
                    _dark={{
                        bg: 'gray.100',
                    }}
                    h="8px"
                    rounded="pill"
                    w="100%"
                />
            </VStack>
                <VStack space={1} flex={1}>
                    <Box
                        _light={{
                            bg: 'red.400',
                        }}
                        _dark={{
                            bg: 'gray.100',
                        }}
                        rounded="sm"
                        h="11px"
                        w="50%"
                    />
                    <Box
                        _light={{
                            bg: 'red.300',
                        }}
                        _dark={{
                            bg: 'gray.100',
                        }}
                        h="8px"
                        rounded="pill"
                        w="100%"
                    />
                    <Box
                        _light={{
                            bg: 'red.0',
                        }}
                        _dark={{
                            bg: 'gray.0',
                        }}
                        h="8px"
                        rounded="pill"
                        w="100%"
                    />
                    <Box
                        _light={{
                            bg: 'red.400',
                        }}
                        _dark={{
                            bg: 'gray.100',
                        }}
                        rounded="sm"
                        h="11px"
                        w="50%"
                    />
                    <Box
                        _light={{
                            bg: 'red.300',
                        }}
                        _dark={{
                            bg: 'gray.100',
                        }}
                        h="8px"
                        rounded="pill"
                        w="100%"
                    />
                </VStack>
                <VStack space={1} flex={1}>
                    <Box
                        _light={{
                            bg: 'red.400',
                        }}
                        _dark={{
                            bg: 'gray.100',
                        }}
                        rounded="sm"
                        h="11px"
                        w="50%"
                    />
                    <Box
                        _light={{
                            bg: 'red.300',
                        }}
                        _dark={{
                            bg: 'gray.100',
                        }}
                        h="8px"
                        rounded="pill"
                        w="100%"
                    />
                    <Box
                        _light={{
                            bg: 'red.0',
                        }}
                        _dark={{
                            bg: 'gray.0',
                        }}
                        h="8px"
                        rounded="pill"
                        w="100%"
                    />
                    <Box
                        _light={{
                            bg: 'red.400',
                        }}
                        _dark={{
                            bg: 'gray.100',
                        }}
                        rounded="sm"
                        h="11px"
                        w="50%"
                    />
                    <Box
                        _light={{
                            bg: 'red.300',
                        }}
                        _dark={{
                            bg: 'gray.100',
                        }}
                        h="8px"
                        rounded="pill"
                        w="100%"
                    />
                </VStack>
            </HStack>
        </>

	);
};
