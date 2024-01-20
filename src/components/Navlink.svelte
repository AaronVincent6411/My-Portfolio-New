<script>
    let isNavVisible = false;
    
    const toggleNav = () => {
      isNavVisible = !isNavVisible;
    };
    
    const closeNav = () => {
      isNavVisible = false;
    };
  </script>
    
  <nav class="mobile-nav fixed z-40 text-white">
    <div class="h-40 w-40 ml-4" on:click={toggleNav}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white">
        <path d="M2.9989 6.10345C2.4469 6.10345 1.9989 6.55145 1.9989 7.10345C1.9989 7.65545 2.4469 8.10345 2.9989 8.10345H20.9989C21.5509 8.10345 21.9989 7.65545 21.9989 7.10345C21.9989 6.55145 21.5509 6.10345 20.9989 6.10345H2.9989ZM2.9989 11.1035C2.4469 11.1035 1.9989 11.5515 1.9989 12.1035C1.9989 12.6555 2.4469 13.1035 2.9989 13.1035H20.9989C21.5509 13.1035 21.9989 12.6555 21.9989 12.1035C21.9989 11.5515 21.5509 11.1035 20.9989 11.1035H2.9989ZM2.9989 16.1035C2.4469 16.1035 1.9989 16.5515 1.9989 17.1035C1.9989 17.6555 2.4469 18.1035 2.9989 18.1035H20.9989C21.5509 18.1035 21.9989 17.6555 21.9989 17.1035C21.9989 16.5515 21.5509 16.1035 20.9989 16.1035H2.9989Z" fill="#2A343D"/>
      </svg>
    </div>
    
    {#if isNavVisible}
      <div class="mobile-links fixed inset-0 flex flex-col justify-center items-center bg-black">
        <button class="close-btn absolute top-4 right-4 text-white" on:click={closeNav}>
          <svg class="close-button-svg" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 10 10" fill="none">
            <path d="M9.06588 1.99469C9.35877 1.70179 9.35877 1.22692 9.06588 0.934025C8.77298 0.641132 8.29811 0.641132 8.00522 0.934025L5.00002 3.93922L1.99482 0.934026C1.70192 0.641133 1.22705 0.641132 0.934157 0.934026C0.641264 1.22692 0.641264 1.70179 0.934157 1.99469L3.93936 4.99989L0.934147 8.00509C0.641254 8.29799 0.641254 8.77286 0.934147 9.06575C1.22704 9.35865 1.70191 9.35865 1.99481 9.06575L5.00002 6.06054L8.00522 9.06575C8.29812 9.35865 8.77299 9.35865 9.06588 9.06575C9.35878 8.77286 9.35878 8.29799 9.06588 8.00509L6.06068 4.99989L9.06588 1.99469Z" fill="white"/>
          </svg>
        </button>
        <div class="nav-contents flex flex-col text-center">
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/skills">Skills</a>
            <a href="/certifications">Certifications</a>
            <a href="/contact">Contact</a>
        </div>
      </div>
    {/if}
  </nav>
  
  <style>
    @media screen and (max-width: 1280px) {
      .mobile-nav {
        display: block;
      }
    }

    .nav-contents{
        font-family: 'Gurajada', sans-serif;
        font-size: 72px;
    }
  
    .mobile-links {
      z-index: 40; 
    }

    .close-button-svg {
      padding: 4px;
    }

    @media screen and (max-width: 475px) {
        .nav-contents{
            font-size: 48px;
        }
    }
  </style>
  