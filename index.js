const { useState, useEffect } = React;

const skills = [
  {
    category: "Front-end",
    icon: "code-2",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
  },
  {
    category: "Back-end",
    icon: "server",
    technologies: ["TypeScript", "Node.js", "Express", "Fastify", "Python"],
  },
  {
    category: "Banco de Dados",
    icon: "database",
    technologies: ["PostgreSQL", "SQL Server", "Prisma ORM"],
  },
  {
    category: "Ferramentas",
    icon: "wrench",
    technologies: ["Git", "GitHub", "Docker", "VsCode", "Postman"],
  },
];

const projetos = [
  {
    title: "Book Notes",
    description:
      "Um pequeno blog pessoal, em que cada pessoa pode fazer o login e adicionar resenhas dos livros lidos, e as resenhas são pessoais, assim você só pode ler as suas próprias resenhas.",
    icon: "bookNotes.png",
    github: "https://github.com/JohnAndradeDev/Book-Notes-Project.git",
    demo: "https://book-notes-project-s8sx.onrender.com",
  },
  {
    title: "Api GymPass",
    description:
      "Projeto que simula o GymPass, em que é possível fazer check-in em academias próximas a você. Desenvolvido com arquitetura em camadas, utilizando controllers, services e repositories. O projeto conta com autenticação, regras de negócio, persistência de dados com Prisma e PostgreSQL, testes automatizados e ambiente de desenvolvimento utilizando Docker.",
    icon: "gympass-logo.png",
    github: "https://github.com/JohnAndradeDev/Gym_Api",
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
      <nav id="nav">
        <div className="containerHeader">
          <div className="nav-links" id="navLinks">
            <a href="#sobre">Sobre</a>
            <a href="#skills">Habilidades</a>
            <a href="#projetos">Projetos</a>
          </div>

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
              <i data-lucide="cat"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/johnatan-andrade-b04339268/"
              className="contactLink"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i data-lucide="briefcase-business"></i>
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
      </nav>
    </header>
  );
}

function WhoIam() {
  useEffect(() => {
    lucide.createIcons();
  }, []);

  return (
    <section id="sobre">
      <div className="containerWhoIam">
        <div className="contentWhoIam">
          <h1 className="nameWhoIam">
            <span> OLÁ, SOU O JOHNATAN ANDRADE 👍</span>
          </h1>

          <div className="info">
            <img
              className="circleImg"
              src="foto_eu.png"
              alt="Foto de Johnatan"
            />

            <div className="infoContent">
              <p className="infoP">
                Estou cursando o 6° semestre de Engenharia de Computação na
                Facens, em Sorocaba. Atualmente, estou em busca de estágio em
                desenvolvimento web full-stack ou áreas relacionadas à
                tecnologia e engenharia.
              </p>

              <p className="infoP">
                Sou uma pessoa organizada e calma, além de estar sempre buscando
                aprender novas tecnologias e aprimorar minhas habilidades para
                desenvolver soluções cada vez melhores.
              </p>

              <div className="aboutHighlights">
                <div className="aboutCard">
                  <i data-lucide="graduation-cap"></i>
                  <span>Engenharia da Computação</span>
                </div>

                <div className="aboutCard">
                  <i data-lucide="server"></i>
                  <span>Desenvolvimento Backend</span>
                </div>

                <div className="aboutCard">
                  <i data-lucide="code-2"></i>
                  <span>Desenvolvimento Web</span>
                </div>

                <div className="aboutCard">
                  <i data-lucide="rocket"></i>
                  <span>Projetos Pessoais</span>
                </div>
              </div>

              <a href="#projetos" className="aboutButton">
                Ver meus projetos
                <i data-lucide="arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Habilidades() {
  useEffect(() => {
    lucide.createIcons();
  }, []);

  return (
    <section id="skills">
      <div className="containerHab">
        <div className="contentHab">
          <h2 className="nameHab">Habilidades e Ferramentas</h2>

          <div className="containerSkills">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skillCard">
                <div className="skillTitle">
                  <i data-lucide={skillGroup.icon}></i>
                  <h3>{skillGroup.category}</h3>
                </div>

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
  useEffect(() => {
    lucide.createIcons();
  }, []);

  return (
    <section id="projetos">
      <div className="containerProj">
        <div className="contentProj">
          <h2 className="nameProj">Projetos Pessoais</h2>

          <div className="containerCards">
            {projetos.map((project, index) => (
              <div key={index} className="projectCard">
                <img
                  className="projectImg"
                  src={project.icon}
                  alt={`Imagem do projeto ${project.title}`}
                />

                <div className="projectContent">
                  <h3>{project.title}</h3>

                  <p>
                    {project.description}{" "}
                    <span style={{ color: "#00a8a0" }}>
                      ("Demo" Aguardar cerca de 1 minuto para o servidor
                      inicializar)
                    </span>
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

                    {project.demo && (
                      <a
                        href={project.demo}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i data-lucide="external-link"></i>
                        Demo
                      </a>
                    )}
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
    <footer id="contato">
      <p>
        © {new Date().getFullYear()} - Johnatan. Todos os direitos reservados.
      </p>
    </footer>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
