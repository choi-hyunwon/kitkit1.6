import KitKitApi from '../api/kitkitApi';
const kitkitApi = new KitKitApi();
/**
 * action 모듈
 * KITKIT API 관련 action들이 위치한다.
 */
export const actions = {
    /**
     * 로그인 요청한다.
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
     * 계정 생성을 요청한다.
     *
     * @param commit
     * @param {Object} options
     *
     */
    postCreate({commit},options) {
        return kitkitApi.postCreate(options).then(data => {
            return data;
        })
    },

    /**
     * 계정 관리 정보를 요청한다.
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

    /**
     * 계정 정보를 요청한다.
     *
     * @param commit
     *
     */
    postAccountInfo({commit}) {
        return kitkitApi.postAccountInfo().then(data => {
            if(data.result) commit('setAccountInfo', data.data);
            return data;
        })
    },

    /**
     * 개인 로그 데이터를 요청한다.
     *
     * @param commit
     * @param {Object} options
     * <br> - {String}        tabletNO              - 선택한 사용자의 테블릿넘버
     *
     */
    postDashboardDetail({commit},options) {
        return kitkitApi.postDashboardDetail(options).then(data => {
            return data;
        })
    },
};
