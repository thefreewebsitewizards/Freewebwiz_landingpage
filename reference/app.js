// Premium interactions with mouse-following effects and advanced animations

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 Better Call FreeWebWiz Loading...');
   
    // Initialize all components
    try {
        initializeCustomCursor();
        initializeLightRays();
        initializeNavigation();
        initializeHeroAnimations();
        initializeEnhanced3DPhone();
        initializeScrollAnimations();
        initializeStatCounters();
        initializeCTAInteractions();
        initializeSmoothScrolling();
        initializeFloatingElements();
       
        console.log('✨ All approved interactions loaded successfully!');
    } catch (error) {
        console.error('❌ Error initializing:', error);
    }
});

// Custom Splash Cursor
function initializeCustomCursor() {
    const cursorDot = document.getElementById('cursorDot');
    const cursorOutline = document.getElementById('cursorOutline');
   
    if (!cursorDot || !cursorOutline) return;
   
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
   
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
       
        cursorDot.style.left = mouseX - 4 + 'px';
        cursorDot.style.top = mouseY - 4 + 'px';
    });
   
    // Smooth outline following
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
       
        cursorOutline.style.left = outlineX - 15 + 'px';
        cursorOutline.style.top = outlineY - 15 + 'px';
       
        requestAnimationFrame(animateOutline);
    }
    animateOutline();
   
    // Cursor interactions
    const interactiveElements = document.querySelectorAll('button, a, .phone-container');
   
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('expand');
            cursorDot.style.transform = 'scale(2)';
        });
       
        element.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('expand');
            cursorDot.style.transform = 'scale(1)';
        });
    });
   
    console.log('🖱️ Custom cursor initialized');
}

// Enhanced Light Rays that Follow Mouse
function initializeLightRays() {
    const lightRaysContainer = document.getElementById('lightRays');
    const lightRays = document.querySelectorAll('.light-ray');
   
    if (!lightRaysContainer || lightRays.length === 0) return;
   
    let mouseX = 0;
    let mouseY = 0;
   
    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        const rect = lightRaysContainer.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 100;
        mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    });
   
    // Animate rays to follow mouse
    function animateLightRays() {
        lightRays.forEach((ray, index) => {
            const baseRotation = (index - 3.5) * 10; // Center around middle rays
            const mouseInfluence = (mouseX - 50) * 0.3; // Mouse influence factor
            const finalRotation = baseRotation + mouseInfluence;
           
            // Update CSS custom property for rotation
            ray.style.setProperty('--rotation', `${finalRotation}deg`);
            ray.style.transform = `translateX(-50%) rotate(${finalRotation}deg)`;
           
            // Pulse based on mouse proximity to center
            const distanceFromCenter = Math.abs(mouseX - 50) + Math.abs(mouseY - 50);
            const pulseIntensity = Math.max(0.2, 1 - (distanceFromCenter / 100));
            ray.style.opacity = pulseIntensity * 0.4;
        });
       
        requestAnimationFrame(animateLightRays);
    }
   
    // Start animation after a brief delay
    setTimeout(() => {
        animateLightRays();
    }, 1000);
   
    console.log('🌟 Enhanced light rays initialized');
}

// Navigation Enhancement
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;
   
    function updateNavbar() {
        const scrollY = window.scrollY;
       
        if (scrollY > 100) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
            navbar.style.boxShadow = '0 4px 32px rgba(255, 215, 0, 0.2)';
            navbar.style.borderBottom = '1px solid rgba(255, 215, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = '1px solid rgba(255, 215, 0, 0.1)';
        }
       
        // Hide/show navbar on scroll
        if (scrollY > lastScrollY && scrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
       
        lastScrollY = scrollY;
        ticking = false;
    }
   
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });
   
    console.log('🧭 Saul-approved navigation initialized');
}

