# Kitkit 1.6

## Project setup
```
npm install
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Environment
### Client App
| Project | Status | Description |
|---------|--------|-------------|
| npm           | 6.14.4     | Node package manager |
| vue           | ^2.6.11    | Vue Framework |
| vue-router    | ^3.3.1     | Vue Single-page application routing |
| vuex          | ^3.4.0     | state management pattern + library for Vue.js |
| axios         | ^0.19.2    | Promise based HTTP client for the browser and node.js |
| ag-grid-community | ^23.1.1    | fully-featured and highly customizable JavaScript data grid |

### Cloud chrome browser
| Browser | Status | Description |
|---------|--------|-------------|
| chrome  | 83.0.4103.116 |      |

<br>

### Compiles and hot-reloads for development
```
# serve with hot reload at localhost:808x (Develop Server)
$ npm run serve:dev

# serve with hot reload at localhost:808x (Live Server)
$ npm run serve:prod
```

### Compiles and minifies for production
```
# build for production (Develop Server)
$ npm run build:dev

# build for production (Live Server)
$ npm run build:prod
```

## Project structure
```text
.
+-- config                                      Vue 설정 모듈
+-- public
|   +-- favicon.ico
|   +-- index.html
+-- src
|   +-- main.js
|   +-- App.vue
|   +-- assets      
|   |   +-- css          
|   |   +-- font
|   |   +-- img         
|   +-- components                              컴포넌트
|   |   +-- detail                                  상세 컴포넌트 
|   |   |   +-- admin                                   관리자 페이지 컴포넌트
|   |   |   +-- user                                    사용자 페이지 컴포넌트 
|   |   |   +-- ...                                     상세 공통 컴포넌트 
|   |   +-- error                                   에러 컴포넌트(404, 500)
|   |   +-- login                                   로그인 페이지 컴포넌트
|   |   +-- popup                                   팝업 컴포넌트
|   +-- routes                                  라우터
|   +-- views                                   뷰
|   |   +-- pages                                   Page 화면 
|   |   |   +-- Detail                                  로그인 외 페이지 
|   |   |   +-- Login                                   로그인 페이지
|   +-- api                                     내부 구현 API
|   +-- lib                                     static 라이브러리
|   +-- utils                                   유틸리티
+-- .env.[MODE]                                 MODE 별 환경변수   
+-- babel.config.js     
+-- package.json
+-- vue.config.js       Vue 설정 모듈을 가져와서 BUILD_TYPE별로 설정 
+-- README.md
```

<br>

