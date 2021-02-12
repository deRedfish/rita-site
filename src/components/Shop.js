import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import './Shop.css'

class Shop extends Component {
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

    handleShow(thing, thong) {
        this.setState({
            show: true,
            image: thing,
            description: thong
        });
    }

    handleHover(thing) {
        this.setState({
            title: thing,
        });
    }

    render() {
        return (
            <div className="shop-container">
                <div className="shop-text-container">
                    <div className="shop-text">
                        <p>As seguintes peças encontram-se disponiveis para venda.</p>
                        <p>Para mais detalhes, perguntas, ou encomendas contactar por e-mail ou pelo Instagram.</p>
                        <p>anarita.arca@gmail.com</p>
                        <p><a href="https://www.instagram.com/rita_____pequeno/">@rita__pequeno</a></p>
                    </div>
                </div>

                <div className="shop-grid-container">
                    <div className="shop-grid-item">
                        <img className="shop-grid-item" src="./images/shop/venda2.jpg" title="Flauta, 2020." alt="Argila, engobe e vidrado de baixa temperatura. 26 x 7 x 4 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt)} />
                        <div className="shop-grid-item-overlay"></div>
                        <div className="shop-grid-item-overlay-text">
                            <p>{this.state.title}</p>
                        </div>
                    </div>

                    <div className="shop-grid-item">
                        <img className="shop-grid-item" src="./images/shop/venda5.jpg" title="Pássaro, 2020." alt="Argila e vidrado de baixa temperatura. 17 x 29 x 26 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt)} />
                        <div className="shop-grid-item-overlay"></div>
                        <div className="shop-grid-item-overlay-text">
                            <p>{this.state.title}</p>
                        </div>
                    </div>

                    <div className="shop-grid-item">
                        <img className="shop-grid-item" src="./images/shop/venda6-2.jpg" title="A Piscina, 2019." alt="Faiança, chamotes coloridas e vidrado de baixa temperatura. 32 x 27 x 6 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt)} />
                        <div className="shop-grid-item-overlay"></div>
                        <div className="shop-grid-item-overlay-text">
                            <p>{this.state.title}</p>
                        </div>
                    </div>

                    <div className="shop-grid-item">
                        <img className="shop-grid-item" src="./images/shop/venda7.jpg" title="Sino, 2019." alt="Grês, porcelana, chamotes coloridas e vidrado de alta temperatura. 9 x 5 x 5 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt)} />
                        <div className="shop-grid-item-overlay"></div>
                        <div className="shop-grid-item-overlay-text">
                            <p>{this.state.title}</p>
                        </div>
                    </div>

                    <div className="shop-grid-item">
                        <img className="shop-grid-item" src="./images/shop/venda1.jpg" title="Untitled, 2019." alt="Grês e vidrado de alta temperatura. 25 x 20 x 15 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt)} />
                        <div className="shop-grid-item-overlay"></div>
                        <div className="shop-grid-item-overlay-text">
                            <p>{this.state.title}</p>
                        </div>
                    </div>

                    <div className="shop-grid-item">
                        <img className="shop-grid-item" src="./images/shop/venda3.jpg" title="Arco Íris, 2020." alt="Grês e vidrado de alta temperatura. 30 x 35 x 9 cm." onMouseEnter={e => this.handleHover(e.target.title)} onClick={e => this.handleShow(e.target.src, e.target.alt)} />
                        <div className="shop-grid-item-overlay"></div>
                        <div className="shop-grid-item-overlay-text">
                            <p>{this.state.title}</p>
                        </div>
                    </div>

                    <Modal className="modal-container" dialogClassName="modal-size" show={this.state.show} onHide={this.handleClose} centered>
                        <img src={this.state.image} alt={this.state.description} />
                        <div className="modal-description">
                            <p>
                                {this.state.description}
                            </p>
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Shop