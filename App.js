import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';

import HeadingText from './src/components/UI/HeadingText/HeadingText';
import MainText from './src/components/UI/MainText/MainText';
import NavHeader from './src/components/UI/NavHeader/NavHeader';
import NavBar from './src/components/UI/NavBar/NavBar';
import FlowerList from './src/components/FlowersList/FlowersList';

import backgroundImage from './src/assets/images/pl_hero.png';

import search_icon from './src/assets/icons/pl_icon_search.png';

import { connect } from 'react-redux';
import { getFlower, searchFlower } from './src/store/actions/index';

class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    searchFlower: {
      flowerName: ''
    },
    flowers: [],
    flowersLoaded: false
  };

  componentWillMount() {
    console.log(this.props.flowers);
    this.props.onLoadFlowers()
      .then(res => {
        this.setState({ flowersLoaded: true });
        console.log(this.props.flowers);
      });
  };

  flowerNameChangedHandler = val => {
    this.setState(prevState => {
      return {
        searchFlower: {
          ...prevState.flowerName,
          flowerName: val
        }
      }
    })
  }

  onSearch = (flowerName) => {
    if (this.state.searchFlower.flowerName != '') {
      this.props.onSearchFlower(this.state.searchFlower.flowerName)
        .then(res => {
          console.log(this.props.flowers)
        });
    } else {
      this.props.onLoadFlowers()
        .then(res => {
          this.setState({ flowersLoaded: true });
          console.log(this.props.flowers)
        });
    }

  }

  render() {

    let testView = (
      <View style={{ height: 143 }}></View>
    );

    if (this.state.flowersLoaded) {
      testView = (
        <View>
          <FlowerList
            flowers={this.props.flowers}
          />
        </View>
      );
    };

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
                  <View style={styles.searchView}>
                    <TextInput
                      underlineColorAndroid='transparent'
                      onChangeText={this.flowerNameChangedHandler}
                      placeholder={'Looking for something specific?'}
                      style={styles.input}
                    />
                    <View style={styles.iconView} >
                      <TouchableOpacity style={styles.searchButton} onPress={() => this.onSearch(this.props.value)}>
                        <View style={{ paddingTop: 13 }}>
                          <Image source={search_icon} style={styles.searchIcon} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.flowerList}>
            <View style={styles.listItem}>
              {testView}
            </View>
          </View>
          <View style={styles.navView}>
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
    width: '100%',
    height: 48,
    borderRadius: 3,
    color: '#949ea0',
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    marginTop: 29,
    fontFamily: 'Ubuntu-Light'
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
  },
  navView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'flex-end'
  }
});

const mapStateToProps = state => {
  return {
    flowers: state.flowers.flowers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadFlowers: () => dispatch(getFlower()),
    onSearchFlower: (flowerName) => dispatch(searchFlower(flowerName))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


