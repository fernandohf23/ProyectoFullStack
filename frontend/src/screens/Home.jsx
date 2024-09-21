import React from 'react';
import '../css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';

const productData = {
  phones: [
    { img: '/img/iphone.jpg', name: 'iPhone 14 Pro Max', price: '$1,099' },
    { img: '/img/fundas.png', name: 'Fundas para iPhone', price: '$49.99' },
    { img: '/img/auriculares.jpg', name: 'Auriculares AirPods Pro', price: '$249' }
  ],
  computers: [
    { img: '/img/laptop.jpg', name: 'MacBook Air M2', price: '$1,299' },
    { img: '/img/tablet.jpg', name: 'Samsung Galaxy Tab', price: '$649' },
    { img: '/img/teclado.jpg', name: 'Teclado Mecánico Razer', price: '$129.99' }
  ],
  appliances: [
    { img: '/img/microonda.png', name: 'Microondas Panasonic', price: '$199' },
    { img: '/img/aspiradora.jpg', name: 'Aspiradora Dyson V15', price: '$699' },
    { img: '/img/purificador.jpg', name: 'Purificador de Aire Philips', price: '$299' }
  ],
  cameras: [
    { img: '/img/canon.jpg', name: 'Canon EOS R5', price: '$3,899' },
    { img: '/img/lente.png', name: 'Lente Sigma 24-70mm', price: '$1,299' },
    { img: '/img/tripode.jpg', name: 'Trípode Manfrotto', price: '$149' }
  ],
  portable: [
    { img: '/img/apple-watch.jpg', name: 'Apple Watch Series 8', price: '$399' },
    { img: '/img/garmin.png', name: 'Garmin Forerunner', price: '$299' },
    { img: '/img/audifonos.jpg', name: 'Auriculares Sony WH-1000XM4', price: '$349' }
  ],
  computing: [
    { img: '/img/router.jpg', name: 'Router Wi-Fi 6 Netgear', price: '$299' },
    { img: '/img/ssd.jpg', name: 'Disco Duro Externo Samsung T7', price: '$139' },
    { img: '/img/cable-hdmi.jpg', name: 'Cable HDMI Belkin 4K', price: '$29.99' }
  ]
};

export const Home = () => {
  return (
    <Container fluid className="home-container">
      {/* Carrusel de Productos Destacados */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src="/img/poloRemove.png" alt="Elegancia Casual" />
            <Carousel.Caption>
              <h3>Elegancia Casual</h3>
              <p>Descubre nuestro polo de alta calidad, perfecto para un look casual y elegante. Hecho con materiales suaves y duraderos, ideal para cualquier ocasión.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/img/pantalonRemove.png" alt="Estilo y Confort" />
            <Carousel.Caption>
              <h3>Estilo y Confort</h3>
              <p>Estos pantalones combinan estilo moderno con comodidad suprema. Con un diseño versátil, son perfectos tanto para el trabajo como para el ocio.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/img/tacones2.png" alt="Elegancia a tus Pies" />
            <Carousel.Caption>
              <h3>Elegancia a tus Pies</h3>
              <p>Realza tu presencia con nuestros tacones elegantes. Con un diseño sofisticado y cómodo, estos tacones son el complemento perfecto para cualquier evento especial.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Sección de Productos */}
      <div className="product-sections">
        {Object.keys(productData).map(category => (
          <div key={category} className="product-section">
            <h2>{capitalizeFirstLetter(category.replace(/([A-Z])/g, ' $1'))}</h2>
            <Row className="g-4">
              {productData[category].map((product, index) => (
                <Col sm={12} md={6} lg={4} key={index}>
                  <Card className="product-card">
                    <Card.Img variant="top" src={product.img} alt={product.name} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.price}</Card.Text>
                      <Button variant="primary">Comprar</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
    </Container>
  );
};

// Helper function to capitalize the first letter
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
