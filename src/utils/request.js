import fetch from 'isomorphic-fetch';
import { Message } from 'iview';
import paramsStringify from './util';
import store from '@/store/index';

const REQUEST_TIMEOUT = 120;// 请求超时时间：秒
// 向服务器发送请求返回的状态
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 401 || response.status === 403) {
    // 验证不通过，重新登录
    store.dispatch('user/logout');
    return false;
  }
  // 请求错误
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
// 对返回的数据装换为json格式
function parseJSON(response) {
  return response.json();
}
// 对response 数据进行处理
function httpResponse(res) {
  if (res) {
    switch (window.parseInt(res.code)) {
      // 请求成功
      case 0:
        return res;
      default:
        Message.error(res.message);
        return false;
    }
  } else {
    Message.error('网络错误，请刷新重试！');
    return false;
  }
}
/**
 * Requests a URL, return a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options = {}) {
  const {
    method = 'get', headers = {}, params = {}, body = {},
  } = options;
  const requestUrl = Object.keys(params).length ? `${url}?${paramsStringify(params)}` : url;
  let requestOptions = {};
  const contentType = 'application/json';
  if (method.toUpperCase() === 'GET') {
    requestOptions = {
      method,
      headers: new Headers({
        contentType,
        ...headers,
      }),

    };
  } else {
    let requestBody = {};
    // 判断传入的参数是否是formData
    if (Object.prototype.toString.call(body) === '[object FormData]') {
      requestBody = body;
      requestOptions = {
        method,
        headers: new Headers({
          ...headers,
        }),
        body: requestBody,
      };
    } else {
      requestBody = JSON.stringify(body);
      requestOptions = {
        method,
        headers: new Headers({
          ...headers,
        }),
        body: requestBody,
      };
    }
  }
  return Promise.race([fetch(requestUrl, { ...requestOptions, credentials: 'include' }),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('request timeout')), REQUEST_TIMEOUT * 1000);
    })]).then(checkStatus)
    .then(parseJSON)
    .then(response => httpResponse(response))
    .catch(() => {
      Message.error({
        content: '网络错误，请刷新重试！',
        duration: 5,
      });
    });
}
