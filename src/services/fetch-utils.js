import { client } from './client';

export async function logOut() {
  const { error } = await client.auth.signOut();

  return error;

}
export async function signUp(email, password) {
  const { user } = await client.auth.signUp({
    email: email,
    password: password
  });

  return user;
}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password:password
  });

  return user;
}