import Vue from 'vue';

/**
 * global로 사용하는 Actions
 *
 * 비 순차적 또는 비동기 처리 로직 선언
 * setTimeout()이나 서버와의 HTTP 프로토콜 통신 처리 같은 결과를 받는 타이밍이 예측되지 않는 로직 처리 담당
 * 예재는 아래와 같다
 *
 * methods에 등록
 *
 * 예)
 * this.@store.dispatch('delayFewMinutes')
 */
export const actions = {
    /**
     * 에러 팝업을 보여준다.
     *
     * @param commit
     * @param error
     * <br> - {String}          code                - 에러 코드
     * <br> - {String}          message             - 에러 메시지
     *
     * @returns {Promise<unknown>}
     */
    setError({ getters, commit }, error) {
        // Vue.prototype.logUtil.log('setError :::::::::::::::::::::::::::::::::');
        // Vue.prototype.logUtil.log(Vue.prototype.$callMenu);
        // if(getters.getPopup.visibleYn){
        //     return false;
        // }
        // commit('setErrorTrigger', { value: true });
        // return commit('showPopup', {
        //     visibleYn: true,
        //     view: Vue.prototype.$callMenu.history.current.name,
        //     componentName: 'DefaultErrorPopup',
        //     data: error,
        //     focus: true
        // });
    }

};
