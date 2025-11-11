function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smartphone: {
      smooth: true
    },
    tablet: {
      smooth: true
    }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  // Store locoScroll instance globally for navigation
  window.locoScroll = locoScroll;
  
  return locoScroll;
}

// Initialize Locomotive Scroll
const locoScrollInstance = locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// Responsive canvas setup
function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

setupCanvas();

window.addEventListener("resize", function () {
  setupCanvas();
  render();
});

function files(index) {
  var data = `
     ./image/male0001.png
     ./image/male0002.png
     ./image/male0003.png
     ./image/male0004.png
     ./image/male0005.png
     ./image/male0006.png
     ./image/male0007.png
     ./image/male0008.png
     ./image/male0009.png
     ./image/male0010.png
     ./image/male0011.png
     ./image/male0012.png
     ./image/male0013.png
     ./image/male0014.png
     ./image/male0015.png
     ./image/male0016.png
     ./image/male0017.png
     ./image/male0018.png
     ./image/male0019.png
     ./image/male0020.png
     ./image/male0021.png
     ./image/male0022.png
     ./image/male0023.png
     ./image/male0024.png
     ./image/male0025.png
     ./image/male0026.png
     ./image/male0027.png
     ./image/male0028.png
     ./image/male0029.png
     ./image/male0030.png
     ./image/male0031.png
     ./image/male0032.png
     ./image/male0033.png
     ./image/male0034.png
     ./image/male0035.png
     ./image/male0036.png
     ./image/male0037.png
     ./image/male0038.png
     ./image/male0039.png
     ./image/male0040.png
     ./image/male0041.png
     ./image/male0042.png
     ./image/male0043.png
     ./image/male0044.png
     ./image/male0045.png
     ./image/male0046.png
     ./image/male0047.png
     ./image/male0048.png
     ./image/male0049.png
     ./image/male0050.png
     ./image/male0051.png
     ./image/male0052.png
     ./image/male0053.png
     ./image/male0054.png
     ./image/male0055.png
     ./image/male0056.png
     ./image/male0057.png
     ./image/male0058.png
     ./image/male0059.png
     ./image/male0060.png
     ./image/male0061.png
     ./image/male0062.png
     ./image/male0063.png
     ./image/male0064.png
     ./image/male0065.png
     ./image/male0066.png
     ./image/male0067.png
     ./image/male0068.png
     ./image/male0069.png
     ./image/male0070.png
     ./image/male0071.png
     ./image/male0072.png
     ./image/male0073.png
     ./image/male0074.png
     ./image/male0075.png
     ./image/male0076.png
     ./image/male0077.png
     ./image/male0078.png
     ./image/male0079.png
     ./image/male0080.png
     ./image/male0081.png
     ./image/male0082.png
     ./image/male0083.png
     ./image/male0084.png
     ./image/male0085.png
     ./image/male0086.png
     ./image/male0087.png
     ./image/male0088.png
     ./image/male0089.png
     ./image/male0090.png
     ./image/male0091.png
     ./image/male0092.png
     ./image/male0093.png
     ./image/male0094.png
     ./image/male0095.png
     ./image/male0096.png
     ./image/male0097.png
     ./image/male0098.png
     ./image/male0099.png
     ./image/male0100.png
     ./image/male0101.png
     ./image/male0102.png
     ./image/male0103.png
     ./image/male0104.png
     ./image/male0105.png
     ./image/male0106.png
     ./image/male0107.png
     ./image/male0108.png
     ./image/male0109.png
     ./image/male0110.png
     ./image/male0111.png
     ./image/male0112.png
     ./image/male0113.png
     ./image/male0114.png
     ./image/male0115.png
     ./image/male0116.png
     ./image/male0117.png
     ./image/male0118.png
     ./image/male0119.png
     ./image/male0120.png
     ./image/male0121.png
     ./image/male0122.png
     ./image/male0123.png
     ./image/male0124.png
     ./image/male0125.png
     ./image/male0126.png
     ./image/male0127.png
     ./image/male0128.png
     ./image/male0129.png
     ./image/male0130.png
     ./image/male0131.png
     ./image/male0132.png
     ./image/male0133.png
     ./image/male0134.png
     ./image/male0135.png
     ./image/male0136.png
     ./image/male0137.png
     ./image/male0138.png
     ./image/male0139.png
     ./image/male0140.png
     ./image/male0141.png
     ./image/male0142.png
     ./image/male0143.png
     ./image/male0144.png
     ./image/male0145.png
     ./image/male0146.png
     ./image/male0147.png
     ./image/male0148.png
     ./image/male0149.png
     ./image/male0150.png
     ./image/male0151.png
     ./image/male0152.png
     ./image/male0153.png
     ./image/male0154.png
     ./image/male0155.png
     ./image/male0156.png
     ./image/male0157.png
     ./image/male0158.png
     ./image/male0159.png
     ./image/male0160.png
     ./image/male0161.png
     ./image/male0162.png
     ./image/male0163.png
     ./image/male0164.png
     ./image/male0165.png
     ./image/male0166.png
     ./image/male0167.png
     ./image/male0168.png
     ./image/male0169.png
     ./image/male0170.png
     ./image/male0171.png
     ./image/male0172.png
     ./image/male0173.png
     ./image/male0174.png
     ./image/male0175.png
     ./image/male0176.png
     ./image/male0177.png
     ./image/male0178.png
     ./image/male0179.png
     ./image/male0180.png
     ./image/male0181.png
     ./image/male0182.png
     ./image/male0183.png
     ./image/male0184.png
     ./image/male0185.png
     ./image/male0186.png
     ./image/male0187.png
     ./image/male0188.png
     ./image/male0189.png
     ./image/male0190.png
     ./image/male0191.png
     ./image/male0192.png
     ./image/male0193.png
     ./image/male0194.png
     ./image/male0195.png
     ./image/male0196.png
     ./image/male0197.png
     ./image/male0198.png
     ./image/male0199.png
     ./image/male0200.png
 `;
  return data.split("\n")[index];
}

