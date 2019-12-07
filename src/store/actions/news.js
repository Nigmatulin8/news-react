export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';

const API_ROOT = 'https://newsapi.org';

export function getNews(domain = 'ru', options = {}) {
  let url = `${API_ROOT}/v2/top-headlines?country=${domain}&category=business&apiKey=fbf761ee93144c3c93e39af9acfd3c98`;

  return dispatch => {
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(news => {
        dispatch({
          type: GET_NEWS_SUCCESS,
          payload: {
            news,
          },
        });
      });
  };
}