// Hero Animations with Saul's Flair
function initializeHeroAnimations() {
    const heroElements = document.querySelectorAll('.hero-text > *');
   
    // Staggered entrance animations
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${0.5 + index * 0.3}s`;
    });
   
    // Enhanced CTA button effects
    const ctaButtons = document.querySelectorAll('.hero-btn-primary, .hero-btn-secondary');
    ctaButtons.forEach(button => {
        // Magnetic hover effect
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px) scale(1.05)';
            button.style.boxShadow = '0 15px 35px rgba(255, 215, 0, 0.4)';
        });
       
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
            button.style.boxShadow = '';
        });
       
        // Mouse-following magnetic effect
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) * 0.2;
            const deltaY = (e.clientY - centerY) * 0.2;
           
            button.style.transform = `translateY(-3px) scale(1.05) translate(${deltaX}px, ${deltaY}px)`;
        });
    });
   
    console.log('🎭 Saul-style hero animations initialized');
}

// Enhanced 3D Phone with Better Interaction
function initializeEnhanced3DPhone() {
    const phoneContainer = document.getElementById('phoneContainer');
    if (!phoneContainer) {
        console.warn('⚠️ Phone container not found');
        return;
    }
   
    console.log('📱 Initializing enhanced 3D phone...');
   
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    let isHovering = false;
    let animationId;
   
    // Enhanced hover effects
    phoneContainer.addEventListener('mouseenter', (e) => {
        isHovering = true;
        phoneContainer.style.transition = 'none';
        console.log('📱 Enhanced phone interaction started');
       
        // Start smooth animation loop
        if (animationId) cancelAnimationFrame(animationId);
        animatePhone();
       
        // Add glow effect
        const phoneGlow = phoneContainer.querySelector('.phone-glow');
        if (phoneGlow) {
            phoneGlow.style.opacity = '0.6';
            phoneGlow.style.transform = 'scale(1.1)';
        }
    });
   
    phoneContainer.addEventListener('mouseleave', (e) => {
        isHovering = false;
        targetRotationX = 0;
        targetRotationY = 0;
       
        phoneContainer.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
        phoneContainer.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
       
        // Remove glow effect
        const phoneGlow = phoneContainer.querySelector('.phone-glow');
        if (phoneGlow) {
            phoneGlow.style.opacity = '0.3';
            phoneGlow.style.transform = 'scale(1)';
        }
       
        console.log('📱 Enhanced phone interaction ended');
       
        if (animationId) cancelAnimationFrame(animationId);
    });
   
    phoneContainer.addEventListener('mousemove', (e) => {
        if (!isHovering) return;
       
        const rect = phoneContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
       
        // Calculate mouse position relative to center (-1 to 1)
        mouseX = (e.clientX - centerX) / (rect.width / 2);
        mouseY = (e.clientY - centerY) / (rect.height / 2);
       
        // Clamp values
        mouseX = Math.max(-1, Math.min(1, mouseX));
        mouseY = Math.max(-1, Math.min(1, mouseY));
       
        // Enhanced sensitivity
        targetRotationY = mouseX * 25;
        targetRotationX = -mouseY * 20;
       
        console.log(`📱 Enhanced tracking: X=${mouseX.toFixed(2)}, Y=${mouseY.toFixed(2)}`);
    });
   
    // Smooth animation with easing
    function animatePhone() {
        if (!isHovering) return;
       
        const lerpFactor = 0.08; // Smoother interpolation
        currentRotationX += (targetRotationX - currentRotationX) * lerpFactor;
        currentRotationY += (targetRotationY - currentRotationY) * lerpFactor;
       
        // Apply enhanced transform with scale and glow
        const scale = 1.02 + Math.abs(currentRotationX + currentRotationY) * 0.002;
        phoneContainer.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) scale(${scale})`;
       
        // Dynamic lighting effect
        const intensity = Math.abs(currentRotationX) + Math.abs(currentRotationY);
        const phoneDevice = phoneContainer.querySelector('.phone-device');
        if (phoneDevice) {
            phoneDevice.style.boxShadow = `
                0 0 0 3px var(--color-gold),
                0 0 0 4px rgba(255, 215, 0, 0.3),
                0 ${30 + intensity}px ${60 + intensity}px rgba(0, 0, 0, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `;
        }
       
        animationId = requestAnimationFrame(animatePhone);
    }
   
    // Enhanced touch events for mobile
    let touchStartX = 0;
    let touchStartY = 0;
   
    phoneContainer.addEventListener('touchstart', (e) => {
        e.preventDefault();
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        phoneContainer.style.transition = 'none';
       
        // Mobile glow effect
        const phoneGlow = phoneContainer.querySelector('.phone-glow');
        if (phoneGlow) {
            phoneGlow.style.opacity = '0.5';
        }
       
        console.log('📱 Enhanced touch started');
    }, { passive: false });
   
    phoneContainer.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!touchStartX || !touchStartY) return;
       
        const deltaX = (e.touches[0].clientX - touchStartX) / 100;
        const deltaY = (e.touches[0].clientY - touchStartY) / 100;
       
        const rotationY = Math.max(-25, Math.min(25, deltaX * 25));
        const rotationX = Math.max(-20, Math.min(20, -deltaY * 20));
        const scale = 1.02 + Math.abs(rotationX + rotationY) * 0.003;
       
        phoneContainer.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${scale})`;
    }, { passive: false });
   
    phoneContainer.addEventListener('touchend', (e) => {
        e.preventDefault();
        phoneContainer.style.transition = 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
        phoneContainer.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
       
        // Remove mobile glow
        const phoneGlow = phoneContainer.querySelector('.phone-glow');
        if (phoneGlow) {
            phoneGlow.style.opacity = '0.3';
        }
       
        touchStartX = 0;
        touchStartY = 0;
        console.log('📱 Enhanced touch ended');
    });
   
    // Click interaction for screen content animation
    phoneContainer.addEventListener('click', () => {
        const screenContent = phoneContainer.querySelector('.screen-content');
        if (screenContent) {
            screenContent.style.animation = 'none';
            setTimeout(() => {
                screenContent.style.animation = 'contentRefresh 2s ease-in-out';
            }, 50);
        }
    });
   
    console.log('📱 Enhanced 3D phone interaction initialized');
}

// Advanced Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '-50px 0px'
    };
   
    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.dataset.aosDelay || 0;
               
                setTimeout(() => {
                    element.classList.add('aos-animate');
                   
                    // Special handling for different element types
                    if (element.classList.contains('stat-item')) {
                        animateCounter(element);
                    }
                   
                    // Add ripple effect to cards
                    if (element.classList.contains('feature-card') ||
                        element.classList.contains('testimonial-card') ||
                        element.classList.contains('pricing-card')) {
                        addRippleEffect(element);
                    }
                   
                    console.log('👁️ Element animated:', element.className);
                }, parseInt(delay));
               
                animateObserver.unobserve(element);
            }
        });
    }, observerOptions);
   
    // Observe all animated elements
    document.querySelectorAll('[data-aos]').forEach(element => {
        animateObserver.observe(element);
    });
   
    // Enhanced parallax effect for floating elements
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const floatingDots = document.querySelectorAll('.floating-dot');
       
        floatingDots.forEach((dot, index) => {
            const speed = 0.2 + index * 0.1;
            const yPos = -(scrollY * speed);
            const rotation = scrollY * (0.1 + index * 0.05);
            dot.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
        });
    }, { passive: true });
   
    console.log('🎬 Advanced scroll animations initialized');
}

function addRippleEffect(element) {
    element.addEventListener('mouseenter', (e) => {
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('div');
       
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 215, 0, 0.1);
            width: 100px;
            height: 100px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: rippleExpand 0.6s ease-out;
            pointer-events: none;
            z-index: 0;
        `;
       
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
       
        setTimeout(() => ripple.remove(), 600);
    });
}

