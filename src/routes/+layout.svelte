<script lang="ts">
  export let data: {isPublic: boolean};

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
</style>

{#if !data.isPublic}
  <nav class="main-navigation">
    <ul>
      <li>Hola</li>
    </ul>
  </nav>
{/if}
<slot></slot>