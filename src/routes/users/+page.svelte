<script lang="ts">
	import { logout } from "$lib/client/stores/auth";
	import type { PageData } from "./$types";

  export let data: PageData;

</script>

{#each data.users as {email, id, name, password}}
  <div class="user">
    <p>id: {id}</p>
    <p>Name: {email}</p>
    <p>Email: {name}</p>
    <p>Password: {password}</p>
  </div>
{/each}

<button on:click={() => logout()}>Logout</button>