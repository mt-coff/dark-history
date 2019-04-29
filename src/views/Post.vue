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
    postData() {
      this.loading = true;
      console.log(this.form);
    }
  }
};
</script>

<style scoped></style>