const frameCount = 200;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

// Scroll trigger for animation
gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
    markers: false
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

// Canvas pinning
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNavLinks = document.getElementById('mobile-nav-links');

if (mobileMenuBtn && mobileNavLinks) {
  mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNavLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  mobileNavLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      mobileMenuBtn.classList.remove('active');
      mobileNavLinks.classList.remove('active');
      
      // Handle navigation for mobile links
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection && window.locoScroll) {
        window.locoScroll.scrollTo(targetSection);
      }
    });
  });
}

// Contact button functionality
document.getElementById('employer-btn').addEventListener('click', function() {
  alert('Thank you for your interest! Please contact us at employers@worktales.com');
});

document.getElementById('talent-btn').addEventListener('click', function() {
  alert('Join our talent network! Please email your resume to talent@worktales.com');
});

// FIXED: Navigation smooth scrolling - Prevent default and use Locomotive Scroll
document.querySelectorAll('#nav-links a, #mobile-nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // This prevents page reload
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection && window.locoScroll) {
      // Use the existing Locomotive Scroll instance to scroll to target
      window.locoScroll.scrollTo(targetSection);
    }
  });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setupCanvas();
  optimizePerformance();
});

// Performance optimization
function optimizePerformance() {
  gsap.config({
    force3D: true,
    autoSleep: 60
  });
  
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        render();
      }, 16);
    }
  }, { passive: true });
}

// Handle orientation changes
let orientationTimeout;
window.addEventListener('orientationchange', function() {
  clearTimeout(orientationTimeout);
  orientationTimeout = setTimeout(() => {
    setupCanvas();
    render();
    ScrollTrigger.refresh();
    if (window.locoScroll) {
      window.locoScroll.update();
    }
  }, 500);
});

// Touch enhancements
document.addEventListener('touchstart', function() {}, { passive: true });

// Prevent zoom on double tap
let lastTap = 0;
document.addEventListener('touchend', function(e) {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;
  if (tapLength < 500 && tapLength > 0) {
    e.preventDefault();
  }
  lastTap = currentTime;
});

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
}

// Function to handle scroll and show pages
function handleScrollAnimation() {
    const additionalPages = document.querySelectorAll('.additional-page');
    
    additionalPages.forEach(page => {
        if (isInViewport(page)) {
            page.classList.add('visible');
        }
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Initial check on page load
    handleScrollAnimation();
    
    // If using Locomotive Scroll, use its scroll event
    if (window.locoScroll) {
        window.locoScroll.on('scroll', (args) => {
            handleScrollAnimation();
        });
    }
    
    // ScrollTrigger animations for additional pages
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.create({
            trigger: "#page4",
            start: "top 80%",
            onEnter: () => {
                document.querySelector('#page4').classList.add('visible');
            },
            scroller: '#main'
        });
        
        ScrollTrigger.create({
            trigger: "#page5",
            start: "top 80%",
            onEnter: () => {
                document.querySelector('#page5').classList.add('visible');
            },
            scroller: '#main'
        });
        
        ScrollTrigger.create({
            trigger: "#page6",
            start: "top 80%",
            onEnter: () => {
                document.querySelector('#page6').classList.add('visible');
            },
            scroller: '#main'
        });
    }
});
const cards = [
    document.getElementById('card1'),
    document.getElementById('card2'),
    document.getElementById('card3'),
    document.getElementById('card4')
];

