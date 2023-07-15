// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './HomeSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function HomeSection() {
  const downloadPDF = () => {
    const link = document.createElement('a')
    link.href = '../src/assets/DavidQuintanilla_CV.pdf'
    link.download = 'DavidQuintanilla_CV.pdf'
    link.click()
  }

  return (
    <>
      <div className='contenedor'>
        <div className='container-info'>
          <div className='section-izq'>
            <span className='titulo'>David F. Quintanilla</span>
            <div className='info'>
              <FontAwesomeIcon className='iconitos' icon={faGithub} />
              <FontAwesomeIcon className='iconitos' icon={faLinkedin} />
              <button onClick={downloadPDF}>Descargar CV</button>
            </div>
            <div className='bio'>
              <p>
                Soy un desarrollador altamente motivado y apasionado por la
                creación de soluciones innovadoras. Con una sólida experiencia
                tanto en Front-end como en Back-end, me enorgullece entregar
                productos de alta calidad y superar los desafíos que se me
                presentan. Además de mi experiencia técnica, tengo una habilidad
                excepcional para trabajar en equipo y comunicarme de manera
                efectiva. Siempre estoy buscando aprender y mejorar mis
                habilidades, manteniéndome al día con las últimas tendencias y
                mejores prácticas en el campo del desarrollo web y back-end.
              </p>
            </div>
          </div>
          <div className='section-der'>
            <div className='foto-perfil'>
              <img
                className='foto'
                src='../src/assets/fotoPerfil.jpg'
                alt='foto-perfil'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection
