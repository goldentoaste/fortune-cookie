<script>
    import { fade } from 'svelte/transition';
</script>

<div id="background" on:mousedown in:fade />
<div id="container">
    <div id="wrapper">
        <p>
            <slot />
        </p>
    </div>

    <img src='crumbs.svg' alt=''/>
</div>

<style>

    img{
        position: absolute;
       align-self: 100px;
    }

    #container {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;

        width: 100vh;
        height: 100vh;
        left: 0;
        top: 0;
    }

    #wrapper {
        background-image: url('paper.svg');
        background-size: 100% 100%;
        padding: 4rem;
    }

    p {
        font-size: var(--sp-4xl);
       
    }

    #background {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;

        background-color: black;
        opacity: 0.2;
    }
</style>
