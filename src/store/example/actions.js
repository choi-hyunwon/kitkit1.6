import Vue from 'vue'
import TestApi from '../../../api/testApi';
const testApi = new TestApi();
/**
 * test mutation 모듈
 * test API 관련 action들이 위치한다.
 */
export const actions = {

    /**
     *
     */
    getToken({commit}, options) {
        return testApi.getToken(options).then(data => {
            commit('setToken', data)
        })
    },

};
