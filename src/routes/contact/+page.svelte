<script>
    import Navbar from "../../components/Navbar.svelte";
    import { fade } from "svelte/transition";
    import {  quintIn } from "svelte/easing";
    import emailjs from '@emailjs/browser';
    import { onMount } from 'svelte';
    import Contacticon from '../../components/Contacticon.svelte'
  
    let formRef;
    let isLabelVisible = true;
    let isEmailLabelVisible = true;
    let isMessageLabelVisible = true;

    const handleFocus = () => {
        isLabelVisible = false;
    };

    const handleClickLabel = () => {
        isLabelVisible = false;
        const input = document.getElementById('user-name');
        if (input) {
        input.focus();
        }
    };

    const handleBlur = (e) => {
        if (e.target.value === '') {
        isLabelVisible = true;
        }
    };


    const handleEmailFocus = () => {
        isEmailLabelVisible = false;
    };

    const handleClickEmailLabel = () => {
        isEmailLabelVisible = false;
        const input = document.getElementById('user-email');
        if (input) {
        input.focus();
        }
    };

    const handleEmailBlur = (e) => {
        if (e.target.value === '') {
        isEmailLabelVisible = true;
        }
    };

    const handleMessageFocus = () => {
        isMessageLabelVisible = false;
    };

    const handleClickMessageLabel = () => {
        isMessageLabelVisible = false;
        const input = document.getElementById('user-message');
        if (input) {
        input.focus();
        }
    };

    const handleMessageBlur = (e) => {
        if (e.target.value === '') {
        isMessageLabelVisible = true;
        }
    };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, e.target, process.env.YOUR_API_KEY)
      .then((result) => {
        console.log(result.text);
        formRef.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  }

  onMount(() => {
    formRef = document.getElementById('your-form-id');
  });

    let contacticon = [];

    let numberOfcontacticon = 70;

    function generateRandomPosition() {
    return {
        x: Math.random() * (window.innerWidth-30),
        y: Math.random() * (window.innerHeight-60),
    };
    }

    onMount(() => {
    contacticon = Array(numberOfcontacticon).fill().map(() => generateRandomPosition());
    });
</script>

<Navbar />
<section id="contact" class="w-full h-full top-16 relative flex flex-col justify-center text-center text-white sm:p-16 p-8 select-none " in:fade={{ easing:quintIn }} out:fade={{ easing:quintIn }}>
    {#each contacticon as { x, y }, i (i)}
        <Contacticon x={x} y={y} key={i} />
    {/each}
    <h2 class="font-medium contact-name">Contact</h2>
    <form id="your-form-id" on:submit|preventDefault={sendEmail} class="flex flex-col justify-center gap-12 mt-10 form-text caret-transparent">
        <div class="flex relative lg:flex-row flex-col justify-center lg:gap-20 gap-10 ">
            <div class="relative">
                <input
                  type="text"
                  id="user-name"
                  name="user_name"
                  class=" user-input-name hover:bg-black rounded-[40px] lg:w-100 w-80 h-16 bg-black px-4 caret-transparent focus:outline-none"
                  on:focus={handleFocus}
                  on:blur={handleBlur}
                />
                {#if isLabelVisible}
                    <label for="user-name" on:click={handleClickLabel} class="absolute text-white top-1 left-1/2 transform -translate-x-8">Name</label>
                {/if}
            </div>
            <div class="relative">
                <input
                    type="text"
                    id="user-email"
                    name="user_email"
                    class=" user-input-email hover:bg-black rounded-[40px] lg:w-100 w-80 h-16 bg-black px-4 focus:outline-none"  on:focus={handleEmailFocus} 
                    on:blur={handleEmailBlur} 
                />
                {#if isEmailLabelVisible}
                    <label for="user-email" on:click={handleClickEmailLabel} class="email-text absolute text-white top-1 left-1/2 transform -translate-x-8">Email</label>
                {/if}
            </div>
        </div>
        <div class="flex flex-row justify-center relative">
            <textarea
                type="text"
                id="user-message"
                name="message" 
                class="user-input-message rounded-[40px] lg:w-130 w-80 h-40 bg-black focus:outline-none py-4 px-5" 
                on:focus={handleMessageFocus} 
                on:blur={handleMessageBlur} 
            />
            {#if isMessageLabelVisible}
                <label for="message" on:click={handleClickMessageLabel} class="email-text absolute text-white top-1 left-1/2 transform -translate-x-10">Message</label>
            {/if}
        </div>
        <div class="relative flex flex-row justify-center">
            <button
                class="bg-black w-12 h-14 flex flex-row justify-center px-16 rounded-[20px] text-white hover:bg-white hover:text-black"
                type="submit"
            >
                Send
            </button>
        </div>
    </form>
</section>

<style>
    #contact {
        scroll-behavior: smooth;
    }
    .contact-name {
        font-family: 'Jacques Francois', serif;
        font-size: 72px;
    }

    .form-text {
        font-family: 'Gurajada', sans-serif;
        font-size: 36px;
    }

    @media screen and (max-width: 640px) {
        .contact-name {
            font-size: 44px;
        }
    }

    @media screen and (max-width: 475px) {
        .user-input-name,
        .user-input-email {
            width: 15rem;
            height: 3.5rem;
        }
        .user-input-message {
            width: 15rem;
        }
        .form-text {
            font-size: 28px;
        }

        .form-text button {
            padding-top: 4px;
        }
    }

</style>