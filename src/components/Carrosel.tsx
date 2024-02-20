import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Carrosel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/sonic.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Slide 1</h3>
                    <p>Descrição do Slide 1.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/Mulan-Premier-Access-Disney-Plus.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Slide 2</h3>
                    <p>Descrição do Slide 2.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/the boys.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Slide 3</h3>
                    <p>Descrição do Slide 3.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
