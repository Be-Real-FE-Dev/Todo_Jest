import axios from 'axios';

const whatSsubInstance = axios.create({
  baseURL: 'https://api.github.com/repos/harseille/WhatSsub',
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
  },
});

const todoInstance = axios.create({
  baseURL: '',
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
  },
});

whatSsubInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 403:
          alert('API 요청 호출 제한 초과');
          break;
        case 404:
          alert('접근 불가한 레포지토리입니다.');
          break;
        default:
      }
    }
    return Promise.reject(error);
  }
);

export { whatSsubInstance, todoInstance };
