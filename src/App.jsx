import logo from './logo.png';

function App() {
  return (
    <>
      <div className="main-header">
        <img className="img" src={logo} alt="logo" />
        <div className="header-text">
          <h2>Modestas Juska</h2>
          <h5>Product-focused Fullstack Developer</h5>
        </div>
      </div>

      <div className='main-about'>
        <h2>About</h2>
        <h5>Hi, I am Modestas. I enjoy building creative products from start to finish. I am focused to grow my developing experience while experiencing with product. While I am not building any project, I am studying internet courses to get new knowledge about web development.</h5>
      </div>

      <div className="main-experience">
        <h2 className='main-experience-h2'>Work Experience</h2>
        <div className="main-experience-list">
          <a className="experience-list-year">2024 - present</a>
          <div className="experience-list-work">
            <h5>Freelance</h5>
            <h6>Working with different products. Mostly I am the user of these products. Currently I am building product for company.</h6>
            <div className="programing-language-listing">
              <h6 className="programing-language">Tailwind</h6>
              <h6 className="programing-language">WordPress</h6>
            </div>
          </div>
        </div>

        <div className="main-experience-list">
          <a className="experience-list-year">2023 - 2024</a>
          <div className="experience-list-work">
            <h5>Technical training</h5>
            <h6>Gained basic knowledge in Back-End PHP application development during courses. Basic knowledge in PHP / Laravel / MySQL / React / JavaScript.</h6>
            <div className="programing-language-listing">
              <h6 className="programing-language">PHP</h6>
              <h6 className="programing-language">Laravel</h6>
              <h6 className="programing-language">MySQL</h6>
              <h6 className="programing-language">React</h6>
              <h6 className="programing-language">JavaScript</h6>
              <h6 className="programing-language">GitHub</h6>
            </div>
          </div>
        </div>

        <div className="main-experience-list">
          <a className="experience-list-year">2017 - 2023</a>
          <div className="experience-list-work">
            <h5>Web development supervisor - team lead</h5>
            <h6>Working in the agency was responsible for designing different information systems (UI). Also supervised a team that was developing information system.</h6>
            <div className="programing-language-listing">
              <h6 className="programing-language">UI</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="main-projects">
        <h2 className="main-projects-h2">Side Projects</h2>
        <div className="main-projects-list">
          <a className="projects-list-year">Ongoing</a>
          <div className="projects-list-work">
            <h5>Web page for company</h5>
            <h6>Web page for start-up company</h6>
            <div className="programing-language-listing">
              <h6 className="programing-language">React</h6>
              <h6 className="programing-language">PHP</h6>
              <h6 className="programing-language">AWS</h6>
              <h6 className="programing-language">Tailwind</h6>
            </div>
          </div>
        </div>

        <div className="main-projects-list">
          <a className="projects-list-year">Paused</a>
          <div className="projects-list-work">
            <h5>Web page for Netflix</h5>
            <h6>Simple web application simulating current webpage</h6>
            <div className="programing-language-listing">
              <h6 className="programing-language">React</h6>
              <h6 className="programing-language">CSS</h6>
              <h6 className="programing-language">HTML</h6>
            </div>
          </div>
        </div>

        <div className="main-projects-list">
          <a className="projects-list-year">2023 year</a>
          <div className="projects-list-work">
            <h5>Real Estate</h5>
            <h6>Simple web application developed using HTML and CSS. This project was part of my technical training.</h6>
            <div className="programing-language-listing">
              <h6 className="programing-language">HTML</h6>
              <h6 className="programing-language">CSS</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="main-links">
        <h2 className="main-links-h2">Links</h2>
        <div className="main-links-general">
          <div className="main-links-list">
            <a className="links-list-year">GitHub</a>
            <div className="links-list-work">
              <a className="links-list-work-a" href="https://github.com/ModJuska123">ModJuska123</a>
            </div>
          </div>

          <div className="main-links-list">
            <p className="links-list-year">LinkedIn</p>
            <div>
              <div className="links-list-work">
                <a className="links-list-work-a" href="https://www.linkedin.com/in/modestas-j-b41b69267">https://www.linkedin.com/in/modestas-j-b41b69267</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <p className='last-sentence'>
          Webpage coded in Visual Studio Code. Built with React.js and CSS, deployed with Laravel.
        </p>
    </>
  )
}
export default App;
