document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Sticky Header on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Project Modal
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.close-modal');
    
    // Project data
    const projects = {
        1: {
            title: 'CFO Coach',
            description: 'A digital library offering a wide range of books, courses, and subjects available for purchase, catering to Admins, Teachers, and Students. Provides resources focused on strategic thinking and financial management, ideal for aspiring CFOs and professionals seeking a strong business foundation.',
            tags: ['Laravel', 'MySQL', 'Bootstrap', 'PHP', 'JavaScript'],
            link: '#'
        },
        2: {
            title: 'ShowCraft',
            description: 'Access Control: Ensure that only authorized administrators can view and download the reports, enhancing data security and confidentiality. Excel Export with Timestamping: Enable seamless export of reports in Excel format, with each entry accurately timestamped for precise tracking and auditing purposes.',
            tags: ['React', 'Bootstrap', 'JavaScript'],
            link: '#'
        },
        3: {
            title: 'Finance Lend Saas',
            description: 'Developed a single-page finance management system using Core PHP and MySQL, enabling users to register, log in, and manage their financial transactions. The system allows users to record income and expenses with secure authentication. Implemented user authentication, database integration, and transaction management while ensuring data security and performance.',
            tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            link: '#'
        },
        4: {
            title: 'Game Exchange',
            description: 'Developed a dynamic and engaging online gaming platform featuring various game categories, including outdoor sports simulations, lottery systems, and casino-style betting games. The platform provides an interactive user experience with seamless UI/UX, real-time updates, and secure transaction handling.',
            tags: ['React', 'Bootstrap', 'JavaScript'],
            link: '#'
        },
        5: {
            title: 'NeemTree',
            description: 'WordPress website to handle bookings for international and national photography shoots, including visits to neem trees. Features an intuitive booking system and payment integration.',
            tags: ['WordPress', 'PHP', 'CSS'],
            link: '#'
        },
        6: {
            title: 'Radhe Exchange',
            description: 'Dynamic and skilled Frontend Developer with expertise in React.js, HTML, CSS, JavaScript, and other modern web technologies, specializing in building live betting platforms, online gaming portals, and casino websites. Adept at designing and developing user-friendly interfaces for real-time sports betting, outdoor gaming, and casino experiences across India.',
            tags: ['React', 'Bootstrap', 'JavaScript'],
            link: '#'
        }
    };
    
    // Open modal when clicking on a project card
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projects[projectId];
            
            if (project) {
                document.getElementById('modalProjectImg').src = this.querySelector('.project-img img').src;
                document.getElementById('modalProjectTitle').textContent = project.title;
                document.getElementById('modalProjectDesc').textContent = project.description;
                document.getElementById('modalProjectLink').href = project.link;
                
                const tagsContainer = document.getElementById('modalProjectTags');
                tagsContainer.innerHTML = '';
                
                project.tags.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.textContent = tag;
                    tagsContainer.appendChild(tagElement);
                });
                
                projectModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;
            
            // Reset error states
            name.style.borderColor = '';
            email.style.borderColor = '';
            message.style.borderColor = '';
            
            // Name validation
            if (name.value.trim() === '') {
                name.style.borderColor = 'var(--error-color)';
                isValid = false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.style.borderColor = 'var(--error-color)';
                isValid = false;
            }
            
            // Message validation
            if (message.value.trim() === '') {
                message.style.borderColor = 'var(--error-color)';
                isValid = false;
            }
            
            if (isValid) {
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            }
        });
    }
    
    // Dark Mode Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            this.classList.toggle('active');
            
            // Save preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
        });
        
        // Check for saved preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            themeToggle.classList.add('active');
        }
    }
});