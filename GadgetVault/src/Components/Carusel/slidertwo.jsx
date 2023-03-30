import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css"
import "../Homepage.css"
export function SliderTwo() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
            slidesToSlide: 1,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4,
            slidesToSlide: 1,
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
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-549829_pol_COPE_DER-fa200b0f-0f59-4944-84ce-13f51119db12.jpg" alt="alt" />
                <p>Apple Watch Save up to $70 on select models.</p>
                <p>Minimum savings is $30. Excludes open-box and refurbished items.</p>
            </div>
            <div>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_MMT-549800_der-b2458fef-e15a-4f61-87e6-66976b17ba3a.jpg" alt="alt" />
                <p>Appliance Summer Savings Event..</p>
                <p>Bring summer home with new appliances for your kitchen and laundry room</p>
            </div>
            <div>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_microsoft-happy-guy-v2-0620-3a7b8bc1-22dd-4fc9-8cf6-905382572981.jpg" alt="alt" />
                <p>Introducing Surface Laptop Go 2.</p>
                <p>Sleek, light, on the go performance.</p>
            </div>
            <div>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-traeger-mmt549810-5ca17726-f4bd-490f-9b37-99065dacf67f.jpg" alt="alt" />
                <p>Save up to $150 on select Traeger grills.</p>
                <p>Experience the flavor of wood pellet grilling this summer.</p>
            </div>
            <div>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-549477_pol_COPE_DER-bb7580c0-afa1-4b6b-9775-d78aa1be89e3.jpg" alt="alt" />
                <p>Save up to $100 on select wearables.</p>
                <p>Keep your goals on track with smartwatches and fitness trackers from Fitbit</p>
            </div>
            <div>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-552676-220606_DER-b3ba4051-f64a-439b-88f2-99e7308c0c6a.jpg" alt="alt" />
                <p>Save up to $100 on select GoPro.</p>
                <p>Minimum savings is $50. Terms and conditions apply to gift card offer.</p>
            </div>
        </Carousel>
    );
};