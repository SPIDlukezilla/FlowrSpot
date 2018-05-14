import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../../assets/images/logo.png';
import Menu from '../../../assets/icons/ellipsis-h.svg'

const NavHeader = () => (
    <View style={styles.container}>
        <View style={styles.menuButtonView}>
            <TouchableOpacity style={styles.menuButton} onPress={() => {alert('Open menu')}}>
                <View style={styles.menuFirst}>
                </View>
                <View style={styles.menuSecond}>
                </View>
                <View style={styles.menuThird}>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.imageView}>
            <Image source={Logo} style={styles.logo} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 25,
        width: 151
    },
    menuView: {
        left: 0,
        position: 'absolute',
        paddingLeft: 22,
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuFirst: {
        position: 'absolute',
        left: 0,
        marginLeft: 22,
        marginTop: 21,
        width: 5,
        height: 5,
        backgroundColor: '#949ea0',
        borderRadius: 100
    },
    menuSecond: {
        position: 'absolute',
        left: 0,
        marginLeft: 32,
        marginTop: 21,
        width: 5,
        height: 5,
        backgroundColor: '#949ea0',
        borderRadius: 100
    },
    menuThird: {
        position: 'absolute',
        left: 0,
        marginLeft: 42,
        marginTop: 21,
        width: 5,
        height: 5,
        backgroundColor: '#949ea0',
        borderRadius: 100
    },
    menuButtonView: {
        position: 'absolute',
        left: 0,
        paddingLeft: 22,
        paddingTop: 21,
        height: 45
    },
    menuButton: {
        position: 'absolute',
        left: 0,
        width: 50,
        height: 45
    }
});

export default NavHeader;