import { applyMiddleware, combineReducers, createStore } from 'redux';
import productsReducer from './productsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authDataReducer from './authDataReducer';
import cartReducer from './cartReducer';
import imageUploadReducer from './imageUploadReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    authData: authDataReducer,
    cart: cartReducer,
    imageUrl: imageUploadReducer
}
)
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))