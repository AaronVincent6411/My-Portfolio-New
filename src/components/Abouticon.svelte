<script>
    export let x;
    export let y;
  
    const size = Math.random() * (50 - 10) + 20;
</script>
  
<div class="abouticon abouticon-1" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
<div class="abouticon abouticon-2" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
  
<style>
    .abouticon {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: fixed;
        opacity: 50%;
    }

    .abouticon.abouticon-1 {
        left: 100px;
        top: 100px;
        animation: move-abouticon-1 5s infinite;
    }

    .abouticon.abouticon-2 {
        left: -100px;
        top: -100px;
        animation: move-abouticon-2 5s infinite;
    }

    @keyframes move-abouticon-1 {
        0%, 100% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(-100px, 100px);
        }
    }

    @keyframes move-abouticon-2 {
        0%, 100% {
            transform: translate(80px, 80px); 
        }
        50% {
            transform: translate(180px, -180px); 
        }
    }

    .abouticon.abouticon-1 {
        background: url(src/assets/User.svg) no-repeat center center; 
        background-size: contain;
    }

    .abouticon.abouticon-2 {
        background: url(src/assets/User.svg) no-repeat center center; 
        background-size: contain;
    }
</style>
