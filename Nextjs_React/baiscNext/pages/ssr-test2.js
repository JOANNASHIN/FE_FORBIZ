import React, {Component} from "react";
import Layout from "../components/Layout";
import axios from "axios";

class SSRTest2 extends Component { 
    static async getInitialProps ({req}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users?ssrtest');
        return {
            responseData: response.data

        }

        //network 안찍히는지 찍히는지 체크
    }

    render() {
        const { responseData } = this.props;
        

        const test = this.props.responseData;
        console.log("Test", test)

        const userList = responseData.map( user => (
            <li key={user.id}>
                <p>이름: {user.name}</p>
                <p>이메일: {user.email}</p>
                <p>전화번호: {user.phone}</p>
                <p>주소: {user.address.city}{user.address.street} ({user.address.zipcode})</p>
            </li>
        ))

        return (
            <Layout>
                {userList}
            </Layout>
        )
    }
}

export default SSRTest2;