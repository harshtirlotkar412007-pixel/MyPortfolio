
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  GraduationCap,
  Phone,
  Code2,
  ExternalLink
} from 'lucide-react';

import Navbar from './components/Navbar.jsx';
import SectionTitle from './components/SectionTitle.jsx';

const profile = {
  email: 'harshtirlotkar412007@gmail.com',
  phone: '+91-9892895076',
  linkedin: 'https://www.linkedin.com/in/harsh-tirlotkar-63a04743b/',
  github: 'https://github.com/harsh-tirlotkar412007-pixel',
};

const phoneLink = profile.phone.replace(/-/g, '');

const projects = [
  {
    name: 'BiteBox',
    type: 'Food Ordering Website',
    image: '/images/bitebox.svg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'A responsive food ordering website with structured pages, interactive interface elements, and login and signup form validation.'
  },
  {
    name: 'MEDISHIELD',
    type: 'Health Insurance Website',
    image: '/images/medishield.svg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'A static health insurance website with structured information pages and login and signup functionality using browser LocalStorage.'
  },
  {
    name: 'ChaloChale',
    type: 'Travel Website',
    image: '/images/chalochale.svg',
    tech: ['HTML', 'Bootstrap', 'JavaScript'],
    description: 'A travel website presenting destinations and trip information with responsive Bootstrap layouts, form validation, and interactive navigation.'
  },
  {
    name: 'ShopCart',
    type: 'E-commerce Frontend',
    image: '/images/shopcart.svg',
    tech: ['React.js', 'Bootstrap', 'HTML', 'CSS'],
    description: 'A component-based e-commerce frontend with reusable React components and interactive shopping cart functionality.'
  },
];

const skills = [
  ['Java', 'Programming'],
  ['JavaScript', 'Programming'],
  ['HTML5', 'Frontend'],
  ['CSS3', 'Frontend'],
  ['Bootstrap', 'Frontend'],
  ['React.js', 'Frontend'],
  ['DOM Manipulation', 'Web Development'],
  ['Client-side Form Validation', 'Web Development'],
  ['Responsive Web Design', 'Web Development'],
  ['Git & GitHub', 'Developer Tools'],
  ['Visual Studio Code', 'Developer Tools'],
  ['Browser LocalStorage', 'Browser Features'],
];

function App() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO SECTION */}
        <section className="hero section-wrap" id="home">

          <div className="hero-copy">
            <p className="eyebrow">
              INFORMATION TECHNOLOGY STUDENT
            </p>

            <h1>
              Hello, I'm <span>Harsh.</span>
            </h1>

            <h2>
              An IT student interested in web development.
            </h2>

            <p className="hero-description">
              I enjoy building responsive websites and learning new technologies.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects <ArrowRight size={17} />
              </a>

              <a className="button button-outline" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-art">
            <img
              src="/images/hero-code.svg"
              alt="Laptop showing code"
            />
          </div>

          <div className="hero-orb orb-left"></div>
          <div className="hero-orb orb-right"></div>

        </section>

        {/* ABOUT SECTION */}
        <section className="about section-wrap section-pad" id="about">

          <div className="about-copy">
            <SectionTitle>About Me</SectionTitle>

            <p>
              I'm Harsh Tirlotkar, a B.Sc. Information Technology student
              at K. M. Agrawal College, University of Mumbai.
              I'm interested in web development and enjoy working
              on practical projects to build my skills.
            </p>

            <a className="text-link" href="#skills">
              Explore my skills <ArrowRight size={15} />
            </a>
          </div>

          <div className="about-details">

            <div>
              <GraduationCap />
              <p>
                <strong>B.Sc. Information Technology</strong>
                <span>2024 – 2027 (Pursuing)</span>
                <small>
                  K. M. Agrawal College, University of Mumbai
                </small>
              </p>
            </div>

            <div>
              <MapPin />
              <p>
                <strong>Kalyan, Maharashtra</strong>
              </p>
            </div>

            <div>
              <Mail />
              <p>
                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </p>
            </div>

            <div>
              <Phone />
              <p>
                <a href={`tel:${phoneLink}`}>
                  {profile.phone}
                </a>
              </p>
            </div>

            <div>
              <ExternalLink />
              <p>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>

            <div>
              <Code2 />
              <p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </p>
            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          className="projects section-wrap section-pad"
          id="projects"
        >

          <div className="section-row">
            <SectionTitle>My Projects</SectionTitle>

            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub <ArrowRight size={15} />
            </a>
          </div>

          <div className="project-grid">

            {projects.map((project) => (
              <article className="project-card" key={project.name}>

                <img
                  className="project-preview"
                  src={project.image}
                  alt={`${project.name} project preview`}
                />

                <div className="project-content">

                  <h3>{project.name}</h3>

                  <p className="project-type">
                    {project.type}
                  </p>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tags">
                    {project.tech.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                </div>
              </article>
            ))}

          </div>

          <p className="repo-note">
            Visit my GitHub profile to explore my projects and repositories.
          </p>

        </section>

        {/* SKILLS SECTION */}
        <section className="lower-grid section-wrap section-pad">

          <div className="skills" id="skills">
            <SectionTitle>Skills</SectionTitle>

            <div className="skill-grid">

              {skills.map(([name, group]) => (
                <div className="skill-chip" key={name}>
                  <Code2 size={19} />
                  <span>{name}</span>
                  <small>{group}</small>
                </div>
              ))}

            </div>
          </div>

          {/* RESUME SECTION */}
          <div className="resume-panel" id="resume">

            <SectionTitle>Resume</SectionTitle>

            <p>
              Download my resume to know more about my education,
              skills and projects.
            </p>

            <a
              className="button button-primary"
              href="/Harsh-Tirlotkar-Resume.pdf"
              download="Harsh-Tirlotkar-Resume.pdf"
            >
              <Download size={16} />
              Download Resume
            </a>

          </div>

          {/* CONTACT SECTION */}
          <div className="contact-panel" id="contact">

            <SectionTitle>Contact Me</SectionTitle>

            <p>Feel free to reach out!</p>

            <a
              className="contact-line"
              href={`mailto:${profile.email}`}
            >
              <Mail size={18} />
              {profile.email}
            </a>

            <a
              className="contact-line"
              href={`tel:${phoneLink}`}
            >
              <Phone size={18} />
              {profile.phone}
            </a>

            <div className="social-links">

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <ExternalLink />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Code2 />
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <span>
          © {new Date().getFullYear()} Harsh Tirlotkar
        </span>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>

    </>
  );
}

export default App;
