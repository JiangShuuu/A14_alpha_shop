<template>
  <div class="content_left_stepper">
    <div
      class="content_left_stepper_step step-1"
      :class="[
        formStep === 0 ? 'active' : '',
        formStep === 1 || formStep === 2 ? 'checked' : '',
      ]"
    >
      <div class="step_contain">
        <span class="step_line"></span>
        <div class="step_contain_circle"></div>
        <div class="step_contain_label d-none">寄送地址</div>
      </div>
    </div>
    <div
      class="content_left_stepper_step step-2"
      :class="[formStep === 1 ? 'active' : '', formStep === 2 ? 'checked' : '']"
    >
      <div class="step_contain">
        <span class="step_line"></span>
        <div class="step_contain_circle"></div>
        <div class="step_contain_label d-none">運送方式</div>
      </div>
    </div>
    <div
      class="content_left_stepper_step step-3"
      :class="[formStep === 2 ? 'active' : '']"
    >
      <div class="step_contain">
        <div class="step_contain_circle"></div>
        <div class="step_contain_label d-none">付款資訊</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formStep: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.content_left {
  &_stepper {
    width: 100%;
    height: 50px;
    @include flexCenter;
    justify-content: space-between;
    margin: 1.5rem auto;
    position: relative;
    &_step {
      display: flex;
      justify-content: space-around;
      .step_contain {
        @include flexCenter;
        justify-content: space-between;
        width: 100%;
        &_label {
          color: $light-gray;
          margin-left: 1rem;
          @include web {
            display: block;
          }
        }
        &_circle {
          @include flexCenter;
          height: 35px;
          width: 35px;
          border-radius: 50%;
          border: 1px solid;
          color: $light-gray;
          margin: auto;
        }
      }
      @include getStepNums(3);
      .step_line {
        @include pad {
          width: 35%;
        }
        @include web {
          top: 48%;
          width: 20%;
          margin: 0 8.5rem;
        }
        position: absolute;
        display: block;
        height: 2.5px;
        top: 50%;
        width: 27%;
        margin: 0 4rem;
      }
      &.active {
        .step_contain_circle {
          border: 1px solid black;
          color: black;
        }
        .step_line {
          background-color: black;
        }
        .step_contain_label {
          color: black;
        }
      }
      &.checked {
        .step_contain_circle {
          background-color: black;
          color: white;
        }
        .step_line {
          background-color: black;
        }
        .step_contain_label {
          color: black;
        }
      }
      &.checked .step_contain_circle::after {
        content: "\2714";
      }
    }
    .step-1 {
      .step_contain_circle {
        background-color: black;
        color: white;
      }
    }
  }
}
</style>
