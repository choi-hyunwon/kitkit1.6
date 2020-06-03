import Vue from 'vue'

/**
 * Test mutation 모듈
 * Test API 관련 mutation들이 위치한다.
 */
export const mutations = {
    /**
     *
     */
    setToken(state, token) {
        state.token = token.accessToken;
    }

};