function initScrollDrivenHorizontal() {
    if (!cards[0] || !ScrollTrigger) return;
    
    cards.forEach((card, index) => {
        // Alternate directions: even from right, odd from left
        const fromRight = index % 2 === 0;
        const slideFrom = fromRight ? 100 : -100;
        
        // Create scroll-driven animation
        gsap.to(card, {
            x: 0, // Line up in middle
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top bottom", // Start animating when card enters bottom
                end: "center center", // Finish lining up when card reaches center
                scroller: "#main",
                scrub: 0.5,
                markers: false
            }
        });
        
        // Continue scrolling out after lining up
        gsap.to(card, {
            x: fromRight ? -100 : 100, // Continue to opposite side
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "center center", // Start moving out from center
                end: "bottom top", // Complete when leaving top
                scroller: "#main",
                scrub: 1,
                markers: false
            }
        });
    });
}

// Alternative: Single continuous animation
function initContinuousScroll() {
    if (!cards[0] || !ScrollTrigger) return;
    
    cards.forEach((card, index) => {
        const fromRight = index % 2 === 0;
        const slideFrom = fromRight ? 800 : -400; // Increased from 100 to 200
        const slideTo = fromRight ? -400 : 800; // Increased from 100 to 200
        
        ScrollTrigger.create({
            trigger: card,
            start: "top bottom", // When card enters from bottom
            end: "bottom top", // When card leaves from top
            scroller: "#main",
            markers: false,
            scrub: 0.3, // Changed from 1 to 0.3 for faster animation
            onUpdate: (self) => {
                const progress = self.progress;
                
                if (progress <= 0.5) {
                    // First half: Move to center (0 to 0.5 progress)
                    const centerProgress = progress * 2; // Convert to 0-1 range
                    gsap.to(card, {
                        x: slideFrom * (1 - centerProgress),
                        duration: 0,
                        overwrite: true
                    });
                } else {
                    // Second half: Move out from center (0.5 to 1 progress)
                    const outProgress = (progress - 0.5) * 2; // Convert to 0-1 range
                    const slideTo = fromRight ? -100 : 100;
                    gsap.to(card, {
                        x: slideTo * outProgress,
                        duration: 0,
                        overwrite: true
                    });
                }
            }
        });
    });
}

// Initialize cards with horizontal starting positions
function initCards() {
    cards.forEach((card, index) => {
        if (card) {
            card.classList.add('expanded');
            card.classList.remove('collapsed');
            
            // Set initial horizontal positions
            const fromRight = index % 2 === 0;
            const slideFrom = fromRight ? 100 : -100;
            gsap.set(card, {
                x: slideFrom
            });
        }
    });
}

// Initialize when ready
document.addEventListener('DOMContentLoaded', function() {
    initCards();
    initContinuousScroll(); // Use this for smooth continuous motion
});

// Handle resize
window.addEventListener('resize', function() {
    if (ScrollTrigger) ScrollTrigger.refresh();
});

// Accordion functionality
function initAccordion() {
    const accordionItems = document.querySelectorAll('.value__accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.value__accordion-header');
        
        header.addEventListener('click', () => {
            // Close all other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('accordion-open');
                    const otherContent = otherItem.querySelector('.value__accordion-content');
                    otherContent.style.height = '0';
                }
            });
            
            // Toggle current item
            const isOpen = item.classList.contains('accordion-open');
            const content = item.querySelector('.value__accordion-content');
            
            if (isOpen) {
                item.classList.remove('accordion-open');
                content.style.height = '0';
            } else {
                item.classList.add('accordion-open');
                content.style.height = content.scrollHeight + 'px';
            }
        });
    });
    
    // Optional: Open first accordion by default
    if (accordionItems.length > 0) {
        const firstItem = accordionItems[0];
        const firstContent = firstItem.querySelector('.value__accordion-content');
        firstItem.classList.add('accordion-open');
        firstContent.style.height = firstContent.scrollHeight + 'px';
    }
}

// Initialize accordion when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initAccordion();
});

// Re-initialize accordion after Locomotive Scroll is ready
if (window.locoScroll) {
    window.locoScroll.on('call', function(value, way, obj) {
        if (value === 'accordion-init') {
            initAccordion();
        }
    });
}





document.addEventListener("DOMContentLoaded", () => {
  const slideEls = document.querySelectorAll(".slide-left, .slide-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // remove for exit animation
      }
    });
  }, {
    threshold: 0.2
  });

  slideEls.forEach(el => observer.observe(el));
});


