<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import MainMenu from "$lib/client/components/MainMenu.svelte";
	import type { User } from "@prisma/client";


  export let data: {isPublic: boolean, user: User};


  if(browser && !data.user) {
    goto('/auth/login');
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400&family=Roboto&display=swap');

  :global(:root) {
    --font-header-color: #111949;
    --font-header-color-rgb: 17, 25, 73;
    --link-color: #2365D2;
    --font-color: #000000;
    --white: #FFFFFF;
    --white-rgb: 255, 255, 255;
    --alpha: 0.5;
    --radius: 5px;
    --green: #037C3B;
  }

  :global(body) {
    height: 100dvh;
    width: 100dvw;
    background: radial-gradient(
      70.19% 100% at 50% 100%, 
      var(--link-color) 0%, 
      var(--font-header-color) 100%
    );
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  :global(.link) {
    color: var(--link-color);
    font-weight: 600;
    text-decoration: none;
  }
  
  .Index {
    width: 100%;
    height: 100%;

    display: flex;
  }

  .main-section {
    width: 100%;
    height: 100%;
    padding: 1.875rem;
  }

</style>

{#if data.user}
  <div class="Index">
    <div class="menu-container">
      <MainMenu />
    </div>
    <main class="main-section">
      <slot></slot>
    </main>
  </div>

{:else}
  <slot />
{/if}
