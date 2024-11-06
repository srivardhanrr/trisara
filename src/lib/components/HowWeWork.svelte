<script>
    const journeySteps = [
      {
        title: "Sourcing",
        description: "Responsible and ethical sourcing is paramount. We prioritize partnering with suppliers who share our values. This ensures we use the finest materials.",
        icon: "🔍"
      },
      {
        title: "Precision",
        description: "Meticulous attention to detail for packaging and precision with a subtle design quotient, allows our customers to experience what Trisara stands for.",
        icon: "🎯"
      },
      {
        title: "Services",
        description: "Customer service is the cornerstone of Trisara. With emphasis given towards a customer centric approach where, ever feedback is considered with utmost priority.",
        icon: "👨‍🔧"
      },
      {
        title: "Employee Centric",
        description: "We believe that supporting our exceptional work force, translates to even greater heights in terms of productivity and services.",
        icon: "👷🏻"
      }
    ];
  </script>
  
  <section id="journey" class="py-6 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-2xl text-orange-500 mb-4 font-bold text-brand-burgundy">How We Work</h2>
      
      <div class="journey-container">
        {#each journeySteps as step, index}
          <div class="journey-card">
            <div class="bg-gray-50 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 h-full flex flex-col justify-between">
              <div>
                <div class="text-4xl mb-4">{step.icon}</div>
                <h3 class="text-xl font-bricolage text-orange-500 mb-4">{step.title}</h3>
                <p class="text-black leading-relaxed">{step.description}</p>
              </div>
              <div class="mt-6 flex justify-between items-center">
                <span class="text-brand-gold font-bold text-lg">{index + 1}</span>
                <div class="w-16 h-1 bg-orange-500"></div>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      
    </div>
  </section>
  
  <style>
    .journey-container {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  
    .journey-container::-webkit-scrollbar {
      display: none;
    }
  
    .journey-card {
      flex: 0 0 80%;
      scroll-snap-align: start;
      margin-right: 1rem;
    }
  
    @media (min-width: 1024px) {
      .journey-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        overflow-x: visible;
      }
  
      .journey-card {
        flex: none;
        margin-right: 0;
      }
    }
  </style>
  