// Enhanced Counter Animations
function initializeStatCounters() {
    console.log('🔢 Saul-approved counter animations ready');
}

function animateCounter(statElement) {
    const numberElement = statElement.querySelector('.stat-number');
    const target = parseInt(numberElement.dataset.count);
   
    if (!target) return;
   
    console.log(`📊 Animating Saul-approved counter to: ${target}`);
   
    let current = 0;
    const duration = 2500;
    const startTime = Date.now();
   
    function updateCounter() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
       
        // Saul-style easing with emphasis
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        current = Math.floor(target * easeProgress);
       
        // Special formatting for Saul's business
        let displayValue = current.toString();
        const labelText = statElement.querySelector('.stat-label').textContent.toLowerCase();
       
        if (labelText.includes('hours')) {
            displayValue = current === target ? '24hrs' : current.toString() + 'h';
        } else if (current === target) {
            if (target === 100 && labelText.includes('satisfaction')) {
                displayValue = '100%';
            } else if (target >= 50) {
                displayValue = target + '+';
            }
        }
       
        numberElement.textContent = displayValue;
       
        // Add pulsing effect when reaching target
        if (current === target) {
            numberElement.style.animation = 'counterComplete 0.5s ease-in-out';
        }
       
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            console.log(`✅ Saul-approved counter complete: ${displayValue}`);
        }
    }
   
    updateCounter();
}

