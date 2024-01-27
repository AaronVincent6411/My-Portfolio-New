<script>
    export let x;
    export let y;
  
    const size = Math.random() * (50 - 10) + 20;
</script>
  
<div class="projectsvectoricon projectsvectoricon-1" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
<div class="projectsvectoricon projectsvectoricon-2" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
  
<style>
    .projectsvectoricon {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: fixed;
        opacity: 50%;
    }

    .projectsvectoricon.projectsvectoricon-1 {
        left: 100px;
        top: 100px;
        animation: move-projectsvectoricon-1 5s infinite;
    }

    .projectsvectoricon.projectsvectoricon-2 {
        left: -100px;
        top: -100px;
        animation: move-projectsvectoricon-2 5s infinite;
    }

    @keyframes move-projectsvectoricon-1 {
        0%, 100% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(-100px, 100px);
        }
    }

    @keyframes move-projectsvectoricon-2 {
        0%, 100% {
            transform: translate(80px, 80px); 
        }
        50% {
            transform: translate(180px, -180px); 
        }
    }

    .projectsvectoricon.projectsvectoricon-1 {
        background: url(src/assets/Vector.svg) no-repeat center center; 
        background-size: contain;
    }

    .projectsvectoricon.projectsvectoricon-2 {
        background: url(src/assets/Vector.svg) no-repeat center center; 
        background-size: contain;
    }
</style>
