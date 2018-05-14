import React, { Component } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

const FlowerInput = props => (
    <DefaultInput 
        placeholder='Looking for something specific?'
        value={props.flowerData}
        onChangeText={props.onChangeText}
    />
);

export default FlowerInput;