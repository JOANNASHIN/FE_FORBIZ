module.exports = {
    webpack: (config) => {
        config.module.rules.push({
          test: /.(png|jpg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]?[hash]",
                emitFile: false,
                publicPath: "/",
              },
            },
          ],
        });
        return config;
      },

    

    // //기본루트
    // basePath: '/',

    // //환경변수
    // env: {
    //     commonTempletSrc: "/images/"  //process.env.customKey 로 접근가능
    // },

    //리다이렉션
    // async redirects () {
    //     return [
    //         {
    //             source: "/about", //about 으로 들어가면
    //             destination: "/test", //test로 리다이렉션
    //             permanent: true,
    //         }
    //     ]
    // },

    // //파일 매핑(다시쓰기)
    // async rewrites () {
    //     return [
    //         {
    //             source: "/event", //매핑할 url
    //             destination: "/ssr-test", //부를 html경로
    //         }
    //     ]
    // },


    // //파악중
    // exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
    //     return {
    //         "/": { page: "/"},
    //         "/ssr-test": {page: "/ssr-test"}
    //     }
    // }
    
}
