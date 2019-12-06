import { combineReducers } from 'redux';
import { news } from './news.js';

const rootReducer = combineReducers({
    news,
});

export default rootReducer;