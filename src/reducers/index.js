import { combineReducers } from 'redux';
import BooksReducter from './reducer_books';

const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;
