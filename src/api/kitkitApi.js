import axios from 'axios';
import qs from 'qs';
import {store} from '../store/store';

export default class KitkitApi {
    constructor() {
    }

    request (url, config) {
        return axios({
            url: 'https://api.kitkitschool.com/account' + url,
            ...config
        }).then(result => result.data)
            .catch(result => {
                console.log(result.response);
                throw new Error(`kitkitApi ${url} Error!!`);
            })
    }

    /**
     * 로그인을 요청한다.
     *
     * <br> - {String}       account               - ID
     * <br> - {String}       password              - PW
     * <br> - {String}       deviceInfo            - 디바이스 정보
     */
    postSignIn(options) {
        return this.request('/signIn', {
            method: 'post',
            data: qs.stringify({
                deviceInfo : 'test-',
                ...options
            })
        })
    }

    /**
     * 사용자 등록을 요청한다.
     *
     */
    postCreate(options) {
        return this.request('/add2', {
            method: 'post',
            data: qs.stringify({
                sessionID : store.getters.getSessionID,
                ...options
            })
        })
    }

    /**
     * 사용자 정보를 요청한다.
     *
     */
    postManage() {
        return this.request('/list2', {
            method: 'post',
            data: qs.stringify({
                sessionID : store.getters.getSessionID,
            })
        })
    }


}
