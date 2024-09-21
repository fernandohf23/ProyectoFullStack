import React from 'react';
import Slider from 'react-slick';
import '../css/Products.css'; // Asegúrate de importar el CSS

export const Products = () => {
  const productsData = {
    section1: [
      { id: 1, name: "Producto 1A", price: 29.99, image: "/img/laptop.jpg", description: "Descripción corta del Producto 1A." },
      { id: 2, name: "Producto 1B", price: 39.99, image: "/img/iphone.jpg", description: "Descripción corta del Producto 1B." },
      { id: 3, name: "Producto 1C", price: 39.99, image: "/img/lente.png", description: "Descripción corta del Producto 1C." },
      { id: 4, name: "Producto 1D", price: 39.99, image: "/img/auriculares.jpg", description: "Descripción corta del Producto 1D." }
    ],
    section2: [
      { id: 5, name: "Producto 2A", price: 49.99, image: "/img/microonda.png", description: "Descripción corta del Producto 2A." },
      { id: 6, name: "Producto 2B", price: 19.99, image: "/img/garmin.png", description: "Descripción corta del Producto 2B." },
      { id: 7, name: "Producto 2C", price: 49.99, image: "/img/pantalonRemove.png", description: "Descripción corta del Producto 2C." },
      { id: 8, name: "Producto 2D", price: 19.99, image: "/img/ssd.jpg", description: "Descripción corta del Producto 2D." }
    ],
    section3: [
      { id: 9, name: "Producto 3A", price: 25.99, image: "/img/teclado.jpg", description: "Descripción corta del Producto 3A." },
      { id: 10, name: "Producto 3B", price: 15.99, image: "/img/tripode.jpg", description: "Descripción corta del Producto 3B." },
      { id: 11, name: "Producto 3C", price: 25.99, image: "/img/tacones2.png", description: "Descripción corta del Producto 3C." },
      { id: 12, name: "Producto 3D", price: 15.99, image: "/img/fundas.png", description: "Descripción corta del Producto 3D." },
    ],
    section4: [
      { id: 13, name: "Producto 4A", price: 29.99, image: "/img/canon.jpg", description: "Descripción corta del Producto 4A." },
      { id: 14, name: "Producto 4B", price: 39.99, image: "/img/aspiradora.jpg", description: "Descripción corta del Producto 4B." },
      { id: 15, name: "Producto 4C", price: 29.99, image: "/img/apple-watch.jpg", description: "Descripción corta del Producto 4C." },
      { id: 16, name: "Producto 4D", price: 39.99, image: "/img/cable-hdmi.jpg", description: "Descripción corta del Producto 4D." },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${product.name} añadido al carrito`);
  };

  return (
    <div className="products-container">
      <h1 className="products-title">Explora Nuestros Productos</h1>
      {Object.entries(productsData).map(([sectionKey, products], index) => (
        <div key={sectionKey} className="product-section">
          <h2>Sección {index + 1}</h2>
          <Slider {...settings}>
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};
