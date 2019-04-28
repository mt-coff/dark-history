<template>
  <div>
    <list-temp :posts="dummies" @click="id => $router.push(`/detail/${id}`)" />
  </div>
</template>

<script>
export default {
  name: "list",
  components: {
    ListTemp: () => import("@/components/Templates/ListTemp")
  },
  data() {
    return {
      // TODO: APIと接続して置き換える
      dummies: [
        {
          id: "hogehoge",
          title: "ドナルド・トランプとデート",
          detail: "詳細"
        },
        {
          id: "fugafuga",
          title: "ドナルド・トランプとデート",
          detail: "詳細"
        },
        {
          id: "piyopiyo",
          title: "ドナルド・トランプとデート",
          detail: "詳細"
        },
        {
          id: "1234",
          title: "ドナルド・トランプとデート",
          detail: "詳細"
        },
        {
          id: "456",
          title: "ドナルド・トランプとデート",
          detail: "詳細"
        },
        {
          id: "iuorq",
          title: "ドナルド・トランプとデート",
          detail: "詳細"
        },
        {
          id: "45678",
          title: "ドナルド・トランプとデート",
          detail: "詳細"
        },
        {
          id: "83924",
          title: "ドナルド・トランプとデート",
          detail: "詳細"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
