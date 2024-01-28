<script>
    import Navbar from "../../components/Navbar.svelte";
    import { fade } from "svelte/transition";
    import { quintIn } from "svelte/easing";

    let skillsdata = [
        { name: "Python", level: 90, offset:43.96 },
        { name: "Tailwind", level: 90, offset:43.96  },
        { name: "Git", level: 85, offset:43.96  },
        { name: "Pandas", level: 85, offset:65.94  },
        { name: "Svelte", level: 80, offset:87.92  },
        { name: "Tensorflow", level: 75, offset:110  },
        { name: "Deep Learning", level: 75, offset:110  },
        { name: "Designing", level: 75, offset:110  },
        { name: "C", level: 65, offset:153.86  },
        { name: "C++", level: 65, offset:153.86  },
        { name: "React js", level: 65, offset:153.86  },
        { name: "Flutter", level: 60, offset:175.84  },
    ];
    import { onMount } from 'svelte'
    import Skillsicon from "../../components/Skillsicon.svelte";
    let skillsicon = [];

    let numberOfskillsicon = 70;
 
    function generateRandomPosition() {
    return {
        x: Math.random() * (window.innerWidth-30),
        y: Math.random() * (window.innerHeight-60),
    };
    }

onMount(() => {
 skillsicon = Array(numberOfskillsicon).fill().map(() => generateRandomPosition());
});
</script>


<Navbar />

<section id="skills" class="w-full h-full top-16 relative sm:p-16 p-8 select-none flex flex-col text-center text-white" in:fade={{ easing:quintIn }} out:fade={{ easing:quintIn }}>
    {#each skillsicon as { x, y }, i (i)}
        <Skillsicon x={x} y={y} key={i} />
    {/each}
    <h2 class="font-medium skills-name">Skills</h2>
        <div class="skills-container xl:p-16 lg:p-16 md:px-40 md:py-8 sm:p-2 p-4 flex flex-wrap 2xl:gap-28 xl:gap-32 lg:gap-20 sm:gap-32 gap-4 text-center">
        {#each skillsdata as {name, level, offset}, i}
            <svg width="320" height="320" viewBox="0 0 160 160" style="transform: rotate(-90deg)">
                <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="white"></stop>
                    <stop offset="100%" stop-color="#1E1E1E"></stop>
                 </linearGradient>
                <text x="50%" y="50%" fill="white" style="font-family: 'Gurajada', sans-serif; font-size: 1.5rem; transform: rotate(90deg) translate(0px, -160px); text-anchor: middle; dominant-baseline: middle;">{name}</text>
                <text x="50%" y="50%" fill="white" style="font-family: sans-serif; font-size: 10px; transform: rotate(90deg) translate(0px, -140px); text-anchor: middle; dominant-baseline: middle;">{level}%</text>
                <circle class="progress-circle" r="70" cx="80" cy="80" fill="transparent" stroke="url(#linearColors)" stroke-linecap="round" stroke-width="15px" stroke-dasharray="439.6px" style="--offset: {offset}px;"></circle>
            </svg>
        {/each}
    </div>
</section>

<style>

:root {
    --offset: 439.16; 
  }
#skills {
    scroll-behavior: smooth;
}

@keyframes fillProgress {
  to {
    stroke-dashoffset: var(--offset)
  }
}

.progress-circle {
  animation: fillProgress 2.5s ease forwards;
}


    .skills-name {
        font-family: 'Jacques Francois', serif;
        font-size: 72px;
    }

@media screen and (max-width:1440px) {
    .skills-container {
        gap: 5rem;
    }    
}

@media screen and (max-width: 640px) {
        .skills-name {
            font-size: 44px;
        }
    }
</style>