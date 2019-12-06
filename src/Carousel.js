import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bkg from './bkg.jpg';
import bkg1 from './bkg1.jpg';
import bkg2 from './bkg2.jpg';
import bkg3 from './bkg3.jpg';
import bkg4 from './bkg4.jpg';
import bkg5 from './bkg5.jpg';
import bkg6 from './bkg6.jpg';
import './Carousel.css';

function ControlledCarousel() {
  return (
    <>
      <div className="filtro"></div>
      <Carousel fade={true} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>El Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <p>Les Desea</p>
          <h3>Feliz Navidad y un Próspero 2020</h3>
          <p>Que tus sueños y realizaciones sean logradas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>El Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <p>Les Desea</p>
          <h3>¡Felices fiestas!</h3>
          <p>Les deseamos Paz, Salud, Amor, Alegría y Mucha Felicidad</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>El Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <p>Les Desea</p>
          <h3>¡Feliz Navidad!</h3>
          <p>Con todo mi cariño, te deseamos que la magia de la Navidad e ayude a conseguir todos tus sueños.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>El Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <p>Les Desea</p>
          <h3>¡Felices fiestas!</h3>
          <p>Para Navidad: felicidad. Para Año Nuevo: prosperidad. Y para siempre: nuestra amistad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>El Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <p>Les Desea</p>
          <h3>¡Feliz Navidad!</h3>
          <p>Ojalá tus problemas duren tanto como tus propósitos de año nuevo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>El Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <p>Les Desea</p>
          <h3>¡Felices fiestas!</h3>
          <p>Mejor que regalos bajo un árbol de navidad es la presencia de una familia feliz a su alrededor.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src={bkg6}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>El Instituto Mexicano del Cemento y del Concreto A.C.</p>
          <p>Les Desea</p>
          <h3>¡Feliz Año Nuevo!</h3>
          <p>Te deseamos un venturoso año 2020 en el que se cumplan todos tus deseos e ilusiones.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
    
  );
}

export default ControlledCarousel;