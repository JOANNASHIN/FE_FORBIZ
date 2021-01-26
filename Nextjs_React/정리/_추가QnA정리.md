참고사이트: (엄청엄청 잘 정리되어있는곳)
https://kyounghwan01.github.io/blog/React/

이건 리액트가 잘 정리되어있는곳
https://velopert.com/

=================================================================================
[ 어제 보충내용 ]

1. 빌드는 알고보니 export로 처리하는 것이였음. 어제 말했던 getInitialProps()이 함수때문에 js로 빌드되는것이 아니라 "export": "next export" 이거로 안했기 때문!

    명령어를 next build && next export 이렇게 해주면됨

    참고사이트: 매우 잘 정리되어있음!
    https://pks2974.medium.com/nextjs-%EB%A1%9C-static-site-%EB%A7%8C%EB%93%A4%EA%B8%B0-f9ab83f29e7



2. next.js 를 왜 사용하는지 어떤점이 장점인지

    > 개발 중 저장되는 코드는 자동으로 새로고침
    
    > pages 폴더에 있는 파일은 해당 파일 이름으로 라우팅
    
    > style jsx를 사용함으로 컴포넌트 내부에 해당 컴포넌트만 스코프를 가지는 css를 만들수 있다.
    (<style jsx global>를 사용하면 글로벌로 스타일 정의 가능합니다.)
    
    > 서버렌더링을 합니다. 클라이언트 렌더링과 다르게 서버렌더링을 한 페이지의 페이지 소스보기를 
    클릭하면 "내부에 소스"가 있습니다.
    
    > 코드 스플리팅은 내가 원하는 페이지에서 원하는 자바스크립트와 라이브러리를 렌더링 하는 것인데 이게 가능합니다.
    
    > 타입스크립트 활용을 위해 웹팩을 만지거나 바벨을 만질 필요 없습니다


    참고사이트:
    https://kyounghwan01.github.io/blog/React/next/basic/#next-js%EA%B0%80-%EC%A0%9C%EA%B3%B5%ED%95%98%EB%8A%94-%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5



3. 어제 INDEX에서 Link로 이동하면 spa 방식으로 이동되고 주소창에 쳐서 들어가면 안됐는데 그 이유가 npm install --save express 이걸 안깔아줬기때문

    clean url 설정을 해줘야함. 저거 하고 server.js 파일을 생성해서 재 설정을 하니 주소창을 쳐도 들어가는것을 확인.

    참고사이트:
    http://tlog.tammolo.com/blog/NEXT-JS-ff8f85e8-918a-4770-9b6b-7e37c5229178/


4. 추가 참고사항
    _app.js
        제일 먼저 지나는곳
        NextJS 에서 _app.js 를 쓰면 공통 Layout 을 만들 수 있다.
        pages/_app.js 형태로 존재해야 한다.

    _document.js
    _app.js 만으로도 Layout 을 구현하는데, 문제가 없지만 만약 html 이나 body 속성을 추가해야 한다면, _document.js 이 필요하다. 서버쪽에서만 보이고 클라이언트쪽에서는 보이지 않음


    참고사이트: 매우 잘 정리되어있음!
    https://pks2974.medium.com/nextjs-%EB%A1%9C-static-site-%EB%A7%8C%EB%93%A4%EA%B8%B0-f9ab83f29e7

5. 추가 개념 설명
    SPA 싱글페이지어플리케이션
    - 페이지 새로고침 없이 필요한 정보만 갈아끼워지는것 (react)

    SSR 서버사이드 렌더링
    - 모든 리소스를 서버에서 랜더링한 후 리턴 (next)
    모든 처리가 끝나고 완전한 HTML파일을 전달

    CSR 클라이언트사이드 렌더링
    모든 JS파일을 다운로드 받은 후 렌더링하기 때문에 상대적으로 오래걸린다.
    
    현재 페이지에 진입하면 SSR 방식으로 렌더링됨.
    Link를 클릭하면 SPA 방식으로 페이지가 렌더링되는데 이걸 방지하려면 a태그를 사용하거나 별도 NEXT의 ROUTER 사용이 필요함


6. next.js 를 사용하면 읽는 순서
    1. Frontend Server에서 GET 요청을 받는다

    2. 요청에 맞는 page를 찾는다

    3. _app.js(next.js 사용시 최초로 실행되는 파일)의 getInitialProps가 있다면 실행

    4. Page Component 안에 getInitialProps가 있다면 실행

    5. _document.js의 getInitialProps가 있다면 실행

    6. 모든 props를 구성하고 _app.js > Page Component 순으로 렌더링

    7. 모든 콘텐츠를 구성하고 _document.js를 실행하여 html형태로 출력
