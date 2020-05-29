import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import { actions } from './actions';
// import { kids } from './modules/kids/store';
import constants from '../assets/data/constants';

Vue.use(Vuex);

/**
 * Vue의 상태관리를 담당함
 * 컴포넌트 간의 통신이나 데이터 전달을 좀 더 유기적으로 관리
 * 컴포넌트 간 데이터 전달 및 이벤트 통신 등의 여러 컴포넌트의 공통 데이터 상태를 관리함
 */
export const store = new Vuex.Store({
    modules: {
        /*kids*/
    },

    /**
     * global로 사용하는 state
     * component 간 공유될 전역 data를 관리
     * 예)
     * this.$store.state.CONSTANTS;
     */
    state: {
        CONSTANTS: constants[process.env.VUE_APP_BUILD_TYPE],

        /**
         * ERROR 상태
         * ERROR 발생 시 errorTrigger 가 true로 변경되며
         * 에러 팝업을 닫으면 errorTrigger가 false로 변경된다.
         * 각 화면에서 errorTrigger가 false로 변경될 때를 감시하여 focus를 가져간다.
         */
        errorTrigger: false,

        layer: {
            /**
             * popup : 팝업화면(Popup Layer) 정보
             * <br> - {Boolean}    visibleYn        - 팝업 노출 여부
             * <br> - {String}     view             - 호출한 화면
             * <br> - {String}     componentName    - 팝업 이름
             * <br> - {Object}     data             - 팝업 내용 (title, desc, button, actions...)
             */
            popup: {
                visibleYn: false,
                view: '',
                componentName: '',
                data: {}
            },

        }
    },
    /**
     * global로 사용하는 getters
     * 각 컴포넌트에서 Vuex의 데이터를 접근할 때 중복된 코드를 반복호출 하게 될 때 여기서 정의 해 중복을 없앤다.
     * 데이터 호출에 관련된 중복 공통 로직이 정의 됨
     * 예)
     * this.$store.getters.CONSTANTS
     */
    getters: {
        CONSTANTS: state => {
            return state.CONSTANTS
        },

        getError: state => {
            return state.layer.error;
        }

    },
    /**
     * global로 사용하는 Mutations
     */
    mutations: mutations,
    /**
     * global로 사용하는 Actions
     */
    actions: actions
});
