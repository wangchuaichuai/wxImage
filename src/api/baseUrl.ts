import axios from 'axios'

const service = axios.create({
    baseURL: 'https://console-mock.apipost.cn/app/mock/project/299e40ad-c886-4629-ebc0-8b14a93b9e9c',

  timeout: 100000, //超时时间
})

export default service
