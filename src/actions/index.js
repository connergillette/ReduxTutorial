export function selectBook(book) {
    // selectBook is an ActionCreator, needs to return action
    // Action must have 'type' property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
