import Vue from 'vue'

/**
 * global로 사용하는 Mutations
 *
 * Vuex의 state 값을 변경하는 로직
 * 안에 정의된 로직들이 순차적으로 일어나야 각 컴포넌트의 반영 여부를 제대로 추적할 수 있음
 * commit을 통해서 제어됨
 *
 * Getter 차이
 *  1. 인자를 받아 Vuex에 전달 가능
 *  2. computed가 아닌 methods에 등록
 *
 *  Action 차이
 *  1. Mutations는 동기적 로직을 정의
 *  2. Action은 비동기적 로직을 정의
 *
 *  예) 사용 예
 *  this.@store.commit('addCounter')
 */
export const mutations = {

    /**
     * ERROR 트리거를 변경한다.
     * ERROR 발생 시 errorTrigger 가 true로 변경되며
     * 에러 팝업을 닫으면 errorTrigger가 false로 변경된다.
     * 각 화면에서 errorTrigger가 false로 변경될 때를 감시하여 focus를 가져간다.
     *
     * @param state
     * @param options
     * <br> - {Boolean}      value
     *
     * @returns {*|String}
     */
    setErrorTrigger: function (state, options) {
        // return state.errorTrigger = options.value;
    }

};
