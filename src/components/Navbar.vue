<template>
  <section class="header">
    <div class="nav">
      <div class="nav_logo">
        <a href="/" class="nav_logo_icon">
          <img src="../assets/img/Logo.png" alt="nav_logo" />
        </a>
        <a href="#" class="nav_logo_menu" @click="isOpen = !isOpen">
          <img src="../assets/img/menu.png" />
        </a>
      </div>
      <div class="nav_menu d-none" :class="{ isOpen: isOpen }">
        <div class="nav_menu_list d-flex flex-column">
          <a href="/" class="nav_menu_list_item">男款</a>
          <a href="/" class="nav_menu_list_item">女款</a>
          <a href="/" class="nav_menu_list_item">最新消息</a>
          <a href="/" class="nav_menu_list_item">客製商品</a>
          <a href="/" class="nav_menu_list_item">聯絡我們</a>
        </div>
        <div class="nav_btn">
          <a href="/" class="nav_btn_search"
            ><img src="../assets/img/search.png"
          /></a>
          <a href="/" class="nav_btn_shopping"
            ><img src="../assets/img/shopping.png"
          /></a>
          <a href="/" class="nav_btn_moon"
            ><img src="../assets/img/moon.png"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openNav() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.isOpen {
  display: block;
}
.header {
  width: 100%;
  text-align: center;
  @include flexCenter;
  background-color: $white;
  padding-top: 0.5rem;
  position: fixed;
  opacity: 0.95;
  z-index: 999;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  .nav {
    @include web {
      width: 90%;
    }
    &_logo {
      &_icon {
        img {
          width: 250px;
        }
      }
      &_menu {
        img {
          width: 30px;
        }
        @include web {
          display: none;
        }
        position: absolute;
        top: 1.2rem;
        left: 1rem;
      }
    }
    &_menu {
      @include web {
        display: block;
      }
      &_list {
        @include web {
          all: unset;
          position: absolute;
          top: 1.2rem;
          left: 2rem;
        }
        &_item {
          padding: 2rem;
          font-size: 24px;
          border-bottom: 1px solid $light-gray;
          @include web {
            all: unset;
            font-size: 18px;
            padding: 0.7rem;
            cursor: pointer;
          }
          &:hover {
            color: $pink;
          }
        }
      }
    }
    &_btn {
      padding: 1rem;
      a {
        padding: 2rem;
        @include web {
          img {
            width: 8%;
          }
        }
      }
      @include web {
        position: absolute;
        right: 2rem;
        top: 0;
      }
    }
  }
}
</style>
