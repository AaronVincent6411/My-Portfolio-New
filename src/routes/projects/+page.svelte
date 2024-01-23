<script>
    import Navbar from '../../components/Navbar.svelte';
    import { projectsdata } from './projectsdata.js';
    import githubicon from '../../assets/Github-icon.svg'
    import {fade} from "svelte/transition";
    import {quintIn} from "svelte/easing";
</script>

<Navbar />
<section id="projects" class="w-full h-full top-16 relative text-center text-white sm:p-16 p-8 flex flex-col custom-scrollbar" in:fade={{ easing:quintIn }} out:fade={{ easing:quintIn }}>
    <h2 class="font-medium projects-name select-none">Projects</h2>
    <div class="w-full flex gap-8 relative flex-wrap mt-16">
        {#each projectsdata as { name, url, github }, i}
            <div class="w-101">
                <div class="w-100 h-72 flex-col bg-black rounded-[20px]">
                    <h1 class="projects-data-name p-2 select-none">{name}</h1>
                    <img src={url} alt={i + 1} class="object-contain px-2 rounded-b-[20px]">
                </div>
                <div class="w-16 h-16 bg-black rounded-full relative left-82 -top-10">
                    <a href={github} target="_blank">
                        <img src={githubicon} alt={i+1} class="p-2">
                    </a>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .projects-name {
        font-family: 'Jacques Francois', serif;
        font-size: 72px;
    }

    .projects-data-name {
        font-family: 'Gurajada', sans-serif;
        font-size: 32px;
    }
</style>
