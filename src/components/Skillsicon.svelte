<script>
    export let x;
    export let y;
  
    const size = Math.random() * (50 - 10) + 20;
</script>
  
<div class="skillsicon skillsicon-1" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
<div class="skillsicon skillsicon-2" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
  
<style>
    .skillsicon {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: fixed;
        opacity: 5%;
    }

    .skillsicon.skillsicon-1 {
        left: 100px;
        top: 100px;
        animation: move-skillsicon-1 5s infinite;
    }

    .skillsicon.skillsicon-2 {
        left: -100px;
        top: -100px;
        animation: move-skillsicon-2 5s infinite;
    }

    @keyframes move-skillsicon-1 {
        0%, 100% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(-100px, 100px);
        }
    }

    @keyframes move-skillsicon-2 {
        0%, 100% {
            transform: translate(80px, 80px); 
        }
        50% {
            transform: translate(180px, -180px); 
        }
    }

    .skillsicon.skillsicon-1 {
        background: url(src/assets/skill.svg) no-repeat center center; 
        background-size: contain;
    }

    .skillsicon.skillsicon-2 {
        background: url(src/assets/skill.svg) no-repeat center center; 
        background-size: contain;
    }
</style>
