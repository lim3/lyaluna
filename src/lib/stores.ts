import { writable, type Writable } from "svelte/store";
import type { Material } from "./types";

export const modal: Writable<Material | null> = writable( null )
