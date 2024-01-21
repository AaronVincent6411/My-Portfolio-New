<script>
    import Navbar from "../../components/Navbar.svelte";
    import { fade } from "svelte/transition";
    import {  quintIn } from "svelte/easing";
    import { onMount } from 'svelte'
    import Certificationsicon from '../../components/Certificationsicon.svelte'

    let certificationsdata = [
        {imgurl:"https://live.staticflickr.com/65535/53488860487_7cd1dbd434_c.jpg", name:"Introduction to ML", issuedorg:"Kaggle", issuedon:"Januvary 2023", link:"https://www.linkedin.com/posts/aaronvincent6411_ive-completed-the-intro-to-machine-learning-activity-7022571918893457408-U2x2?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy"},
        {imgurl:"https://live.staticflickr.com/65535/53488860502_d9750d3c01_c.jpg", name:"Introduction to AI, ML and DL", issuedorg:"DeepLearning.ai", issuedon:"Februvary 2023", link:"https://coursera.org/share/38de94db185062b9357c7a001f13d4aa"},
        {imgurl:"https://live.staticflickr.com/65535/53488744917_826773da05_c.jpg", name:"Python For Data Science", issuedorg:"NPTEL", issuedon:"March 2023", link:"https://www.linkedin.com/posts/aaronvincent6411_i-am-happy-to-share-and-add-one-more-success-activity-7049428385764175872-dkJm?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy"},
        {imgurl:"https://live.staticflickr.com/65535/53489908108_54c9db194e_c.jpg", name:"Fundamentals of AI", issuedorg:"NPTEL", issuedon:"November 2023", link:"https://www.linkedin.com/posts/aaronvincent6411_fundamentals-of-artificial-intelligence-activity-7141818876295602177-iKzN?utm_source=share&utm_medium=member_desktop"},
    ];
    let certificationsicon = [];

    let numberOfcertificationsicon = 70;
 
    function generateRandomPosition() {
    return {
        x: Math.random() * (window.innerWidth-30),
        y: Math.random() * (window.innerHeight-60),
    };
    }

    onMount(() => {
    certificationsicon = Array(numberOfcertificationsicon).fill().map(() => generateRandomPosition());
    });
</script>

<Navbar />
<section id="certifications" class="w-full h-full top-16 relative flex flex-col justify-center text-center text-white lg:p-16 md:p-4 p-4 select-none " in:fade={{ easing:quintIn }} out:fade={{ easing:quintIn }}>
    {#each certificationsicon as { x, y }, i (i)}
        <Certificationsicon x={x} y={y} key={i} />
    {/each}
    <h2 class="font-medium certifications-name">Certifications</h2>
    <div class="p-8 flex lg:flex-col flex-wrap gap-8">
        {#each certificationsdata as {imgurl, name, issuedorg, issuedon, link},i}
            {#if i % 2 === 0}
                <div class="lg:w-full xl:h-80 lg:h-60 w-80 h-[38rem] bg-black relative rounded-[20px] lg:rounded-r-[40px] flex lg:flex-row flex-col lg:gap-10">
                    <img src={imgurl} alt="certification" class="object-contain p-2 rounded-[20px] xl:w-101 w-80">
                    <div class="relative lg:w-[80%] p-4 justify-items-center">
                        <h4>{name}</h4>
                        <div class="flex lg:flex-row flex-col justify-evenly">
                            <div class="relative lg:w-[50%] flex flex-col mt-10">
                                <h3>Issued Organisation</h3>
                                <h1>{issuedorg}</h1>
                            </div>
                            <div class="relative lg:w-[50%] flex flex-col mt-10">
                                <h3>Issued On</h3>
                                <h1>{issuedon}</h1>
                            </div>
                        </div>
                        <div class="relative w-[100%] justify-center flex xl:mt-4 lg:mt-2 mt-8">
                            <a href={link}>
                                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                            </a>
                        </div>
                    </div>
                </div>
            {:else}                
                <div class="second-certification-container lg:w-full xl:h-80 lg:h-60 w-80 sm:h-[38rem] h-[36.5rem] bg-black relative rounded-[20px] lg:rounded-l-[40px] flex lg:flex-row flex-col-reverse lg:gap-10">
                    <div class="relative lg:w-[80%] p-4  justify-items-center sm:mb-0 mb-8">
                        <h4>{name}</h4>
                        <div class="flex lg:flex-row flex-col justify-evenly">
                            <div class="relative lg:w-[50%] flex flex-col mt-10">
                                <h3>Issued Organisation</h3>
                                <h1>{issuedorg}</h1>
                            </div>
                            <div class="relative lg:w-[50%] flex flex-col mt-10">
                                <h3>Issued On</h3>
                                <h1>{issuedon}</h1>
                            </div>
                        </div>
                        <div class="relative w-[100%] justify-center flex xl:mt-4 lg:mt-2 mt-8">
                            <a href={link}>
                                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                            </a>
                        </div>
                    </div>
                    <img src={imgurl} alt="certification" class="object-contain p-2 rounded-[20px] xl:w-101 w-80">
                </div>
            {/if }
        {/each}
    </div>
</section>

<style>
    #certifications {
        scroll-behavior: smooth;

    }
    .certifications-name {
        font-family: 'Jacques Francois', serif;
        font-size: 72px;
    }

    h1,h4 {
        font-family: Gurajada;
        font-size: 52px;
        color: white;
        position: relative;
    }

    h3 {
        font-family: Gurajada;
        font-size: 36px;
        line-height: 1rem;
    }

    @media screen and (max-width: 1280px) {
        h1,h4 {
            font-size: 36px;
        }

        h3 {
            font-size: 24px;
            line-height: 1rem;
        }

        svg {
            width: 40px;
            height: 40px;
        }
    }

    @media screen and (max-width: 1028px) {
        h1 {
            font-size: 32px;
            line-height: 3rem;
        }

        h3 {
            font-size: 24px;
            line-height: 1rem;
        }

        h4 {
            font-size: 34px;
        }

        svg {
            width: 40px;
            height: 40px;
        }
    }

    @media screen and (max-width: 640px) {
        .certifications-name {
            font-size: 44px;
        }
    }

    @media screen and (max-width: 480px) {
        h1 {
            font-size: 28px;
        }

        h3 {
            font-size: 20px;
        }

        h4 {
            font-size: 30px;
        }

    }

    @media screen and (max-width: 480px) {
        h1 {
            font-size: 22px;
        }

        h3 {
            font-size: 18px;
        }

        h4 {
            font-size: 24px;
        }
    }
</style>