<script>
    import logo from "../../assets/me.jpg";
    import Bubble from '../../components/Bubble.svelte'
    import Aaron from '../../assets/Aaron.svg';
    import giticon from "../../assets/Github-icon.svg";
    import linkicon from "../../assets/Linkedin-icon.svg";
    import instaicon from "../../assets/Instagram-icon.svg";
    import { fade } from "svelte/transition";
    import {  quintIn } from "svelte/easing";
    import Navlink from "../../components/Navlink.svelte";
    
    let numberOfBubbles = 100;
    
    import { onMount } from 'svelte'
  
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    onMount(() => {
        closeMenu();
    });

    function closeMenu() {
        isMenuOpen = false;
    }

    let bubbles = [];
 
    function generateRandomPosition() {
        return {
            x: Math.random() * (window.innerWidth-30),
            y: Math.random() * (window.innerHeight-60),
        };
    }

    onMount(() => {
        bubbles = Array(numberOfBubbles).fill().map(() => generateRandomPosition());
    });
</script>

<section id="home" class="w-full h-full" in:fade={{ easing:quintIn }}>
    {#each bubbles as { x, y }, i (i)}
        <Bubble x={x} y={y} key={i} />
    {/each}
    <div class="flex pt-10">
        <div class="home-navlink">
            <Navlink />
        </div>
        <a href="/">
            <img src={logo} alt="icon" class="logo md:w-16 md:h-16 sm:w-12 sm:h-12 w-10 h-10 fixed right-10 rounded-full "/>
        </a>
    </div>
    <div class="flex xl:flex-row flex-col-reverse h-full w-full bottom-0 xl:fixed relative">
        <div class="home-section-left justify-center flex flex-col sm:h-full h-20 relative sm:w-[50%] w-48 xl:mt-0 sm:mt-20">
            <img src={Aaron} alt="Aaron" class="home-img sm:h-125 xl:fixed bottom-0 sm:relative relative 2xl:top-60 xl:top-80 top-60 sm:ml-0 -ml-20  xl:left-80 z-20">
            <div class="home-navbar text-white z-10">
                <div class="about-line">
                    <!-- <a href="/about"> -->
                        <h1 class="relative left-12 top-8 hover:scale-125 hover:transform hover:translate-x-4">
                            <a href="/about">About</a>
                        </h1>
                    <!-- </a> -->
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 303 77" fill="none">
                        <path d="M0.5 1H195.5L302.5 76.5" stroke="white"/>
                    </svg>
                </div>
                <div class="contact-line">
                    <!-- <a href="/contact"> -->
                        <h1 class="relative left-12 top-8 hover:scale-125 hover:transform hover:translate-x-4">
                            <a href="/contact">Contact</a>
                        </h1>
                    <!-- </a> -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 314 42" fill="none">
                        <path d="M313 41L216 0.5L89.5 0.5L7.17641e-06 0.499999" stroke="white"/>
                    </svg>
                </div>
                <div class="certifications-line">
                    <!-- <a href="/certifications"> -->
                        <h1 class="relative w-[50%] left-[7rem] top-8 hover:scale-125 hover:transform hover:translate-x-4">
                            <a href="/certifications">Certifications</a>
                        </h1>
                    <!-- </a> -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 66" fill="none">
                        <path d="M360 1H68.5L1 65" stroke="white"/>
                    </svg>
                </div>
                <div class="projects-line">
                    <!-- <a href="/projects"> -->
                        <h1 class="relative w-[50%] left-[8.8rem] top-16 projects-h1 hover:scale-125 hover:transform hover:translate-x-4">
                            <a href="/projects">Projects</a>
                        </h1>
                    <!-- </a> -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 347 37" fill="none">
                        <path d="M346.5 36.5H79.5L0.5 1" stroke="white"/>
                    </svg>
                </div>
                <div class="skills-line">
                    <!-- <a href="/skills"> -->
                        <h1 class="relative w-[50%] left-[10rem] top-8 hover:scale-125 hover:transform hover:translate-x-6">
                            <a href="/skills">Skills</a>
                        </h1>
                    <!-- </a> -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 51" fill="none">
                        <path d="M360 1H68.5L1 50" stroke="white"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="home-section-right flex flex-col xl:w-[50%] w-full text-white text-center justify-center xl:ml-20 xl:mt-0 mt-16">
            <div class="sub-content-home justify-center">
                <div class="sub-home select-none">
                    <h1>Hi, I am</h1>
                    <h1>Aaron P Laju</h1>
                    <h2 class="sub-title">A student, developer and a designer 👨‍💻</h2>
                </div>
                <div class="flex flex-row gap-20 justify-center sub-home-links">
                    <a href="https://github.com/AaronVincent6411" target="_blank">
                        <img src={giticon} alt="github-icon" class="sm:h-14 sm:w-14 hover:scale-125 w-10 h-10"/>
                    </a>
                    <a href="https://www.linkedin.com/in/aaronvincent6411/" target="_blank">
                        <img src={linkicon} alt="linkedin-icon" class="sm:h-14 sm:w-14 hover:scale-125 w-10 h-10"/>
                    </a>
                    <a href="https://www.instagram.com/aaronvincent6411/" target="_blank">
                        <img src={instaicon} alt="instagram-icon" class="sm:h-14 sm:w-14 hover:scale-125 w-10 h-10"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    
    .home-navbar{
        font-family: 'Gurajada', sans-serif;
        font-size: 56px;
        line-height: normal;
        font-weight: 500px;
        
    }

    .home-navlink {
        display: none;
    }

    .about-line {
        width:303px; 
        height:77px;
        position: fixed;
        top: 40%;
        left: 8rem;
        z-index: -1;
    }

    .contact-line {
        width:314px; 
        height:42px;
        position: fixed;
        top: 83%;
        left: 8rem;
        z-index: -1;
    }

    .certifications-line {
        width:360px; 
        height:66px;
        position: fixed;
        top: 32%;
        left: 42rem;
        z-index: -1;
    }

    .projects-line {
        width:347px; 
        height:37px;
        position: fixed;
        top: 52%;
        left: 43rem;
        z-index: -1;
    }

    .skills-line {
        width:360px; 
        height:51px;
        position: fixed;
        top: 77%;
        left: 42.5rem;
        z-index: -1;
    }

    .sub-home{
        font-family: 'Jacques Francois', serif;
        font-size: 84px;
        line-height: 7rem;
    }

    .sub-title {
        font-family: 'Electrolize', sans-serif;
        font-size: 25px;
    }

    .about-line h1,
    .skills-line h1,
    .projects-line h1,
    .contact-line h1,
    .certifications-line h1 {
        background: linear-gradient(to right, #4d4d4d 0, white 10%, #4d4d4d 20%);
        background-position: 0px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: none;
        white-space: nowrap;
        animation-fill-mode: forwards;
        -webkit-text-size-adjust: none;
        width: 80%;
        background-size: auto;
        }
    
    .about-line h1,
    .skills-line h1,
    .projects-line h1,
    .contact-line h1 {
        animation: shine 4s infinite linear;
    }
    
    .certifications-line h1 {
        animation: certificationsshine 6s infinite linear;
        }

    .about-line h1:hover,
    .skills-line h1:hover,
    .projects-line h1:hover,
    .contact-line h1:hover,
    .certifications-line h1:hover {
        animation-play-state: paused; 
    }

    @keyframes shine {
        0% {
            background-position: 0;
        }
        60% {
            background-position: 80px;
        }
        100% {
            background-position: 0px;
        }
    }

    @keyframes certificationsshine {
        0% {
            background-position: 0;
        }
        60% {
            background-position: 200px;
        }
        100% {
            background-position: 0px;
        }
    }


    @media screen and (max-width: 1770px) {
        .sub-home{
            font-size: 60px;
            line-height: 7rem;
            left: 58rem;
        }

        .home-navbar{
            font-size: 44px;
        }

        .about-line {
            width:273px; 
            height:67px;
            left: 4rem;
        }

        .contact-line {
            width:284px; 
            height:32px;
            left: 4rem;
        }

        .certifications-line {
            width:330px; 
            height:56px;
            left: 34rem;
            top: 34%;
            z-index: -1;
        }

        .projects-line {
            width:317px; 
            height:27px;
            left: 36rem;
            top: 54%;
        }

        .skills-line {
            width:330px; 
            height:41px;
            top: 78%;
            left: 36.5rem;
        }

        .home-img {
            left: 14rem;
        }

        h1{
            top: 1.5rem;
        }

        .projects-h1 {
            top: 3rem;
        }

    }
    @media screen and (max-width: 1440px) {
        .sub-home{
            font-size: 45px;
            line-height: 7rem;
            left: 68%;
        }

        .sub-title{
            font-size: 20px;
        }

        .home-navbar{
            font-size: 38px;
        }

        .about-line {
            width:263px; 
            height:62px;
            left: 4rem;
            top: 50%;
        }

        .contact-line {
            width:274px; 
            height:27px;
            left: 3.8rem;
        }

        .certifications-line {
            width:320px; 
            height:51px;
            left: 30rem;
            top: 46%;
        }

        .projects-line {
            width:307px; 
            height:22px;
            left: 31rem;
            top: 60%;
        }

        .skills-line {
            width:320px; 
            height:36px;
            top: 78%;
            left: 30rem;
        }

        .home-img {
            left: 12rem;
            height: 40rem;
        }

        h1{
            top: 1.5rem;
        }

        .projects-h1 {
            top: 3rem;
        }
    }

    @media screen and (max-width: 1280px) {

        .sub-home{
            font-size: 84px;
            line-height: 7rem;
        }

        .sub-title {
            font-size: 25px;
        }
        .home-navbar {
            display: none;
        }

        .home-navlink {
            display: block;
        }
    }

    @media screen and (max-width: 768px) {
        .sub-home{
            font-size: 60px;
            line-height: 6rem;
        }
        .sub-title {
            font-size: 25px;
        }
    }

    @media screen and (max-width: 475px) {
        .sub-home{
            font-size: 42px;
            line-height: 5rem;
        }
        .sub-title {
            font-size: 18px;
        }
    }
</style>