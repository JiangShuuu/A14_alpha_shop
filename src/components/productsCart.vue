<template>
  <div class="content_right_area">
    <div class="content_right_title">
      <h2>購物籃</h2>
    </div>
    <div class="content_right_list" v-for="item in items" :key="item.id">
      <div class="content_right_list_item">
        <div class="content_right_pic">
          <img :src="item.pic" alt="" />
        </div>
        <div class="content_product">
          <div class="content_product_info">
            <div class="content_product_name">
              <span>{{ item.name }}</span>
            </div>
            <div class="content_product_amount">
              <div
                class="content_product_amount_icon"
                @click.stop.prevent="deleteAmount(item)"
              >
                -
              </div>
              <div class="content_product_amount_number">{{ item.num }}</div>
              <div
                class="content_product_amount_icon"
                @click.stop.prevent="addAmount(item)"
              >
                +
              </div>
            </div>
          </div>
          <div class="content_product_count">{{ item.cost }}</div>
        </div>
      </div>
    </div>
    <div class="content_right_list_fee">
      <span>運費</span>
      <p>{{ delivery | pluralize }}</p>
    </div>
    <div class="content_right_list_total">
      <span>小計</span>
      <p>${{ sum }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialItems: {
      type: Array,
    },
    delivery: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      items: this.initialItems,
      totleCost: 0,
    };
  },
  computed: {
    sum() {
      let itemCost = 0;
      this.items.forEach((item) => {
        let itemTotle = 0;
        itemCost += item.num * item.cost;
        itemTotle += itemCost;
        this.totleCost = itemTotle + this.delivery;
      });
      return this.totleCost;
    },
  },
  filters: {
    pluralize(n) {
      return n === 0 ? "免運費" : `$${n}`;
    },
  },
  methods: {
    addAmount(item) {
      item.num += 1;
    },
    deleteAmount(item) {
      if (item.num > 0) {
        item.num -= 1;
      }
    },
    totleCostChange() {
      this.$emit("totle-Cost-Update", { newtotleCost: this.totleCost });
    },
  },
  watch: {
    initialItems() {
      this.items = this.initialItems;
    },
    totleCost: {
      handler: function () {
        this.totleCostChange();
      },
    },
    // items: {
    //   handler: function () {
    //     this.sum();
    //   },
    //   immediate: true,
    //   deep: true,
    // },
    // delivery: {
    //   handler: function () {
    //     this.sum();
    //   },
    //   immediate: true,
    //   deep: true,
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.content_right {
  padding-top: 5rem;
  width: 100%;
  height: 100%;
  border: 1px solid $light-gray;
  border-radius: 5px;
  margin-top: 2rem;
  &_area {
    margin: 0.75rem;
  }
  &_title {
    padding-bottom: 1.5rem;
  }
  &_list {
    width: 100%;
    &_item {
      @include flexCenter;
      justify-content: space-between;
      padding-bottom: 1rem;
      .content_product {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        &_info {
          display: flex;
          align-items: flex-end;
          flex-direction: column;
        }
        &_amount {
          @include flexCenter;
          justify-content: space-between;
          width: 120px;
          padding: 0.5rem 0;
          &_icon {
            text-align: center;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            font-weight: 700;
            font-size: 20px;
            background-color: #f0f0f0;
            cursor: pointer;
          }
        }
      }
    }
    &_count {
      font-weight: bold;
    }
    &_fee {
      display: flex;
      justify-content: space-between;
      line-height: 3.5rem;
      border-bottom: 1px solid $light-gray;
      border-top: 1px solid $light-gray;
      p {
        font-weight: bold;
      }
    }
    &_total {
      display: flex;
      justify-content: space-between;
      line-height: 3.5rem;
      p {
        font-weight: bold;
      }
    }
  }
  &_pic {
    margin-right: 2rem;
    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  }
  @include web {
    width: 35%;
    &_list {
      width: 100%;
      &_item {
        @include flexCenter;
        justify-content: space-between;
        padding-bottom: 1rem;
        .content_product {
          all: unset;
          @include flexCenter;
          justify-content: space-between;
          align-items: flex-start;
          width: 80%;
          &_info {
            align-items: flex-start;
            span {
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
