import fondo1 from './fondo1.jpg';
import fondo2 from './fondo2.jpg';
import fondo3 from './fondo3.jpg';
import { Carousel } from 'react-bootstrap';

export const CarrouselImagenes=()=>
{
    return (
<Carousel prevLabel="Anterior" nextLabel="Proximo" >
  <Carousel.Item className="carousel-item">
    <img
      className="d-block w-100"
      src={fondo1}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fondo2}
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fondo3}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
    )
}