<script lang="ts">
  export let value: string = "";
  export let title: string = "";
  export let type: string = "text";

  const onInput = (e: any) => (value = e.target.value);

</script>

<style lang="scss">
  .Input {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    span {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--font-header-color);
    }
    input {
      border: 0;
      background: rgba(var(--white-rgb), $alpha: var(--alpha));
      outline: none;
      padding: .25rem 0.438rem;
      color: var(--font-header-);
      font-family: 'Roboto', sans-serif;
      border-radius: 0.2rem;
      font-size: 1.125rem;
      
      &::placeholder {
        color: rgba(var(--font-header-color-rgb), $alpha: var(--alpha));
      }
    }
  }
</style>

<label class="Input">
  <span>{title}</span>
  <input {type} name={title} on:input={onInput} placeholder={title} {value}/>
</label>

