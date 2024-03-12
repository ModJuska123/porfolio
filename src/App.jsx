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
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem temporibus qui facilis fugit. Tenetur, quisquam. Dolorum iste reiciendis, repellendus impedit atque fugit veritatis a dolor, magni, autem tenetur necessitatibus aspernatur?</h6>
      </div>
      <div className="main-experience">
        <h2>Work Experience</h2>
        <div className="main-experience-list">
          <a className="experience-list-year">2024 - present</a>
          <div className="experience-list-work">
            <h5>Freelance</h5>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem temporibus qui facilis fugit. Tenetur, quisquam. Dolorum iste reiciendis, repellendus impedit atque fugit veritatis a dolor, magni, autem tenetur necessitatibus aspernatur?</h6>
            <div className="programing-language-listing">
              <h6 className="programing-language">Tailwind</h6>
            </div>
          </div>
        </div>
        <div className="main-experience-list">
          <a className="experience-list-year">2023 - 2024</a>
          <div className="experience-list-work">
            <h5>Technical training</h5>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem temporibus qui facilis fugit. Tenetur, quisquam. Dolorum iste reiciendis, repellendus impedit atque fugit veritatis a dolor, magni, autem tenetur necessitatibus aspernatur?</h6>
            <div className="programing-language-listing">
              <h6 className="programing-language">PHP</h6>
              <h6 className="programing-language">Laravel</h6>
              <h6 className="programing-language">MySQL</h6>
              <h6 className="programing-language">React</h6>
              <h6 className="programing-language">JavaScript</h6>
            </div>
          </div>
        </div>
        <div className="main-experience-list">
          <a className="experience-list-year">2017 - 2023</a>
          <div className="experience-list-work">
            <h5>Web development superviser - team lead</h5>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem temporibus qui facilis fugit. Tenetur, quisquam. Dolorum iste reiciendis, repellendus impedit atque fugit veritatis a dolor, magni, autem tenetur necessitatibus aspernatur?</h6>
          </div>
        </div>
      </div>
      <div className="main-projects">
        <h2>Side Projects</h2>
        <div className="main-projects-list">
          <a className="projects-list-year">Ongoing</a>
          <div className="projects-list-work">
            <h5>Web page for construction company</h5>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem temporibus qui facilis fugit. Tenetur, quisquam. Dolorum iste reiciendis, repellendus impedit atque fugit veritatis a dolor, magni, autem tenetur necessitatibus aspernatur?</h6>
            <div className="programing-language-listing">
              <h6 className="programing-language">Tailwind</h6>
            </div>
          </div>
        </div>
        <div className="main-projects-list">
          <a className="projects-list-year">Paused</a>
          <div className="projects-list-work">
            <h5>Web page for Netflix</h5>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem temporibus qui facilis fugit. Tenetur, quisquam. Dolorum iste reiciendis, repellendus impedit atque fugit veritatis a dolor, magni, autem tenetur necessitatibus aspernatur?</h6>
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
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem temporibus qui facilis fugit. Tenetur, quisquam. Dolorum iste reiciendis, repellendus impedit atque fugit veritatis a dolor, magni, autem tenetur necessitatibus aspernatur?</h6>
            <div className="programing-language-listing">
              <h6 className="programing-language">HTML</h6>
              <h6 className="programing-language">CSS</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="main-links">
        <h2>Links</h2>
        <div className="main-links-list">
          <a className="links-list-year">Github</a>
          <div className="links-list-work">
          <a href="https://github.com/ModJuska123">ModJuska123</a>
          </div>
        </div>
        <div className="main-links-list">
          <a className="links-list-year">LinkedIn</a>
          <div className="links-list-work">
          <a href="https://www.linkedin.com/in/modestas-j-b41b69267">https://www.linkedin.com/in/modestas-j-b41b69267</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
