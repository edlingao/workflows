<script lang="ts">
	import Check from "$lib/assets/check.svg.svelte";
	import Clock from "$lib/assets/clock.svg.svelte";


  export let size: "small" | "medium" | "large" = "medium";
  export let title: string = "";
  export let startHour: string = "00:00";
  export let endHour: string = "00:00";
  export let completed: boolean = false;

  let percentage:number = 10; 
</script>

<style lang="scss">
  .Workflow {
    overflow: hidden;
    position: relative;
    border-radius: 0.938rem;

    width: 270px;
    height: 156px;

    .glass-container {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($color: var(--white-rgb), $alpha: var(--alpha));
      backdrop-filter: blur(2px);
    }

    .green-percentage {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .icon {
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
    }

    .information {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.563rem;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: var(--white);
    }
  }
</style>

<div class="Workflow">
  <div class="glass-container">
    <div class="icon">
      {#if completed}
        <Check />
      {:else}
        <Clock />
      {/if}
    </div>
    <div class="information">
      <h3>{title}</h3>
      <p>{startHour} - {endHour}</p>
    </div>
  </div>
  <div class="green-percentage" style="{`background: linear-gradient(90deg, var(--green) 0%,var(--green) ${percentage}%,rgba(0,0,0,0) ${percentage + 5 }%);`}"></div>
</div>