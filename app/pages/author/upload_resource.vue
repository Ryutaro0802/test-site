<template>
  <div>
    <h1 class="title is-1">
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
import firebase from '~/plugins/firebase';
const storage = firebase.storage();

export default {
  layout: 'column2',
  data() {
    return {
      uploadFile: null,
      fileName: ''
    };
  },
  methods: {
    fileUpload(e) {
      const file = e.target.files;
      this.fileName = file[0].name;
      this.uploadFile = new Blob(file, { type: 'image/jpeg' });
    },
    async fileSubmit() {
      const uploadRef = storage.ref('images/').child(this.fileName);
      try {
        await uploadRef.put(this.uploadFile);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