// Enhanced CTA Interactions with Saul's Personality
function initializeCTAInteractions() {
    console.log('🎯 Initializing Saul-approved CTA interactions...');
   
    const ctaButtons = [
        document.getElementById('navCta'),
        document.getElementById('heroBtn'),
        document.getElementById('demoBtn'),
        document.getElementById('finalCta'),
        document.getElementById('contactLink'),
        ...document.querySelectorAll('.pricing-btn')
    ].filter(Boolean);
   
    console.log(`🎯 Found ${ctaButtons.length} Saul-approved CTA buttons`);
   
    ctaButtons.forEach((button, index) => {
        console.log(`🔘 Setting up Saul button ${index + 1}: "${button.textContent}"`);
       
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('🎯 Saul CTA clicked:', button.textContent.trim());
           
            // Enhanced click animation
            animateButtonClick(button);
           
            // Show appropriate modal
            setTimeout(() => {
                if (button.textContent.toLowerCase().includes('demo') ||
                    button.textContent.toLowerCase().includes('show me')) {
                    showSaulDemoModal();
                } else if (button.textContent.toLowerCase().includes('custom')) {
                    showCustomQuoteModal();
                } else {
                    showSaulModal();
                }
            }, 200);
        });
       
        // Enhanced hover effects with Saul's style
        button.addEventListener('mouseenter', () => {
            button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
           
            if (button.classList.contains('btn-primary')) {
                button.style.boxShadow = '0 15px 35px rgba(255, 215, 0, 0.5)';
                button.style.transform = 'translateY(-4px) scale(1.05)';
            } else if (button.classList.contains('btn-outline')) {
                button.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.3)';
                button.style.transform = 'translateY(-3px)';
                button.style.borderColor = 'var(--color-gold)';
                button.style.color = 'var(--color-gold)';
            } else {
                button.style.transform = 'translateY(-3px)';
                button.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.4)';
            }
        });
       
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
            button.style.boxShadow = '';
            if (button.classList.contains('btn-outline')) {
                button.style.borderColor = '';
                button.style.color = '';
            }
        });
    });
   
    console.log('🎯 Saul-approved CTA interactions initialized');
}

function animateButtonClick(button) {
    console.log('🎬 Animating Saul-style button click');
   
    // Enhanced ripple effect
    const ripple = document.createElement('div');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.5;
   
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, rgba(255, 215, 0, 0.1) 70%, transparent 100%);
        width: ${size}px;
        height: ${size}px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: saulRipple 0.8s ease-out;
        pointer-events: none;
        z-index: 1000;
    `;
   
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
   
    // Button press animation
    button.style.transform = 'translateY(2px) scale(0.98)';
   
    setTimeout(() => {
        button.style.transform = 'translateY(0) scale(1)';
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 400);
}

function showSaulModal() {
    console.log('🎉 Showing Saul-approved modal');
   
    removeExistingModal();
   
    const modal = document.createElement('div');
    modal.className = 'saul-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-icon">⚖️</div>
            <h2>You Made the Right Call!</h2>
            <p><strong>Listen,</strong> you just made the smartest business decision of the year. I'm going to build you a website that'll make your competitors cry into their overpriced lattes.</p>
            <div class="modal-features">
                <div class="feature-item">
                    <span class="feature-icon">💼</span>
                    <span>Professional Quality</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">⚡</span>
                    <span>24-Hour Delivery</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">💎</span>
                    <span>Zero Cost (Seriously)</span>
                </div>
            </div>
            <div class="saul-quote">
                <p>"I don't just build websites. I build <em>empires</em>. And yours starts today."</p>
                <span>- Your New Web Guy</span>
            </div>
            <div class="modal-actions">
                <button class="btn btn-primary modal-btn-primary">Let's Do This Thing</button>
                <button class="btn btn-secondary modal-btn-close">Maybe Later (Bad Idea)</button>
            </div>
        </div>
    `;
   
    styleModal(modal);
    document.body.appendChild(modal);
    setupModalEvents(modal, 'Saul');
}

