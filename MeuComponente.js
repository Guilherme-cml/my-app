import React from 'react';
import { Text } from 'react-native';

export default function MinMax(props){
    const {min,max} = props;
    console.warn(props);
 
    
    return (
        <Text> Valor { parseInt(Math.random())} </Text>
    )
}
