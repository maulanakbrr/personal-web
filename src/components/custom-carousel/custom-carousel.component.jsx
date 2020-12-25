import { 
  CarouselModified, CarouselItem, CarouselImage, CarouselCaption 
} from './custom-carousel.styles';

const CustomCarousel = () => {
  return(
    <CarouselModified interval={5000}>
      <CarouselItem>
          <CarouselImage style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/slide-1.jpg'})`}}/>
          <CarouselCaption>
            <h2>
              <span>//</span>
              Web Developer
            </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>  
          </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
          <CarouselImage style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/slide-2.jpg'})`}}/>
          <CarouselCaption>
            <h2>Hai</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>  
          </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
          <CarouselImage style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/slide-3.jpg'})`}}/>
          <CarouselCaption>
            <h2>Hai</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>  
          </CarouselCaption>
      </CarouselItem>
    </CarouselModified>
  );
}

export default CustomCarousel;