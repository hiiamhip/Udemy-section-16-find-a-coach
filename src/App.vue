<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="routerTransition" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: { TheHeader },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.routerTransition-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.routerTransition-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.routerTransition-enter-active {
  transition: all 0.3s ease-out;
}

.routerTransition-leave-active {
  transition: all 0.3s ease-in;
}

.routerTransition-enter-to,
.routerTransition-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
