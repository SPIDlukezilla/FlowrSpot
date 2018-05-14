import 'react-native';
import React from 'react';
import flowers from '.././src/store/actions/flowers';

import renderer from 'react-test-renderer';

import reducers from '.././src/store/reducers/flowers';

test('get', () => {
    let state;
    state = reducers({ flowers: { flowers: [], flowerName: '' } }, { type: 'GET_FLOWER', flowers: [{ id: 1, name: 'Goosefoot Violet', latin_name: 'Viola purpurea', sightings: 1, profile_picture: '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/001/medium/viola.jpg?1505132614', favorite: false }, { id: 2, name: 'Lily', latin_name: 'Liliy in latin', sightings: 0, profile_picture: '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/002/medium/dahlia-1627138_960_720.jpg?1519073382', favorite: false }, { id: 3, name: 'Purple', latin_name: 'Purple in latin', sightings: 0, profile_picture: '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/003/medium/dahlia-1627138_960_720.jpg?1519073409', favorite: false }] });
    expect(state).toEqual({ flowers: [{ id: 1, name: 'Goosefoot Violet', latin_name: 'Viola purpurea', sightings: 1, profile_picture: '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/001/medium/viola.jpg?1505132614', favorite: false }, { id: 2, name: 'Lily', latin_name: 'Liliy in latin', sightings: 0, profile_picture: '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/002/medium/dahlia-1627138_960_720.jpg?1519073382', favorite: false }, { id: 3, name: 'Purple', latin_name: 'Purple in latin', sightings: 0, profile_picture: '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/003/medium/dahlia-1627138_960_720.jpg?1519073409', favorite: false }]} );
});

test('search', () => {
    let state;
    state = reducers({ flowers: { flowers: [{ id: 1, name: 'Goosefoot Violet', latin_name: 'Viola purpurea', sightings: 1, profile_picture: '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/001/medium/viola.jpg?1505132614', favorite: false }, { id: 2, name: 'Lily', latin_name: 'Liliy in latin', sightings: 0, profile_picture: '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/002/medium/dahlia-1627138_960_720.jpg?1519073382', favorite: false }, { id: 3, name: 'Purple', latin_name: 'Purple in latin', sightings: 0, profile_picture: '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/003/medium/dahlia-1627138_960_720.jpg?1519073409', favorite: false }], flowerName: '' } }, { type: 'SEARCH_FLOWER', flowerName: 'lily', flowers: { flowers: [{ id: 2, name: 'Lily', latin_name: 'Liliy in latin', sightings: 0, profile_picture: '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/002/medium/dahlia-1627138_960_720.jpg?1519073382', favorite: false }], meta: { pagination: { current_page: 1, prev_page: null, next_page: null, total_pages: 1 } } } });
    expect(state).toEqual({ flowers: [{ id: 2, name: 'Lily', latin_name: 'Liliy in latin', sightings: 0, profile_picture: '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/002/medium/dahlia-1627138_960_720.jpg?1519073382', favorite: false }], flowerName: 'lily'  });
});