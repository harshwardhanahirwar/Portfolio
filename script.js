// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');
    const animatedElements = document.querySelectorAll('.animate');
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // Create particles
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('span');
        particle.classList.add('particle');
        
        // Random size between 3px and 8px
        const size = Math.random() * 5 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Navigation toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Scroll events
    window.addEventListener('scroll', function() {
        // Header scroll effect
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
        
        // Animate elements on scroll
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('active');
            }
        });
        
        // Animate progress bars
        progressBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (barPosition < windowHeight - 50) {
                const width = bar.parentElement.previousElementSibling.getAttribute('data-percent');
                bar.style.width = width;
            }
        });
    });
    
    // Trigger scroll once to initialize animations
    window.dispatchEvent(new Event('scroll'));
});
// Add this to your existing script.js file

document.addEventListener("DOMContentLoaded", () => {
    // Projects functionality
    const projectsContainer = document.querySelector(".row_1")
    const projects = Array.from(projectsContainer.querySelectorAll(".project"))
    const initialProjectsToShow = 3 // Show only 3 projects initially
    let showingAllProjects = false
  
    // Create the "Show More" button
    const showMoreButton = document.createElement("button")
    showMoreButton.className = "show-more-btn"
    showMoreButton.innerHTML = "Show More Projects"
  
    // Insert the button after the projects container
    projectsContainer.parentNode.insertBefore(showMoreButton, projectsContainer.nextSibling)
  
    // Hide projects beyond the initial count
    projects.forEach((project, index) => {
      if (index >= initialProjectsToShow) {
        project.style.display = "none"
      }
    })
  
    // Toggle projects visibility when button is clicked
    showMoreButton.addEventListener("click", () => {
      showingAllProjects = !showingAllProjects
  
      projects.forEach((project, index) => {
        if (index >= initialProjectsToShow) {
          project.style.display = showingAllProjects ? "block" : "none"
  
          // Add animation class when showing
          if (showingAllProjects) {
            setTimeout(
              () => {
                project.classList.add("animate")
              },
              50 * (index - initialProjectsToShow),
            )
          } else {
            project.classList.remove("animate")
          }
        }
      })
  
      // Update button text
      showMoreButton.innerHTML = showingAllProjects ? "Show Less Projects" : "Show More Projects"
    })
  })
  
  