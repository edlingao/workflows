<script lang="ts">
	import { browser } from "$app/environment";
	import { navigating, page } from "$app/stores";
  import Logo from "$lib/client/components/Logo.svelte";
	import { logout } from "$lib/client/stores/auth";
	import IconButton from "./IconButton.svelte";
  
  enum Routes {
    home = "/",
    week = "/weekView",
    workflows = "/workflows",
    users = "/users",
  };

  const handleLogout = () => {
    if(browser) {
      logout();
    }
  };

</script>

<style lang="scss">
.Menu { 
  background: rgba($color: var(--white-rgb), $alpha: var(--alpha));
  height: 100%;
  width: 6.375rem;
  padding: 1.875rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .menu-nav {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
}
</style>

<div class="Menu">
  <div class="logo">
    <Logo small/>
  </div>
  <nav class="menu-nav">
    <IconButton icon="home" href="/" selected={$page.url.pathname === Routes.home} />
    <IconButton icon="view_week" href="/weekView" selected={$page.url.pathname === Routes.week}/>
    <IconButton icon="book" href="/workflows" selected={$page.url.pathname === Routes.workflows}/>
  </nav>

  <div class="menu-footer">
    <IconButton icon="settings"/>
    <IconButton icon="logout" onClick={handleLogout}/>
  </div>
</div>
