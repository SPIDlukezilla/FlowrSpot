import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FavIcon from '../../../assets/icons/favorites_icons.png';
import CommentIcon from '../../../assets/icons/comment_icon.png';
import NewSightingIcon from '../../../assets/icons/new_sighting_icon.png';
import SightingListIcon from '../../../assets/icons/sighting_list_icon.png';

const NavBar = () => (
    <View style={styles.container}>
        <Image source={FavIcon} style={styles.favIcon} />
        <Image source={CommentIcon} style={styles.favIcon} />
        <Image source={NewSightingIcon} style={styles.favIcon} />
        <Image source={SightingListIcon} style={styles.favIcon} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 49,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center' 
    },
    favIcon: {
        height: 32,
        width: 32
    }

});

export default NavBar;