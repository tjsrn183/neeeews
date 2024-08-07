import {
    fetchNews,
    fetchAsk,
    fetchJobs,
    fetchUser,
    fetchItem,
    fetchList
} from '../api/index';

export default {
    FETCH_NEWS({commit}){
        return fetchNews().then(res=>commit('SET_NEWS',res.data))
    },
    FETCH_ASK({commit}){
        return fetchAsk().then(res=>commit('SET_ASK',res.data))
    },
    FETCH_JOBS({commit}){
        return fetchJobs().then(res=>commit('SET_JOBS',res.data))
    },
    FETCH_USER({commit},userId){
        return fetchUser(userId).then(res=>commit('SET_USER',res.data));
    },
    FETCH_ITEM({commit},itemId){
        return fetchItem(itemId).then(res=>commit('SET_ITEM',res.data))
    },

    //hoc
    FETCH_LIST({commit,listType}){
        return fetchList(listType).then(res=>commit('SET_LIST',res.data));
    }
}