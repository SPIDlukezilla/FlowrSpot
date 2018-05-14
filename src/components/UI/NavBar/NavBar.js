import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FavIcon from '../../../assets/icons/favorites_icons.png';
import CommentIcon from '../../../assets/icons/comment_icon.png';
import NewSightingIcon from '../../../assets/icons/new_sighting_icon.png';
import SightingListIcon from '../../../assets/icons/sighting_list_icon.png';

const NavBar = () => (
    <View style={styles.container}>
        <View style={styles.favButtonView}>
            <TouchableOpacity style={styles.favButton} onPress={() => { alert('onFav') }}>
                <Image source={FavIcon} style={styles.favIcon} />
            </TouchableOpacity>
        </View>
        <View style={styles.favButtonView}>
            <TouchableOpacity style={styles.favButton} onPress={() => { alert('onComment') }}>
                <Image source={CommentIcon} style={styles.favIcon} />
            </TouchableOpacity>
        </View>
        <View style={styles.favButtonView}>
            <TouchableOpacity style={styles.favButton} onPress={() => { alert('onNewSighting') }}>
                <Image source={NewSightingIcon} style={styles.favIcon} />
            </TouchableOpacity>
        </View>
        <View style={styles.favButtonView}>
            <TouchableOpacity style={styles.favButton} onPress={() => { alert('onSightingList') }}>
                <Image source={SightingListIcon} style={styles.favIcon} />
            </TouchableOpacity>
        </View>
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
        height: 35,
        width: 35
    },
    favButton: {
        height: 35,
        width: 40
    },
    favButtonView: {
        height: 35,
        width: 40
    }

});

export default NavBar;