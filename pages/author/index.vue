<template>
  <div>
    <h1 class="title is-1">
      Author Page
    </h1>

    <form action="">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <label class="label">Text</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea" />
        </div>
      </div>


      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const articles = [
  {
    id: 0,
    title: 'title'
  },
  {
    id: 1,
    title: 'title'
  },
  {
    id: 2,
    title: 'title'
  }
];
export default {
  data() {
    return {
      articles
    };
  }
};
</script>

<style>
</style>
