import types from "../types";

export const addProduct = product => ({
    type: types.ADD_PRODUCT,
    product
});

export const addAllProducts = products => ({
    type: types.ADD_ALL_PRODUCTS,
    products
});

export const refreshState = state => ({
    type: types.REFRESH_STATE,
    state
})

export const refreshCase = state => ({
    type: types.REFRESH_CASE,
    state
})

