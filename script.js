// Certificate Modal Functions (Global Scope)
window.openCertificateModal = function(imageUrl) {
    const modal = document.getElementById('certificateModal');
    const img = document.getElementById('certificateImage');
    
    if (modal && img) {
        img.src = imageUrl;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
};

window.closeCertificateModal = function() {
    const modal = document.getElementById('certificateModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Image Protection - Disable right-click on images
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Prevent drag and drop of images
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Disable keyboard shortcuts for saving images
    document.addEventListener('keydown', function(e) {
        // Disable Ctrl+S, Ctrl+Shift+S (Save)
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
            if (document.activeElement.tagName === 'IMG') {
                e.preventDefault();
                return false;
            }
        }
    });

    // Certificate/PDF Protection - Disable right-click on certificate previews
    document.addEventListener('contextmenu', function(e) {
        if (e.target.closest('.certificate-pdf-preview') || e.target.tagName === 'IFRAME') {
            e.preventDefault();
            return false;
        }
    });

    // Prevent opening iframe in new tab via middle-click
    document.addEventListener('mousedown', function(e) {
        if (e.button === 1 && (e.target.closest('.certificate-pdf-preview') || e.target.tagName === 'IFRAME')) {
            e.preventDefault();
            return false;
        }
    });

    // Animated Background Canvas
    const canvas = document.getElementById('background-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
    }

    // Initial resize
    setTimeout(resizeCanvas, 100);
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', () => {
        const newHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
        );
        if (Math.abs(canvas.height - newHeight) > 10) {
            canvas.height = newHeight;
        }
    });

    // Particle system
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around screen
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(251, 191, 36, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    const particlesArray = [];
    const numberOfParticles = 80;

    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }

    // Animate particles
    function animateParticles() {
        // Clear canvas with gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#0a1628');
        gradient.addColorStop(0.5, '#1a2744');
        gradient.addColorStop(1, '#0a1628');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw connections between nearby particles
        for (let i = 0; i < particlesArray.length; i++) {
            for (let j = i + 1; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.strokeStyle = `rgba(251, 191, 36, ${0.1 * (1 - distance / 150)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }

        // Update and draw particles
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }

        requestAnimationFrame(animateParticles);
    }

    animateParticles();

// Smooth scrolling and navigation
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('active') 
                ? 'rotate(45deg) translate(5px, 5px)' 
                : 'rotate(0) translate(0, 0)';
            spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navLinks.classList.contains('active') 
                ? 'rotate(-45deg) translate(5px, -5px)' 
                : 'rotate(0) translate(0, 0)';
        });
    }

    // Active navigation link highlighting
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    });

    // Close mobile menu when clicking on a link
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'rotate(0) translate(0, 0)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'rotate(0) translate(0, 0)';
            }
        });
    });

    // Contact form handling with EmailJS
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.btn-send');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // EmailJS parameters
            const serviceID = 'service_po8ex72';
            const templateID = 'template_sfk9oa2'; // Thay bằng Template ID của bạn
            
            // Send email using EmailJS
            emailjs.sendForm(serviceID, templateID, contactForm)
                .then(function(response) {
                    // Success
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Thank you for your message! I will get back to you soon. ✓');
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, function(error) {
                    // Error
                    console.log('FAILED...', error);
                    alert('Sorry, there was an error sending your message. Please try again or contact me directly via email.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }

    // Blog Carousel
    const blogTrack = document.querySelector('.blog-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    
    if (blogTrack && prevBtn && nextBtn && blogCards.length > 0) {
        let currentIndex = 0;
        const cardWidth = 320;
        const gap = 30;
        const moveDistance = cardWidth + gap;
        const maxIndex = blogCards.length - 3; // Show 3 cards at a time
        
        function updateCarousel() {
            const offset = -currentIndex * moveDistance;
            blogTrack.style.transform = `translateX(${offset}px)`;
            
            // Update button states
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
            
            prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
            nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';
        }
        
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        nextBtn.addEventListener('click', function() {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });
        
        // Initialize
        updateCarousel();
    }

    // Intersection observer removed

    // Parallax effect removed

    // Typing effect removed
});

// Contest Modal Functions
const contestData = {
    contest1: {
        title: "ECO-Future 2023",
        achievement: "Consolation Prize (Giải Khuyến khích)",
        description: "A competition themed 'Solutions for Sustainable Resources in the Future,' focusing on innovative ideas for environmental protection and renewable energy.",
        project: "GREEN FLOW - Biomass Energy Solution: A proposal to minimize organic waste (food scraps) by converting it into clean Biomass energy (Biogas, Biofuel) via a waste collection service platform (Web/App).",
        links: [
            { text: "Slide Deck", url: "https://www.canva.com/design/DAFtT8-rSbk/B4X0PxzCZzNL5EZYHN_EeQ/edit?utm_content=DAFtT8-rSbk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" }
        ],
        learnings: [
            "Understanding of Biomass energy, carbon footprint reduction, and circular economy concepts",
            "Ideation of a green service model connecting waste generators with energy producers",
            "Sustainability principles and environmental impact assessment",
            "Product concept design and business model development"
        ]
    },
    contest2: {
        title: "Future Business Analyst Season 5",
        achievement: "Participant - 2025",
        description: "Themed 'The Last Alpinist - Business Competitiveness.' A competition challenging participants to analyze markets, identify opportunities, and devise strategies to ensure business leadership in volatile environments.",
        project: "Solving business cases focused on enhancing corporate competitiveness and strategic positioning.",
        links: [],
        learnings: [
            "Strategic thinking and business vision development",
            "Market data analysis and competitor analysis techniques",
            "Critical thinking and problem-solving in business context",
            "Professional presentation and communication skills"
        ]
    },
    contest3: {
        title: "PTE Champions 2025",
        achievement: "Top 35 - Score 72/90",
        description: "Organized by the Vietnamese Student Association in Australia (SVAU) to promote English proficiency via the Pearson Test of English (PTE) for academic and professional purposes.",
        project: "Participation in Screening Round, Training Sessions, and Full Mock Tests to demonstrate comprehensive English language skills across Speaking, Writing, Reading, and Listening.",
        links: [],
        learnings: [
            "Mastery of the PTE Academic test format and strategies",
            "Enhancement of academic and professional English proficiency",
            "Time management and test-taking strategies",
            "Networking with international student community and gaining visa-ready language skills"
        ]
    },
    contest4: {
        title: "NAVFLOW - Student Scientific Research",
        achievement: "Faculty-level Research - May 2025",
        description: "An annual university-level research competition at Ton Duc Thang University encouraging students to apply academic knowledge to solve practical, real-world problems.",
        project: "NAVFLOW - Traffic Congestion Prediction and Smart Navigation using CCTV Images in Ho Chi Minh City. Developed a full-stack web application leveraging Deep Learning to analyze vehicle density from traffic cameras and predict congestion levels.",
        links: [
            { text: "GitHub Repository", url: "https://github.com/ngthtnhung/navflow-smart-traffic-app.git" }
        ],
        learnings: [
            "AI/Computer Vision: Applied YOLOv8n for object detection (Cars/Motorbikes), OpenCV for image processing, and Roboflow for data annotation",
            "Full-stack Development: Built Backend with FastAPI (Python) and Frontend with ReactJS, TailwindCSS, and Ant Design",
            "Data Management: Data collection (crawling) and database management using MongoDB",
            "Scientific report writing, project management, and teamwork"
        ]
    },
    contest5: {
        title: "Text2Motion & Sports AI - Student Research 2025",
        achievement: "University-level Research - Ongoing",
        description: "Upcoming student research submission focusing on AI applications in sports training and motion analysis.",
        project: "[IN PROGRESS] Two-part project: (1) Text2Motion & Motion2Text Application - A bidirectional AI training system that generates reference motions from text and provides corrective feedback text from user motions (Focus: Squat, Plank, Push-up). (2) Golf Swing Analysis - An AI system for classifying swings (Good/Bad), detecting swing phases (backswing, impact, etc.), and comparing user form against professional benchmarks.",
        links: [],
        learnings: [
            "[To be updated upon project completion]",
            "Advanced AI Models: MediaPipe (Pose Estimation), GCN (Graph Convolutional Networks), Transformer-based VAEs, and LSTM/TCN for temporal modeling",
            "Research Methodology: Proposal writing, budget estimation, and literature review",
            "Domain Knowledge: Understanding biomechanics in sports training and golf"
        ]
    },
    contest6: {
        title: "TechSpire - Tech Skill Challenge",
        achievement: "Top 12 - AI & Data Track - Ongoing",
        description: "The Vietnamese edition of the SEA Tech Skills Challenge (sponsored by Singapore Global Network), designed to bridge the gap between academic learning and professional earning by tackling real-world business challenges.",
        project: "[IN PROGRESS] Gen Z E-commerce Customer Churn Prediction: A machine learning project analyzing Gen Z e-commerce customer behavior to predict churn and inform retention strategies. Conducting data collection, feature engineering, model training, and evaluation. Translating technical findings into actionable business recommendations.",
        links: [
            { text: "GitHub Repository", url: "https://github.com/ngthtnhung/skilio_mall_churn_prediction.git" },
            { text: "Slide Deck", url: "https://drive.google.com/file/d/1pt3UlWdJ4qZhBS4SGG9zmxjRRtXjRyQs/view?usp=sharing" }
        ],
        learnings: [
            "[To be updated upon competition completion]",
            "Machine Learning Tools: Python, Jupyter Notebook, LightGBM, XGBoost, Scikit-learn",
            "Data Analysis: Feature engineering and handling imbalanced datasets",
            "Business Intelligence: Translating data insights into strategic business solutions"
        ]
    },
    contest7: {
        title: "DATASTORM 2025",
        achievement: "Round 2 Qualifier - Team 'Cook Up The Storm'",
        description: "DATASTORM 2025 is a prestigious academic competition for students passionate about Data Science nationwide and internationally. Themed 'Burst of Passion - Conquer Data,' the competition features real-world datasets and challenges participants to create breakthrough products solving practical industry problems. Organized by TDTU IT Faculty, Kyanon Digital, HCMC University of Education IT Faculty, and Saigon Business School.",
        project: "[IN PROGRESS - Round 2] SwingAI Coach - Analysis of Sports Behavior (Golf): A webcam-based, AI-powered golf swing analysis platform that delivers professional-grade feedback using only a standard camera. The system integrates Computer Vision (MediaPipe + YOLOv8/v10), Deep Learning (Bi-LSTM), and biomechanical data to provide precise, actionable insights. Key features: (1) Real-time tracking of 33 anatomical landmarks + complete golf club detection, (2) Precision segmentation into 8 distinct swing phases with ±1 frame accuracy, (3) Phase-specific biomechanical evaluation with rule-based + LLM-enhanced feedback generation, (4) Interactive web application with color-coded visual overlays and progress tracking.",
        links: [],
        learnings: [
            "[To be updated upon final round completion]",
            "Advanced Computer Vision: MediaPipe Pose for 3D body tracking (33 joints), YOLOv8/v10 for custom golf club detection, dual-stream feature fusion (107-dimensional vectors)",
            "Deep Learning for Temporal Analysis: Bi-LSTM networks for sequential swing phase classification (0-7), handling bidirectional temporal dependencies",
            "Biomechanical Analysis: Phase-specific metric calculation (angles, distances, ratios), comparison against professional golfer benchmarks",
            "Full-Stack Development: FastAPI backend, React frontend, Docker deployment, OpenCV for real-time video processing",
            "Team Collaboration: Multinational team coordination (Vietnamese-Myanmar), rapid prototyping under competition constraints"
        ]
    }
};

window.openContestModal = function(contestId) {
    const modal = document.getElementById('contestModal');
    const modalBody = document.getElementById('modalBody');
    const data = contestData[contestId];
    
    if (data) {
        let learningsHTML = '<ul>';
        data.learnings.forEach(learning => {
            learningsHTML += `<li>${learning}</li>`;
        });
        learningsHTML += '</ul>';
        
        let linksHTML = '';
        if (data.links && data.links.length > 0) {
            linksHTML = '<div class="contest-links">';
            data.links.forEach(link => {
                linksHTML += `<a href="${link.url}" target="_blank" class="contest-link-btn">${link.text}</a>`;
            });
            linksHTML += '</div>';
        }
        
        modalBody.innerHTML = `
            <h2>${data.title}</h2>
            <p style="color: #fbbf24; font-size: 1.1rem; font-weight: 600; margin-bottom: 20px;">${data.achievement}</p>
            
            <h3>About</h3>
            <p>${data.description}</p>
            
            <h3>Project</h3>
            <p>${data.project}</p>
            ${linksHTML}
            
            <h3>What I Learned</h3>
            ${learningsHTML}
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
};

window.closeContestModal = function() {
    const modal = document.getElementById('contestModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

// Close modal when clicking outside
window.onclick = function(event) {
    const contestModal = document.getElementById('contestModal');
    const certificateModal = document.getElementById('certificateModal');
    
    if (event.target == contestModal) {
        window.closeContestModal();
    }
    if (event.target == certificateModal) {
        window.closeCertificateModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        window.closeContestModal();
        window.closeCertificateModal();
    }
});

// Smooth scroll removed

// Typing effect for hero title (character by character)
function typeTitleEffect() {
    const titleElement = document.querySelector('.hero-title');
    if (!titleElement) return;
    
    const beforeText = "NGUYEN THI ";
    const highlightText = "TUYET NHUNG";
    const fullText = beforeText + highlightText;
    
    let charIndex = 0;
    titleElement.innerHTML = '<span class="title-part1"></span><span class="highlight"></span>';
    const part1 = titleElement.querySelector('.title-part1');
    const part2 = titleElement.querySelector('.highlight');
    
    function typeChar() {
        if (charIndex < fullText.length) {
            const currentChar = fullText[charIndex];
            
            if (charIndex < beforeText.length) {
                part1.innerHTML += currentChar;
            } else {
                part2.innerHTML += currentChar;
            }
            
            charIndex++;
            setTimeout(typeChar, 80);
        } else {
            // Add cursor at end temporarily
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            titleElement.appendChild(cursor);
            
            // Remove cursor after 1 second
            setTimeout(() => {
                cursor.remove();
                // Start tagline typing
                typeWriter();
            }, 1000);
        }
    }
    
    // Start typing after badge animation (1s delay)
    setTimeout(typeChar, 1000);
}

// Typing effect for hero tagline
function typeWriter() {
    const taglineElement = document.querySelector('.hero-tagline');
    if (!taglineElement) return;
    
    // Adjust line break for better layout - break after "decisions,"
    const fullText = "Transforming data into decisions,<br>bridging business with actionable insights.";
    const words = fullText.replace('<br>', ' <br> ').split(' ');
    let wordIndex = 0;
    let currentText = '';
    
    taglineElement.innerHTML = '';
    
    function typeWord() {
        if (wordIndex < words.length) {
            const word = words[wordIndex];
            
            if (word === '<br>') {
                currentText += '<br>';
            } else {
                currentText += (wordIndex > 0 && words[wordIndex - 1] !== '<br>' ? ' ' : '') + word;
            }
            
            // Wrap key words with highlight span
            const displayText = currentText
                .replace(/data/g, '<span class="highlight">data</span>')
                .replace(/decisions/g, '<span class="highlight">decisions</span>')
                .replace(/business/g, '<span class="highlight">business</span>')
                .replace(/insights/g, '<span class="highlight">insights</span>');
            
            taglineElement.innerHTML = displayText;
            wordIndex++;
            
            setTimeout(typeWord, 150);
        }
    }
    
    typeWord();
}

// Scroll reveal animations
function scrollReveal() {
    const reveals = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const elementVisible = 150;
        
        // Add active class when element enters viewport from bottom
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
        
        // Remove active class when element goes above viewport (scroll back up)
        if (elementBottom < elementVisible || elementTop > window.innerHeight) {
            element.classList.remove('active');
        }
    });
}

// Parallax effect for hero section
function parallaxEffect() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroSection.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
}

// Run effects when page loads
window.addEventListener('load', function() {
    typeTitleEffect();
    scrollReveal();
});

// Run on scroll
window.addEventListener('scroll', function() {
    scrollReveal();
    parallaxEffect();
    
    if (window.pageYOffset > 300) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
