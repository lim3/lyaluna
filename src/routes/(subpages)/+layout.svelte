<header><a href="/">
    <h1 class="title container">Lyaluna</h1>
</a></header>
<slot></slot>

<style>
    header {
        background-color: var(--primary);
        color: var(--light);
        position: relative;
        padding: 20px 0 0 0;
    }

    header a {
        text-decoration: none;
    }

    header::after {
        content: '';
        background-color: var(--primary);
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 40px;
        z-index: 1;
        clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
        transform: translateY(100%) scale(1.01);
    }

</style>