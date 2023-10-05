<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
   <div class="wrapper">
      <Header />
      <main class="main">
         <div class="main__container">
            <section class="blogs">
               <div class="blogs__content">
                  <div class="blogs__header">
                     <p class="blogs__header-title">Blog</p>
                  </div>

                  <div class="blogs__content-box">
                     <h1 class="blogs__title">UI Interactions of the week</h1>
                     <div class="blogs__subtitle">
                        <p class="blogs__date">12 Feb 2023</p>
                        <p class="blogs__line"></p>
                        <p class="blogs__name">Express, Handlebars</p>
                     </div>
                     <p class="blogs__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                     </p>
                  </div>

                  <div class="blogs__content-box">
                     <h1 class="blogs__title">UI Interactions of the week</h1>
                     <div class="blogs__subtitle">
                        <p class="blogs__date">12 Feb 2023</p>
                        <p class="blogs__line"></p>
                        <p class="blogs__name">Express, Handlebars</p>
                     </div>
                     <p class="blogs__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                     </p>
                  </div>

                  <div class="blogs__content-box">
                     <h1 class="blogs__title">UI Interactions of the week</h1>
                     <div class="blogs__subtitle">
                        <p class="blogs__date">12 Feb 2023</p>
                        <p class="blogs__line"></p>
                        <p class="blogs__name">Express, Handlebars</p>
                     </div>
                     <p class="blogs__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                     </p>
                  </div>

                  <div class="blogs__content-box">
                     <h1 class="blogs__title">UI Interactions of the week</h1>
                     <div class="blogs__subtitle">
                        <p class="blogs__date">12 Feb 2023</p>
                        <p class="blogs__line"></p>
                        <p class="blogs__name">Express, Handlebars</p>
                     </div>
                     <p class="blogs__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                     </p>
                  </div>

               </div>

            </section>
         </div>
      </main>
      <Footer />
   </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.blogs__header {
   margin-bottom: 55px;

   @media screen and (max-width:575px) {
      margin-bottom: 35px;
   }
}

.blogs__header-title {
   font-size: 44px;
   line-height: 60px;
   font-weight: 700;

   @media screen and (max-width:575px) {
      font-size: 30px;
   }
}

.blogs__content-box {
   display: flex;
   flex-direction: column;
   padding-bottom: 29px;
   border-bottom: 1px solid $border-line;

   @media screen and (max-width:575px) {
      padding-bottom: 24px;
   }

   &:not(:last-child) {
      margin-bottom: 32px;

      @media screen and (max-width:575px) {
         margin-bottom: 18px;
      }
   }

   .blogs__title {
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 16px;

      @media screen and (max-width:575px) {
         font-size: 26px
      }
   }

   .blogs__subtitle {
      display: flex;
      margin-bottom: 15px;

      .blogs__date {
         font-size: 20px;

         @media screen and (max-width:575px) {
            font-size: 16px;
         }
      }

      .blogs__name {
         font-size: 20px;
         color: $light;

         @media screen and (max-width:575px) {
            font-size: 16px;
         }
      }

      .blogs__line {
         position: relative;
         margin-right: 22px;
         margin-left: 26px;

         @media screen and (max-width:575px) {
            margin: 0px 15px;
         }
      }

      .blogs__line:before {
         content: "";
         position: absolute;
         background: #000;
         width: 1px;
         height: 22px;
         top: 3px;

         @media screen and (max-width:575px) {
            height: 14px;
            top: 4px;
         }
      }
   }
}
</style>