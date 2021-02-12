import {writable} from 'svelte/store';

export const clickCount = writable(0);
export const clickTime = writable('');
