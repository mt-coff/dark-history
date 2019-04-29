<template>
  <div>
    <post-temp
      v-bind.sync="form"
      :loading="loading"
      @click="postData"
    ></post-temp>
  </div>
</template>

<script>
import { postItem } from "../js/api.js";

export default {
  name: "post",
  components: {
    PostTemp: () => import("../components/Templates/PostTemp")
  },
  data() {
    return {
      form: {
        title: "",
        detail: "",
        darkness: 0,
        strength: 0
      },
      loading: false
    };
  },
  methods: {
    async postData() {
      if (!this.form.title) {
        alert("黒歴史のタイトルを入力してください");
        return;
      }
      if (!this.form.detail) {
        alert("黒歴史の内容を入力してください");
        return;
      }
      if (!this.form.strength || !this.form.darkness) {
        alert("黒歴史のタイプをグラフにプロットしてください");
        return;
      }
      this.loading = true;
      const res = await postItem(this.form);
      this.loading = false;
      this.$router.push(`/detail/${res}`);
    }
  }
};
</script>

<style scoped></style>
