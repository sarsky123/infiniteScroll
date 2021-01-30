<template>
  <div>
    <h1>{{ repoProp.name }}</h1>
    <h5>{{ repoProp.description }}</h5>
    <p>{{ repoProp.html_url }}</p>
  </div>
</template>

<script>
export default {
  name: "ListBlock",
  props: {
    repoProp: {
      type: Object,
      require: true
    }
  }
};
</script>

<style></style>
