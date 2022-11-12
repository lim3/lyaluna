<script lang="ts">
  import closeImg from '$lib/assets/x.png';
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import Materials from "./materials.svelte";
  import { modal } from "./stores";
  import type { Material } from "./types";
  const container = import.meta.glob('$lib/assets/container/*.jpg', {eager: true});
  const office = import.meta.glob('$lib/assets/office/*.jpg', {eager: true});

  export let material: Material | null = null;

  let folder = container;
  let images = Object.entries(folder);
  let currentImg = 0;
  let prevImgIndex = 0;


  onMount( () => {
    console.log(material?.slug);
    if(!material?.slug) return;
    const imports = getImages(material?.slug);
    if(!imports) return;
    images = Object.entries(imports)
    currentImg = 0;
    return () => {
      console.log('Material unset');
    }
  })

  function getImages(slug: string)  {
    switch(slug) {
      case 'container':
        return container;
      case 'office':
        return office
    }
  }

  function closeModal(): void {
    modal.set(null);
  }

  function handleSwitch(index: number) {
    prevImgIndex = currentImg;
    currentImg = index;
  }


</script>

<div class="modal">
  <div class="modal__backdrop" on:click={closeModal}></div>
  <div class="modal__content">
    <div class="close-modal"><button on:click|preventDefault={closeModal}><img src={closeImg} alt="close modal"></button></div>
    <div class="paper">
      <h2 class="title">{material?.slug}</h2>
    </div>
    <div class="modal__details">
      <div class="modal__details__image">
        {#key currentImg }
          <img 
            src="{ images[currentImg][0] }" 
            alt="" 
            in:fly={{duration: 300, x: (currentImg < prevImgIndex) ? -100: 100}}
            out:fly={{duration: 300, x: (currentImg > prevImgIndex) ? -100: 100}}>
        {/key}
      </div>
      <div class="modal__details__text">
        <h3>{ material?.title }</h3>
        { material?.description }
      </div>
    </div>
    <div class="thumbnails">
      {#each images as image, index }
      <button 
        class="thumbnails__item" 
        class:active={(index === currentImg)} 
        on:click={() => handleSwitch(index)}
        on:focus={() => handleSwitch(index)}>
          <img src="{image[0]}" alt="">
      </button>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    z-index: 10;

    &__content {
      width: 100%;
      padding: 2rem;
      max-width: 1200px;
      z-index: 1;

    }

    .title {
      display: inline-block;
      background: var(--light);
      color: var(--dark);
      padding: 0 1em;
      clip-path: polygon(0% 0%, 100% 3%, 97% 100%, 4% 97%);
      margin: 0 0 0 1rem;;
      transform: translateY(50%);
      position: relative;
      z-index: 2;
    }

    .thumbnails {
      display: flex;
      width: 100%;
      height: 12vh;
      justify-content: flex-start;
      align-items: stretch;
      gap: 1rem;

      &__item {
        padding: .2rem;
        flex: 0 1 auto;
        min-width: 0;
        height: 100%;

        &.active,
        &:focus {
          border: 2px solid var(--light);
          outline: 0;
        }
      }

      img {
        height: 100%;
        width: auto;
        max-width: 100%;
        object-fit: cover;
      }
    }

    &__details {
      width: 100%;
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;

      h3 {
        line-height: 1;
        margin-bottom: 1rem;
        font-size: 2rem;
      }

      &__image {
        object-fit: cover;
        aspect-ratio: 3 / 2;
        flex: 2 0 60%;
        max-height: 60vh;
        position: relative;

        img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &__text {
        background-color: var(--dark);
        padding: 2rem;
        color: var(--light);
        flex: 1 0 30%;
      }
    }

    &__backdrop {
      position: fixed;
      width:100%;
      height: 100vh;
      inset: 0;
      background-color: rgba(0,0,0,.5);
      backdrop-filter: blur(5px);
    }
  }

  .close-modal {
    position: absolute;
    top: 1rem;
    right: 1rem;

    button {
      color: var(--light, #fff);
      width: 50px;
      height: 50px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .modal__content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .modal__details {
      flex-direction: column;
      flex:1
    }
  }
</style>