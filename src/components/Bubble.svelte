<script>
    export let x;
    export let y;
  
    const size = Math.random() * (50 - 10) + 10;
  </script>
  
  <div class="bubble bubble-1" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
  <div class="bubble bubble-2" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
  
  <style>
    .bubble {
      background-color: rgba(255, 255, 255, 0.4);
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: fixed;
      opacity: 10%;
    }

    @keyframes move-bubble-1 {
      0%, 100% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(-100px, 100px);
      }
    }

    @keyframes move-bubble-2 {
      0%, 100% {
        transform: translate(80, 80);
      }
      50% {
        transform: translate(180px, -180px);
      }
    }

    .bubble-1 {
      left: 100px;
      top: 100px;
      animation: move-bubble-1 5s infinite;
    }

    .bubble-2 {
      left: -100px;
      top: -100px;
      animation: move-bubble-2 5s infinite;
    }

</style>
  