import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Mycarousel: React.FC = () => {
    return (
        <>
            <Carousel className='absolute top-16 z-0'>
                <div>
                    <img src="../../public/tof.webp" alt="Slide 1" />
                </div>
                <div>
                    <img src="../../public/rdr2.jpg" alt="Slide 2" />
                </div>
            </Carousel>
        </>
    );
};

export default Mycarousel;