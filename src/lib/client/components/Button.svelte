
<script lang="ts">
  export let text: string = "Button"

</script>

<style lang="scss">
  .Button {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;

    button {
      border: 0;
      background: var(--link-color);
      color: var(--white);
      padding: 5px;
      border-radius: var(--radius);
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      width: 100%;
      font-size: 1.125rem;

      outline: none;
      cursor: pointer;
    }
  }
</style>

<div class="Button">
  <button on:click>{text}</button>
</div>
