// Particle Animation Script for Playhouse SMP (3D Enhanced)
// Add <div class="particle-overlay"></div> to your HTML body
// Then include this script before closing </body> tag

(function() {
    'use strict';
    
    console.log('🎨 3D Particle animation script loaded');
    
    function initParticles() {
        setTimeout(() => {
            // Disable particles on mobile for performance
            if (window.innerWidth < 768) {
                console.log('📱 Mobile device detected - particles disabled for performance');
                return;
            }

            const particlesContainer = document.querySelector('.particle-overlay');

            if (!particlesContainer) {
                console.warn('⚠️ Particle overlay element not found. Add <div class="particle-overlay"></div> to your HTML');
                return;
            }

            console.log('✅ Particle container found! Creating 3D particles...');
            
            // Apply perspective for 3D depth
            particlesContainer.style.perspective = '800px';
            particlesContainer.style.transformStyle = 'preserve-3d';
            particlesContainer.style.overflow = 'hidden';
            particlesContainer.style.position = 'absolute';
            particlesContainer.style.top = '0';
            particlesContainer.style.left = '0';
            particlesContainer.style.width = '100%';
            particlesContainer.style.height = '100%';
            particlesContainer.style.pointerEvents = 'none';
            particlesContainer.style.zIndex = '2';
            
            function createParticle() {
                // Create wrapper for mouse interaction
                const wrapper = document.createElement('div');
                wrapper.style.position = 'absolute';
                wrapper.style.pointerEvents = 'none';

                // Create actual particle
                const particle = document.createElement('div');

                // Random depth (Z-axis)
                const depth = Math.random() * 800 - 400; // -400 to 400px
                const scale = 1 - Math.abs(depth) / 800; // smaller when farther

                // Random size (1–8px)
                const size = (Math.random() * 7 + 1) * scale;

                // Random position - START BELOW SCREEN
                const leftPosition = Math.random() * 100;
                const bottomPosition = Math.random() * -30; // Start below screen (-30% to 0%)

                // Random animation delay and duration with variety
                // 20% fast particles, 80% slow particles
                const isFast = Math.random() < 0.2;
                const delay = Math.random() * 2; // staggered start
                const duration = isFast
                    ? Math.random() * 3 + 4  // Fast: 4-7 seconds
                    : Math.random() * 7 + 8; // Slow: 8-15 seconds

                // Colors from logo palette
                const colors = [
                    'rgba(224, 167, 54, 1)',    // Bright Gold
                    'rgba(255, 200, 87, 1)',    // Lighter Gold
                    'rgba(49, 39, 131, 0.8)',   // Logo Purple
                    'rgba(42, 31, 71, 0.8)',    // Container Purple
                    'rgba(255, 255, 255, 0.9)'  // White
                ];
                const color = colors[Math.floor(Math.random() * colors.length)];

                // Wrapper positioning
                wrapper.style.left = leftPosition + '%';
                wrapper.style.bottom = bottomPosition + '%';
                wrapper.style.width = '0px';
                wrapper.style.height = '0px';

                // Apply styles to particle
                particle.style.position = 'absolute';
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.background = color;
                particle.style.borderRadius = '50%';
                particle.style.left = '0';
                particle.style.top = '0';
                particle.style.opacity = 0; // Start invisible!
                // All particles get a simple glow
                particle.style.boxShadow = `0 0 ${size * 3}px ${color}`;
                particle.style.transform = `translateZ(${depth}px) scale(${scale})`;
                particle.style.animation = `floatUpFade ${duration}s linear ${delay}s infinite`;
                particle.style.pointerEvents = 'none';

                wrapper.appendChild(particle);
                particlesContainer.appendChild(wrapper);

                return wrapper;
            }
            
            // Create 75 particles for better performance
            for (let i = 0; i < 75; i++) {
                createParticle();
            }

            console.log('✅ Created 75 3D particles successfully!');
        }, 100);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initParticles);
    } else {
        initParticles();
    }
})();