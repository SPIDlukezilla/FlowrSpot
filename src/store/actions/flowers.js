import {SEARCH_FLOWER, GET_FLOWER} from './actionTypes';

export const startSearchFlower = (flowerName, flowers) => {
    return {
        type: SEARCH_FLOWER,
        flowerName: flowerName,
        flowers: flowers
    };
};

export const searchFlower = (flowerName) => {
    return dispatch => {
        return fetch('https://flowrspot-api.herokuapp.com/api/v1/flowers/search?query=' + flowerName, {   
            method: 'GET',
            headers: {
                    'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MDQ4NjA2Mjh9.XNVBzeLpr6gRlu2r_yXXEvyzD_SKMoqAkvo7rW_PrGc'
                }
            })
                .then(res => {
                    if (res.ok) {
                        console.log(res);
                        return res.json();
                    } else {
                        console.log(res)
                        throw (new Error());
                    }
                }
                )
                .then(parsedRes => {
                    //console.log(parsedRes);
                    dispatch(startSearchFlower(flowerName, parsedRes))
                })
                .catch(err => console.log('ERROR: ' + err))
    };
};

export const startGetFlower = (flowers) => {
    return {
        type: GET_FLOWER,
        flowers: flowers
    };
};

export const getFlower = () => {
    return dispatch => {
        return fetch('https://flowrspot-api.herokuapp.com/api/v1/flowers', {   
        method: 'GET',
        headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MDQ4NjA2Mjh9.XNVBzeLpr6gRlu2r_yXXEvyzD_SKMoqAkvo7rW_PrGc'
            }
        })
            .then(res => {
                if (res.ok) {
                    console.log(res);
                    return res.json();
                } else {
                    throw (new Error());
                }
            }
            )
            .then(parsedRes => {
                dispatch(startGetFlower(parsedRes.flowers));
            })
            .catch(err => console.log(err))
    };
};