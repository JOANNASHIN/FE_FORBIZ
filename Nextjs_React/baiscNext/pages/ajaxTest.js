import React, {Component} from "react";
import axios from "axios";

import Layout from "../components/Layout";

class AjaxTest extends Component {
    async requestAnother () {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users?document");
        console.log("response", response.data);

    }

    render() {
        return (
            <Layout>
                <button onClick={this.requestAnother}>데이터 불러오기</button>
            </Layout>
        )
    }
}


export default AjaxTest;
