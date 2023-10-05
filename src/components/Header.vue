<script setup>
import { RouterLink } from 'vue-router'

import { ref } from 'vue'

const menu = [
   {
      name: 'home',
      path: '/'
   },
   {
      name: 'works',
      path: '/works'
   },
   {
      name: 'blog',
      path: '/blog'
   }
]

const isOpenedBurgerMenu = ref(false);
</script>

<template>
   <header class="header">
      <div class="header__container top-container">
         <div class="header__burger-menu" @click="isOpenedBurgerMenu = !isOpenedBurgerMenu">
            <img src="../assets/img/burger-icon.svg" alt="burger-icon" class="header__burger-icon" />

            <nav class="header__burger-nav burger-nav" v-if="isOpenedBurgerMenu">
               <router-link :to="element.path" class="burger-nav__link" v-for="element of  menu">{{
                  element.name }}</router-link>
               <!--   <ul class="burger-nav__list">
                  <li class="burger-nav__item"><router-link to="/" class="burger-nav__link">home</router-link></li>
                  <li class="burger-nav__item"><router-link to="/works" class="burger-nav__link">works</router-link></li>
                  <li class="burger-nav__item"><router-link to="/blog" class="burger-nav__link">blog</router-link></li>
                  </li>
               </ul>-->
            </nav>
         </div>

         <nav class="header__nav">
            <router-link :to="element.path" class="header__nav-link" v-for="element of menu">{{ element.name
            }}</router-link>
         </nav>

         <!--<nav class="header__nav nav ">
            <ul class="nav__list">
               <li class="nav__item"><router-link :to="element.path" class="nav__link" v-for="element of menu">{{
                  element.name }}</router-link></li>
               <li class="nav__item"><router-link to="/works" class="nav__link">works</router-link></li>
               <li class="nav__item"><router-link to="/blog" class="nav__link">blog</router-link></li>
            </ul>
         </nav>-->
      </div>
   </header>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.header__container {
   min-height: 48px;
   display: flex;
   align-items: end;
   justify-content: end;
   margin-bottom: 162px;

   @media screen and (max-width:575px) {
      margin-bottom: 33px;
   }
}

.header__nav {
   display: flex;
   text-transform: capitalize;
   font-size: 20px;
   font-weight: 500;
   color: #000;
}

.header__nav-link:not(:last-child) {
   margin-right: 33px;
}

/*.nav__list {
   display: flex;
   text-transform: capitalize;
   font-size: 20px;
   font-weight: 500;
   color: #000;
}*/

/*.nav__item:not(:last-child) {
      margin-right: 33px;
   }*/

.header__burger-menu {
   display: none;
   position: absolute;

   @media screen and (max-width: 575px) {
      display: block;
   }
}

.header__burger-nav {
   position: absolute;
   margin-top: 5px;
   right: 1%;
   background: $main-color;
   box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.16), 0px 2px 8px rgba(0, 0, 0, 0.16);
   border-radius: 4px;
   padding: 8px 0px;
}

.burger-nav__link {
   display: block;
   padding: 5px 55px 5px 20px;
   text-transform: capitalize;

   &:hover {
      background: rgba(0, 0, 0, 0.04);
   }
}

@media screen and (max-width: 575px) {
   .header__nav {
      display: none;
   }
}
</style>