<script lang="ts">
  import Logo from '$lib/assets/logo.svg.svelte';

</script>

<style>
  .Logo {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    gap: 0.563rem;
  }
  .title {
    font-weight: 300;
  }
</style>

<div class="Logo">
  <Logo />
  <div class="info">
    <h1 class="title">Workflows</h1>
    <p>by <a class="link" href="https://www.github.com/edlingao">Edlingao</a></p>
  </div>
</div>