import axios from '../api';
import { HTTP_GET, HTTP_PUT } from '../consts';
import urls from '../api/urls';

const actions = {
  async [HTTP_GET]({ commit }, { method, mutation }) {
    let { data } = await axios.get(urls[method]);

    mutation = mutation || mutation === false ? mutation : method;
    mutation ? commit(mutation, data) : mutation;
    return data;
  },
  async [HTTP_PUT]({ commit }, { method, body, mutation }) {
    let { data } = await axios.put(urls[method], body = body || {} );

    mutation = mutation || mutation === false ? mutation : method;
    mutation ? commit(mutation, data) : mutation;
    return data;
  },
};

export default actions;