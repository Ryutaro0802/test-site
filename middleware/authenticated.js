import auth from '~/plugins/auth';

export default async function({ store, redirect }) {
  if (!store.state.user) {
    return redirect('/author');
  } else {
    const user = await auth();
    store.commit('setUser', { user });
  }
}
