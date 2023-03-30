import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css"
import "../Homepage.css"
export function SliderOne() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
            slidesToSlide: 2,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4,
            slidesToSlide: 2,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (

        <Carousel responsive={responsive} className="SliderTwo">
            <div>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502660_sd.jpg" alt="SliderImage" />
                <p>Lenovo - Ideapad 1 15.6 FHD Touch-Screen Laptop - Ryzen 7...</p>
            </div>
            <div>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6503/6503849_sd.jpg" alt="" />
                <p>HP - Victus 15.6 Gaming Laptop - Intel Core i5-12450H - 8GB Memory - NVIDIA GeForce GTX...</p>
            </div>
            <div>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509757_sd.jpg" alt="" />
                <p>Doctor Strange in the Multiverse of Madness [SteelBook][Digital...</p>
            </div>
            <div>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505200_sd.jpg" alt="" />
                <p>Microsoft - Surface Laptop Go 2 - 12.4” Touch-Screen – Intel Core i5...</p>
            </div>
            <div>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505727_rd.jpg" alt="" />
                <p>Sony - WH-1000XM5 Wireless Noise-Canceling Over-the-Ear...</p>
            </div>
            

        </Carousel>
    );
};

