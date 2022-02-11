<template>
  <div class="form_part_btn">
    <div
      class="form_part_btn-prev btn-prev"
      @click.stop.prevent="PrevStep"
      :class="{ disabled: isOpen }"
    >
      ← 上一步
    </div>
    <div class="form_part_btn-next btn-next" @click.stop.prevent="NextStep">
      {{ final ? "確認結帳" : "下一步" }}
    </div>
  </div>
</template>

<script>
export default {
  name: "step",
  data() {
    return {
      isOpen: false,
      final: false,
    };
  },
  methods: {
    NextStep() {
      if (this.$router.currentRoute.name === "address") {
        this.$emit("after-submit");
        this.$router.push({ name: "delivery" });
        this.isOpen = true;
      } else if (this.$router.currentRoute.name === "delivery") {
        this.$emit("after-submit");
        this.$router.push({ name: "payment" });
        this.final = true;
      } else if (this.$router.currentRoute.name === "payment") {
        this.$emit("final-submit");
      }
    },
    PrevStep() {
      if (this.$router.currentRoute.name === "payment") {
        this.$emit("before-submit");
        this.$router.push({ name: "delivery" });
        this.final = false;
      } else if (this.$router.currentRoute.name === "delivery") {
        this.isOpen = false;
        this.$emit("before-submit");
        this.$router.push({ name: "address" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.form_part_btn-prev {
  display: none;
}

.disabled {
  display: block;
}

.form_part_btn {
  @include flexCenter;
  border-top: 1px solid $light-gray;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  &-prev {
    width: 150rem;
    cursor: pointer;
  }
  &-next {
    width: 100%;
    padding: 0.8rem;
    text-align: center;
    background-color: $pink;
    border-radius: 5px;
    font-size: 1em;
    color: white;
    cursor: pointer;
  }
}
</style>
