import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server'
import axios from "axios";

export default class MyDocument extends Document {
    static async getInitialProps ( {renderPage} ) {
        const {html, head} = renderPage();
        const styles = flush();
        // const response = await axios.get('https://jsonplaceholder.typicode.com/users?document');
        // const image = "https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2017/12/shutterstock_391762396.jpg?w=760&h=505";
        // return {html, head, styles, responseData: response.data, image};
        return {html, head, styles};
    }

    render() {
        const style = {
            background: "yellow"
        }
        const { responseData } = this.props;
        // const metatest = responseData[0].name;
        
        return (
            <html>
                <Head>
                    <style>
                        {`body {margin: 0}`}
                    </style>
                    {/* <meta test={metatest} charset="zz"></meta>
                    <meta property="og:image" content={image}></meta> */}
                    <title>test</title>
                </Head>
                <body id="root">
                    <script src="/__/firebase/8.2.2/firebase-app.js"></script>
                    <script src="/__/firebase/8.2.2/firebase-analytics.js"></script>
                    <script src="/__/firebase/init.js"></script>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </html>
        )
    }
}