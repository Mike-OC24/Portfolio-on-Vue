<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
   <div class="wrapper">
      <Header />
      <main class="main">
         <div class="main__container">
            <section class="works">
               <div class="works__content">
                  <div class="works__header">
                     <p class="works__header-title">Work</p>
                  </div>

                  <div class="works__content-box content-box">
                     <img class="content-box__image" src="../assets/img/work1.svg" alt="image">
                     <div class="content-box__inner">
                        <h1 class="box__title">Designing Dashboards</h1>
                        <div class="box__subtitle">
                           <p class="year">2020</p>
                           <p class="name">Dashboard</p>
                        </div>
                        <p class="box__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                           Velit
                           officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                     </div>
                  </div>

                  <div class="works__content-box content-box">
                     <img class="content-box__image" src="../assets/img/work2.svg" alt="image">
                     <div class="content-box__inner">
                        <h1 class="box__title">Vibrant Portraits of 2020</h1>
                        <div class="box__subtitle">
                           <p class="year">2018</p>
                           <p class="name">Illustration</p>
                        </div>
                        <p class="box__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                           Velit
                           officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                     </div>
                  </div>

                  <div class="works__content-box content-box">
                     <img class="content-box__image" src="../assets/img/work3.svg" alt="image">
                     <div class="content-box__inner">
                        <h1 class="box__title">36 Days of Malayalam type</h1>
                        <div class="box__subtitle">
                           <p class="year">2018</p>
                           <p class="name">Typography</p>
                        </div>
                        <p class="box__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                           Velit
                           officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                     </div>
                  </div>

                  <div class="works__content-box content-box">
                     <img class="content-box__image" src="../assets/img/work4.svg" alt="image">
                     <div class="content-box__inner">
                        <h1 class="box__title">Components</h1>
                        <div class="box__subtitle">
                           <p class="year">2023</p>
                           <p class="name">Components, Design</p>
                        </div>
                        <p class="box__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                           Velit
                           officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                     </div>
                  </div>

                  <div class="works__content-box content-box">
                     <img class="content-box__image" src="../assets/img/work5.png" alt="image">
                     <div class="content-box__inner">
                        <h1 class="box__title">Designing Landing pages</h1>
                        <div class="box__subtitle">
                           <p class="year">2022</p>
                           <p class="name">Website</p>
                        </div>
                        <p class="box__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                           Velit
                           officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                     </div>
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
   font-size: 44px;
   line-height: 60px;
   font-weight: 900;

   @media screen and (max-width:575px) {
      font-size: 30px;
      font-weight: 700;
   }
}

.works__content-box {
   display: flex;
   gap: 18px;
   padding-bottom: 50px;
   border-bottom: 1px solid #E0E0E0;

   &:not(:last-child) {
      margin-bottom: 45px;
   }

   @media screen and (max-width:575px) {
      flex-direction: column;
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