<template>
  <div name="tmenu">
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="home">
        <router-link to="/"> <a-icon type="home" />TCOS</router-link>
      </a-menu-item>
      <a-menu-item key="about">
        <router-link to="/about"> <a-icon type="user" />ABOUT </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
  name: "TMenu",
  data() {
    return {
      current: ["home"],
    };
  },
};
</script>
<style scoped></style>
