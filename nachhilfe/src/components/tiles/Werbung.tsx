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
                _text={{ opacity: 30 }}
                source={{ uri: "https://conceptdraw.com/a1703c3/p7/preview/640/pict--online-advertising-advertising---vector-stencils-library.png--diagram-flowchart-example.png" }}
            >
              
            </Avatar>
		</VStack>
	);
};
