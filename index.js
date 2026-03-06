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
    title: "Book Notes",
    description:
      "Um pequeno blog pessoal, em que cada pessoa pode fazer o login e adicionar resenhas dos livros lidos, e as resenhas são pessoais, assim você só pode ler as suas próprias resenhas.",
    icon: "bookNotes.png",
    github: "https://github.com/JohnAndradeDev/Book-Notes-Project.git",
    demo: "https://book-notes-project-s8sx.onrender.com/",
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
            href="Curriculo_Johnatan_2026.pdf"
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
      <div className="containerProj">
        <div className="contentProj">
          <h2 className="nameProj">Projetos Pessoais</h2>
          <div className="containerCards">
            {projetos.map((project, index) => (
              <div key={index} className="projectCard">
                <img
                  className="projectImg"
                  src={project.icon}
                  alt="avatar_img"
                />
                <div className="projectContent">
                  <h3>{project.title}</h3>
                  <p>
                    {project.description}{" "}
                    <span style={{ color: "#00fff5" }}>
                      ("Demo" Aguardar cerca de 1 minuto para o servidor
                      inicializar)
                    </span>{" "}
                  </p>
                  <div className="projectLinks">
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
