import React, { Component } from 'react';
import { StyleSheet, ListView, View, Text, FlatList } from 'react-native';

import FlowerListItem from '../FlowerListItem/FlowerListItem';


class FlowerList extends Component {
    render() {

        let lista = (
            <FlatList
                numColumns={2}
                contentContainerStyle={styles.listContainer}
                data={this.props.flowers}
                renderItem={(info) => (
                    <FlowerListItem
                        flowerImage={{ uri: ('https:' + info.item.profile_picture) }}
                        flowerName={info.item.name}
                        flowerLatin={info.item.latin_name}
                    />
                )}
                keyExtractor={(item, index) => this.props.flowers.id}
            >
            </FlatList>
        );

        if (this.props.flowers.length <= 1)  {
            lista = (
                <FlowerListItem
                    flowerImage={{ uri: ('https:' + this.props.flowers[0].profile_picture) }}
                    flowerName={this.props.flowers[0].name}
                    flowerLatin={this.props.flowers[0].latin_name}
                    
                />
            );
        }

        return (
            <View style={this.props.flowers.length <= 1 ? styles.singleList : null}>
                {lista}
            </View>
        )
    }

};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between'
    },
    container: {
        flexDirection: 'row'
    },
    contentContainer: {
    },
    singleList: {
        flex: 1,
        width: 360,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10
    }
});

export default FlowerList;