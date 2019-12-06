export function newsFetchData(domain='ru', options = {}) {
    let url = `https://newsapi.org/v2/top-headlines?country=${domain}&category=business&apiKey=fbf761ee93144c3c93e39af9acfd3c98`;

    return dispatch => {
        fetch(url, options).then(response => {
            if(!response.ok) {
                throw new Error(response.statusText)
            }

            return response;
        }).then(response => response.json()).then(news => {
            dispatch(newsFetchDataSuccess(news));
        })
    }
}

export function newsFetchDataSuccess(news) {
    return {
        type: "NEWS_FETCH_DATA_SUCCESS",
        news,
    }
}
