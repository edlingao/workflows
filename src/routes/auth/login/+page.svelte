<script lang="ts">
	import Button from "$lib/client/components/Button.svelte";
  import Input from "$lib/client/components/Input.svelte";
  
  let text = "";

</script>

<style lang="scss">
  .Login {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    
    width: 100%;
    height: 100%;
    
    .main-login {
      background: rgba(var(--white-rgb), $alpha: var(--alpha));
      width: 50%;
    }

    .hero-fun {
      position: relative;
      width: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
      .ball {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: var(--link-color);
      }
      .blur {
        height: 50%;
        width: 100%;
        background: rgba($color: #000000, $alpha: 0.01);
        backdrop-filter: blur(33.5px);
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
</style>

<div class="Login">
  <main class="main-login">
    <form class="login-form">
      <Input title="Email" bind:value={text}/>
      <Button on:click={(e) => console.log(e)} text="Login"/>
    </form>
  </main>

  <aside class="hero-fun">
    <div class="ball"></div>
    <div class="blur"></div>
  </aside>
</div>
