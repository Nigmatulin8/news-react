import { GET_NEWS_SUCCESS } from '../actions/news';

const initialState = {
  collection: {},
  countryCode: 'ru',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        collection: {
          ...action.payload.news,
        },
      };

    default:
      return state;
  }
}
