import { applyMiddleware, combineReducers, createStore } from 'redux';
import productsReducer from './productsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authDataReducer from './authDataReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    authData: authDataReducer
}
)
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))