import React from 'react';
import { Avatar, VStack, Box } from 'native-base';

export const Example = () => {
	return (
		<VStack justifyContent="center" w="80%">
            <Avatar
                alignSelf="center"
                size="lg"
                _light={{ bg: 'blue.300' }}
                _dark={{ bg: 'blue.400' }}
                _text={{
                    opacity: 0,
                }}
            >
                NB
                <Avatar.Badge
                    _light={{ bg: 'green.300' }}
                    _dark={{ bg: 'green.400' }}
                    borderWidth={0}
                    boxSize={5}
                />
            </Avatar>
		</VStack>
	);
};
