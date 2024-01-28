<script>
    import Navbar from "../components/Navbar.svelte";
    import { fade } from "svelte/transition";
    import { quintIn } from "svelte/easing";

</script>


<Navbar />

<section id="error" class="w-full h-full top-16 relative sm:p-16 p-8 select-none flex flex-col text-center text-white" in:fade={{ easing:quintIn }} out:fade={{ easing:quintIn }}>
    <h2 class="error-name">404</h2>
    <h2>Sorry Lad, Page Not Found</h2>
</section>

<style>
    h2 {
        font-family: "Jacques Francois";
        font-size: 72px;
    }
</style>