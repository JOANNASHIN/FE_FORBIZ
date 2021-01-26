<template>
  <div>
      asyncdata페이지입니다. <br />
      <span>{{rendering}}</span>
  </div>
</template>

jsx 방식
<script>
    import axios from "axios";
    export default {
        async asyncData ({ params }) {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?document`)
            return { 
                metaTitle: data[0].username,
                metaName: data[1].email,
                rendering: process.server ? 'server' : 'client'
            }
        },

        head() {
            return {
                title: this.metaTitle,
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    {
                        hid: 'description',
                        name: this.metaName,
                        content: 'My custom description'
                    }
                ]
            }
        }
    }
</script>