=================================================================================
[ 추가 QNA ]

1. jsx방식 이외의 렌더링 방식 
    > 방법1 ==> 복잡함 (비추천)
        React.createElement (
            'button',
            { className: 'btn-gold' },
            React.createElement (
                'strong',
                null,
                'OK!'
            )
        );

    > 방법 2 (without jsx)
        ReactDOM 으로 다시 그리기
        render3.js 참고

        참고사이트: 리액트 공식사이트
        https://reactjs.org/docs/react-without-jsx.html#gatsby-focus-wrapper

    나머지는 render 폴더 참고
    

2. 비동기 방식 확인 필요 > react
    > ajaxTest.js 참고



3. mixin.js 같은 공통 함수 관리 > react
    > hook 으로 처리 가능! 조금 더 공부해야함

    참고사이트: 
        > 기본 hook에 대한 개념 설명
        https://kyounghwan01.github.io/blog/React/react-hook/#usecallback-%ED%95%A8%EC%88%98-%EC%9E%AC%EC%82%AC%EC%9A%A9
        
        >커스텀 hook
        https://kyounghwan01.github.io/blog/React/custome-hook/#%ED%9B%85-%EC%93%B0%EA%B8%B0-%EC%A0%84-%EB%A1%9C%EC%A7%81



4. meta 태그 api next에 나오는지 > 데이터 통신이 나오는지?
   express 서버일때만 안되는건지??? 확인필요!!!!
   > document.js 에서 비동기 실행해봄
   > network에 찍히지 않음.
   > 페이지 원본보기 했을 때는 공백이 아닌 값이 찍혀서 나옴

그리고 참고할 사이트:
https://kyounghwan01.github.io/blog/React/next/dynamic-meta/#getinitalprops%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B0%92-%EB%B0%9B%EC%95%84%EC%98%A4%EA%B8%B0

5. react vs vue >>> seo의 차이가 중요함
**** https://kyounghwan01.github.io/blog/React/next/basic/
    "
    두번째 문제는 검색엔진이 자바스크립트를 읽는 것이 아닌 서버 측에서 자바스크립트, html, css를 만들어 컨텐츠를 직접 업로드 함으로 검색엔진에 게시글이 걸리게 됩니다.
    또한 meta 태그를 자유롭게 추가함으로 seo를 용이하게 할수 있습니다. "

**
SEO는 검색엔진인데 SPA방식으로 하면 상단 HEADER가 바뀌지 않고 데이터가 바뀌면서 새로 고침되기 때문에 (하드코딩상태가 아니라고 생각하면 됨) 검색엔진에는 적합하지 않음 따라서 SSR로 변경필요


6. cache관리 어떻게 하는지 (react) > react

    서버사이드 렌더링을 하면 웹을 더 빠르게 표시하는 매우 유용한 기술.
    그러나 react의 서버측 렌더링은 추가 작업이 필요하며 서버비용이 필요함.
    또한 서버에서 javascript를 실행할 수 없는 경우 문제가 발생... cdn까지 들어가면 매우 복잡
    
    >> 그래서 render caching 이라는 걸 사용!
    서버에 코드를 작성하지 않아도 마치 서버사이드렌더링같이 처리하는 성능향상에 좋은 툴!

    spa 렌더링을 최적하하고 웹페이지의 인식 가능한 로드시간을 크게 향상하게함.
    렌더링된 html을 "캐싱"하여 다음로드를 수행하고 javascript구문분석없이(시간 많이 차지하는애) 해당 디스플레이 제시.

    방법:
        - api 호출 전에 렌더링 호출이 반응하는지 확인

        - 언로드 처리기에서 localStorage에 setItem으로 현재 dom을 저장함. 물론 알아볼수있게 id와 페이지명도 같이 저장
        
        - 로드시에 확인 > 저장이 되었던건지? 아닌지? 구분하여!!

        - hydrate 함수를 이용하여 저장했던 dom을 복원함 >> 이렇게 하면 화면은 바뀌지만 dom은 변경되지않음
        저장이 안된 페이지는 render()함수로 새로 그림

        hydrate 참고 > https://ko.reactjs.org/docs/react-dom.html
        ** hydrate는 render와 동일하지만 이벤트를 보충하기 위해서 사용 ! (전체다 그리는게 아니라 이벤트만 연결)

        - 그다음 비동기로 자바스크립트 파일을 가져옴 

        - 개선되었는지는 개발자도구에서 확인가능!


    참고사이트 :
    https://frontdev.tistory.com/entry/React-React%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%BA%90%EC%8B%9C
