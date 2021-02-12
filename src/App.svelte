<script lang="ts">
    import {onMount} from 'svelte';
    import {Router, Route} from 'svelte-routing';
    import AboutView from './pages/AboutView.svelte';
    import SceneView from './pages/SceneView.svelte';

    const url = '';
    const basepath = import.meta.env.PROD ? import.meta.env.VITE_BASE : '/';

    onMount(() => {
        console.log('PROD', import.meta.env.PROD);
        console.log('VITE_BASE', import.meta.env.VITE_BASE);
        console.log('using basepath=', basepath);
    });
</script>

<Router {url} {basepath}>
    <Route path="/" component={SceneView} />
    <!-- must use the non-slot method if you want to pass route param (id) and query params (location) -->
    <!-- <Route path="click/:id" component={Component} /> -->
    <!-- can use the slot method below just to show something else -->
    <Route path="/about">
        <AboutView />
    </Route>
    <Route>
        <p>404: nOt fOuNd</p>
    </Route>
</Router>

<style>
    :global(html, body) {
        font-family: 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
</style>
