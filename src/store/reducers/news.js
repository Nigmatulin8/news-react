export function news(state = {}, action) {
    switch(action.type) {
        case 'NEWS_FETCH_DATA_SUCCESS': 
            return action.news;
        default: 
            return state;
    }
} 