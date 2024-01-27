<script>
    import Navbar from "../../components/Navbar.svelte";
    import { fade } from "svelte/transition";
    import {  quintIn } from "svelte/easing";
    import aboutprofile from '../../assets/about-profile.webp';
    import { onMount } from 'svelte'
    import Abouticon from "../../components/Abouticon.svelte";
    let abouticon = [];

    let numberOfabouticon = 70;
 
    function generateRandomPosition() {
    return {
        x: Math.random() * (window.innerWidth-30),
        y: Math.random() * (window.innerHeight-60),
    };
    }

onMount(() => {
 abouticon = Array(numberOfabouticon).fill().map(() => generateRandomPosition());
});
</script>

<Navbar />
<section id="about" class="w-full h-full top-16 relative flex flex-col justify-center text-center text-white sm:p-16 p-8 select-none " in:fade={{ easing:quintIn }} out:fade={{ easing:quintIn }}>
    {#each abouticon as { x, y }, i (i)}
        <Abouticon x={x} y={y} key={i} />
    {/each}
    <h2 class="font-medium about-name">About</h2>
    <p class="about-desc mt-4 text-justify sm:indent-20 indent-8 font-normal ">I am Aaron P Laju, Final-year Computer Science (AI) student at <a href="https://adishankara.ac.in/" target="_blank" class=" underline decoration-red-600 sm:decoration-[3px] decoration-2">Adi Shankara Institute Of Engineering and Technology</a>, Kalady. Currently serving as the Community Lead of <a href="https://iedc.adishankara.ac.in/" target="_blank" class=" underline decoration-red-600 sm:decoration-[3px] decoration-2"> IEDC ASIET</a>. I bring expertise as a former Technical Lead at <a href="https://asiet.hackclub.com/" target="_blank" class=" underline decoration-red-600 sm:decoration-[3px] decoration-2"> Hackclub</a> and Technical Co-Lead at Computer Society of India in my college. Proficient in React and Python. I specialize in Machine Learning. My portfolio includes impactful projects in ML and Web Development, demonstrating my versatility. I also engage in poster designing, showcasing my creative skills alongside my technical expertise. I actively participate in code debugging and competitive coding competitions which will help sharpen my problem-solving skills.</p>
    <div class="sm:w-40 w-32 hover:sm:w-101 hover:w-60 sm:h-44 h-40 hover:sm:h-44 hover:h-60 relative bg-black mt-10 hover:xl:left-[40%] hover:lg:left-[30%] hover:md:left-[20%] hover:sm:left-[10%] hover:left-[12%] xl:left-[46%] lg:left-[44.8%] md:left-[42%] sm:left-[40%] left-[25%] rounded-[20px] overflow-hidden flex sm:flex-col flex-row transition-all duration-500 group">
        <img src={aboutprofile} alt="about-profile" class="sm:w-32 sm:h-32 h-20 w-20 object-center object-cover rounded-full transition-all sm:duration-500 duration-300 delay-500 transform absolute sm:top-7 sm:left-4 top-10 left-6 group-hover:sm:top-7 group-hover:sm:left-4 group-hover:top-4 group-hover:left-20">
        <div class="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-0 sm:top-0 sm:mt-0 mt-6 sm:ml-20 ml-4">
            <div class="flex flex-row gap-10 relative sm:left-1/3 left-4 sm:top-0 top-1/3">
                <h1>Age</h1>
                <h1 class="ml-4">21</h1>
            </div>
            <div class="flex flex-row gap-10 relative sm:left-1/3 left-4 sm:top-0 top-1/3">
                <h1>Role</h1>
                <h1 class="ml-2">Developer</h1>
            </div>
            <div class="flex flex-row gap-10 relative sm:left-1/3 left-4 sm:top-0 top-1/3">
                <h1>Place</h1>
                <h1>Kerala</h1>
            </div>
        </div>
    </div>      
</section>

<style>
    #about {
        scroll-behavior: smooth;
    }
    .about-name {
        font-family: 'Jacques Francois', serif;
        font-size: 72px;
    }

    .about-desc {
        font-family: 'GFS Neohellenic', sans-serif;
        font-size: 40px;
    }

    h1 {
        font-family: 'Gurajada', sans-serif;
        font-size: 40px;
    }

    @media screen and (max-width: 640px) {
        .about-desc {
            font-size: 24px;
        }

        .about-name {
            font-size: 44px;
        }
    }

    @media screen and (max-width: 480px) {
        h1 {
            font-size: 32px;
        }
    }
</style>