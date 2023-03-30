import "./Footer.css"
export const Footer = () =>{
    return (
        <>
        <div className="footer">
        <div className="sec_1" style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", justifyContent:"space-between"}}>
            <div>
                <div>
                    <i class="fa-regular fa-circle-question font-60"></i>
                </div>
                <a href="/">Visit Our Support Center</a>
            </div>
            <div>
                <div>
                    <i class="fa-solid fa-dolly font-60"></i>
                </div>
                <a href="/">Check your Order Status</a>
            </div>
            <div>
                <div>
                    <i class="fa-solid fa-truck-fast font-60"></i>
                </div>
                <a href="/">Shipping, Delivery & Store Pickup</a>
            </div>
            <div>
                <div>
                    <i class="fa-solid fa-right-left font-60"></i>
                </div>
                <a href="/">Returns & Exchanges</a>
            </div>
        </div>
        
        <div className="sec_2" style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", width:"100%",justifyContent:"space-between"}}>
            <div id="sec_2-1" style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",width:"100%"}}>
                <div>
                    <h3>Order & Purchases</h3>
                    <p>Check Order Status</p>
                    <p>Shipping, Delivery & Pickup</p>
                    <p>Returns & Exchanges</p>
                </div>
                <div>
                    <h3>Support & Services</h3>
                    <p>Visit our Support Center</p>
                    <p>Shop with an Expert</p>
                    <p>Schedule a Service</p>
                </div>
                <div>
                    <h3>Partnerships</h3>
                    <p>Best Buy Totaltech</p>
                    <p>My Best Buy</p>
                    <p>View Points & Certificates</p>
                    <p>Member Offers</p>
                </div>
                <div>
                    <h3>Payment Options</h3>
                    <p>Affiliate Program</p>
                    <p>Advertise with Us</p>
                    <p>Developers</p>
                </div>
                <div>
                    <h3>Rewards & Membership</h3>
                    <p>My Best Buy® Credit Card</p>
                    <p>Pay Your Bill at Citibank</p>
                    <p>Lease to Own</p>
                </div>
                <div>
                    <h3>About Best Buy</h3>
                    <p> Corporate Information</p>
                    <p>Careers</p>
                    <p>Corporate Responsibility & Sustainability</p>
                    <p>Discover & Learn</p>
                </div>
            </div>
            <div id="footer_form">
                <p>Sign in or Create Account</p>
                <div className="hl"></div>
                <h3>Get the latest deals and more.</h3>
                <input type="text" placeholder="Enter email Address"/>
                <input type="submit" value="Sign Up"/>
                <div className="hl"></div>
                <div>
                    <i class="fa-solid fa-mobile-button"></i>
                    <span>Best Buy App </span>
                </div>
                <div className="hl"></div>
                <div>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-pinterest"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <p>Forums, blogs & more</p>
            </div>
        </div>
        <div style={{marginLeft:"30px"}}>
            <p>How was your experience?<span>Give feedback about our website</span></p>
        </div>
        <div className="hl"></div>
        <div id="sec_3">
            <div>
                <p>Accessibility</p>
                <p>Terms & Conditions</p>
                <p>Privacy</p>
                <p>Interest-Based Ads</p>
                <p>California Privacy Rights</p>
                <p>Do Not Sell My Personal Information</p>
                <p>California Supply Chain Transparency Act</p>
            </div>
            <div>
                In-store pricing may vary. Prices and offers are subject to change. © 2022 Best Buy. All rights
                reserved. BEST BUY, the BEST BUY logo, the tag design, and MY BEST BUY are trademarks of Best Buy and
                its affiliated companies.
            </div>
        </div>
    </div>
        </>
    )
}