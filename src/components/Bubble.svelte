<script>
    export let x;
    export let y;
  
    const size = Math.random() * (50 - 10) + 10;
  </script>
  
  <div class="bubble" style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"></div>
  
  <style>
    .bubble {
      position: fixed;
      border-radius: 50%;
      /* background-color: #3498db; */
      background-color: rgba(217, 217, 217, 0.30);
      animation: bubbleAnimation 4s infinite;
      z-index: -1;
    }
  
    @keyframes bubbleAnimation {
      0%, 100% {
        transform: translateY(0) translateX(0);
      }
      25% {
        transform: translateY(-10px) translateX(10px);
      }
      50% {
        transform: translateY(0) translateX(10px);
      }
      75% {
        transform: translateY(10px) translateX(10px);
      }
    }
  </style>
  