// import { AUTH_LOGIN } from 'react-admin';

// export default (type, params) => {
//     if (type === AUTH_LOGIN) {
//         const { username, password } = params;
//         const request = new Request('https://mydomain.com/authenticate', {
//             method: 'POST',
//             body: JSON.stringify({ username, password }),
//             headers: new Headers({ 'Content-Type': 'application/json' }),
//         })
//         return fetch(request)
//             .then(response => {
//                 if (response.status < 200 || response.status >= 300) {
//                     throw new Error(response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(({ token }) => {
//                 localStorage.setItem('token', token);
//             });
//     }
//     return Promise.resolve();
// }

// 위에것은 계속 리다이랙팅 된다.

/*
    // login
    Login calls authProvider with the AUTH_LOGIN type, and { login, password } as parameters. 
    It’s the ideal place to authenticate the user, and store their credentials.

    Upon receiving a 403 response, the admin app shows the Login page. 
    Once the promise resolves, the login form redirects to the previous page, or to the admin index if the user just arrived.
*/





import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

// This function receives authentication requests (type, params), and should return a Promise.
export default (type, params) => {


    // alll uset pass!!!!!
    // called when the user attempts to log in
    // if (type === AUTH_LOGIN) {
    //     console.log(params)
    //     const { username, password } = params;
    //     localStorage.setItem('username', username);
    //     localStorage.setItem('password', password);
    //     // accept all username/password combinations
    //     return Promise.resolve();
    // }

    /*

    Login calls authProvider with the AUTH_LOGIN type,
     and { login, password } as parameters. It’s the ideal place to authenticate the user, 
     and store their credentials.
     
    For instance, to query an authentication route via HTTPS and store the credentials (a token) in local storage, 
    configure authProvider as follows:

    */
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('http://localhost:5000/authenticate', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        console.log("post 요청 보냈다.")
        return fetch(request)
            .then(response => {
                console.log("response 받음")
                console.log(response)
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    }



    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }


    /*
        If the API requires authentication, and the user credentials are missing or invalid in the request, 
        the API usually answers with an error code 401 or 403.

        Fortunately, each time the API returns an error, the authProvider is called with the AUTH_ERROR type.

        For instance, to redirect the user to the login page for both 401 and 403 codes:
    */
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        // console.log(params.status);
        // console.log(params);
        const { status } = params;
        // const status  = params.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }



    /*

        Redirecting to the login page whenever a REST response uses a 401 status code is usually not enough, because react-admin keeps data on the client side, and could display stale data while contacting the server - even after the credentials are no longer valid.

        Fortunately, each time the user navigates, react-admin calls the authProvider with the AUTH_CHECK type, so it’s the ideal place to check for credentials.

    */

    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();


            // localStorage
            // 거절시 로그인 페이지. 
        // return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();

        // You can override where to redirect the user by passing an argument with a redirectTo property to the rejected promise:
        // return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/no-access' });
    }

    /*
        Tip: For the AUTH_CHECK call, the params argument contains the resource name, so you can implement different checks for different resources:
        즉 위의 AUTH_CHECK은 하나인데 아래는 분기로 user 권한 파악가능하다.

        위랑 같은거다.
    */
    // if (type === AUTH_CHECK) {
    //     const { resource } = params;
    //     if (resource === 'posts') {
    //         // check credentials for the posts resource
    //     }
    //     if (resource === 'comments') {
    //         // check credentials for the comments resource
    //     }
    // }




    return Promise.reject('Unknown method');
};











// Connection to a Real API
// import {
//     GET_LIST,
//     GET_ONE,
//     GET_MANY,
//     GET_MANY_REFERENCE,
//     CREATE,
//     UPDATE,
//     DELETE,
//     fetchUtils,
// } from 'react-admin';
// import { stringify } from 'query-string';

// const API_URL = 'my.api.url';

// /**
//  * @param {String} type One of the constants appearing at the top of this file, e.g. 'UPDATE'
//  * @param {String} resource Name of the resource to fetch, e.g. 'posts'
//  * @param {Object} params The Data Provider request params, depending on the type
//  * @returns {Object} { url, options } The HTTP request parameters
//  */
// const convertDataProviderRequestToHTTP = (type, resource, params) => {
//     switch (type) {
//     case GET_LIST: {
//         const { page, perPage } = params.pagination;
//         const { field, order } = params.sort;
//         const query = {
//             sort: JSON.stringify([field, order]),
//             range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//             filter: JSON.stringify(params.filter),
//         };
//         return { url: `${API_URL}/${resource}?${stringify(query)}` };
//     }
//     case GET_ONE:
//         return { url: `${API_URL}/${resource}/${params.id}` };
//     case GET_MANY: {
//         const query = {
//             filter: JSON.stringify({ id: params.ids }),
//         };
//         return { url: `${API_URL}/${resource}?${stringify(query)}` };
//     }
//     case GET_MANY_REFERENCE: {
//         const { page, perPage } = params.pagination;
//         const { field, order } = params.sort;
//         const query = {
//             sort: JSON.stringify([field, order]),
//             range: JSON.stringify([(page - 1) * perPage, (page * perPage) - 1]),
//             filter: JSON.stringify({ ...params.filter, [params.target]: params.id }),
//         };
//         return { url: `${API_URL}/${resource}?${stringify(query)}` };
//     }
//     case UPDATE:
//         return {
//             url: `${API_URL}/${resource}/${params.id}`,
//             options: { method: 'PUT', body: JSON.stringify(params.data) },
//         };
//     case CREATE:
//         return {
//             url: `${API_URL}/${resource}`,
//             options: { method: 'POST', body: JSON.stringify(params.data) },
//         };
//     case DELETE:
//         return {
//             url: `${API_URL}/${resource}/${params.id}`,
//             options: { method: 'DELETE' },
//         };
//     default:
//         throw new Error(`Unsupported fetch action type ${type}`);
//     }
// };

// /**
//  * @param {Object} response HTTP response from fetch()
//  * @param {String} type One of the constants appearing at the top of this file, e.g. 'UPDATE'
//  * @param {String} resource Name of the resource to fetch, e.g. 'posts'
//  * @param {Object} params The Data Provider request params, depending on the type
//  * @returns {Object} Data Provider response
//  */
// const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
//     const { headers, json } = response;
//     switch (type) {
//     case GET_LIST:
//         return {
//             data: json.map(x => x),
//             total: parseInt(headers.get('content-range').split('/').pop(), 10),
//         };
//     case CREATE:
//         return { data: { ...params.data, id: json.id } };
//     default:
//         return { data: json };
//     }
// };

// /**
//  * @param {string} type Request type, e.g GET_LIST
//  * @param {string} resource Resource name, e.g. "posts"
//  * @param {Object} payload Request parameters. Depends on the request type
//  * @returns {Promise} the Promise for response
//  */
// export default (type, resource, params) => {
//     const { fetchJson } = fetchUtils;
//     const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
//     return fetchJson(url, options)
//         .then(response => convertHTTPResponseToDataProvider(response, type, resource, params));
// };