import axios from '../plugins/axios';
import qs from 'query-string';
export class ApiService {
  setAccessToken(accessToken) {
    axios.defaults.headers.common['Authorization'] = accessToken;
  }
  addCount(req) {
    return new Promise((resolve, reject) => {
      axios.post('/api/v1/add', req).then(res => {
        if (res.status === 200) {
          resolve(res.data);
          return;
        }
        console.error(res.status, res.statusText);
        reject(null);
      })
      .catch((err) => {
        reject(err);
      })
    });
  }
  sendItems(req) {
    return new Promise((resolve, reject) => {
      axios.post('/api/v1/auth/items', req).then(res => {
        if (res.status === 200) {
          resolve(res.data);
          return;
        }
        console.error(res.status, res.statusText);
        reject(null);
      })
      .catch((err) => {
        reject(err);
      })
    });
  }
  signIn(req) {
    const formData = new FormData();
    formData.append('email', req.email ?? '');
    formData.append('password', req.password ?? '');
    if (req.avatarFile != null) {
      formData.append('avatarFile', req.avatarFile);
    }
    return new Promise((resolve, reject) => {
      axios.post('/api/v1/auth/signin', formData).then(res => {
        if (res.status === 200) {
          resolve(res.data);
          return;
        }
        if (res.status === 401) {
          // emitter.instance.emit('unauthorized');
          return;
        }
        console.error(res.status, res.statusText);
        reject(null);
      })
      .catch((err) => {
        reject(err);
      })
    });
  }
  signUp(req) {
    return new Promise((resolve, reject) => {
      axios.post('/api/v1/auth/signup', req).then(res => {
        if (res.status === 200) {
          resolve(res.data);
          return;
        }
        console.error(res.status, res.statusText);
        reject(null);
      })
      .catch((err) => {
        reject(err);
      })
    });
  }
}
const _api = new ApiService(axios);
export default {
  install: (app) => {
    app.config.globalProperties.$api = _api;
    app.config.globalProperties.api = _api;
  }
}
