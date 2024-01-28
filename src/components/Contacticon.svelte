<script>
    export let x;
    export let y;
  
    const size = Math.random() * (50 - 10) + 20;
</script>
  
<div class="contacticon contacticon-1" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
<div class="contacticon contacticon-2" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
  
<style>
    .contacticon {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: fixed;
        opacity: 5%;
    }

    .contacticon.contacticon-1 {
        left: 100px;
        top: 100px;
        animation: move-contacticon-1 5s infinite;
    }

    .contacticon.contacticon-2 {
        left: -100px;
        top: -100px;
        animation: move-contacticon-2 5s infinite;
    }

    @keyframes move-contacticon-1 {
        0%, 100% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(-100px, 100px);
        }
    }

    @keyframes move-contacticon-2 {
        0%, 100% {
            transform: translate(80px, 80px); 
        }
        50% {
            transform: translate(180px, -180px); 
        }
    }

    .contacticon.contacticon-1 {
        background: url(src/assets/Contact.svg) no-repeat center center; 
        background-size: contain;
    }

    .contacticon.contacticon-2 {
        background: url(src/assets/Contact.svg) no-repeat center center; 
        background-size: contain;
    }
</style>
