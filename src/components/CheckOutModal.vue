<template>
  <div class="checkout" index="5" role="dialog">
    <div class="background" @click.stop.prevent="closeModal"></div>
    <div class="modal">
      <h3 class="mt-5">您好，{{ user.name }} {{ user.gender }}</h3>
      <div class="checkOutInfo">
        <p>以下是您的訂單資料:</p>
        <p>姓名: {{ user.name }}</p>
        <p>電話: {{ user.tel }}</p>
        <p>信箱: {{ user.email }}</p>
        <p>城市: {{ user.city }}</p>
        <p>地址: {{ user.address }}</p>
        <p>運費: {{ user.delivery }}</p>
        <p>付款人姓名: {{ user.payerName }}</p>
        <p>卡號: {{ user.cardNumber }}</p>
        <p>到期日: {{ user.goodThru }}</p>
        <p>CVC: {{ user.CVC }}</p>
      </div>
      <h2>總金額: {{ user.totleCost }} 元</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.user;
  },
  methods: {
    closeModal() {
      this.$emit("final-submit");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
h3,
h2,
i,
p {
  color: white;
}
.checkout {
  .background {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    display: flex;
    z-index: 5;
    align-items: center;
    position: fixed;
  }
  .modal {
    @include web {
      width: 30%;
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    border: white solid 3px;
    width: 80%;
    background-color: #2a2a2a;
    margin: auto;
    color: white;
    border-radius: 20px;
    padding: 10px;
    .checkOutInfo {
      margin: 10px 0;
    }
  }
}
</style>
