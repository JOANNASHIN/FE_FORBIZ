export default {
    asyncData(context) {
        return context.$axios
        .get('http://jsonplaceholder.typicode.com/posts/1')
        .then((res) => {
            return { 
                fetchedData: res.data,
                testtest: "testtesttesttesttesttest"
            }
        })
    },
    head() {
        return {
        title: "공통타이틀",
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: this.testtest
            },
            {
                hid: 'jieun',
                name: 'jieun',
                content: "지은지은지은"
            }
        ]
        }
    },
    data() {
        return {
            test: "joshua"
        }
    },

    created() {
        if (process.server) {
            console.log("글로벌~서버사이드 렌더링!", this.testtest)
        }
    },

    methods: {
        
    }
}
