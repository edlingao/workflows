<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import Button from "$lib/client/components/Button.svelte";
  import Input from "$lib/client/components/Input.svelte";
	import { refresh } from "$lib/client/stores/auth";
	import type { User, UserRegisterResponse } from "$lib/types/user";
    
  async function handleLogin(event: any) {

    event.preventDefault();
    if(browser) {
      const {email, password} = Object.fromEntries(new FormData(event.target as HTMLFormElement));

      const response = await fetch('/api/login', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({email, password})
      })

      const {token, user}: UserRegisterResponse = await response.json();

      refresh(token, user as User);

      goto('/users');
    }
  }

</script>

<style lang="scss">
.Login {
  width: 50%;
}
</style>

<div class="Login">
  <form class="login-form" on:submit={handleLogin}>
    <Input title="Email" type="text" />
    <Input title="Password" type="password" />
    <Button text="Login"/>
  </form>
  <p class="register-message">You don't have an account? <a href="/auth/register" class="link">Sign up</a></p>
</div>
