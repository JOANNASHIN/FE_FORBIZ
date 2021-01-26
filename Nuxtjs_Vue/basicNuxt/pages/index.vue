<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxtMaster
      </h1>
      <div class="links">
        <NuxtLink to="/differentLayout" class="button--green">다른레이아웃</NuxtLink>
        <NuxtLink to="/asyncData" class="button--green">META 태그 SSR방식</NuxtLink>
        <a href="/JIEUN" class="button--green">오류페이지</a>
      </div>


      <button @click="$store.commit('increment')">{{ $store.state.counter}}</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
