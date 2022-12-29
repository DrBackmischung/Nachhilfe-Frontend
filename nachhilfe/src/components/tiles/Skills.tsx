import React from 'react';
import { Avatar, VStack, Box } from 'native-base';

export const Example = () => {
	return (
		<VStack justifyContent="center" w="80%">
            <Avatar
                alignSelf="center"
                size="xl"
                _light={{ bg: 'red.300' }}
                _dark={{ bg: 'red.400' }}
                _text={{ opacity: 30 }}
                source={{ uri: "https://thumbs.dreamstime.com/b/red-human-brain-icon-stock-vector-red-human-brain-icon-vector-117693464.jpg" }}
            >
              
            </Avatar>
		</VStack>
	);
};