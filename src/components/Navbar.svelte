<script>
    import backicon from "../assets/Caret left.svg";
    import logo from "../assets/me.jpg";
    import { fade } from "svelte/transition";
    import {  quintIn } from "svelte/easing";
</script>

<nav id="navbar" class=" z-10 w-full h-24 fixed p-5 sm:px-10 px-3 navbar" in:fade={{ easing:quintIn }} out:fade={{ easing:quintIn }}>
    <div class="back-button flex flex-row">
        <a href="/" class="flex flex-row text-white hover:scale-125">
            <img src={backicon} alt="backicon">
            <h2 class="back relative text-white -left-4">Back</h2>
        </a>
        <img src={logo} alt="icon" class="logo w-12 h-12 sm:right-16 right-8 fixed rounded-full "/>
    </div>
</nav>

<style>
    .navbar {
        background: linear-gradient(180deg, #000 0%, #1E1E1E 100%);
    }

    .back {
        font-family: 'Gurajada', sans-serif;
        font-size: 40px;
    }
</style>