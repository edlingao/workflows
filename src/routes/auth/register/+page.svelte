<script lang="ts">
	import { goto } from "$app/navigation";
  import Button from "$lib/client/components/Button.svelte";
  import Input from "$lib/client/components/Input.svelte";
	import { refresh } from "$lib/client/stores/auth";
  import {browser} from '$app/environment'
	import type { User, UserRegisterResponse } from "$lib/types/user";
  
  async function handleUpdate(event: any) {
    event.preventDefault();
    if(browser) {
      const userInfo = Object.fromEntries(new FormData(event.target as HTMLFormElement));
  
      const response = await fetch('/api/register', {
        headers: {
          'Content-type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(userInfo)
      });
  
      const {token, user}: UserRegisterResponse = await response.json();
      refresh(token, user as User);
  
      goto('/users');
    }
  }
</script>

<style>
  .Register {
    width: 50%;
  }

</style>

<div class="Register">
  <form class="login-form" on:submit={handleUpdate}>
    <Input title="Email" />
    <Input title="Name" />
    <Input title="Password" type="password" />
    <Button text="Register"/>
  </form>
  <p class="register-message">Already have an account? <a href="/auth/login" class="link">Login</a></p>
</div>
