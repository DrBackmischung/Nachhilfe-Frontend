import React from 'react';
import { Avatar, VStack, Box } from 'native-base';

export const Example = () => {
	return (
		<VStack justifyContent="center" w="80%">
            <Avatar
                alignSelf="center"
                size="xl"
                _light={{ bg: 'blue.300' }}
                _dark={{ bg: 'blue.400' }}
                _text={{ opacity: 0 }}
                source={{ uri: "https://staff.mainlib.org/wp-content/uploads/PC-and-Wireless.png" }}
            >
              
            </Avatar>
		</VStack>
	);
};
