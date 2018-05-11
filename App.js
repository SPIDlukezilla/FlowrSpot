import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';

import HeadingText from './src/components/UI/HeadingText/HeadingText';
import MainText from './src/components/UI/MainText/MainText';
import DefaultInput from './src/components/UI/DefaultInput/DefaultInput';
import TestList from './src/components/FlowerListItem/FlowerListItem';
import NavHeader from './src/components/UI/NavHeader/NavHeader';
import NavBar from './src/components/UI/NavBar/NavBar';

import backgroundImage from './src/assets/images/pl_hero.png';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View>
            <NavHeader />
          </View>
          <View style={styles.imageView}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
              <View style={styles.container}>
                <View style={styles.mainTextView}>
                  <View style={styles.mainTextViewCenter} >
                    <MainText>
                      <HeadingText>Discover flowers</HeadingText>
                    </MainText>
                    <MainText>
                      <HeadingText>around you</HeadingText>
                    </MainText>
                  </View>
                </View>
                <View style={styles.subTextView}>
                  <MainText>
                    <HeadingText style={styles.text} >Explore between more than 8.427 sightings</HeadingText>
                  </MainText>
                </View>
                <View style={styles.inputContainer}>
                  <DefaultInput placeholder='Looking for something specific?' style={styles.input} />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.flowerList}>
            <View style={styles.listItem}>
              <TestList />
              <TestList />
              <TestList />
              <TestList />
              <TestList />
              <TestList />
              <TestList />
              <TestList />
              <TestList />
              <TestList />
            </View>
          </View>
          <View>
            <NavBar />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 15
  },
  subTextView: {
    width: 292,
    opacity: 0.7,
    paddingTop: 52
  },
  mainTextView: {
    width: 247,
    height: 58,
    paddingTop: 92
  },
  mainTextViewCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 315,
  },
  backgroundImage: {
    width: '100%',
    flex: 1
  },
  inputContainer: {
    width: 312,
    paddingTop: 0
  },
  listItem: {
    width: 160,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  flowerList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 12
  },
  input: {
    fontFamily: 'Ubuntu-Light'
  }
});
