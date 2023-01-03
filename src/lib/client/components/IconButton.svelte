<script lang="ts">
	import { goto } from "$app/navigation";

  export let selected: boolean = false;  
  export let href: string | null = "";
  export let onClick: () => void | null = () => {};
  //Enum that has one of 3 string values
  export let icon: "book" | "home" | "settings" | "logout" | "view_week" = "home";
//This can be any type of svelte component
  let selectedIcon = import(`../../assets/${icon}.svg.svelte`);

  const handleClick = () => {
    if(href &&  href !== "") {
      goto(href, {replaceState: true});
    }
    onClick?.();
  }
</script>

<style>

  :global(.IconButton path) {
    fill: var(--font-header-color);
  }

  :global(.IconButton.selected path) {
    fill: var(--white);
  }
  
  .IconButton {
    background: none;
    border: 0;
    width: 5rem;
    height: 5rem;
    border-radius: var(--radius);
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    

    display: flex;
    justify-content: center;
    align-items: center;

  }
  .IconButton.selected {
    background: rgba(var(--font-header-color-rgb), var(--alpha));
  }


  
</style>

<button class="IconButton" class:selected on:click={handleClick}>
  {#await selectedIcon}
    <div>loading</div>    
  {:then component} 
    <svelte:component this={component.default} className="svg-icon"/>
  {/await}
</button>