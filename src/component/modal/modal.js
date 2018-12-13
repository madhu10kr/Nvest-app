import React, { Component } from 'react'
import { Modal} from 'react-bootstrap';
import './modal.css'

class ModalDisplay extends Component {
    constructor(props) {
        super(props);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleHide() {
        this.setState({ show: false });
    };

    componentDidMount() {
        this.setState({
            show: true
        })
    };

    render() {
        return (
            <div className="modal-container">

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Thank You
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Your Data Has Been Submitted
            </Modal.Body>

                </Modal>
            </div>
        );
    }
}

export default ModalDisplay;