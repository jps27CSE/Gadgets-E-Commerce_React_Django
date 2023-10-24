
import img1 from '../Products../../../image/c72858992482c70d5ec3a585eec352ed.png'
import img3 from '../Products../../../image/7995902.jpg'
import pic from '../Products../../../image/8642509.jpg'
import pic2 from '../Products../../../image/30193.jpg'

const Banner = () => {
    return (
        <div className='mt-4'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-[250px] md:h-[350px] lg:h-[550px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-[250px] md:h-[350px]  lg:h-[550px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={pic} className="w-full h-[250px] md:h-[350px]  lg:h-[550px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={pic2} className="w-full h-[250px] md:h-[350px]  lg:h-[550px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;