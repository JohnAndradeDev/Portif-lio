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
    category: "Ferramentas",
    technologies: ["Git", "GitHub", "Bash", "VS Code"],
  },
];

const projetos = [
  {
    title: "Projeto 1",
    description: "Descrição",
    icon: "Imagem",
    github: "#",
    demo: "#",
  },
  {
    title: "Projeto 2",
    description: "Descrição",
    icon: "Imagem",
    github: "#",
    demo: "#",
  },
  {
    title: "Projeto 3",
    description: "Descrição",
    icon: "Imagem",
    github: "#",
    demo: "#",
  },
];

function App() {
  return (
    <>
      <Header />
      <WhoIam />
      <Habilidades />
      <Projetos />
      <Footer />
    </>
  );
}

function Header() {
  useEffect(() => {
    lucide.createIcons();
  }, []);

  return (
    <header>
      <div className="containerHeader">
        <div className="containerContacts">
          <a
            href="mailto:johnatandias3545@gmail.com"
            className="contactLink"
            title="Email"
          >
            <i data-lucide="mail"></i>
          </a>
          <a
            href="https://github.com/JohnAndradeDev"
            className="contactLink"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i data-lucide="github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/johnatan-andrade-b04339268/"
            className="contactLink"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i data-lucide="linkedin"></i>
          </a>
          <a
            href="Curriculo_John_2026.pdf"
            className="contactLink"
            target="_blank"
            rel="noopener noreferrer"
            title="Currículo"
          >
            <i data-lucide="dock"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

function WhoIam() {
  return (
    <section>
      <div className="containerWhoIam">
        <div className="contentWhoIam">
          <h1 className="nameWhoIam">Johnatan Andrade</h1>
          <div className="info">
            <img className="circleImg" src="foto_eu.png" alt="avatar_img" />
            <p className="infoP">
              Estou cursando o 6° semestre de engenharia de computação na Facens
              em Sorocaba, atualmente estou em busca de estágio em
              desenvolvimento web full-stack ou áreas relacionadas a tecnologia
              e engenharia. Sou uma pessoa organizada e calma, além de sempre
              querer aprender mais, para melhor desenvolver minhas habilidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Habilidades() {
  return (
    <section>
      <div className="containerHab">
        <div className="contentHab">
          <h2 className="nameHab">Habilidades e Ferramentas</h2>
          <div className="conteinerSkills">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skillCard">
                <h3>{skillGroup.category}</h3>
                <div className="skillTags">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projetos() {
  return (
    <section>
      <div className="conteinerProj">
        <div className="contentProj">
          <h2 className="projetos-title">Projetos Pessoais (em construção)</h2>
          <div className="projetos-grid">
            {projetos.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">{project.icon}</div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i data-lucide="github"></i>
                      Código
                    </a>
                    <a
                      href={project.demo}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i data-lucide="external-link"></i>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} - Johnatan. Todos os direitos reservados.
      </p>
    </footer>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
