<script lang="ts">
    export let value = 0;

    const wait = (ms:number) => new Promise(ok => setTimeout(ok, ms));

    async function load() {
        await wait(2000);
        throw 42;
    }

    const data = load();
</script>

<button on:click={() => value--}>-</button>
<input type="number" bind:value on:change/>
<button on:click={() => value++}>+</button>
<hr />
{#await data}
    Loading...
{:then result} 
    Data: {result}
{:catch error}
    Oups {error}
{/await}

<style>
    button{
        color:var(--counter-button-color, blue);
    }
</style>