function showSaulDemoModal() {
    console.log('🎬 Showing Saul demo modal');
   
    removeExistingModal();
   
    const modal = document.createElement('div');
    modal.className = 'saul-demo-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-icon">🎬</div>
            <h2>Watch the Magic Happen</h2>
            <p><strong>Here's the deal:</strong> In 24 hours, I transform your business idea into a website that screams "SUCCESS!" louder than my suit screams "EXPENSIVE!"</p>
            <div class="demo-preview">
                <div class="demo-steps">
                    <div class="demo-step">
                        <span class="step-number">1</span>
                        <span class="step-text">You tell me what you need</span>
                    </div>
                    <div class="demo-step">
                        <span class="step-number">2</span>
                        <span class="step-text">I work my magic (FREE!)</span>
                    </div>
                    <div class="demo-step">
                        <span class="step-number">3</span>
                        <span class="step-text">You dominate your market</span>
                    </div>
                </div>
                <div class="demo-result">
                    <div class="result-icon">🚀</div>
                    <div class="result-text">Your competitors hate this one trick!</div>
                </div>
            </div>
            <div class="modal-actions">
                <button class="btn btn-primary modal-btn-primary">I'm Convinced - Let's Go!</button>
                <button class="btn btn-secondary modal-btn-close">Close</button>
            </div>
        </div>
    `;
   
    styleModal(modal);
    document.body.appendChild(modal);
    setupModalEvents(modal, 'Demo');
}

function showCustomQuoteModal() {
    console.log('💼 Showing custom quote modal');
   
    removeExistingModal();
   
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-icon">🎯</div>
            <h2>Custom Solutions? You Got It!</h2>
            <p><strong>You want the Rolls Royce treatment?</strong> Smart choice. I'll build you something so custom, so perfectly tailored, your competitors will think you hired a team from Silicon Valley.</p>
            <div class="custom-features">
                <div class="custom-category">
                    <h4>🎨 Design & Branding</h4>
                    <ul>
                        <li>Completely custom design from scratch</li>
                        <li>Brand identity integration</li>
                        <li>Advanced animations & effects</li>
                    </ul>
                </div>
                <div class="custom-category">
                    <h4>⚙️ Advanced Functionality</h4>
                    <ul>
                        <li>Custom e-commerce solutions</li>
                        <li>Third-party integrations</li>
                        <li>Advanced user dashboards</li>
                    </ul>
                </div>
                <div class="custom-category">
                    <h4>🏆 Premium Service</h4>
                    <ul>
                        <li>Dedicated project manager</li>
                        <li>Extended support period</li>
                        <li>Multiple revisions included</li>
                    </ul>
                </div>
            </div>
            <div class="modal-actions">
                <button class="btn btn-primary modal-btn-primary">Get My Custom Quote</button>
                <button class="btn btn-secondary modal-btn-close">Maybe Later</button>
            </div>
        </div>
    `;
   
    styleModal(modal);
    document.body.appendChild(modal);
    setupModalEvents(modal, 'Custom');
}

function styleModal(modal) {
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        animation: modalFadeIn 0.4s ease-out forwards;
    `;
   
    const overlay = modal.querySelector('.modal-overlay');
    overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(10px);
    `;
   
    const content = modal.querySelector('.modal-content');
    content.style.cssText = `
        background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
        border: 2px solid var(--color-gold);
        border-radius: 20px;
        padding: 40px;
        max-width: 600px;
        max-height: 90vh;
        margin: 20px;
        text-align: center;
        position: relative;
        transform: scale(0.8) translateY(30px);
        animation: modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 215, 0, 0.1);
        overflow-y: auto;
    `;
}

