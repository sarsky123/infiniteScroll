<template>
  <div>
    <h1>This is my github repo</h1>
    <ListBlock v-for="repo in repoData" :repoProp="repo" :key="repo.id" />
  </div>
</template>

<script>
import ListBlock from "../components/list/listBlock";
import { getUserRepo } from "../api/github";
const REPO_PER_PAGE = 4;
export default {
  REPO_PER_PAGE,
  name: "ListView",
  data() {
    return {
      pagination: 1,
      repoData: []
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
      if (response.status === 200) {
        let data = response.data;
        this.repoData = this.repoData.concat(data);
      }
    }
  }
};
</script>

<style></style>
