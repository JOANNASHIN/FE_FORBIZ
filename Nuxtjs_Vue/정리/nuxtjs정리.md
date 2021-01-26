<setting>
    1. npm init nuxt-app 이름
        ? Project name: nuxtMaster
        ? Programming language: JavaScript 
        ? Package manager: Npm
        ? UI framework: None
        ? Nuxt.js modules: Axios
        ? Linting tools: Prettier
        ? Testing framework: None
        ? Rendering mode: Universal (SSR / SSG)
        ? Development tools: server
        ? Development tools: jsconfig.json 
        ? What is your GitHub username? (jieunshin)
        ? Version control system: None
    2. cd 이름
    3. npm run dev
</setting>

<Nuxtjs>
    - vue파일작성
    - 코드 분할 자동화
    - 서버사이드렌더링
    - 비동기테이터기반의 강력한 라우팅 시스템
    - 정적파일전송
    - es6 /es7 지원
    - js,css 번들링 및 압축
    - html head 태그 관리
    - 개발단계에서 핫리로딩 사용하기
    - 전 처리기 지원: sass. less, stylus 등
</Nuxtjs>

<order>
    요청 request
    ↓
    서버시작 nuxt server 시작 (store action)
    ↓
    (* NuxtLink로 이동하면 여기서부터 다시 시작 *)
    미들웨어 (기본 nuxt 시스템)
    middleware
        1. nuxt.config.js  
        2. matching layout  
        3. matching page & children

    ↓
    유효성검사(페이지와children이 맞게 있는지) validate (pages & children)

    ↓
    비동기 asyncData & fetch (pages & children)

    ↓
    render
</order>

<async>
    *비동기를 위한 3가지 후크
    1. nuxtServerInit 
        "모든 페이지에" 호출되는 VueX 저장소를 미리 채우는 데 사용됩니다.

    2. fetch 
        "페이지 내"에서 호출 된 데이터로 VueX 저장소를 미리 채우는 데 사용됩니다.

    3. asyncData
        data 페이지의 객체와 동기 데이터를 병합하는데 사용된다. 
        비동기 방식으로 미들웨어를 사용할 수도 있습니다. 
        즉, 미들웨어를 사용하여 VueX 저장소를 채울 수 있습니다.

        특징
        1. page 컴포넌트에서만 지원됩니다(layout에서 열심히 했는데 되지 않음..)
        2. 서버사이드에서 호출되거나 페이지를 이동할때 호출
        3. 컴포넌트가 렌더링 되기전에 호출
        4. context 인자 사용가능
        5. 컴포넌트 생성 전에  호출되기때문에 this를 액세스 할 수 없음.
</async>


<ssr>
    head수정방법
    방법1: nuxt.config.js 파일에서 컨트롤
    방법2: 각각 컴포넌트에서 수정가능 (예시=> head: {})

    created 에서는 ssr때도 돌고, csr때도 한번 더 돌음. 그래서 process.client 이거로 클라이언트쪽인지 확인한 후 document나 window를 찾을 수 있음

    if (process.client) {
        this.requestCurrentPosition();
    }
    아니면 mounted 에서 실행하면 됨.
</ssr>

<seoMetaTag>
    위에서 설명한 asyncData 함수를 호출하여 성공
    >> asyncData.vue 참고

    export default {
        async asyncData({$content, params}) {
            const page = await $content("articles/some-page").fetch()

            return {
                page: page
            }
        },

        head() {
            return {
                title: "456",//"articles:" + this.page.title,
                meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'description',
                    name: 'description',
                    content: 'My custom description'
                }
            ]
            }
        }
    }


    ssr방식으로 확인완료 
    기본세팅은 nuxt.config.js 에서 세팅


    **단 체크할것.
    asyncData는 "pages 안에서만 사용 가능"하고 기본 component들에서는 사용할 수 없음.
    따라서 ssr방식으로 하려면 페이지 컴포넌트의 asyncData 또는 fetch 를 사용하여 데이터를 통신한 다음 하위 컴포넌트에 전달하는 방식이 있음. 단 페이지의
</seoMetaTag>

