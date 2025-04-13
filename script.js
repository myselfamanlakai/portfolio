// Particles.js Configuration
document.addEventListener("DOMContentLoaded", function () {
  // Particles.js
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#64ffda",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#8892b0",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.8,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });

  //
  // Navigation
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const navbar = document.querySelector(".navbar");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    burger.classList.toggle("toggle");

    document.body.classList.toggle("nav-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("nav-active")) {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
        document.body.classList.remove("nav-open");
      }
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  function checkScroll() {
    const elements = document.querySelectorAll(".animate");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.classList.add("appear");
      }
    });
  }

  const addAnimationClasses = () => {
    document.querySelector(".home-text h1").classList.add("animate");
    document.querySelector(".home-text h2").classList.add("animate", "delay-1");
    document.querySelector(".home-text p").classList.add("animate", "delay-2");
    document.querySelector(".cta-buttons").classList.add("animate", "delay-3");
    document.querySelector(".home-image").classList.add("animate", "delay-2");

    document.querySelectorAll(".section-title").forEach((title) => {
      title.classList.add("animate");
    });

    document.querySelectorAll(".about-content p").forEach((p, index) => {
      p.classList.add("animate", `delay-${index + 1}`);
    });

    document.querySelectorAll(".skill-category").forEach((category, index) => {
      category.classList.add("animate", `delay-${index}`);
    });

    document.querySelectorAll(".education-item").forEach((item, index) => {
      item.classList.add("animate", `delay-${index}`);
    });

    document.querySelector(".contact-info").classList.add("animate");
    document.querySelector(".contact-form").classList.add("animate", "delay-1");
  };

  addAnimationClasses();
  window.addEventListener("scroll", checkScroll);
  checkScroll();

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      emailjs.send("service_a9q347b", "template_pvofm6g", params).then(
        function () {
          alert("Thanks for your message! I will get back to you soon.");
          contactForm.reset();
        },
        function (error) {
          alert("Failed to send message. Please try again.");
          console.log("Error:", error);
        }
      );
    });
  }

  document.addEventListener("mousemove", function (e) {});

  const addHoverEffects = () => {
    document.querySelectorAll(".skill-item").forEach((item) => {
      item.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px)";
        this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";

        const skillLevel = this.querySelector(".skill-level");
        if (skillLevel) {
          skillLevel.style.transition = "width 0.6s ease-in-out";
        }
      });

      item.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
      });
    });

    document.querySelectorAll(".social-link").forEach((link) => {
      link.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px) rotate(360deg)";
      });

      link.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) rotate(0deg)";
      });
    });
  };

  addHoverEffects();

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && nav.classList.contains("nav-active")) {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
      document.body.classList.remove("nav-open");
    }
  });
});