// Add this function for vertical expanding cards on mobile
function initMobileExpandingCards() {
    console.log('Initializing mobile expanding cards...');
    
    const expandingCards = document.querySelectorAll('.expanding-card');
    const expandingInputs = document.querySelectorAll('.expanding-input');
    
    if (window.innerWidth > 568) {
        // Desktop behavior - use radio inputs normally
        console.log('Desktop mode - using radio inputs');
        expandingInputs.forEach(input => {
            input.style.display = 'none';
        });
        return;
    }
    
    // Mobile behavior - vertical layout with click events
    console.log('Mobile mode - setting up click events');
    
    // First, remove all existing event listeners by replacing elements
    expandingCards.forEach(card => {
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
    });
    
    // Hide radio inputs for mobile
    expandingInputs.forEach(input => {
        input.style.display = 'none';
    });
    
    // Re-select cards after cloning
    const refreshedCards = document.querySelectorAll('.expanding-card');
    console.log('Found cards:', refreshedCards.length);
    
    refreshedCards.forEach((card, index) => {
        console.log('Setting up card', index);
        
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Card clicked:', index);
            
            const isActive = this.classList.contains('active');
            
            // Close all other cards first
            refreshedCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove('active');
                    // Uncheck corresponding radio input
                    const inputId = otherCard.getAttribute('for');
                    if (inputId) {
                        const input = document.getElementById(inputId);
                        if (input) {
                            input.checked = false;
                            console.log('Unchecked input:', inputId);
                        }
                    }
                }
            });
            
            // Toggle current card
            if (!isActive) {
                this.classList.add('active');
                const inputId = this.getAttribute('for');
                if (inputId) {
                    const input = document.getElementById(inputId);
                    if (input) {
                        input.checked = true;
                        console.log('Checked input:', inputId);
                    }
                }
                console.log('Card activated');
            } else {
                this.classList.remove('active');
                const inputId = this.getAttribute('for');
                if (inputId) {
                    const input = document.getElementById(inputId);
                    if (input) {
                        input.checked = false;
                        console.log('Unchecked input:', inputId);
                    }
                }
                console.log('Card deactivated');
            }
        });
        
        // Add hover effect for testing
        card.style.cursor = 'pointer';
    });
    
    // Close cards when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.expanding-card')) {
            console.log('Click outside - closing all cards');
            refreshedCards.forEach(card => {
                card.classList.remove('active');
                const inputId = card.getAttribute('for');
                if (inputId) {
                    const input = document.getElementById(inputId);
                    if (input) input.checked = false;
                }
            });
        }
    });
    
    console.log('Mobile expanding cards initialized');
}

// Test function to check if cards are working
function testCards() {
    const cards = document.querySelectorAll('.expanding-card');
    console.log('Testing cards - total found:', cards.length);
    
    cards.forEach((card, index) => {
        console.log(`Card ${index}:`, {
            hasClickListener: card.hasAttribute('data-listener'),
            classList: card.classList,
            for: card.getAttribute('for')
        });
    });
}

// Initialize with better timing
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing mobile cards');
    setTimeout(() => {
        initMobileExpandingCards();
        testCards();
    }, 1000); // Delay to ensure everything is loaded
});

// Re-initialize on resize with debounce
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        console.log('Window resized - reinitializing mobile cards');
        initMobileExpandingCards();
    }, 250);
});

// Also initialize when page fully loads
window.addEventListener('load', function() {
    console.log('Page fully loaded - initializing mobile cards');
    initMobileExpandingCards();
});

function initGoldLineAnimation() {
    const page5 = document.getElementById('page5');
    const goldLine = document.querySelector('.gold-line');
    const goldLight = document.querySelector('.gold-light');
    const pageContent = document.querySelector('#page5 .page-content');
    
    if (!page5 || !goldLine || !goldLight || !pageContent) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Line expands from center
                goldLine.classList.add('active');
                // Light expands downward with slight delay
                setTimeout(() => {
                    goldLight.classList.add('active');
                }, 100);
                // Text fades in after light
                setTimeout(() => {
                    pageContent.classList.add('visible');
                }, 300);
            } else {
                // Line, light and text retract
                goldLine.classList.remove('active');
                goldLight.classList.remove('active');
                pageContent.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    observer.observe(page5);
}

// Initialize
document.addEventListener('DOMContentLoaded', initGoldLineAnimation);

// Page6 horizontal animations
function initPage6Animations() {
    const page6 = document.getElementById('page6');
    const pageContent = document.querySelector('#page6 .page-content');
    const pageImage = document.querySelector('.page6-image');
    
    if (!page6 || !pageContent || !pageImage) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Enter animation
                pageContent.classList.add('active');
                pageImage.classList.add('active');
            } else {
                // Exit animation
                pageContent.classList.remove('active');
                pageImage.classList.remove('active');
            }
        });
    }, {
        threshold: 0.3
    });
    
    observer.observe(page6);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initPage6Animations();
});