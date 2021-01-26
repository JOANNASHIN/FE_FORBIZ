import React, {Component} from "react";
import Layout from "../components/Layout";
import Head from "next/head";

class Index extends Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>메인페이지입니다</title>
                </Head>
                <h2>안녕하세요 여기는 홈입니다.</h2>
            </Layout>
        )
    }
}

export default Index;