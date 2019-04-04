import firebase from '~/plugins/firebase';
import { firebaseAction } from 'vuexfire';

const firestore = firebase.firestore();
const tagsCollection = firestore.collection('tags');

export const state = () => ({
  tags: []
});

export const getters = {
  tags: state => state.tags
};

export const actions = {
  INIT_TAGS: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('tags', tagsCollection);
  }),
  ADD_TAG: firebaseAction((ctx, { label }) => {
    tagsCollection.add({
      label
    });
  }),
  DELETE_TAG: firebaseAction((ctx, { id }) => {
    tagsCollection.doc(id).delete();
  })
};
