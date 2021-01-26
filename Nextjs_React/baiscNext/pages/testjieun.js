import React, {Component} from "react";
import Layout from "../components/Layout";
import Head from "next/head";

class TestJieun extends Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>index페이지</title>
                </Head>
                <h2>안녕하세요 여기는 testjieun입니다.</h2>
            </Layout>
        )
    }
}

export default TestJieun;