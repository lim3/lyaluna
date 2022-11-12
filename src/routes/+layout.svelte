<script lang="ts">
    import Modal from '$lib/Modal.svelte';
    import type { PageData } from './$types';
    import '$lib/scss/global.scss';
    import { modal } from '$lib/stores';
    import type { Material } from '$lib/types';

export let data: PageData;

let modalToDisplay: Material | null = null;

const modalSubscription = modal.subscribe((obj) => {
    modalToDisplay = obj;
})


</script>
{ #if modalToDisplay}
<Modal material={modalToDisplay}></Modal>
{ /if }
<slot></slot>