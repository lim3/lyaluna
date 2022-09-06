<script>
  import paperImg from "/static/assets/paperImg.jpg";
  import tetraImg from "/static/assets/tetraImg.jpg";
  import fabricImg from "/static/assets/schweine.jpg";
  import otherImg from "/static/assets/otherImg.jpg";
  let materials = [
    {
      name: "Paper",
      background: paperImg,
    },
    {
      name: "Tetrapak",
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
    <ul class="materials">
      {#each materials as material}
        <li>
          <a href="/materials/{material.name.toLowerCase()}" class="wrapper">
            <div class="image-wrapper">
              {#if material.background}
                <img src={material.background} alt="" aria-hidden="true" />
              {/if}
            </div>
            <div class="content">
              <h3>{material.name}</h3>
            </div>
          </a>
        </li>
      {/each}
      </ul>
  </div>
</section>

<style lang="scss">
  section {
    background-size: cover;
    background-image: url("/static/assets/paper.jpg");
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom:0;
      clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
      transform: scale(1.1);
      height: 3vh;
      background-color: var(--background);
      left: 0;
      right: 0;
    }
  }

  .title {
    position: absolute;
    display: inline-block;
    top: 0;
    background: var(--dark);
    color: var(--light);
    padding: 0 1em;
    clip-path: polygon(0% 0%, 100% 3%, 97% 100%, 4% 97%);
    z-index: 2;
    text-align: center;
  }

  .materials {
    align-items: center;
    display: flex;
    width: 100%;
    gap: 3em;
  }

  li {
    width: 15rem;
    max-width: 100%;
    flex: 0 1 15rem;
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--light);
    font-weight: 700;
    position: relative;
    cursor: pointer;

    img {
      aspect-ratio: 1/1;
      display: block;
      object-fit: cover;
      transition: transform 0.3s;
      width: 100%;
    }
  }

  .image-wrapper {
    transition: transform .3s;
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
    color: var(--text);
    padding: 0.4rem 1rem;
    font-weight: 800;
    transform: translateX(-1rem);

    &::after {
      display: block;
      content: "";
      background-color: var(--light);
      position: absolute;
      inset: 0;
      clip-path: polygon(2% 0%, 100% 6%, 97% 97%, 0% 100%);
      z-index: -1;
    }
    &::before {
      display: block;
      content: "";
      background-color: var(--dark);
      position: absolute;
      inset: 0;
      clip-path: polygon(2% 0%, 100% 6%, 97% 97%, 0% 100%);
      z-index: -1;
      transition: transform 0.3s;
      transform: scale(0.9);
    }
  }

  .wrapper:hover,
  .wrapper:active,
  .wrapper:focus {
    .image-wrapper { transform: scale(1.1); }

    img {
      transform: scale(1.05);
    }
    h3::before {
      transform: scale(1.05) translate(5%, 5%);
    }
  }

  .wrapper:focus-visible  {
    outline: 0;
    .image-wrapper {
      box-shadow: -2px -2px 0 5px var(--primary);
    }
  }

  @media (max-width: $device-small) {
    .materials {
      flex-direction: column;
    }

    h3 { 
      font-size: 1.2em;
    }
  }
</style>
