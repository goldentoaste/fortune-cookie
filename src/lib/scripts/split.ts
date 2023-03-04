
import {elasticOut, elasticInOut, cubicInOut} from 'svelte/easing'

export function split(node : Node, {
    duration = 1000,
    flip = false
}){
    return {
        duration,
        css: (t:number)=>{
            const x = cubicInOut(t) * (flip? -1: 1) * 100;
            const y = (t > 0.5? 1- elasticOut(t) :elasticOut(t)) * - 100;
            console.log(x, y)
            return `
                transform: translate(${x}px, ${y}px);
            `;
        }
    }
}

export function split1(node : Node, { duration = 1000}) {
    return {
        duration,
        css: (t:number) => {
            const eased = elasticOut(t);

            return `
                transform: scale(${eased}) rotate(${eased * 1080}deg);
              `
        }
    };
}