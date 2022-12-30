import { writable, type Writable } from 'svelte/store'
import { browser } from '$app/environment';
import { goto } from '$app/navigation';

export const loggedUser: Writable<{name: string, email: string}> = writable({});

export const refresh = (newToken: string, user: {email: string, name: string}) => {
  if(browser) {
    loggedUser.set(user);
  }
};

export const logout = () => {
  if(browser) {
    loggedUser.set({});
    fetch('/api/logout', { method: "DELETE" })
      .then(() => {
        goto('/auth/login');
      })
  }
};