function setupModalEvents(modal, type) {
    const primaryBtn = modal.querySelector('.modal-btn-primary');
    const closeBtn = modal.querySelector('.modal-btn-close');
    const overlay = modal.querySelector('.modal-overlay');
   
    const closeModal = () => {
        modal.style.animation = 'modalFadeOut 0.3s ease-out forwards';
        setTimeout(() => modal.remove(), 300);
        console.log(`❌ ${type} modal closed`);
    };
   
    primaryBtn.addEventListener('click', () => {
        console.log(`✅ ${type} confirmed - Saul approves!`);
        showSaulThankYou();
        closeModal();
    });
   
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
   
    // Enhanced button effects
    [primaryBtn, closeBtn].forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.05)';
        });
       
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });
   
    // Auto-close after 15 seconds
    setTimeout(closeModal, 15000);
}

function removeExistingModal() {
    const existingModal = document.querySelector('.saul-modal, .saul-demo-modal, .custom-modal');
    if (existingModal) {
        existingModal.remove();
    }
}

function showSaulThankYou() {
    const message = document.createElement('div');
    message.innerHTML = `
        <div class="thank-you-content">
            <div class="thank-you-icon">🎉</div>
            <h3>Smart Move!</h3>
            <p>I'll contact you within 24 hours to start building your empire.</p>
            <p class="saul-signature">- Saul (Your New Web Guy)</p>
        </div>
    `;
   
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--color-gold), var(--color-gold-light));
        color: var(--color-dark);
        padding: 24px;
        border-radius: 16px;
        box-shadow: 0 15px 35px rgba(255, 215, 0, 0.4);
        z-index: 10001;
        transform: translateX(100%);
        animation: slideInRight 0.6s ease-out forwards;
        max-width: 320px;
        text-align: center;
        border: 2px solid var(--color-gold-dark);
    `;
   
    document.body.appendChild(message);
   
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.6s ease-out forwards';
        setTimeout(() => message.remove(), 600);
    }, 5000);
}

// Smooth Scrolling with Saul's Touch
function initializeSmoothScrolling() {
    console.log('⚡ Initializing Saul-approved smooth scrolling...');
   
    const navLinks = document.querySelectorAll('.nav-link');
   
    navLinks.forEach(link => {
        console.log(`🔗 Setting up Saul nav link: ${link.textContent} -> ${link.getAttribute('href')}`);
       
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            console.log(`📍 Saul-approved scroll to: ${targetId}`);
           
            let targetElement = document.querySelector(targetId);
           
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 100;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                console.log(`✅ Scrolled to ${targetId} - Saul approved!`);
            } else {
                console.warn(`⚠️ Target element not found: ${targetId}`);
            }
        });
    });
   
    console.log('⚡ Saul-approved smooth scrolling complete');
}

// Enhanced Floating Elements
function initializeFloatingElements() {
    const floatingDots = document.querySelectorAll('.floating-dot');
   
    floatingDots.forEach((dot, index) => {
        const duration = 12 + Math.random() * 8;
        const delay = index * 2;
       
        dot.style.animation = `floatAround ${duration}s linear infinite`;
        dot.style.animationDelay = `${delay}s`;
       
        // Add subtle pulsing
        dot.style.setProperty('--pulse-delay', `${index * 0.5}s`);
    });
   
    console.log('🎈 Saul-approved floating elements initialized');
}

// Additional CSS animations
const saulStyles = document.createElement('style');
saulStyles.textContent = `
    @keyframes modalFadeIn {
        from {
            opacity: 0;
            backdrop-filter: blur(0px);
        }
        to {
            opacity: 1;
            backdrop-filter: blur(10px);
        }
    }
   
    @keyframes modalFadeOut {
        from {
            opacity: 1;
            backdrop-filter: blur(10px);
        }
        to {
            opacity: 0;
            backdrop-filter: blur(0px);
        }
    }
   
    @keyframes modalSlideIn {
        from {
            transform: scale(0.8) translateY(30px);
            opacity: 0;
        }
        to {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
    }
   
    @keyframes saulRipple {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
   
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
   
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100%);
        }
    }
   
    @keyframes counterComplete {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
   
    @keyframes rippleExpand {
        to {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
        }
    }
   
    @keyframes contentRefresh {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
            transform: scale(0.98);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
   
    /* Enhanced modal styles */
    .modal-content h2 {
        color: var(--color-white);
        margin-bottom: 20px;
        font-size: 2rem;
    }
   
    .modal-content p {
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 20px;
        font-size: 1.1rem;
        line-height: 1.6;
    }
   
    .modal-features {
        display: flex;
        justify-content: space-around;
        margin: 30px 0;
        gap: 20px;
    }
   
    .feature-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        flex: 1;
    }
   
    .feature-icon {
        font-size: 2.5rem;
    }
   
    .saul-quote {
        background: rgba(255, 215, 0, 0.1);
        border: 1px solid rgba(255, 215, 0, 0.3);
        border-radius: 12px;
        padding: 20px;
        margin: 25px 0;
        font-style: italic;
    }
   
    .saul-quote span {
        font-size: 0.9rem;
        color: var(--color-gold);
        font-weight: 600;
    }
   
    .demo-steps {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 20px;
    }
   
    .demo-step {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 10px;
        background: rgba(255, 215, 0, 0.05);
        border-radius: 8px;
        border-left: 3px solid var(--color-gold);
    }
   
    .step-number {
        width: 30px;
        height: 30px;
        background: var(--color-gold);
        color: var(--color-dark);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        flex-shrink: 0;
    }
   
    .demo-result {
        text-align: center;
        padding: 15px;
        background: rgba(255, 215, 0, 0.1);
        border-radius: 12px;
        border: 1px dashed var(--color-gold);
    }
   
    .result-icon {
        font-size: 2rem;
        margin-bottom: 8px;
    }
   
    .custom-category {
        text-align: left;
        margin-bottom: 20px;
    }
   
    .custom-category h4 {
        color: var(--color-gold);
        margin-bottom: 10px;
        font-size: 1.1rem;
    }
   
    .custom-category ul {
        list-style: none;
        padding-left: 0;
    }
   
    .custom-category li {
        padding: 5px 0;
        padding-left: 20px;
        position: relative;
        color: rgba(255, 255, 255, 0.8);
    }
   
    .custom-category li::before {
        content: '→';
        position: absolute;
        left: 0;
        color: var(--color-gold);
        font-weight: bold;
    }
   
    .modal-actions {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-top: 30px;
        flex-wrap: wrap;
    }
   
    .modal-actions .btn {
        min-width: 160px;
        padding: 12px 24px;
    }
   
    .thank-you-content {
        text-align: center;
    }
   
    .thank-you-icon {
        font-size: 2.5rem;
        margin-bottom: 12px;
    }
   
    .thank-you-content h3 {
        margin-bottom: 12px;
        font-size: 1.3rem;
    }
   
    .thank-you-content p {
        margin-bottom: 8px;
        font-size: 1rem;
    }
   
    .saul-signature {
        font-style: italic;
        font-weight: 600;
        margin-top: 8px !important;
    }
`;

document.head.appendChild(saulStyles);

// Saul's Console Branding
console.log(`
🎯 Better Call FreeWebWiz - Fully Loaded!
⚖️  Enhanced with Saul Goodman's winning personality
🌟 Light rays following your every move
📱 3D phone model with premium interactions  
🎭 Advanced animations and smooth transitions
💼 Professional modals with attitude
🚀 All systems go - time to dominate!

"You don't need a criminal lawyer, you need a WEBSITE lawyer!" - Saul
`);

// Performance monitoring for Saul's standards
const performanceObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
            console.log(`📊 Saul's Performance Check - ${entry.name}: ${entry.duration.toFixed(2)}ms`);
        }
    }
});

performanceObserver.observe({ entryTypes: ['measure'] });

// Page load performance - Saul style
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`🚀 Better Call FreeWebWiz loaded in ${loadTime.toFixed(2)}ms - That's what I call FAST!`);
    document.body.classList.add('saul-loaded');
   
    // Add subtle page entrance effect
    document.body.style.animation = 'pageEntrance 1s ease-out';
});

// Add page entrance animation
const pageStyles = document.createElement('style');
pageStyles.textContent = `
    @keyframes pageEntrance {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(pageStyles);