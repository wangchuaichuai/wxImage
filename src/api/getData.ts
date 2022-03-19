import api from './baseUrl'

//  获取token
function getDate (name:String,pwd:String) {
    return api.get(`/login`)
}
// 获取首页轮播图列表
function getSwipe () {
    return api.get(`/getSwipe`)
}
function getGrid () {
    return api.get(`/getGrid`)
}
function getHotList () {
    return api.get(`/getHot`)
}
function getBiao () {
    return api.get(`/getBiao`)
}
function getMore () {
    return api.get(`/getMore`)
}
function getTogether () {
    return api.get(`/together`)
}
function getUser (id:number | string) {
    return api.get(`/getUser/${id}`)
}
function getNewList(name:number | string, id:number | string) {
    return api.get(`/getNew${name}List${id}`)
}
function getSearch(){
    return api.get('/getSearch')
}
export default {
    getUser,
    getSearch,
    getDate,
    getNewList,
    getTogether,
    getSwipe,
    getGrid,
    getHotList,
    getBiao,
    getMore,
}


