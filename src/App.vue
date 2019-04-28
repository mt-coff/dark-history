<template>
  <div id="app">
    <logo-header></logo-header>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {
    LogoHeader: () => import("@/components/Molecules/LogoHeader")
  }
};
</script>

<style>
:root {
  --main-color: #c60349;
  --accent-color: #f1d302;
  --blue: #235789;
  --dark: #161925;
  --light: #fdfffc;
  --twitter: #1da1f2;
}

body {
  background: var(--dark);
  margin: 0;
  padding: 0;
  font-family: "しねきゃぷしょん", Times, serif;
}

#app {
  color: var(--main-color);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--light);
}

#nav a.router-link-exact-active {
  color: var(--main-color);
}
</style>
