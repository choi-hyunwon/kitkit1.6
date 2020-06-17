import KitKitApi from '../api/kitkitApi';
const kitkitApi = new KitKitApi();
/**
 * action 모듈
 * KITKIT API 관련 action들이 위치한다.
 */
export const actions = {
    /**
     * 로그인을 요청한다.
     *
     * @param commit
     * @param {Object} options
     * <br> - {String}       account               - ID
     * <br> - {String}       password              - PW
     * <br> - {String}       deviceInfo            - 디바이스 정보
     *
     */
    postSignIn({commit}, options) {
        return kitkitApi.postSignIn(options).then(data => {
            if(data.result) commit('setSignIn', data.data);
            return data.result;
        })
    },

    /**
     * 사용자 등록을 요청한다.
     *
     * @param commit
     * @param {Object} options
     *
     */
    postCreate({commit},options) {
        return kitkitApi.postCreate(options).then(data => {
            return data.result;
        })
    },

    /**
     * 사용자 정보를 요청한다.
     *
     * @param commit
     *
     */
    postManage({commit}) {
        return kitkitApi.postManage().then(data => {
            return data;
        })
    },

    /**
     * 대시보드 정보를 요청한다.
     *
     * @param commit
     *
     */
    postDashboard({commit}) {
        return kitkitApi.postDashboard().then(data => {
            return data;
        })
    },
};
