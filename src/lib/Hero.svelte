<script>
    import moon from '$lib/assets/moon.png'
</script>

<section class="hero">
    <div class="moon" aria-hidden="true">
        <img src={moon} alt="">
    </div>
    <div class="container text">
        <h1 class="title large">Lyaluna</h1>
        <h2 class="subtitle">Extraordinary art on ordinary objects</h2>
        <p>Hi I'm making stuff myself. I take used and broken products which are thrown away and use them to make new stuff out of it and give it a new life. All my products are unique and handmade. </p>
    </div>
</section>

<style lang="scss">
    section {
        min-height: 50vh;
        background-color: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        color: var(--light);

        &::after {
            content: '';
            background-color: var(--primary);
            display: block;
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            height: 5vh;
            z-index: 1;
            clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
            transform: translateY(100%) scale(1.01);
        }
    }

    .moon {
        position: relative;
        img { 
            width: 20em;
            height: auto;
        }
    }

    .container {
        margin: 1rem;
    }

    .title {
        color: var(--light);
        text-decoration: none;
        margin-bottom: 1rem;
    }

    h2 {
        margin-bottom: 1rem;
    }

    @media (max-width: 900px) {
        section { flex-direction: column; }
        .moon img { width: 10rem; }
    }  
</style>