<router>
    똑같이 pages 폴더 사용하면 바로 url 생성
    NuxtLink는 기본 html태그라고 생각하고 a태그는 대신에 넉스트링크를 "지향"해야한다.
    *단, 외부링크가 있는경우에는 a태그로 사용해야한다.

    ex )
    <NuxtLink to="/about" class="">
        About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <a href="https://nuxtjs.org">External Link to another page</a>
</router>

<directory>
    참고사이트:
    https://ko.nuxtjs.org/docs/2.x/get-started/directory-structure
    
    NUXT
        |--assets          > LESS, SASS, JS 같은 컴파일 되지 않은 것을 포함
        |--components      > Vue.js 컴포넌트를 포함
        |--layouts         > 애플리케이션의 레이아웃을 포함
            |--default.vue > 여기에 기본레이아웃 정의 <Nuxt/>는 페이지 구성요소 렌더링하는애라 꼭 있어야함
            |--blog.vue    > 다른 레이아웃을 만드려면 만들고 사용하는 페이지에서 layout:blog 이렇게 사용가능 (differentLayout.vue 참조)
            |--error.vue   > 에러페이지설정 (이게 있으면 ERROR 상황에서 이 VUE를 탐)
        |--middleware      >  SSR 애플리케이션을 배포하는 데 필요한 파일의 일부 (애플리케이션의 미들웨어를 포함. 렌더링되기 전 사용자 정의 함수 정의)
        |--pages           > 뷰와 라우트를 포함. Nuxt.js는 모든 .vue 파일을 읽고 라우터를 생성
        |--plugins         > vue.js 애플리케이션이 생성되기 전에 실행하고 싶은 JS 플러그인을 포함
        |--static          > 정적 파일들을 포함. 이 디렉토리의 파일들은 /에 연결됩니다. ex) /static/robots.txt 은 /robots.txt 로 연결됩니다.
        |--store           > Vuex Store 파일을 포함. Vuex Store 옵션은 Nuxt.js에 의해 실행되고, index.js 파일이 만들어지면 자동으로 옵션이 활성화 된다.
        |--nuxt.config.js  > 사용자 정의 설정을 포함
        |--package.json    > 의존성과 스크립트를 포함 

</directory>

<cache>
    1. @nuxtjs/component-cache
    { 
        modules: [
            // Simple usage
            '@nuxtjs/component-cache',

            // With options
            [
            '@nuxtjs/component-cache',
            {
                max: 10000,
                maxAge: 1000 * 60 * 60
            }
            ]
        ]
    }

    참고사이트
    https://ko.nuxtjs.org/faq/cached-components/


    2. 버전으로 체크하기

    참고사이트
    https://medium.com/@d971106b/%EC%82%BD%EC%A7%88%EA%B8%B0%EB%A1%9D-2-nuxt-pwa-cache-%EC%A0%81%EC%9A%A9-version-number-%EC%B6%94%EA%B0%80-ec332a372556

    3. nuxt-ssr-cache
    
    참고:
    https://www.npmjs.com/package/nuxt-ssr-cache
    https://github.com/arash16/nuxt-ssr-cache
</cache>

<layout>
    버전픽스의 layout_default / layout_lnb 처럼 레이아웃 쉽게 변경가능.

    layout폴더 밑에 레이아웃파일(ex: blog.js)을 만들고
    사용할 page컴포넌트에서   
    export default {
        layout: "blog"
    }

    하면 이 페이지는 blog 레이아웃을 가지게  됨.
</layout>


<특징>
    1. 애초에 다운받으면 모든게 다 구조화 및 생성되어있음 설정되어있음 (vuex까지도..)
    2. html, scss(전역, 지역 둘 다 가능 => 테스트 완료), js 가 분리되어있음 자동완성 편함..
    3. seo 관련해서 공통으로 nuxt.config.js 에 설정이 가능하지만, 비동기로 데이터를 받아올 경우 각 페이지별로 설정해야함. 하지만 ssr 방식으로 사용 가능.
    4. 우리한테 익숙함! (금방금방 습득 가능!)
    5. 문서가 좀 적은 편.. 대신 삽질기록 많음
    6. nuxt.config.js 를 수정하면 바로바로 반영됨 (ssr)
</특징>



<구글애널리틱스>
    참고 공식문서:
    https://ko.nuxtjs.org/faq/ga
</구글애널리틱스>



**

https://ko.nuxtjs.org/faq/ga
https://ko.nuxtjs.org/faq/auth-routes