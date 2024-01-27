<script>
    import Navbar from '../../components/Navbar.svelte';
    import { projectsdata } from './projectsdata.js';
    import githubicon from '../../assets/Github-icon.svg'
    import {fade} from "svelte/transition";
    import {quintIn} from "svelte/easing";
    import Projectsvector from '../../components/Projectsvector.svelte';
    import {onMount} from 'svelte'

    let projectsvectoricon = [];

    let numberOfprojectsvectoricon = 70;
 
    function generateRandomPosition() {
    return {
        x: Math.random() * (window.innerWidth-30),
        y: Math.random() * (window.innerHeight-60),
    };
    }

    onMount(() => {
    projectsvectoricon = Array(numberOfprojectsvectoricon).fill().map(() => generateRandomPosition());
    });
</script>

<Navbar />
<section id="projects" class="w-full h-full top-16 relative flex flex-col justify-center text-center text-white lg:p-16 md:p-4 p-8" in:fade={{ easing:quintIn }} out:fade={{ easing:quintIn }}>
    {#each projectsvectoricon as { x, y }, i (i)}
        <Projectsvector x={x} y={y} key={i} />
    {/each}
    <h2 class="font-medium projects-name select-none">Projects</h2>
    <div class="w-full flex xl:gap-8 relative justify-center flex-wrap sm:mt-16 mt-8">
        {#each projectsdata as { name, url, github }, i}
            <div class="xl:w-101 w-96">
                <div class="xl:w-100 w-80 xl:h-72 h-60 flex-col bg-black rounded-[20px]">
                    <h1 class="projects-data-name p-2 select-none">{name}</h1>
                    <img src={url} alt={i + 1} class="object-contain px-2 rounded-b-[20px]">
                </div>
                <div class="xl:w-16 xl:h-16 w-12 h-12 bg-black rounded-full relative xl:left-82 left-72 -top-10">
                    <a href={github} target="_blank">
                        <img src={githubicon} alt={i+1} class="xl:p-2 p-1">
                    </a>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    #projects {
        scroll-behavior: smooth;
    }
    .projects-name {
        font-family: 'Jacques Francois', serif;
        font-size: 72px;
    }

    .projects-data-name {
        font-family: 'Gurajada', sans-serif;
        font-size: 32px;
    }
    @media screen and (max-width: 640px) {
        .projects-name {
            font-size: 44px;
        }
    }
</style>
