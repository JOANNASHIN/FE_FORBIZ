[next.js 정리]

<nextjs란>
    SSR(Next) ! 서버사이드 렌더링 <-----> CSR(일반 React) 클라이언트 사이드 렌더링
    ** 일반적인 react 렌더링 방식은 render() 실행 후 ComponentDidMount() 함수로 데이터를 가져와서 다시 한번 렌더링하는 방식
    반면에 Next.js는 getInitialProps() 함수로 데이터를 먼저 가져온 후, 렌더링함.

    **코드스플리팅
        > 파일을 분리하여 필요한 페이지만 불러오게 하는것 (필요한 컴포넌트만 부름)
        > 속도가 빠름
        > 리액트와 다른 점은 리액트는 초기에 모~든 컴포넌트를 내려받지만, NEXT에서는 필요한 컴포넌트를 import하여 사용하기 때문에 속도가 빠름
    
    ** 매우 간편한 라우팅
        > Link와 Router를 import 하여 둘다 사용 가능.
        > Router는 Link 와 동일하지만 개발자에게 조금 더 제어권을 넘겨줘서 쉽게 redirect가능 (근데 참고했던 사이트에서는 Link만 사용)
        > 커스텀 api서버 가능 (Link의 속성인 as를 사용하면 /book:id 이런식인데 이런페이지는 없음. 그래서 받은걸 커스텀하여 렌더링가능)
            server.get("/book/:id), (req, res) => {
                const actualPage = "/book";
                const queryParams = {id: req.params.id};
                app.render(req, res, actualPage, queryParams);
            }
</nextjs란>

<처음세팅>
    1. 폴더생성
    2. npm init -y
    3. npm add react react-dom next
    4. 하위에 pages 폴더생성
    5. package.json에서 하단의 dev 추가
        "scripts": {
            "dev": "next"
        },

    6. npm install --save express
    7. package.json 자리에 server.js 파일 만들어 내용 넣기(server.js 참고)
</처음세팅>

<기본PAGEROUTER설정방법>
    - react문법을 사용한다.

    - next 라는 package.json 에 scripts 명령어를 추가하여 실행한다.

    - 페이지 관련 컴포넌트는 꼭 pages/ 디렉토리에 추가한다.

    - 파스칼 문법을 선호한다.

    - url의 규칙은 pages 안의 파일명을 그대로 치고 index의 경우에는 생략한다.
    ex) /mypage/test, /mypage, /layout, /Header

    - 필요한 곳에서 next안의 link를 import하여 <Link href="경로"><a>페이지</a></Link> 로 사용할 수 있지만 그냥 <a href="경로">페이지명</a> 로 사용도 가능하다.
    ex)
        import Link from "next/link";
        <Link href="/test/test"><a style={linkStyle}>마이페이지테스트</a></Link>
        <a href="/mypage">test</a>

    - 페이지로 사용하지 않는 불러오기용 컴포넌트는 (헤더, 레이아웃 등) 따로 폴더를 만들어 사용하여도 가능하다.

    - network 를 확인하면 _devPagesManifest.json파일에서 페이지 리스트를 확인가능하다.
</기본PAGEROUTER설정방법>

<AXIOS를사용한AJAX통신>
    - axios를 다운로드한다.
    
    - async getInitialProps()를 통해 통신하고 response.data 를 user에 저장하여 return한다. render 하는 부분에서 this.props 로 users 에 접근한다.
      ex)
        {
            static async getInitialProps () {
                const response = await axios.get("통신할 API 주소");
                return (
                    users: response.data (여기서 response하면 에러남.. data를 붙여줘야함..)
                    => 이건 하단과 동일하다고 생각하면됨!!
                    this.props = {
                        users: response.data 
                    }
                )
            }

            render() {
                const { users } = this.props;
                const userList = users.map( user => (
                    <li key={user.id}>
                       {user.name} 
                    </li>
                ))
                return {
                    <Layout>
                        <ul>
                            {userList}
                        </ul>
                    </Layout>
                }
            }
        }
</AXIOS를사용한AJAX통신>

<prefetch>
    - Link 컴포넌트를 사용하여 이뤄진다.
    - 데이터를 먼저 불러온 다음 라우팅을 시작하므로 부팅과 프로그램 실행시간을 줄여준다. ( 브라우저의 캐시와 비슷한 기능 )
      ex)
        <Link prefetch href="경로"><a>페이지명</a></Link>
</prefetch>

<document.js>
    기본레이아웃 세팅하는 곳 !
    우리가 사용했던 layout_default.htm과 같다.
    이게 default로 들어가고 페이지별로 따로 설정하면 페이지에서 설정한 값이 우선시된다.
</document.js>

<next.config.js, .babelrc>
    loader는 사용 비추천 (클라이언트쪽 코드만 웹팩으로 번들링 되어서 서버사이드렌더링에서 잘 작동하지 않기때문 > 바벨 플러그인 사용 권고)
</next.config.js, .babelrc>

<styleing>
    styled-jsx 사용 추천 ! js 내부에 css를 작성할 수 있게 해주는 모듈
    next 안에 내장되어있음~!
</styleing>
