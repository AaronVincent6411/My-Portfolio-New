<script>
    export let x;
    export let y;
  
    const size = Math.random() * (50 - 10) + 20;
</script>
  
<div class="certificationsicon certificationsicon-1" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
<div class="certificationsicon certificationsicon-2" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
  
<style>
    .certificationsicon {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: fixed;
        opacity: 10%;
        z-index: -1;
    }

    .certificationsicon.certificationsicon-1 {
        left: 100px;
        top: 100px;
        animation: move-certificationsicon-1 5s infinite;
    }

    .certificationsicon.certificationsicon-2 {
        left: -100px;
        top: -100px;
        animation: move-certificationsicon-2 5s infinite;
    }

    @keyframes move-certificationsicon-1 {
        0%, 100% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(-100px, 100px);
        }
    }

    @keyframes move-certificationsicon-2 {
        0%, 100% {
            transform: translate(80px, 80px); 
        }
        50% {
            transform: translate(180px, -180px); 
        }
    }

    .certificationsicon.certificationsicon-1 {
        background: url(src/assets/certificate.svg) no-repeat center center; 
        background-size: contain;
    }

    .certificationsicon.certificationsicon-2 {
        background: url(src/assets/certificate.svg) no-repeat center center; 
        background-size: contain;
    }
</style>
