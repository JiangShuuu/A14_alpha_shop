<template>
  <div class="form_part_1">
    <div class="form_part_title">寄送地址</div>
    <div class="form_part-1">
      <div class="form_part-1_item form_part-1_gender">
        <label for="" class="form_part-1_title">稱謂</label>
        <select name="a-type" id="a-type" class="w-25" v-model="user.gender">
          <option value="" disabled selected>請選擇性別</option>
          <option value="先生">先生</option>
          <option value="小姐">小姐</option>
        </select>
      </div>
      <div class="form_part-1_item form_part-1_name">
        <label class="form_part-1_title">姓名</label>
        <input
          type="text"
          id="name"
          placeholder="請輸入姓名"
          v-model="user.name"
        />
      </div>
      <div class="form_part-1_item form_part-1_phone">
        <label class="form_part-1_title">電話</label>
        <input
          type="text"
          id="phone"
          placeholder="請輸入行動電話"
          v-model="user.phone"
        />
      </div>
      <div class="form_part-1_item form_part-1_email">
        <label class="form_part-1_title">Email</label>
        <input
          type="text"
          id="email"
          placeholder="請輸入電子郵件"
          v-model="user.email"
        />
      </div>
      <div class="form_part-1_item form_part-1_city">
        <label class="form_part-1_name">縣市</label>
        <select name="a-type" id="select-city" class="w-25" v-model="user.city">
          <option value="" disabled selected>請選擇縣市</option>
          <option v-for="city in cities" :key="city.id" value="city.name">
            {{ city.name }}
          </option>
        </select>
      </div>
      <div class="form_part-1_item form_part-1_address">
        <label class="form_part-1_name">地址</label>
        <input
          type="text"
          id="addrass"
          placeholder="請輸入地址"
          v-model="user.address"
        />
      </div>
    </div>
    <div class="form_part-1_btn">
      <div class="form_part-1_btn-next btn-next" @click.stop.prevent="NextStep">
        下一步 →
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addressInfo",
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        gender: "",
        name: "",
        phone: "",
        email: "",
        city: "",
        address: "",
        id: "",
      }),
    },
  },
  data() {
    return {
      cities: [
        { name: "基隆市", id: "1" },
        { name: "台北市", id: "2" },
        { name: "新北市", id: "3" },
        { name: "桃園市", id: "4" },
        { name: "新竹市", id: "5" },
        { name: "新竹縣", id: "6" },
        { name: "苗栗市", id: "7" },
        { name: "台中縣", id: "8" },
        { name: "彰化縣", id: "9" },
        { name: "南投縣", id: "10" },
        { name: "雲林縣", id: "11" },
        { name: "嘉義市", id: "12" },
        { name: "嘉義縣", id: "13" },
        { name: "台南市", id: "14" },
        { name: "高雄市", id: "15" },
        { name: "屏東縣", id: "16" },
        { name: "台東縣", id: "18" },
        { name: "花蓮縣", id: "19" },
        { name: "宜蘭縣", id: "20" },
        { name: "澎湖縣", id: "21" },
        { name: "金門縣", id: "22" },
        { name: "連江縣", id: "23" },
      ],
      user: this.initialUser,
    };
  },
  methods: {
    NextStep() {
      this.$emit("after-submit");
      this.$router.push({ name: "delivery" });
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
  &_part-1 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0 1.5rem;
    &_item {
      padding: 0.5rem 0;
      display: flex;
      flex-direction: column;
    }
    &_gender {
      grid-column: 1 / 3;
    }
    &_name {
      grid-column: 3 / 6;
    }
    &_phone {
      grid-column: 1 / 6;
    }
    &_email {
      grid-column: 1 / 6;
    }
    &_city {
      grid-column: 1 / 6;
    }
    &_address {
      grid-column: 1 / 6;
    }
    &_btn {
      @include flexCenter;
      @include web {
        justify-content: flex-end;
      }
      width: 100%;
      margin-top: 0.75rem;
      &-next {
        @include web {
          width: 200px;
        }
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
    input {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid $mid-gray;
      border-radius: 4px;
    }
    select {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid $mid-gray;
      border-radius: 4px;
    }
    label {
      font-size: 12px;
      font-weight: bold;
      color: $mid-gray;
      margin: 0.15rem 0;
    }
  }
}
</style>
