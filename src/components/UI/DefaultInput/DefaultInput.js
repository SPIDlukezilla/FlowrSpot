import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

import search_icon from '../../../assets/icons/pl_icon_search.png'
import Icon from 'react-native-vector-icons/FontAwesome'

const defaultInput = props => (
    <View style={styles.searchView}>
        <TextInput
            underlineColorAndroid='transparent'
            {...props}
            style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]}
        />
        <View style={styles.iconView} >
            <TouchableOpacity style={styles.searchButton} onPress={() => alert('Search flower')}>
                <View style={{paddingTop: 13}}>
                    <Image source={search_icon} style={styles.searchIcon} />
                </View>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 48,
        borderRadius: 3,
        color: '#949ea0',
        backgroundColor: '#ffffff',
        paddingLeft: 20,
        marginTop: 29,
    },
    invalid: {
        backgroundColor: '#f9c0c0',
        borderColor: 'red'
    },
    searchIcon: {
        width: 20,
        height: 20
    },
    iconView: {
        position: 'absolute',
        paddingTop: 26
    },
    searchView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    searchButton: {
        width: 41,
        height: 48
    }
});

export default defaultInput;