import React, { Component } from 'react'
import "./About.css"

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="about-image"><img src="./images/Rita.jpg" alt="Rita Pequeno" /></div>
                <div className="about-text-container">
                    <div className="about-text">
                        <p style={{fontWeight: 'bold'}}>
                            Para propostas, pedidos de colaboração e outros assuntos:
                    </p>
                        <p>
                            anarita.arca@gmail.com
                    </p>
                        <p>
                            <a href="https://www.instagram.com/rita_____pequeno/">@rita__pequeno</a>
                        </p>
                        <p>
                            RITA PEQUENO, 1997, natural de Vila Franca de Xira, licenciada em Pintura na Faculdade de Belas Artes da Universidade de Lisboa (2020),
                            participou no programa erasmus na Ecole Nationale Supérieure d’Arts de Paris-Cergy (2019), posteriormente obteve formação de Design de
                            Comunicação, na Escola Artística António Arroio.
                    </p>
                        <p>
                            Nas suas criações existe uma procura da desconstrução da pintura e um hibridismo entre esta e a escultura, uma associação constitui a sua
                            linguagem formal e pessoal. Ao transformar a pintura em objeto, estes passam a ser o tema e o alvo da criação artística. Esta transforma-se
                            numa narrativa pictórica e simples, na qual procura apelar ao humor e a uma certa forma de imprudência.
                    </p>
                        <p>
                            Já participou em exposições coletivas tais como:
                    </p>
                        <ul>
                            <li>Exposição colectiva. Manuel António Pina: Dos Olhos e Das Matérias- SNBA- Sociedade Nacional das Belas Artes de Lisboa (Lisboa, Portugal, 2019)</li>
                            <li>Devo-vos a verdade,( Lisboa, Portugal, 2019)</li>
                            <li>Casa da Cerca-Exposição colectiva de Cerâmica (Lisboa, Portugal, 2016).</li>
                        </ul>
                        <p>Futuras exposições:</p>
                        <ul>
                            <li>SOMETHING HAS GOT TO GIVE- Duplex AIR (Lisboa, Portugal, 2021)</li>
                            <li>Casa Rosário (Cascais, Portugal, 2021)</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default About