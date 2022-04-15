<script>
  import paperImg from "/static/assets/paperImg.jpg";
  import tetraImg from "/static/assets/tetraImg.jpg";
  import fabricImg from "/static/assets/fabricImg.jpg";
  import otherImg from "/static/assets/otherImg.jpg";
  let materials = [
    {
      name: "Paper",
      background: paperImg,
    },
    {
      name: "Tetrapack",
      background: tetraImg,
    },
    {
      name: "Fabric",
      background: fabricImg,
    },
    {
      name: "Others",
      background: otherImg,
    },
  ];
</script>

<section>
  <div class="container">
    <h2 class="title large">Materials</h2>
    <div class="materials container">
      {#each materials as material}
        <div class="wrapper">
          <div class="image-wrapper">
            {#if material.background}
              <img src={material.background} alt="" aria-hidden="true" />
            {/if}
          </div>
          <div class="content">
            <h3>{material.name}</h3>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  section {
    background-image: url("/static/assets/paper.jpg");
    background-size: cover;
  }
  .materials {
    display: flex;
    width: 100%;
    gap: 3em;

    .wrapper {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--light);
      font-weight: 700;
      position: relative;
      aspect-ratio: 1 / 1;
      cursor: pointer;

      img {
        display: block;
        object-fit: cover;
        transition: transform .3s;
        width: 100%;
        height: 100%;
      }
    }

    .image-wrapper {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      overflow: hidden;
      border-radius: 50%;
    }

    .content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      z-index: 1;
    }

    h3 {
      margin: auto auto 2rem 0;
      font-size: 1.5em;
      font-weight: 400;
      color: var(--text);
      padding: 0.4rem 1rem;
      font-weight: 800;
      transform: translateX(-1rem);

      &::after {
        display: block;
        content: '';
        background-color: var(--light);
        position: absolute;
        inset: 0;
        clip-path: polygon(2% 0%, 100% 6%, 97% 97%, 0% 100%);
        z-index: -1;
      }
      &::before {
        display: block;
        content: '';
        background-color: var(--dark);
        position: absolute;
        inset: 0;
        clip-path: polygon(2% 0%, 100% 6%, 97% 97%, 0% 100%);
        z-index: -1;
        transition: transform .3s;
        transform: scale(0.9);
      }
    }

    .wrapper:hover {
      img {
        transform: scale(1.05);
      }
      h3::before {
        transform: scale(1.05) translate(5%, 5%);
      }
    }
  }
</style>
