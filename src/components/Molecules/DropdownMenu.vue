<template>
  <div class="dropdown" ontouchstart="">
    <p class="menu-title">Menu</p>
    <ul>
      <li><router-link to="/post">黒歴史を打ち明ける</router-link></li>
      <li><router-link to="/list">黒歴史一覧</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dropdown {
  position: absolute;
  right: 10px;
}
.menu-title {
  font-size: 1.5rem;
  cursor: pointer;
}
.menu-title::after {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 0.5rem;
  border-top: solid 2px var(--main-color);
  border-right: solid 2px var(--main-color);
  transform: rotate(135deg);
}
.dropdown:hover ul {
  opacity: 1;
  visibility: visible;
}
ul {
  position: absolute;
  padding: 0;
  margin: 0;
  top: 101%;
  right: 0;
  width: auto;
  list-style-type: none;
  transition: all 0.2s ease;
  visibility: hidden;
  opacity: 0;
  z-index: 1000;
  background-color: var(--dark);
}
li {
  padding: 0.5rem 0.25rem;
  font-size: 1.5rem;
  width: 100%;
  border: 1px solid var(--light);
}
a {
  display: inline-block;
  word-break: keep-all;
  width: 100%;
  vertical-align: middle;
  text-align: center;
  line-height: middle;
  color: var(--main-color);
}
</style>
