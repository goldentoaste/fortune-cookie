

<script>
    import {fade} from 'svelte/transition';
</script>

<div id="background" on:mousedown in:fade></div>
<div id='container'>
    <p>
        <slot/>
    </p>
</div>

<style>
    #container {
        position: fixed;
        display:flex;
        justify-content: center;
        align-items: center;
        align-content: center;

        width: 100vh;
        height: fit-content;
    }

    p {
        font-size: var(--sp-4xl);
        margin-left: 2rem;
        margin-right: 2rem;
        background-image: url();
    }

    #background{
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;

        background-color: black;
        opacity: 0.2;
    }
</style>

