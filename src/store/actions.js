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
            data.result ? commit('setSignIn', data) : '';
            return data.result;
        })
    },

};
