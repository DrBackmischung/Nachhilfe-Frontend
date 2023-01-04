import React from 'react';
import { Avatar, VStack, Box, HStack, Input } from 'native-base';

export const Example = () => {
	return (
        <>
            <Input isDisabled={true} m={1}  placeholder="DHBW-Strasse 31"/>
            <Input isDisabled={true} m={1}  placeholder="68199 Mannheim"/>
        </>
	);
};