import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      image: '',
      description: '',
      title: ''
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleShow(thing, thong, thang) {
    this.setState({
      show: true,
      image: thing,
      description: thong,
      title: thang
    });
  }

  handleHover(thing) {
    this.setState({
      title: thing,
    });
  }

  render() {
    return (
      <div className="home-grid-container">
        <div className="home-grid-item">
          <img src="./images/home/img1.jpg" title="Coisa" alt="YOLO" onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>

        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/shop/venda2.jpg" title="Flauta, 2020." alt="Argila, engobe e vidrado de baixa temperatura. 26 x 7 x 4 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img2.jpg" title="Muro, 2018." alt="Acrílico e tecido s/ tela. 25 x 24,5 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img3.jpg" title="Tríptico, 2018." alt="Técnica Mista." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img4.jpg" title="Untitled, 2018." alt="Grês e tela. 50 x 50 cm / 12 x 6 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img5.jpg" title="Mesa, 2018." alt="Acrílico e colagens s/ tela. 80 x 60 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img6.jpg" title="YOLO" alt="YOLO" onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/shop/venda5.jpg" title="Pássaro, 2020." alt="Argila e vidrado de baixa temperatura. 17 x 29 x 26 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img7.jpg" title="Pontos, 2019." alt="Dimensões Variadas. Instalação." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img8.jpg" title="YOLO" alt="YOLO" onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img9.jpg" title="YOLO" alt="YOLO" onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/shop/venda6-2.jpg" title="A Piscina, 2019." alt="Faiança, chamotes coloridas e vidrado de baixa temperatura. 32 x 27 x 6 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img10.jpg" title="Baloiço, 2019." alt="Dimensões Variadas. Instalação." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img11.jpg" title="Canto, 2019." alt="Madeira, pasta de papel, linho e acrílico. 81 x 64 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img12.jpg" title="Por do Sol, 2019." alt="Feltro s/tela. 42 x 34 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img13.jpg" title="YOLO" alt="YOLO" onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img14.jpg" title="Ancinho, 2019." alt="Silicone e oleo s/tela. 120x 73 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img15.jpg" title="Conta Gotas, 2019." alt="Pasta de Papel. 39 x 32 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img16.jpg" title="Tijolos, 2019." alt="Grês e vidrado de alta temperatura. 54 x 48 x 18 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img17.jpg" title="Escadas, 2019." alt="Grês e vidrado de alta temperatura. 14 x 23 x 42 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/shop/venda7.jpg" title="Sino, 2019." alt="Grês, porcelana, chamotes coloridas e vidrado de alta temperatura. 9 x 5 x 5 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img18.jpg" title="YOLO" alt="YOLO" onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img19.jpg" title="Gota, 2019." alt="Pasta de papel e madeira. 140 x 110 x 100 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img20.jpg" title="YOLO" alt="YOLO" onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img21.jpg" title="Contraforte 2, 2019." alt="Pasta de Papel e madeira. 218 x 150 x 54 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img22.jpg" title="YOLO" alt="YOLO" onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img23.jpg" title="Duas a três manchas, 2020." alt="Acrílico, óleo, gesso e pastel de óleo s/ papel. 100x70cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img24.jpg" title="YOLO" alt="YOLO" onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/shop/venda1.jpg" title="Untitled, 2019." alt="Grês e vidrado de alta temperatura. 25 x 20 x 15 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/shop/venda3.jpg" title="Arco Íris, 2020." alt="Grês e vidrado de alta temperatura. 30 x 35 x 9 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img26.jpg" title="A Janela, 2019." alt="Pasta de Papel. 69 x 51 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img27.jpg" title="Contraforte, 2019." alt="Pasta de Papel e madeira. 22,5 x 2,5 x 15 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img28.jpg" title="Femme et homme, 2019." alt="Pasta de Papel. 105 x 62 x 20 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <div className="home-grid-item">
          <img className="home-grid-item" src="./images/home/img29.jpg" title="Cubo, 2018." alt="Pasta de Papel. 21 x 19 x 10 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt, e.target.title)} />
          <div className="home-grid-item-overlay"></div>
          <div className="home-grid-item-overlay-text">
            <p>{this.state.title}</p>
          </div>
        </div>

        <Modal className="modal-container" dialogClassName="modal-size" show={this.state.show} onHide={this.handleClose} centered>
          <img src={this.state.image} alt={this.state.description} />
          <div className="modal-description">
            <p>{this.state.title}</p>
            <p>{this.state.description}</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Home