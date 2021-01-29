<template>
  <div>
    <p>animatedNumber: {{ animatedNumber }}</p>
  </div>
</template>

<script>
import { isInteger, isPositiveInteger } from "@/utils/helpers";
import { gsap } from "gsap";

const validator = {
  isPositiveInteger: function(value) {
    const _numbered = Number(value);
    return isPositiveInteger(_numbered);
  },
  isInteger: function(value) {
    const _numbered = Number(value);
    return isInteger(_numbered);
  }
};

export default {
  props: {
    max: {
      type: [Number, String],
      default: 100,
      validator: validator.isPositiveInteger
    },
    duration: {
      type: [Number, String],
      default: 3,
      validator: validator.isPositiveInteger
    },
    delay: {
      type: [Number, String],
      default: 0,
      validator: function(value) {
        return Number(value) >= 0;
      }
    },
    start: {
      type: [Number, String],
      default: 0,
      validator: validator.isInteger
    }
  },
  data() {
    return {
      counter: 0
    };
  },
  computed: {
    animatedNumber() {
      return this.counter.toFixed(0);
    }
  },
  created() {
    // set start number
    this.counter = this.start;
    setTimeout(() => {
      this.startIncrease();
    }, this.delay * 1000);
  },
  methods: {
    startIncrease() {
      gsap.to(this.$data, {
        duration: this.duration,
        counter: this.max
      });
    }
  }
};
</script>

<style></style>
