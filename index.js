const { useState, useEffect } = React;

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "Bootstrap", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "PostgreSQL", "Express"],
  },
  {
    category: "DevOps & Ferramentas",
    technologies: ["Git", "GitHub", "Bash", "VS Code"],
  },
];

function App() {
  return (
    <>
      <Header />
      <WhoIam />
      <Habilidades />
    </>
  );
}

function Header() {
  useEffect(() => {
    lucide.createIcons();
  }, []);

  return (
    <header>
      <div className="contact-links">
        <a
          href="mailto:johnatandias3545@gmail.com"
          className="contact-link"
          title="Email"
        >
          <i data-lucide="mail"></i>
        </a>{" "}
        <a
          href="https://github.com/JohnAndradeDev"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <i data-lucide="github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/johnatan-andrade-b04339268/"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i data-lucide="linkedin"></i>
        </a>
      </div>
    </header>
  );
}

function WhoIam() {
  return (
    <section className="me">
      <div className="me-content">
        <h1 className="name">Johnatan Andrade</h1>
        <div className="info">
          <img className="circle-img" src="image.png" alt="avatar_img" />
          <p className="infoP">
            Olá, eu sou o Johnatan e tenho 22 anos, um estudante de engenharia
            de computação na Facens em Sorocaba e apaixonado por tecnologia,
            atualmente estou em busca de estágio na área de desenvolvimento web
            ou relacionadas.
          </p>
        </div>
      </div>
    </section>
  );
}

function Habilidades() {
  return (
    <section id="habilidades">
      <div className="section-header">
        <h2 className="section-title">Habilidades & Ferramentas</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-card">
            <h3>{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
