<script lang="ts">
    export let src: string;
    export let width: number;
    export let height: number;

    export let display = false;
</script>

<img {src} {width} {height} alt="" style={display ? 'display:block;' : 'display:none;'} />

<style>
    img {
        position: absolute;
        user-select: none;
    }
</style>
