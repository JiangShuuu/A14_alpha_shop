<template>
  <section class="footer">
    <div class="footer_area d-none">
      <div class="footer_content">
        <div class="footer_content_logo">
          <img src="../assets/img/Logo.png" alt="" />
        </div>
        <div class="footer_content_item">
          <div class="footer_content_title">客戶服務</div>
          <div class="footer_content_list">
            <a href="#">運送說明</a>
            <a href="#">退換貨相關</a>
            <a href="#">付款資訊</a>
            <a href="#">FAQ</a>
          </div>
        </div>
        <div class="footer_content_item">
          <div class="footer_content_title">關於我們</div>
          <div class="footer_content_list">
            <a href="#">品牌故事</a>
            <a href="#">媒體聯繫</a>
            <a href="#">Press kit</a>
          </div>
        </div>
        <div class="footer_content_item">
          <div class="footer_content_title">資訊</div>
          <div class="footer_content_list">
            <a href="#">隱私權政策</a>
            <a href="#">Cookie</a>
            <a href="#">GDPR</a>
          </div>
        </div>
        <div class="footer_content_item">
          <div class="footer_content_title">追蹤 ALPHA Shop</div>
          <div class="footer_content_list">
            <a href="#">+886 02123-45678</a>
            <div class="follow_img">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.footer {
  @include web {
    @include flexCenter;
    background-color: #f0f0f0;
    margin-top: 9rem;
    &_area {
      width: 90%;
      display: block;
    }
    &_content {
      display: flex;
      justify-content: space-around;
      padding: 3rem 0;
      &_logo {
        img {
          padding-top: 3rem;
          width: 55%;
        }
      }
      &_title {
        font-size: 24px;
        font-weight: 700;
      }
      &_list {
        display: flex;
        flex-direction: column;
        padding: 0.5rem 4px;
        a {
          color: $mid-gray;
          font-weight: 500;
          &:hover {
            color: $pink;
          }
        }
        .follow_img {
          font-size: 20px;
        }
        .fa-facebook-f {
          color: $mid-gray;
          padding-right: 1rem;
        }
        .fa-instagram {
          color: $mid-gray;
          padding-right: 1rem;
        }
      }
    }
  }
}
</style>
