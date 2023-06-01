import React from 'react'
import './index.css'

const Contact = () => {
  return (
    <section className="contact section container" id="contact">
      <h2 className="section__title">Contato</h2>
      <span className='section__subtitle'>Deseja trabalhar comigo? Entre em contato!</span>
    <div className="contact__container">
      <div className="contact__ways-container">
        <h3 className="contact__container-title">Fale comigo</h3>
        <div className="contact__way-item">
        <div className="contact__way-header">
          <i class="uil uil-envelope-edit"></i>
          <span className='contact__way-title'>E-mail</span>
        </div>
        <span className="contact__way">eduardo.santsouza@gmail.com</span>
        <a href="" className="contact__link">
          Entre em contato 
          <i class="uil uil-arrow-right"></i>
        </a>
        </div>

        <div className="contact__way-item">
        <div className="contact__way-header">
          <i class="uil uil-linkedin-alt"></i>
          <span className='contact__way-title'>Linkedin</span>
        </div>
        <span className="contact__way">eduardo-sant-souza</span>
        <a href="https://www.linkedin.com/in/eduardo-sant-souza/" className="contact__link">
          Entre em contato 
          <i class="uil uil-arrow-right"></i>
        </a>
        </div>

        <div className="contact__way-item">
        <div className="contact__way-header">
          <i class="uil uil-whatsapp"></i>
          <span className='contact__way-title'>Whatsapp Link</span>
        </div>
        <span className="contact__way">Envie uma mensagem</span>
        <a href="" className="contact__link">
          Entre em contato 
          <i class="uil uil-arrow-right"></i>
        </a>
        </div>
      </div>
      <div className="contact__form-container">
      <h3 className="contact__container-title">Me mande seu projeto</h3>
        <form action="" className='contact__form'>
          <div className="form-item">
            <label htmlFor="name">Nome</label>
            <input type="text" name='Nome' placeholder='Insira seu nome' required/>
          </div>  
          <div className="form-item">
            <label htmlFor="email">E-mail</label>
            <input type="email" name='Email' placeholder='Insira seu e-mail' required/>
          </div>

          <div className="form-item">
            <label htmlFor="message">Projeto</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </div>
          
          <button className="button button--flex">
            Mande sua mensagem
            <svg 
            className='form__icon'
            width="29" 
            height="29" 
            viewBox="0 0 29 29" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_13_92)">
            <path d="M18.1384 7.99798L5.35359 10.584C4.84969 10.6869 4.38978 10.9426 4.03657 11.3165C3.68335 11.6903 3.45403 12.164 3.37985 12.6729C3.30568 13.1818 3.39027 13.7012 3.62209 14.1603C3.85391 14.6194 4.22168 14.9958 4.67526 15.2383L9.00636 17.5333C9.10873 17.5906 9.19866 17.6677 9.27089 17.7602C9.34313 17.8526 9.39622 17.9586 9.42707 18.0718L10.6061 22.8294C10.7069 23.2336 10.9072 23.6063 11.1886 23.9134C11.4701 24.2206 11.8238 24.4525 12.2177 24.5882C12.6116 24.7238 13.0331 24.7589 13.444 24.6902C13.8549 24.6215 14.2422 24.4512 14.5705 24.1948C14.8756 23.9515 15.1224 23.6431 15.2928 23.2921L20.8949 11.5126C21.0929 11.0938 21.1705 10.6282 21.1193 10.1678C21.068 9.70742 20.8899 9.27032 20.6047 8.90528C20.3195 8.54024 19.9384 8.26162 19.5041 8.1005C19.0698 7.93939 18.5992 7.90212 18.145 7.99285L18.1384 7.99798ZM19.3856 10.7989L13.7835 22.5784C13.708 22.7307 13.5878 22.8562 13.439 22.9383C13.2902 23.0203 13.1198 23.0549 12.9508 23.0374C12.7818 23.0198 12.6221 22.9511 12.4933 22.8402C12.3644 22.7294 12.2726 22.5818 12.23 22.4173L11.0444 17.6648C11.0279 17.6018 11.0077 17.5399 10.984 17.4793L15.5085 13.9443C15.6827 13.8083 15.7956 13.6086 15.8226 13.3892C15.8495 13.1699 15.7882 12.9488 15.6521 12.7746C15.5161 12.6005 15.3164 12.4875 15.097 12.4605C14.8777 12.4336 14.6566 12.4949 14.4824 12.631L9.95791 16.1659C9.90485 16.1282 9.84962 16.0937 9.79251 16.0625L5.46797 13.7623C5.31864 13.6812 5.19768 13.5564 5.12132 13.4045C5.04495 13.2527 5.01683 13.0812 5.04072 12.9129C5.06461 12.7447 5.13937 12.5878 5.25497 12.4632C5.37058 12.3386 5.52151 12.2524 5.68751 12.216L18.4723 9.63005C18.623 9.60112 18.7786 9.61431 18.9222 9.66818C19.0658 9.72206 19.1918 9.81451 19.2862 9.93537C19.3806 10.0562 19.4399 10.2008 19.4574 10.3532C19.4749 10.5055 19.4501 10.6598 19.3856 10.7989Z" fill="var(--text-white)"/>
            </g>
            <defs>
            <clipPath id="clip0_13_92">
            <rect width="20" height="20" fill="white" transform="translate(0 12.3132) rotate(-38)"/>
            </clipPath>
            </defs>
            </svg>
        </button>
        </form>
      </div>
    </div>
    </section>
  )
}

export default Contact