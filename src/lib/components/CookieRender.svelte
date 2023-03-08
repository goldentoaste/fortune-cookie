<script lang="ts">
    let img: HTMLImageElement;
    export let display = true;
    const click = () => {
        img.classList.add('clicked');
    };

    const release = () => {
        img.classList.remove('clicked');
    };
</script>

<div id="parent" style={display ? '' : 'display:none;'}>
    <img
        id="cookie"
        bind:this={img}
        src="cookie-whole.svg"
        width="600"
        height="600"
        alt="cookie"
        on:mousedown={click}
        on:mouseup={release}
    />
</div>

<style global>
    img {
        transition: all cubic-bezier(0.5, 1, 0.89, 1) 200ms;
        user-select: none;
        width: 100%;
        height: auto;
        /* aspect-ratio: 1; */
    }

    :global(img#cookie:hover) {
        transform: scale(1.04) rotate(-5deg);
    }

    :global(img#cookie.clicked) {
        transform: scale(0.96) rotate(5deg);
        transition: all cubic-bezier(0.5, 1, 0.89, 1) 100ms;
    }

    @keyframes breath {
        0% {
            transform: scale(1) rotate(0);
        }
        20% {
            transform: scale(0.99);
        }

        40% {
            transform: scale(1);
        }

        53% {
            transform: rotate(0);
        }
        54% {
            transform: rotate(-1deg);
        }
        56% {
            transform: rotate(1deg);
        }
        58% {
            transform: rotate(-1deg);
        }
        60% {
            transform: rotate(1deg);
        }
        62% {
            transform: rotate(-1deg);
        }
        63% {
            transform: rotate(0deg);
        }

        80% {
            transform: scale(0.99) rotate(0);
        }
    }

    #parent {
        animation: breath 8s infinite;
        width: 50vw;
        max-width: 600px;
        min-width: 300px;

    }
</style>
