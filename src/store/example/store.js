import Vue from 'vue';
import { mutations } from './mutations';
import { actions } from './actions';

/**
 * Test 모듈
 * Test API 관련 state, getters, mutations, actions가 위치한다.
 */
export const test = {
    /**
     * Test 관련 state
     */
    state: {
        token : ''
    },
    /**
     * Test 관련 getters
     */
    getters: {
        getToken: state => {
            return state.token;
        }
    },
    mutations: mutations,
    actions: actions
};
