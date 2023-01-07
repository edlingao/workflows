<script lang="ts">
	import { browser } from "$app/environment";
	import { page } from "$app/stores";
  import Logo from "$lib/client/components/Logo.svelte";
	import { logout } from "$lib/client/stores/auth";
	import IconButton from "./IconButton.svelte";
  
  enum Routes {
    home = "/",
    week = "/weekView",
    workflows = "/workflows",
    users = "/users",
  };

  interface RouteObj {
    route: Routes;
    icon: "book" | "home" | "settings" | "logout" | "view_week" | null;
    label: string;
  }


  const handleLogout = () => {
    if(browser) {
      logout();
    }
  };

  const routes: RouteObj[] = [
    {
      route: Routes.home,
      icon: "home",
      label: "Home",
    },
    {
      route: Routes.week,
      icon: "view_week",
      label: "Week View",
    },
    {
      route: Routes.workflows,
      icon: "book",
      label: "Workflows",
    },
  ]

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
    {#each routes as route}
      <IconButton
        icon="{route.icon}"
        label="{route.label}"
        href="{route.route}"
        selected={$page.url.pathname === route.route}
      />
    {/each}
  </nav>

  <div class="menu-footer">
    <IconButton icon="settings" href="/settings"/>
    <IconButton icon="logout" onClick={handleLogout}/>
  </div>
</div>
