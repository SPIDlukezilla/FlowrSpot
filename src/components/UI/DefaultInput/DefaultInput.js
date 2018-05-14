import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

import search_icon from '../../../assets/icons/pl_icon_search.png';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { searchFlower } from '../../../store/actions/index';


class defaultInput extends Component {

    state = {
        flowerName: ''
    }

    constructor(props) {
        super(props)
    }

    onSearch = (flowerName) => {
        this.props.onSearchFlower(flowerName);
    }

    render() {
        return (
            <View style={styles.searchView}>
                <TextInput
                    underlineColorAndroid='transparent'
                    {...this.props}
                    style={[styles.input, this.props.style]}
                />
                <View style={styles.iconView} >
                    <TouchableOpacity style={styles.searchButton} onPress={() => this.onSearch(this.props.value)}>
                        <View style={{ paddingTop: 13 }}>
                            <Image source={search_icon} style={styles.searchIcon} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

};

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

const mapStateToProps = state => {
    return {
      flowerName: state.flowers.flowerName
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onSearchFlower: (flowerName) => dispatch(searchFlower(flowerName))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(defaultInput);