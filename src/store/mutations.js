
/**
 * mutation 모듈
 * KITKIT API 관련 mutation들이 위치한다.
 */
export const mutations = {

    /**
     * 로그인 응답 값을 세팅한다.
     *
     * @param state
     * @param {Object} signInfo
     * <br> - {String}       account               - ID
     * <br> - {String}       password              - PW
     * <br> - {String}       deviceInfo            - 디바이스 정보
     */
    setSignIn(state, signInfo) {
        localStorage.setItem('sessionID', signInfo.sessionID);
        localStorage.setItem('status', signInfo.status);
        state.global = Object.assign({}, state.global, signInfo, {access : true});
    },

    /**
     * 로그인 아이디를 저장한다.
     *
     * @param state
     * @param {String} loginID
     */
    setLoginID(state, loginID) {
        state.global.loginID = loginID;
    },

    /**
     * 로그아웃 한다.
     *
     * @param state
     */
    setSignOut(state) {
        localStorage.clear();
        state.global = Object.assign({}, state.init);
        state.account = Object.assign({}, state.accountInit);
    },

    /**
     * 계정 정보를 세팅 한다.
     *
     * @param state
     * @param {Object} accountInfo
     */
    setAccountInfo(state, accountInfo) {
        state.account = Object.assign({}, state.account, accountInfo, {access : true});
    }
};
