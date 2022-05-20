<script>
    import moon from '/static/assets/moon.jpg'
</script>

<section class="hero">
    <div class="moon" aria-hidden="true">
        <img src="{moon}" alt="">
    </div>
    <div class="container text">
        <h1 class="title large">Lyaluna</h1>
        <h2 class="subtitle">Upcycling &bull;  Art &bull; DIY</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
    </div>
</section>

<style lang="scss">
    @import '../vars.scss';
    
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
            mix-blend-mode: screen;
            width: 20em;
            height: auto;
        }
        &::before {
            content: '';
            position: absolute;
            inset: 0;
            background-color: var(--primary);
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

    @media (max-width: $device-small) {
        section { flex-direction: column; }
        .moon img { width: 10rem; }
    }  
</style>
