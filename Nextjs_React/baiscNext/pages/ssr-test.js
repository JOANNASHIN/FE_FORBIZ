import React, {Component} from "react";
import Layout from "../components/Layout";

class SSRTest extends Component {
    //이함수때문에 build해도 이 파일은 html이 아니라 js로 생성됨
    static async getInitialProps ({req}) {
        
        return req
            ? {from: "server"} //서버에서 실행할 시
            : {from: "client"} //클라이언트에서 실행할 시
    }

    render() {
        return (
            <Layout>
                {this.props.from} 에서 실행이 되었어요.
            </Layout>
        )
    }
}

export default SSRTest;

/*
    주소로 입력해서 들어가면 server, 링크컴포넌트로 들어가면 client로 인식됨
    여기서 차이점 !! 그냥 a링크로 만들어서 들어가면 server로인식
    Link컴포넌트로 들어가면 client로 인식

*/
