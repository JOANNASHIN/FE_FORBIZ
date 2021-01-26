<template>
    <div>
        <h1 v-if="error.statusCode === 404"> Page not found</h1>
        <h1 v-else>An error occured</h1>
        <span>ERROR!! 이페이지는 레이아웃에 있지만 기본페이지로 취급해야합니다.</span>
        <NuxtLink to="/">홈으로</NuxtLink>
    </div>
</template>

<script>
    export default {
        props: ["error"],
        layout: 'error'
    }
</script>
