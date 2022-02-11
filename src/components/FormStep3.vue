<template>
  <div class="form_part_3">
    <div class="form_part_title">付款資訊</div>
    <div class="form_part-3">
      <div class="form_part-3_item form_part-3_cardName">
        <label class="form_part-3_title">持卡人姓名</label>
        <input
          type="text"
          id="cardNmae"
          placeholder="John Lu"
          v-model="user.payerName"
        />
      </div>
      <div class="form_part-3_item form_part-3_cardNum">
        <label class="form_part-3_title">卡號</label>
        <input
          type="text"
          id="cardNum"
          placeholder="1111 2222 3333 4444"
          v-model="user.cardNumber"
          maxlength="16"
        />
      </div>
      <div class="form_part-3_item form_part-3_cardDate">
        <label class="form_part-3_title">有效限期</label>
        <input type="text" id="date" placeholder="MM/YY" v-model="user.date" />
      </div>
      <div class="form_part-3_item form_part-3_cardCVC">
        <label class="form_part-3_title">CVC / CCV</label>
        <input
          type="text"
          id="cvc"
          placeholder="123"
          v-model="user.CVC"
          maxlength="3"
        />
      </div>
    </div>
    <!-- <div class="form_part-3_btn">
      <div class="form_part-3_btn-prev btn-prev" @click.stop.prevent="PrevStep">
        ← 上一步
      </div>
      <div class="form_part-3_btn-next btn-next" @click.stop.prevent="NextStep">
        確認結帳
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "paymentInfo",
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        payerName: "",
        cardNumber: "",
        date: "",
        CVC: "",
      }),
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  // methods: {
  //   NextStep() {
  //     this.$emit("final-submit");
  //   },
  //   PrevStep() {
  //     this.$emit("before-submit");
  //     this.$router.push({ name: "delivery" });
  //   },
  // },
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
  &_part-3 {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 0 1.5rem;
    &_item {
      display: flex;
      flex-direction: column;
      padding-bottom: 0.75rem;
    }
    &_cardName {
      grid-column: 1 / 7;
    }
    &_cardNum {
      grid-column: 1 / 7;
    }
    &_cardDate {
      grid-column: 1 / 4;
    }
    &_cardCVC {
      grid-column: 4 / 7;
    }
    input {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid $mid-gray;
      border-radius: 4px;
    }
    label {
      font-size: 12px;
      font-weight: bold;
      color: $mid-gray;
      margin: 0.15rem 0;
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
