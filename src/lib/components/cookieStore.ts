
import { writable,type Writable } from "svelte/store";

export interface pos{
x:number,
y:number
}
 export let particleStore : Writable<pos[]> = writable([])