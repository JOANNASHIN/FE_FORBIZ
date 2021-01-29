<template>
  <div>
    <h1>branch pages</h1>
    <div class="container">
      <Increaser :max="100" :delay="0.5" :start="0" :duration="1"></Increaser>
    </div>
  </div>
</template>

<script>
import Increaser from "@/components/common/Increaser";
export default {
  components: {
    Increaser
  }
};
</script>

<style></style>
