<template>
  <div>
    <h1>This is my github repo</h1>
    <ListBlock />
  </div>
</template>

<script>
import ListBlock from "../components/list/listBlock";
import { getUserRepo } from "../api/github";
const REPO_PER_PAGE = 3;
export default {
  REPO_PER_PAGE,
  name: "ListView",
  data() {
    return {
      pagination: 1
    };
  },
  components: {
    ListBlock
  },
  created() {
    this.getUserRepoMethod();
  },
  methods: {
    getUserRepoMethod() {
      getUserRepo(
        process.env.VUE_APP_MY_USER_NAME,
        {
          params: {
            per_page: this.$options.REPO_PER_PAGE,
            page: this.pagination
          }
        },
        this.getUserRepoCallback
      );
    },
    getUserRepoCallback(response) {
      console.log(response, "this is getUserRepoCallback");
    }
  }
};
</script>

<style></style>
