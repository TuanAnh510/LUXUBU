import {
    CREATE_ODER_FAILURE,
    CREATE_ODER_REQUEST,
    CREATE_ODER_SUCCESS,
    CREATE_ODER_RESET,
    GET_ODER_FAILURE,
    GET_ODER_REQUEST,
    GET_ODER_SUCCESS,
    GET_ODER_RESET,
    GET_MONEY_FAILURE,
    GET_MONEY_REQUEST,
    GET_MONEY_SUCCESS
} from "../const/orderConstants"

let initialState = {
    isloading: false,
    iserror: false,
    issuccess: false,
    order: []
};


let initialStateGetOrder = {
    isloadingGetOrder: true,
    iserrorGetOrder: false,
    issuccessGetOrder: false,
    getOrder: []
};
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ODER_FAILURE:
            return {
                ...state,
                isloading: true,
                iserror: false,
                issuccess: false,

            };

        case CREATE_ODER_REQUEST:
            return {
                ...state,
                isloading: false,
                iserror: true,
                error: action.payload
            };

        case CREATE_ODER_SUCCESS:
            return {
                ...state,
                isloading: false,
                iserror: false,
                issuccess: true,

                order: action.payload
            };
        case CREATE_ODER_RESET:
            return {
                isloading: false,
                iserror: false,
                issuccess: false,
                order: []
            };
        default:
            return { ...state };
    }
}

export const getOrderReducer = (state = initialStateGetOrder, action) => {
    switch (action.type) {
        case GET_ODER_REQUEST:
            return {
                ...state,
                isloadingGetOrder: true,
                iserrorGetOrder: false,
                issuccessGetOrder: false,
                getOrder:[]
            };

        case GET_ODER_FAILURE:
            return {
                ...state,
                isloadingGetOrder: false,
                iserrorGetOrder: true,
                issuccessGetOrder: false,
                error: action.payload
            };

        case GET_ODER_SUCCESS:
            return {
                ...state,
                isloadingGetOrder: false,
                iserrorGetOrder: false,
                issuccessGetOrder: true,
                getOrder: action.payload
            };
        case GET_ODER_RESET:
            return {
                isloadingGetOrder: false,
                iserrorGetOrder: false,
                issuccessGetOrder: false,
                getOrder: []
            };
        default:
            return { ...state };
    }
}

export const getMoneyReducer = (state = {money: []}, action) => {
    switch (action.type) {
        case GET_MONEY_REQUEST:
            return {
                ...state,
                money:[]
            };

        case GET_MONEY_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case GET_MONEY_SUCCESS:
            return {
                ...state,
                money: action.payload
            };
        default:
            return { ...state };
    }
}
