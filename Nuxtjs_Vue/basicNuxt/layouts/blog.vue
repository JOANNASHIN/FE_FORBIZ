<template>
  <div class="blog">
    <nav>
        블로그 레이아

        <div>
            <NuxtLink to="/">홈으로</NuxtLink>
        </div>
    </nav>
    <main>
        <Nuxt />
        <div class="">
            
        </div>
    </main>
  </div>
</template>

<style>
    .wrapper {
        text-align: center;
    }

    .wrapper:after {
        content: "";
        clear: both;
        display: block;
    }

    .blog nav {
        float: left;
        width: 30%;
        height: 1000px;
        background: yellow;
    }

    .blog main {
        float: left;
        width: 70%;
    }
</style>

125 42500 = 0.3%