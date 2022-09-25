import {
    HIDE_MODAL_INFO_ORDER,
    SEND_ORDER_FAILED,
    SEND_ORDER_REQUEST,
    SEND_ORDER_SUCCESS,
    SHOW_MODAL_INFO_ORDER
} from "../actions/order"

const initialState = {
    request: false,
    failed: false,
    show_info: false,
    info: {}
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL_INFO_ORDER: {
            return {
                ...state,
                show_info: true,
            };
        }
        case HIDE_MODAL_INFO_ORDER: {
            return {
                ...state,
                show_info: false,
            };
        }
        case SEND_ORDER_REQUEST: {
            return {
                ...state,
                request: true,
                failed: false,
            };
        }
        case SEND_ORDER_SUCCESS: {
            return {
                ...state,
                info: action.info,
                request: false,
                failed: false,
            };
        }
        case SEND_ORDER_FAILED: {
            return {
                ...state,
                request: false,
                failed: true,
            };
        }
        default:
            return state;
    }
}


// export const ingredientsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_INGREDIENTS_REQUEST: {
//             return {
//                 ...state,
//                 request: true,
//                 failed: false,
//             };
//         }
//         case GET_INGREDIENTS_SUCCESS: {
//             return {
//                 ...state,
//                 items: action.items,
//                 request: false,
//                 failed: false,
//             };
//         }
//         case GET_INGREDIENTS_FAILED: {
//             return {
//                 ...state,
//                 request: false,
//                 failed: true,
//             };
//         }
//         default:
//             return state;
//     }
// }