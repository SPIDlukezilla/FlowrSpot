import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground, TouchableOpacity } from 'react-native';

import MainText from '../UI/MainText/MainText';
import HeadingText from '../UI/HeadingText/HeadingText';

import FlowerImage from '../../assets/images/pl_image.png';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


class FlowerListItem extends Component {

    state = {
        isFav: false
    }

    onFav = () => {
        if(this.state.isFav){
            this.setState({
                isFav: false
            })
        } else {
            this.setState({
                isFav: true
            })
        }
    }

    render() {
        return (
            <View style={styles.touchableView}>
                <TouchableNativeFeedback onPress={() => { alert('Image pressed') }}>
                    <View style={styles.listItem}>
                        <ImageBackground source={FlowerImage} style={styles.placeImage}>
                            <LinearGradient colors={['#00000000', 'rgba(0,0,0, 0.7)']} style={styles.linearGradient}>
                                <View style={styles.favButtonView}>
                                    <TouchableOpacity style={styles.favButton} onPress={this.onFav}>
                                        <View style={styles.favIcon}>
                                            <Icon size={13} name={'star'} color={this.state.isFav ? 'orange' : '#d4d8d9'} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.textContainer}>
                                    <View>
                                        <MainText>
                                            <HeadingText style={styles.headingText}>Balloon Flower</HeadingText>
                                        </MainText>
                                    </View>
                                    <View style={styles.descriptionView}>
                                        <MainText>
                                            <HeadingText style={styles.descriptionText}>Platycodon grandiflo</HeadingText>
                                        </MainText>
                                    </View>
                                    <View style={styles.sightingsView}>
                                        <MainText>
                                            <HeadingText style={styles.sightingsText}>127 sightings</HeadingText>
                                        </MainText>
                                    </View>
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

};

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 97
        // justifyContent: 'center',
    },
    listItem: {
        width: 160,
        backgroundColor: '#eee',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeImage: {
        flex: 1,
        height: 203,
        width: 160,
        borderRadius: 2.4,
    },
    touchableView: {
        height: 203,
        width: 160,
        marginTop: 12,
        borderRadius: 2.4
    },
    descriptionText: {
        fontSize: 9.6,
        fontFamily: 'Ubuntu-Italic'
    },
    headingText: {
        fontSize: 16,
        fontFamily: 'Ubuntu-Regular'
    },
    descriptionView: {
        opacity: 0.7,
        paddingTop: 8
    },
    sightingsView: {
        // flex: 0.24,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        width: 82.4,
        height: 24,
        borderRadius: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    sightingsText: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 9.6,
    },
    linearGradient: {
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    favButton: {
        position: 'absolute',
        paddingTop: 16,
        width: 24,
        height: 24,
        backgroundColor: '#ffffff',
        borderRadius: 100
    },
    favButtonView: {
        alignItems: 'flex-end',
        marginTop: 16,
        marginRight: 16,
    },
    favIcon: {
        position: 'absolute',
        paddingTop: 6,
        paddingLeft: 6
    }
});

export default FlowerListItem;