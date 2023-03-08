



export function typewriter(node: HTMLElement, { speed = 1, placeholder = false }) {
    const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
        throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent;
    const duration = text!.length / (speed * 0.01);


    if (placeholder) {
        return {
            duration,
            tick: (t: number) => {
                const i = Math.max(1, Math.trunc(text!.length * t));
                node.innerHTML = `${text!.slice(0, i)}<span style="color:transparent;">${text!.slice(i)}</span>`
            }
        }
    }

    return {
        duration,
        tick: (t: number) => {
            const i = Math.trunc(text!.length * t);
            node.textContent = text!.slice(0, Math.max(1, i));
        },
    };
}