import Link from "next/link";

const linkStyle = {
    marginRight: "1rem"
}

const Header = () => {
    return (
        //
        <div>
            <Link href="/"><a style={linkStyle}>홈</a></Link>
            <Link href="/about"><a style={linkStyle}>소개</a></Link>
            <Link href="/mypage/test"><a style={linkStyle}>마이페이지테스트</a></Link>
            <a href="/ssr-test" style={linkStyle}>ssr-test</a>

            <Link prefetch href="/ssr-test2"><a style={linkStyle}>SSR 테스트2</a></Link>

            <Link href="/ajaxTest"><a style={linkStyle}>ajaxTest</a></Link>
        </div>
    )
}

export default Header;