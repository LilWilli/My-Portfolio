// pages/index.js
import Image from "next/image";
import { useEffect } from "react";
import avatar from "@/public/assets/images/my-avatar.png";

export default function Home() {
  useEffect(() => {
    // Function to toggle the 'active' class
    const elementToggleFunc = (elem) => {
      elem.classList.toggle("active");
    };

    // Sidebar toggle functionality
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    const handleSidebarToggle = () => {
      elementToggleFunc(sidebar);
    };

    if (sidebarBtn) {
      sidebarBtn.addEventListener("click", handleSidebarToggle);
    }

    // Modal functionality for testimonials
    const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");

    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");

    const testimonialsModalFunc = () => {
      if (modalContainer) elementToggleFunc(modalContainer);
      if (overlay) elementToggleFunc(overlay);
    };

    testimonialsItem.forEach((item) => {
      item.addEventListener("click", () => {
        if (modalImg) {
          modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
          modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
          modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
          modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
          testimonialsModalFunc();
        }
      });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

    // Dropdown select functionality
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");
    const filterBtn = document.querySelectorAll("[data-filter-btn]");

    if (select) {
      select.addEventListener("click", () => {
        elementToggleFunc(select);
      });
    }

    const filterItems = document.querySelectorAll("[data-filter-item]");

    const filterFunc = (selectedValue) => {
      filterItems.forEach((filterItem) => {
        if (selectedValue === "all" || selectedValue === filterItem.dataset.category) {
          filterItem.classList.add("active");
        } else {
          filterItem.classList.remove("active");
        }
      });
    };

    selectItems.forEach((item) => {
      item.addEventListener("click", () => {
        const selectedValue = item.innerText.toLowerCase();
        selectValue.innerText = item.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    });

    // Filter button functionality
    let lastClickedBtn = filterBtn[0];
    filterBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selectedValue = btn.innerText.toLowerCase();
        selectValue.innerText = btn.innerText;
        filterFunc(selectedValue);

        if (lastClickedBtn) lastClickedBtn.classList.remove("active");
        btn.classList.add("active");
        lastClickedBtn = btn;
      });
    });

    // Form validation functionality
    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");

    formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        formBtn.disabled = !form.checkValidity();
      });
    });

    // Navigation link functionality
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    const handleNavLinkClick = (event) => {
      console.log("Clicked link:", event.target.innerHTML);

      // Remove the 'active' class from all navigation links
      navigationLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add the 'active' class to the clicked navigation link
      event.target.classList.add("active");

      pages.forEach((page) => {
        if (event.target.innerHTML.toLowerCase() === page.dataset.page) {
          console.log("Showing page:", page.dataset.page); // Debug log
          page.classList.add("active");
          window.scrollTo(0, 0);
        } else {
          page.classList.remove("active");
        }
      });
    };


    navigationLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      if (sidebarBtn) {
        sidebarBtn.removeEventListener("click", handleSidebarToggle);
      }
      testimonialsItem.forEach((item) => {
        item.removeEventListener("click", () => {
          // Ensure to clean up if necessary
        });
      });
      if (modalCloseBtn) modalCloseBtn.removeEventListener("click", testimonialsModalFunc);
      if (overlay) overlay.removeEventListener("click", testimonialsModalFunc);
      if (select) {
        select.removeEventListener("click", () => {
          // Ensure to clean up if necessary
        });
      }
      selectItems.forEach((item) => {
        item.removeEventListener("click", () => {
          // Ensure to clean up if necessary
        });
      });
      filterBtn.forEach((btn) => {
        btn.removeEventListener("click", () => {
          // Ensure to clean up if necessary
        });
      });
      formInputs.forEach((input) => {
        input.removeEventListener("input", () => {
          // Ensure to clean up if necessary
        });
      });
      navigationLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);

  return (
    <main>
      <aside className="sidebar active" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <Image
              src={avatar}
              alt="Adepitan William"
              width={80}
              height={80}
              priority // Add priority here for LCP
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Adepitan William">Adepitan William</h1>
            <p className="title">Web developer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:demi.adepitan@gmail.com" className="contact-link">demi.adepitan@gmail.com</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+2349084988744" className="contact-link">+234 908 498 8744</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="2010-03-09">March 09, 2010</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Northampton, United Kingdom</address>
              </div>

            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>

          <div className="separator"></div>
        </div>

      </aside>

      <div className="main-content">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link="about">About</button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link="skills">Skills</button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link="projects">Projects</button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link="resume">Resume</button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link="coverletter">CoverLetter</button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link="contact">Contact</button>
            </li>
          </ul>
        </nav>
        <article className="about active" data-page="about">
          &nbsp;
          <header>
            <h2 className="h2 article-title">About me</h2>
          </header>
          <section className="about-text">
            <p>
              Hello, I’m DEMILADE ADEPITAN, a web developer and designer based in Northampton, UK. I have rich experience in web site design and building and customization. I am really passionate and dedicated to my work.
            </p>
            <p>
              I love to create simple yet beautiful websites with great user experience.
            </p>
          </section>
          <section className="service">
            <h3 className="h3 service-title">What i'm doing</h3>
            <ul className="service-list">
              <li className="service-item">
                <div className="service-icon-box">
                  <Image src="/assets/images/icon-design.svg" alt="design icon" width="40" height="40" loading="lazy" />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Frontend Web developer</h4>
                  <p className="service-item-text">
                    The most modern and high-quality Frontend web  design made at a professional level.
                  </p>
                </div>
              </li>
              <li className="service-item">
                <div className="service-icon-box">
                  <Image src="/assets/images/icon-dev.svg" alt="Web development icon" width="40" height="40" loading="lazy" />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Backend Web development</h4>
                  <p className="service-item-text">
                    The most modern and high-quality Backend Web development made at a professional level.
                  </p>
                </div>
              </li>
              <li className="service-item">
                <div className="service-icon-box">
                  <Image src="/assets/images/icon-app.svg" alt="mobile app icon" width="40" height="40" loading="lazy" />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Responsive Web Development</h4>
                  <p className="service-item-text">
                    Professional Responsive website for Android and iOS
                  </p>
                </div>
              </li>
              <li className="service-item">
                <div className="service-icon-box">
                  <Image src="/assets/images/icon-photo.svg" alt="mobile app icon" width="40" height="40" loading="lazy" />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Friendly UI For Websites</h4>
                  <p className="service-item-text">
                    I make friendly UI for websites along with interaction
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </article>
        <article className="skills" data-page="skills">
          &nbsp;
          <header>
            <h2 className="h2 article-title">My skills</h2>
          </header>
          <section className="skills-content">
            <h3 className="h3 skills-title">My knowledge</h3>
            <ul className="skills-list">
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Frontend Web development</h5>
                  <data value="80" className="skills-percentage" style={{ color: 'green' }}>80%</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: '80%' }} data-width="80"></div>
                </div>
                &nbsp;
                <div className="title-wrapper">
                  <h5 className="h5">Backend Web development</h5>

                  <data value="75" className="skills-percentage" style={{ color: 'green' }}>75%</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: '75%' }} data-width="75"></div>
                </div>
                &nbsp;
                <div className="title-wrapper">
                  <h5 className="h5">Responsive Web Development</h5>

                  <data value="85" className="skills-percentage" style={{ color: 'green' }}>85%</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: '85%' }} data-width="85"></div>
                </div>
                &nbsp;
                <div className="title-wrapper">
                  <h5 className="h5">Friendly UI For Websites</h5>

                  <data value="90" className="skills-percentage" style={{ color: 'green' }}>90%</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: '90%' }} data-width="90"></div>
                </div>
              </li>
            </ul>
          </section>
        </article>
        <article className="projects" data-page="projects">
          &nbsp;
          <header>
            <h2 className="h2 article-title">Projects</h2>
          </header>
          <section className="projects-container">
            <div className="projects-header">
              <h3 className="h3 projects-title">My projects</h3>
              &nbsp;
              <h5 className="projects-desc project-title">
                I like to showcase my work and thus, you can see my
                most recent projects here. All of my projects are
                stored on GitHub.
              </h5>
              <div className="w3-container">
                <div className="w3-row-padding w3-center">
                  {/* Card 1: Real Estate Application */}
                  <div className="w3-col s12 m6 l4">
                    <div className="w3-card w3-hover-shadow w3-animate-opacity" style={{ transition: 'transform 0.3s ease' }}>
                      <a
                        href="https://github.com/LilWilli/Real-Estate-Application"
                        title="Click on the image to see the codebase"
                        target="_blank"
                        className="project-card w3-hover-opacity"
                        style={{ textDecoration: 'none' }}
                      >
                        <Image
                          src="/assets/images/pexels-photo-1131573.jpeg"
                          alt="Real Estate Application"
                          loading="lazy"
                          width={400}
                          height={250}
                          className="w3-image"
                        />
                        <div className="w3-container w3-padding w3-green">
                          <h3 className="w3-text-white">Real Estate Application</h3>
                          <button className="w3-button w3-white w3-border w3-border-green w3-hover-shadow w3-round-large">
                            <a target="_blank" href="https://real-estate-application-v-1.onrender.com/" style={{ textDecoration: 'none' }}>View Live/Demo</a>
                          </button>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Card 2: Recipe Bake */}
                  <div className="w3-col s12 m6 l4">
                    <div className="w3-card w3-hover-shadow w3-animate-opacity" style={{ transition: 'transform 0.3s ease' }}>
                      <a
                        href="https://github.com/LilWilli/Recipe-Bake-"
                        target="_blank"
                        title="Click on the image to see the codebase"
                        className="project-card w3-hover-opacity"
                        style={{ textDecoration: 'none' }}
                      >
                        <Image
                          src="/assets/images/image-omelette.jpeg"
                          alt="Recipe Bake"
                          loading="lazy"
                          width={400}
                          height={400}
                          className="w3-image"
                        />
                        <div className="w3-container w3-padding w3-blue">
                          <h3 className="w3-text-white">Recipe Bake Application</h3>
                          <button className="w3-button w3-white w3-border w3-border-blue w3-hover-shadow w3-round-large">
                            <a target="_blank" href="https://lilwilli.github.io/Recipe-Bake-/" style={{ textDecoration: 'none' }}>View Live/Demo</a>
                          </button>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Card 3: Another Project */}
                  <div className="w3-col s12 m6 l4">
                    <div className="w3-card w3-hover-shadow w3-animate-opacity" style={{ transition: 'transform 0.3s ease' }}>
                      <a
                        href="https://github.com/LilWilli/Toos-website"
                        target="_blank"
                        title="Click on the image to view codebase"
                        className="project-card w3-hover-opacity"
                        style={{ textDecoration: 'none' }}
                      >
                        <Image
                          src="/assets/images/IMG-20240212-WA0008.jpg"
                          alt="Another Project"
                          loading="lazy"
                          width={400}
                          height={250}
                          className="w3-image"
                        />
                        <div className="w3-container w3-padding w3-purple">
                          <h3 className="w3-text-white">Toos Baby Website</h3>
                          <button className="w3-button w3-white w3-border w3-border-purple w3-hover-shadow w3-round-large">
                            <a target="_blank" href="https://lilwilli.github.io/Toos-website/" style={{ textDecoration: 'none' }}>View Live/Demo</a>
                          </button>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Card 4: Portfolio Website */}
                  <div className="w3-col s12 m6 l4">
                    <div className="w3-card w3-hover-shadow w3-animate-opacity" style={{ transition: 'transform 0.3s ease' }}>
                      <a
                        href="https://github.com/LilWilli/ReactApp"
                        target="_blank"
                        title="Click on the image to view codebase"
                        className="project-card w3-hover-opacity"
                        style={{ textDecoration: 'none' }}
                      >
                        <Image
                          src="/assets/images/81fPKd-2AYL._AC_SL1500_.jpg"
                          alt="Portfolio Website"
                          loading="lazy"
                          width={400}
                          height={250}
                          className="w3-image"
                        />
                        <div className="w3-container w3-padding w3-dark-grey">
                          <h3 className="w3-text-white">E-commerce Website</h3>
                          <button className="w3-button w3-white w3-border w3-border-grey w3-hover-shadow w3-round-large">
                            <a target="_blank" href="https://lilwilli.github.io/ReactApp/" style={{ textDecoration: 'none' }}>View Live/Demo</a>
                          </button>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </section>
        </article>
        <article className="resume" data-page="resume">
          &nbsp;
          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>
          <section className="resume-content">
            <h3 className="h3 resume-title">Have access to my resume here</h3>
            <div className="resume-card">
              <h5 className="card-title">My Resume</h5>
              <p className="card-text">Click below to download my resume.</p>
              <a href="/My%20Resume%20(1).pdf" download className="btn btn-primary">
                Download My Resume
              </a>
            </div>
          </section>
        </article>
        <article className="coverletter" data-page="coverletter">
          &nbsp;
          <header>
            <h2 className="h2 article-title">Cover Letter</h2>
          </header>
          <section className="cover-content">
            <h3 className="h3 cover-title">Have access to my cover letter here</h3>
            <div className="resume-card">
              <h5 className="card-title">My Cover Letter</h5>
              <p className="card-text">Click below to download my cover letter.</p>
              <a href="/BusinessCoverLetter.pdf" download className="btn btn-primary">
                Download My Cover Letter
              </a>
            </div>
          </section>
        </article>
        <article className="contact" data-page="contact" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
          <div className="w3-container w3-card-4 w3-light-grey w3-padding-32" style={{ maxWidth: '900px', margin: 'auto' }}>
            {/* Contact Header */}
            <header className="w3-center w3-margin-bottom">
              <h2 className="w3-text-teal w3-xxlarge">Contact Me</h2>
              <p className="w3-large">Feel free to reach out through any of the options below!</p>
            </header>

            {/* Contact Information */}
            <div className="w3-row-padding w3-margin-top">
              <div className="w3-col s12 m6 l4">
                <div className="w3-card-4 w3-hover-shadow w3-animate-opacity w3-center" style={{ padding: '20px', transition: 'transform 0.3s ease' }}>
                  <i className="fa fa-phone w3-text-teal w3-jumbo"></i>
                  <h4 className="w3-margin-top">Phone</h4>
                  <p className="w3-large w3-text-grey">09084988744</p>
                </div>
              </div>

              <div className="w3-col s12 m6 l4">
                <div className="w3-card-4 w3-hover-shadow w3-animate-opacity w3-center" style={{ padding: '20px', transition: 'transform 0.3s ease' }}>
                  <i className="fa fa-envelope w3-text-teal w3-jumbo"></i>
                  <h4 className="w3-margin-top">Email</h4>
                  <p className="w3-large w3-text-grey">
                    <a href="mailto:demi.adepitan@gmail.com" style={{ textDecoration: 'none', color: '#000' }}>demi.adepitan@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="w3-col s12 m6 l4">
                <div className="w3-card-4 w3-hover-shadow w3-animate-opacity w3-center" style={{ padding: '20px', transition: 'transform 0.3s ease' }}>
                  <i className="fa fa-snapchat-ghost w3-text-teal w3-jumbo"></i>
                  <h4 className="w3-margin-top">Snapchat</h4>
                  <p className="w3-large w3-text-grey">$$##Lil Willi (demadebig_d2)</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <section className="w3-margin-top w3-padding-32">
              <h3 className="w3-center w3-text-teal">Send a Message</h3>
              <form className="w3-container w3-card-4 w3-padding-16 w3-light-grey">
                <div className="w3-section">
                  <label htmlFor="name">Name</label>
                  <input className="w3-input w3-border w3-round" type="text" id="name" placeholder="Your Name" required />
                </div>

                <div className="w3-section">
                  <label htmlFor="email">Email</label>
                  <input className="w3-input w3-border w3-round" type="email" id="email" placeholder="Your Email" required />
                </div>

                <div className="w3-section">
                  <label htmlFor="message">Message</label>
                  <textarea className="w3-input w3-border w3-round" id="message" placeholder="Your Message" rows="5" required></textarea>
                </div>

                <button type="submit" className="w3-button w3-teal w3-hover-light-grey w3-round w3-margin-top w3-large w3-block">
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </article>

      </div>
    </main>
  );
}