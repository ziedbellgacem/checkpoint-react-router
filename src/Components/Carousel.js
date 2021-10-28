import "./CarStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"

function CarouSel(){
    return(    
<Carousel className="car">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/564x/d3/2a/db/d32adb0ce736393c868b9fc4b2da94cf.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpaperaccess.com/full/3075771.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.alphacoders.com/113/thumb-1920-1136691.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://images6.fanpop.com/image/photos/43300000/Onward-onward-43384441-1920-1080.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpapercave.com/wp/wp6679485.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



        
    )
}
export default CarouSel;