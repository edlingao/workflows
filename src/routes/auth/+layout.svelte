<script lang="ts">
  import Logo from "$lib/client/components/Logo.svelte";

</script>


<style lang="scss">
  .Auth {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    
    width: 100%;
    height: 100%;

    .logo {
      position: absolute;
      top: 15px;
      left: 30px;
    }
    
    .main-login {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      background: rgba(var(--white-rgb), $alpha: var(--alpha));
      width: 50%;
      height: 100%;
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

  :global(.login-form) {
    display: flex;
    flex-direction: column;
    
    gap: 3.125rem;
    width: 100%;
  }
  :global(.register-message) {
    color: var(--white);
    font-weight: 600;
    margin-top: 1.313rem;
  }
</style>

<div class="Auth">
  <main class="main-login">
    <div class="logo">
      <Logo />
    </div>
    <!-- Forms here -->
    <slot />

  </main>
  
  <aside class="hero-fun">
    <div class="ball"></div>
    <div class="blur"></div>
  </aside>
</div>