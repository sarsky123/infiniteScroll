<template>
  <div>
    <h1>This is my github repo</h1>
    <ListBlock v-for="repo in repoData" :repoProp="repo" :key="repo.id" />
    <footer ref="footer">This is footer</footer>
  </div>
</template>

<script>
import ListBlock from "../components/list/listBlock";
import { getUserRepo } from "../api/github";
import intersectionObserver from "../util/intersectionObserver";
const REPO_PER_PAGE = 4;
export default {
  REPO_PER_PAGE,
  name: "ListView",
  data() {
    return {
      pagination: 1,
      repoData: [],
      observer: null,
      isProccessing: false,
      isAllListed: false
    };
  },
  components: {
    ListBlock
  },
  created() {
    this.getUserRepoMethod();
  },
  mounted() {
    this.initObserver();
  },
  beforeDestroy() {
    this.observer = null;
  },
  methods: {
    async getUserRepoMethod() {
      if (this.isProccessing || this.isAllListed) return;
      this.isProccessing = true;
      try {
        await getUserRepo(
          process.env.VUE_APP_MY_USER_NAME,
          {
            params: {
              per_page: this.$options.REPO_PER_PAGE,
              page: this.pagination
            }
          },
          this.getUserRepoCallback
        );
      } finally {
        this.isProccessing = false;
      }
    },
    getUserRepoCallback(response) {
      if (this.isAllListed) return;
      if (response.status === 200) {
        let data = response.data;
        if (data.length == 0) {
          this.isAllListed = true;
          return;
        }
        this.repoData = this.repoData.concat(data);
        this.pagination++;
      }
    },
    initObserver() {
      let observingDom = this.$refs.footer;
      this.observer = intersectionObserver(
        this.getUserRepoMethod,
        {},
        observingDom
      );
    }
  }
};
</script>

<style></style>
