
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
        state.signInfo = signInfo.data;
    }

};
