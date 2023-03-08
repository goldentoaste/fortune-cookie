<script lang="ts">
    import { randItem } from '$lib/scripts/randItem';
    import { onMount } from 'svelte';
    import { particleStore, type pos } from './cookieStore';
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;

    let time = Date.now();
    let dt = 0;
    interface particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        radius: number;
        lifeSpan: number;
        shape: number;
    }


    let particles: particle[] = [];

    let shapes : CanvasImageSource[]= [];

    function render() {
        context?.clearRect(0, 0, 600, 600);

        dt = Date.now() - time;
        time = Date.now();

        if ($particleStore.length > 0) {
            $particleStore.forEach((e) => {
                spawnParticles(e.x, e.y);
            });
            $particleStore.length = 0;
        }

        particles.forEach((p) => {
            // context!.globalAlpha = p.lifeSpan / 3000 + 0.3;
            // context!.lineWidth = 2;
            // context?.beginPath();

            context?.drawImage(shapes[p.shape], p.x, p.y);

            let t = dt / 1000;

            p.vx *= 0.99;
            p.vy += 700 * t;

            p.x += p.vx * t;
            p.y += p.vy * t;

            p.lifeSpan -= dt;
        });

        particles = particles.filter((val) => val.lifeSpan > 0);

        // console.log(particles)
        window.requestAnimationFrame(render);
    }

    function spawnParticles(x: number, y: number) {
        let count = Math.floor(Math.random() * 15) + 10;

        for (let i = 0; i < count; i++) {
            particles.push({
                x: x,
                y: y,

                lifeSpan: (Math.floor(Math.random() * 2) + 1) * 1000,
                radius: 10 + Math.floor(10 * Math.random()),
                vx: Math.floor(Math.random() * 600) - 300,
                vy: -Math.floor(Math.random() * 400) - 200,
                shape: Math.floor(Math.random() * 5),
            });
        }
    }

    onMount(() => {
        canvas.width = 600;
        canvas.height = 600;
        context = canvas.getContext('2d');
        shapes = [new Image(), new Image(), new Image(), new Image(), new Image()];

        ['crumb1.svg', 'crumb2.svg', 'crumb3.svg', 'crumb4.svg', 'crumb5.svg'].forEach((val, index) => {
          //@ts-ignore
            shapes[index].src = val;
        });
        requestAnimationFrame(render);
    });
</script>

<div>
    <canvas bind:this={canvas} />
</div>

<style>
    div canvas {
        pointer-events: none;
        width: 100%;
        height: 100%;
    }
</style>
