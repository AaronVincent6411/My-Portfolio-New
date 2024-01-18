<script>
    import logo from "../../assets/me.jpg";
    import Bubble from '../../components/Bubble.svelte'
    import Aaron from '../../assets/Aaron.svg';
    import giticon from "../../assets/Github-icon.svg";
    import linkicon from "../../assets/Linkedin-icon.svg";
    import instaicon from "../../assets/Instagram-icon.svg";
    import { fade } from "svelte/transition";
    import {  quintIn } from "svelte/easing";
    let numberOfBubbles = 100;

    import { browser } from '$app/environment';
 
    if (browser) {
        console.log(window.innerWidth);
    }

    function generateRandomPosition() {
    return {
        x: Math.random() * (window.innerWidth-30),
        y: Math.random() * (window.innerHeight-60),
    };
    }
</script>

<section id="home" class="" in:fade={{ easing:quintIn }}>
    <!-- in:fade={{ easing:cubicIn }} out:fade={{ easing:cubicIn }} -->
    <!-- <Bubble /> -->
    {#each Array(numberOfBubbles) as _, i}
    {#if i < numberOfBubbles}
      <Bubble
        x={generateRandomPosition().x}
        y={generateRandomPosition().y}
        key={i}
      />
    {/if}
  {/each}
    <div class="flex py-10">
        <a href="/">
            <img src={logo} alt="icon" class="logo w-16 h-16 fixed right-10 rounded-full "/>
        </a>
    </div>
    <!-- <div class="flex flex-col">
        <div class="container"> -->
            <img src={Aaron} alt="Aaron" class="home-img h-125 fixed left-80 bottom-0">
            <div class="home-navbar text-white">
                <div class="about-line">
                    <a href="/about">
                        <h1 class="relative left-12 top-8">About</h1>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 303 77" fill="none">
                        <path d="M0.5 1H195.5L302.5 76.5" stroke="white"/>
                    </svg>
                </div>
                <div class="contact-line">
                    <h1 class="relative left-12 top-8">Contact</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 314 42" fill="none">
                        <path d="M313 41L216 0.5L89.5 0.5L7.17641e-06 0.499999" stroke="white"/>
                    </svg>
                </div>
                <div class="certifications-line">
                    <h1 class="relative left-[7rem] top-8">Certifications</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 66" fill="none">
                        <path d="M360 1H68.5L1 65" stroke="white"/>
                    </svg>
                </div>
                <div class="projects-line">
                    <h1 class="relative left-[8.8rem] top-16 projects-h1">Projects</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 347 37" fill="none">
                        <path d="M346.5 36.5H79.5L0.5 1" stroke="white"/>
                    </svg>
                </div>
                <div class="skills-line">
                    <h1 class="relative left-[10rem] top-8">Skills</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 51" fill="none">
                        <path d="M360 1H68.5L1 50" stroke="white"/>
                    </svg>
                </div>
            </div>
            <div class="sub-home flex flex-col fixed left-[75rem] p-5 top-1/3 text-white justify-center text-center text-2xl">
                <h1>Hi, I am</h1>
                <h1>Aaron P Laju</h1>
                <h2 class="sub-title">A student, developer and a designer 👨‍💻</h2>
                <div class="flex flex-row gap-20 ml-24 mt-8 sub-home-links">
                    <a href="https://github.com/AaronVincent6411" target="_blank">
                        <img src={giticon} alt="github-icon" class="h-14 w-14"/>
                    </a>
                    <a href="https://www.linkedin.com/in/aaronvincent6411/" target="_blank">
                        <img src={linkicon} alt="linkedin-icon" class="h-14 w-14"/>
                    </a>
                    <a href="https://www.instagram.com/aaronvincent6411/" target="_blank">
                        <img src={instaicon} alt="instagram-icon" class="h-14 w-14"/>
                    </a>
                </div>
            </div>
        <!-- </div>
    </div> -->
</section>

<style>
    
    /* .container {
        width: var(--container);
        display: flex;
        gap: 20px;
    } */
    .home-navbar{
        font-family: 'Gurajada', sans-serif;
        font-size: 56px;
        line-height: normal;
        font-weight: 500px;
        
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

        .sub-home-links {
            margin-left: 3.5rem;
        }
    }
    @media screen and (max-width: 1440px) {
        .sub-home{
            font-size: 60px;
            line-height: 7rem;
            left: 58rem;
        }

        .home-navbar{
            font-size: 38px;
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
</style>