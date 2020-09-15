/**
 * trigger request fetch API
 * @author adyranggahidayat@gmail.com
 * @param {object} params - object data of
 * url: string, methods: string, body: object, successCallback: func, errorCalllback: func
 * @return Promise
 */
function requestAPI(params) {
    const { url, methods, body, successCallback, errorCalllback } = params;
    return new Promise(
        resolve => {
            fetch(url, methods, body)
            .then(results => results.json())
            .then(data => {
                console.log('requestAPI success');
                resolve(successCallback(data));
            })
            .catch(function(error) {
                console.error('requestAPI error', error);
                errorCalllback(error);
            });
        });
}

/**
 * handle call request fetch API
 * @author adyranggahidayat@gmail.com
 * @param {object} params - object data of
 * url: string, methods: string, body: object, successCallback: func, errorCalllback: func
 * @return await Promise
 */
export const fetchAPI = async (params) => {
    await requestAPI(params);
}
