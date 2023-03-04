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
        color: string;
        borderColor: string;
        radius: number;
        lifeSpan: number;
        
    }

    let colors = ['#ca8933', '#e39a3a', '#fcab40', '#fcb353', '#fdbc66', '#fdc479', '#fdcd8c', '#fed5a0', '#feddb3'];

    let particles: particle[] = [];

  

    
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

        // render particles here

        particles.forEach((p) => {
            context!.fillStyle = p.color;
            context!.strokeStyle = p.borderColor;
            context!.globalAlpha = p.lifeSpan / 3000 + 0.3;
            context!.lineWidth = 2;
            context?.beginPath();

            context?.ellipse(p.x, p.y, p.radius,p.radius, 0, 0, Math.PI * 2, );
            context?.fill()
            context?.stroke()

            let t = dt / 1000;
        
            // p.vx *= 0.99;
            // p.vy += 700 * t;

            // p.x += p.vx * t;
            // p.y+= p.vy * t;

            // p.lifeSpan -= dt;
        
        });

        particles= particles.filter((val)=>val.lifeSpan > 0);


        // console.log(particles)
        window.requestAnimationFrame(render);
    }

    function spawnParticles(x: number, y: number) {
        
        let count = Math.floor(Math.random() * 15) + 10;

        for (let i =0;i < count; i++){
            particles.push({
                x:x, 
                y:y,
                color:randItem(colors),
                borderColor: randItem(colors),
                lifeSpan: (Math.floor(Math.random() * 2) + 1) * 1000,
                radius: 10 + Math.floor(10 * Math.random()),
                vx: Math.floor(Math.random()  * 600) - 300,
                vy: -Math.floor(Math.random() * 400)-200
            })
        }
    }

    onMount(() => {
        canvas.width = 600;
        canvas.height = 600;
        context = canvas.getContext('2d');
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
