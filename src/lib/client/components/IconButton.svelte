<script lang="ts">
	import { goto } from "$app/navigation";

  export let selected: boolean = false;  
  export let href: string | null = "";
  export let onClick: () => void | null = () => {};
  //Enum that has one of 3 string values
  export let icon: "book" | "home" | "settings" | "logout" | "view_week" | null = null;
  export let label: string | null = null;

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

  :global(.IconButton button.selected path) {
    fill: var(--white);
  }
  
  .IconButton {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .blue-label {

    position: absolute;
    left: 0;
    transition: all .25s ease-in-out;
    z-index: 0;
    opacity: 0;

    background: var(--link-color);
    color: var(--white);
    height: 40px;
    width: 100px;
    padding: 0.313rem;
    border-radius: var(--radius);
    box-shadow: -9px 3px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;
    }

  .IconButton:hover .blue-label{
    opacity: 1;
    left: 6.5rem;
  }

  .IconButton button {
    background: none;
    border: 0;
    width: 5rem;
    height: 5rem;
    border-radius: var(--radius);
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
    

    display: flex;
    justify-content: center;
    align-items: center;

  }
  .IconButton button.selected {
    background: rgba(var(--font-header-color-rgb), var(--alpha));
  }


  
</style>

<div class="IconButton">
  <button class:selected on:click={handleClick}>
    {#await selectedIcon}
      <div>loading</div>    
    {:then component} 
      <svelte:component this={component.default} className="svg-icon"/>
    {/await}
  </button>
  {#if label}
    <span class="blue-label">{label}</span>
  {/if}
</div>
