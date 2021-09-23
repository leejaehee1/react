import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

// const apiUrl = 'http://localhost:5000/api';
const apiUrl = 'http://localhost:5000/punchlist';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource, params) => {
        // console.log(params.pagination) // {page: 1, perPage: 10}
        // console.log(params.sort) // {field: "id", order: "ASC"}
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        // GET_LIST => GET http://path.to.my.api/posts?sort=["title","ASC"]&range=[0, 24]&filter={"author_id":12}
        // const url = `${apiUrl}/${resource}`;
        // console.log(url)
        httpClient(url)
        .then(({ headers, json }) => {
            // console.dir(json.resultID)
            // console.dir(json)
            // json.result.map(resource => console.log(resource) )
          });
        return httpClient(url)
        .then(({ headers, json }) => (
            {
            data: json.result.map(resource => ({ ...resource, id: resource[json.resultID] }) ),
            // data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
            // total: 10,
        }))
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
            // data: { ...json, id: json.punchID },
        })),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },


    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            // data: json,
            data: json.map(resource => ({ ...resource, id: resource.punchID }) ),

            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}/${params.id.a}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ 
            data : { ...json, id: json._id },
        }));
    },
    
    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            // data: { ...params.data, id: json.id },
            data: { ...params.data, id: json.punchID },
        })),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ 
            // data: json 
            data : { ...json, id: json._id },

        })),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },
};