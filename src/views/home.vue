<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { RouterLink } from 'vue-router';

</script>

<template>
   <div class="wrapper">
      <Header />
      <main class="main">
         <div class="main__container">
            <section class="about about-flex">
               <div class="about__content">
                  <h1 class="about__title">Hi, I am John,<br>Creative Technologist</h1>
                  <p class="about__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                     officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  <button class="btn">download resume</button>
               </div>
               <img class="portfolio-image" src="../assets/img/Portfolio-image.jpg" alt="portfolio-image">
            </section>
         </div>

         <section class="blogs">
            <div class="blogs__bg">
               <div class="blogs__content main__container">
                  <div class="blogs__header">
                     <p class="blogs__header-title">Recent posts</p>
                     <router-link to="/blog" class="blogs__header-link">View all</router-link>
                  </div>

                  <div class="blogs__content-grid">
                     <div class="blogs__content-box">
                        <h1 class="blogs__title">Making a design system from scratch</h1>
                        <div class="blogs__subtitle">
                           <p class="blogs__date">12 Feb 2020</p>
                           <p class="blogs__line"></p>
                           <p class="blogs__name">Design,Pattern</p>
                        </div>
                        <p class="blogs__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                           Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                           amet.</p>
                     </div>

                     <div class="blogs__content-box">
                        <h1 class="blogs__title">Creating pixel perfect icons in Figma</h1>
                        <div class="blogs__subtitle">
                           <p class="blogs__date">12 Feb 2020</p>
                           <p class="blogs__line"></p>
                           <p class="blogs__name">Figma,Icon Design</p>
                        </div>
                        <p class="blogs__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                           Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                           amet.</p>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         <section class="works">
            <div class="works__content main__container">
               <div class="works__header">
                  <p class="works__header-title">Featured works</p>
               </div>

               <div class="works__content-box content-box">
                  <img class="content-box__image" src="../assets/img/work1.svg" alt="image">
                  <div class="content-box__inner">
                     <h1 class="box__title">Designing Dashboards</h1>
                     <div class="box__subtitle">
                        <p class="year">2020</p>
                        <p class="name">Dashboard</p>
                     </div>
                     <p class="box__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                        officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
               </div>

               <div class="works__content-box works__content-box--hidden content-box">
                  <img class="content-box__image" src="../assets/img/work2.svg" alt="image">
                  <div class="content-box__inner">
                     <h1 class="box__title">Vibrant Portraits of 2020</h1>
                     <div class="box__subtitle">
                        <p class="year">2018</p>
                        <p class="name">Illustration</p>
                     </div>
                     <p class="box__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                        officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
               </div>

               <div class="works__content-box works__content-box--hidden content-box">
                  <img class="content-box__image" src="../assets/img/work3.svg" alt="image">
                  <div class="content-box__inner">
                     <h1 class="box__title">36 Days of Malayalam type</h1>
                     <div class="box__subtitle">
                        <p class="year">2018</p>
                        <p class="name">Typography</p>
                     </div>
                     <p class="box__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                        officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
               </div>

            </div>
         </section>
      </main>
   </div>
   <Footer />
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.about-flex {
   display: flex;
   justify-content: space-between;
   margin-bottom: 71px;

   @media screen and (max-width:575px) {
      flex-direction: column-reverse;
      margin-bottom: 58px;
      text-align: center;
   }
}

.about__content {
   max-width: 497px;
}

.about__title {
   font-size: 44px;
   font-weight: 700;
   line-height: 60px;
   margin-bottom: 40px;

   @media screen and (max-width:575px) {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 20px;
   }
}

.about__text {
   margin-bottom: 38px;

   @media screen and (max-width:575px) {
      margin-bottom: 27px;
   }
}

.btn {
   @extend %btn;
}

.portfolio-image {
   max-height: 256px;

   @media screen and (max-width:575px) {
      display: block;
      margin: auto;
      width: 170px;
      margin-bottom: 34px;
   }

   /*   position: absolute;
   top: -5%;
   left: 70%;*/
}

.blogs__bg {
   background: #EDF7FA;
}

.blogs__content {
   padding: 27px 11px 32px;

   @media screen and (max-width:575px) {
      padding: 0px 11px 32px;
   }
}

.blogs__header {
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media screen and (max-width:575px) {
      justify-content: center;
   }
}

.blogs__header-title {
   font-size: 22px;
   line-height: 60px;

   @media screen and (max-width:575px) {
      font-size: 18px;
   }
}

.blogs__header-link {
   color: #00A8CC;

   @media screen and (max-width:575px) {
      display: none;
   }
}

.blogs__content-grid {
   display: grid;
   grid-template-columns: repeat(2, 418px);
   gap: 20px;

   @media screen and (max-width:991px) {
      display: flex;
      justify-content: space-between;
   }

   @media screen and (max-width:575px) {
      flex-direction: column;
   }
}

.blogs__content-box {
   padding: 24px 27px 35px 23px;
   background: $main-color;
   border-radius: 4px;

   @media screen and (max-width:575px) {
      padding: 12px 20px 21px;
   }
}

.blogs__title {
   font-size: 26px;
   font-weight: 700;
   margin-bottom: 17px;

   @media screen and (max-width:575px) {
      font-size: 22px;
      margin-bottom: 12px;
   }
}

.blogs__subtitle {
   display: flex;
   margin-bottom: 21px;

   .blogs__date {
      font-size: 18px;

      @media screen and (max-width:575px) {
         font-size: 16px;
      }
   }

   .blogs__name {
      font-size: 18px;

      @media screen and (max-width:575px) {
         font-size: 16px;
      }
   }

   .blogs__line {
      position: relative;
      margin-right: 26px;
      margin-left: 30px;

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
   }
}

.works__content {
   display: flex;
   flex-direction: column;
}

.works__header {
   margin-bottom: 22px;

   @media screen and (max-width:575px) {
      margin-bottom: 0px;
   }
}

.works__header-title {
   font-size: 22px;
   line-height: 60px;

   @media screen and (max-width:575px) {
      font-size: 18px;
      text-align: center;
   }
}

.works__content-box {
   display: flex;
   gap: 18px;
   padding-bottom: 15px;
   border-bottom: 1px solid $border-line;

   &:not(:last-child) {
      margin-bottom: 31px;
   }

   @media screen and (max-width:575px) {
      flex-direction: column;
   }
}

.works__content-box--hidden {
   @media screen and (max-width:575px) {
      display: none;
   }
}

.content-box__inner {
   display: flex;
   flex-direction: column;

   .box__subtitle {
      display: flex;
      gap: 26px;
      margin-bottom: 17px;

      .year {
         color: $main-color;
         font-size: 18px;
         font-weight: 900;
         border-radius: 16px;
         background: #142850;
         padding: 1px 10px;

         @media screen and (max-width:575px) {
            font-size: 16px;
         }
      }

      .name {
         font-size: 20px;
         color: #8695A4;

         @media screen and (max-width:575px) {
            font-size: 16px;
         }
      }
   }
}

.box__title {
   font-size: 30px;
   font-weight: 700;
   margin-bottom: 17px;

   @media screen and (max-width:575px) {
      font-size: 24px;
   }
}
</style>
