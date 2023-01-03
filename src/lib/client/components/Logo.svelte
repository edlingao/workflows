<script lang="ts">
  import Logo from '$lib/assets/logo.svg.svelte';

  export let small: boolean = false;
</script>

<style lang="scss">
  .Logo {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    gap: 0.563rem;

    &.small { 
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        font-weight: 300;
        font-size: 20px;
      }
      p {
        font-size: 14px;
      }
      .title, p {
        text-align: center;
      }
    }
  }
  .title {
    font-weight: 300;
  }
</style>

<div class="Logo" class:small="{small}">
  <Logo />
  <div class="info">
    <h1 class="title">Workflows</h1>
    <p>by <a class="link" href="https://www.github.com/edlingao">Edlingao</a></p>
  </div>
</div>