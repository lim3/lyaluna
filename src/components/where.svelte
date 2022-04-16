<script>
    import stand from '/static/assets/stand.jpg'

    let events = [
        {
            name: 'Faust Flohmarkt',
            // location: 'Faust',
            where: 'Fauststr. 12, Hannover',
            when: 'Jeden Sonntag, 10:00 - 18:00'
        },
    ]
</script>

<section>
    <div class="container">
        <div class="wrapper">
            <figure>
                <img src="{stand}" alt="">
            </figure>
            <div class="text" style="--background: var(--light2);">
                <h2 class="title">Where to find me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                </p>
                <ul class="events">
                    {#each events as event}
                        <li class="event">
                            <h4>{event.name}</h4>
                            <div class="meta">
                                {#if event.location }{event.location},{/if}
                                <span class="when">{event.when}</span>
                                <span class="where">{@html event.where}</span>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .wrapper {
        display: flex;
        align-items: flex-start;
    }

    figure {
        flex: 1;

        img {
            display: block;
            max-width: 100%;
        }
    }

    .text {
        background: url("/static/assets/paper.jpg");
        flex: 1;
        margin: auto 0 auto -3rem;
        padding: 4rem;
        clip-path: polygon(2% 0%, 100% 6%, 97% 97%, 0% 100%);

        p {
            margin-bottom: 4em;
        }
    }

    h4 {
        font-weight: 600;
    }

    .event {
        margin: 1em 0;
        padding: .5em;
        border-top: 1px solid currentColor;
        border-bottom: 1px solid currentColor;
    }

    @media (max-width: $device-small) {
        .wrapper {
            flex-direction: column;
            align-items: center;
        }

        figure {
            width: 70vw;
        }

        .text {
            margin: -2rem auto 0;
            padding: 4rem 2rem;
        }
    }
</style>