<template>
  <div>
    <h1 class="title is-3">
      リソースアップロード
    </h1>
    <form @submit.prevent="fileSubmit">
      <input type="file" @change="fileUpload" />
      <button>アップロード</button>
    </form>
    <p>
      {{ fileName }}
    </p>
  </div>
</template>

<script>
export default {
  layout: 'column2'
};
</script>
