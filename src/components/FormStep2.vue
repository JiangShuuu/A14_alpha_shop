<template>
  <div class="form_part_2">
    <div class="form_part_title">運送方式</div>
    <div class="form_part-2">
      <div class="form_part-2_deliver_list">
        <div class="form_part-2_deliver_item">
          <input
            name="ta-gender"
            type="radio"
            :value="0"
            class="form_part-2_deliver_item_btn"
            checked
            v-model="user.delivery"
          />
          <div class="form_part-2_deliver_detail">
            <div class="form_part-2_deliver-info">
              <h4>標準運送</h4>
              <p>約 3~7 的工作天</p>
            </div>
            <div class="form_part-2_deliver_info_fee">
              <p>免費</p>
            </div>
          </div>
        </div>
      </div>

      <div class="form_part-2_deliver_list">
        <div class="form_part-2_deliver_item">
          <input
            name="ta-gender"
            type="radio"
            :value="500"
            class="form_part-2_deliver_item_btn"
            v-model="user.delivery"
          />
          <div class="form_part-2_deliver_detail">
            <div class="form_part-2_deliver-info">
              <h4>DHL 貨運</h4>
              <p>48小時內送達</p>
            </div>
            <div class="form_part-2_deliver_info_fee">
              <p>$500</p>
            </div>
          </div>
        </div>
      </div>

      <div class="form_part-2_btn">
        <div
          class="form_part-2_btn-prev btn-prev"
          @click.stop.prevent="PrevStep"
        >
          ← 上一步
        </div>
        <div
          class="form_part-2_btn-next btn-next"
          @click.stop.prevent="NextStep"
        >
          下一步 →
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "delivery",
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        delivery: 0,
      }),
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    NextStep() {
      this.$emit("after-submit");
      this.$router.push({ name: "payment" });
    },
    PrevStep() {
      this.$emit("before-submit");
      this.$router.push({ name: "address" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.form {
  &_part_title {
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 1rem;
  }
  &_part-2 {
    &_deliver_list {
      padding: 1rem 0;
    }
    &_deliver_item {
      border: 1px solid $mid-gray;
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding: 0.8rem;
      input {
        all: unset;
        width: 16px;
        height: 16px;
        border: 1px solid $black;
        border-radius: 50%;
        &:checked {
          box-shadow: 0 0 0 5px $black inset;
        }
      }
    }
    &_deliver_detail {
      flex: 1;
      display: flex;
      justify-content: space-between;
      padding-left: 1rem;
      p {
        font-size: 12px;
      }
      h4 {
        padding-bottom: 0.5rem;
      }
    }
    &_deliver_info_fee {
      padding: 0 1rem;
    }
    &_btn {
      @include flexCenter;
      border-top: 1px solid $light-gray;
      justify-content: space-between;
      padding-top: 1rem;
      &-prev {
        @include pad {
          width: 10%;
        }
        width: 25%;
        cursor: pointer;
      }
      &-next {
        @include pad {
          width: 20%;
        }
        width: 35%;
        padding: 0.8rem;
        text-align: center;
        background-color: $pink;
        border-radius: 5px;
        font-size: 1em;
        color: white;
        cursor: pointer;
      }
    }
  }
}
</style>
