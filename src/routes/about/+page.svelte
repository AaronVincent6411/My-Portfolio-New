<script>
    import Navbar from "../../components/Navbar.svelte";
    import { fade } from "svelte/transition";
    import {  quintIn } from "svelte/easing";
    import aboutprofile from '../../assets/about-profile.webp';
</script>

<Navbar />
<section id="about" class="w-full h-full top-16 relative flex flex-col justify-center text-center text-white p-16 " in:fade={{ easing:quintIn }} out:fade={{ easing:quintIn }}>
    <h2 class="font-medium about-name">About</h2>
    <p class="about-desc mt-4 text-justify font-normal">I am Aaron P Laju, Final-year Computer Science (AI) student at Adi Shankara Institute Of Engineering and Technology, Kalady. Currently serving as the Community Lead of IEDC ASIET. I bring expertise as a former Technical Lead at Hackclub and Technical Co-Lead at Computer Society of India in my college. Proficient in React and Python. I specialize in Machine Learning. My portfolio includes impactful projects in ML and Web Development, demonstrating my versatility. I also engage in poster designing, showcasing my creative skills alongside my technical expertise. I actively participate in code debugging and competitive coding competitions which will help sharpen my problem-solving skills.</p>
    <div class="w-40 hover:w-100 h-44 relative bg-black mt-10 hover:left-[40%] lg:left-[46%] md:left-[43%] sm:left-[40%] left-[25%] rounded-[20px] overflow-hidden transition-all duration-500 group">
        <img src={aboutprofile} alt="about-profile" class="w-32 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform absolute top-7 left-4">
        <div class="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-0 ml-20">
        <div class="flex flex-row gap-10 relative left-1/3">
            <h1>Age</h1>
            <h1>21</h1>
        </div>
        <div class="flex flex-row gap-10 relative left-1/3">
            <h1>Role</h1>
            <h1>Developer</h1>
        </div>
        <div class="flex flex-row gap-10 relative left-1/3">
            <h1>Place</h1>
            <h1>Kerala</h1>
        </div>
        </div>
    </div>      
</section>

<style>
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
</style>