// import { SliderOne } from "../../Components/Carusel/SliderOne";
// import { SliderTwo } from "./Carusel/slidertwo";
import "./Homepage.css";
export const HomePage = () => {
  return (
    <div>
      <div id="firstsec">
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-510776_2022TopDeals-GHPApp-LV-55adde1f-dd0b-48d7-9a08-b28bbc00187d.jpg"
            alt=""
          />
          <p>Deals Mode Activated</p>
        </div>
        <div>
          <div id="first">
            <p>Today's popular picks</p>
            <div>
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=640;maxWidth=550"
                  alt="Apple - AirPods Pro (with Magsafe..."
                />
                <p>Apple - AirPods Pro with Magsafe...</p>
              </div>
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487447_sd.jpg;maxHeight=640;maxWidth=550"
                  alt="Apple - iPhone 13 Pro Max 5G 128GB - Alpin..."
                />
                <p>Apple - iPhone 13 Pro Max 5G 128GB - Alpin...</p>
              </div>
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215932_sd.jpg;maxHeight=640;maxWidth=550"
                  alt="Apple Watch Series 7 (GPS) 41mm Midnight..."
                />
                <p>Apple Watch Series 7 (GPS) 41mm Midnight...</p>
              </div>
              <div>
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=640;maxWidth=550"
                  alt="MacBook Air 13.3 Laptop - Apple M1..."
                />
                <p>MacBook Air 13.3 Laptop - Apple M1...</p>
              </div>
            </div>
          </div>
          <div id="second">
            <div>
              <p>
                <span>Outlet</span>
                <span>Deals</span>
              </p>
              <p>
                <span>Clearance</span>
                <span>, open-box and more</span>
                <span>.</span>
              </p>
              <p>View outlet deals</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Continue Shopping</p>
              <img
                style={{ margin: "auto" }}
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487447_sd.jpg;maxHeight=640;maxWidth=550"
                alt=""
              />
              <p>Apple - iPhone 13 Pro Max 5G 128GB...</p>
              <p>Save on similar items</p>
            </div>
          </div>
        </div>
      </div>

      <div id="secondsec">
        <p>Most-viewed items</p>
        {/* <SliderOne/> */}
        {/* <div id="secondsec1">
    
    </div> */}
        <div id="secondsec2">
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-confident-210831-c34d2a74-8b79-41cd-8161-b9987666f7d6.png;maxHeight=72;maxWidth=72"
              alt=""
            />
            <div>
              <p>Shop safely and confidently.</p>
              <p>See our safety procedures</p>
            </div>
          </div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-expert-210831-70c599ed-fc34-47d8-9b93-85f899d93c8f.png;maxHeight=72;maxWidth=72"
              alt=""
            />
            <div>
              <p>Get help shopping from home.</p>
              <p>Shop with an Expert</p>
            </div>
          </div>
        </div>
        <div id="secondsec3">
          <p>Insignia™ air fryers product recall.</p>
          <p>Learn more</p>
        </div>
      </div>

      <div id="thirdsec">
        <div id="thirdsec1">
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-MMT-555591-windows-fcc6f1ef-675e-463d-bee8-64bd19088fbb.jpg"
            alt=""
          />
        </div>
        <div id="thirdsec2">
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-MMT-555591-tv-4ef8f148-989d-4846-ae5c-65854b349e5b.jpg"
            alt=""
          />
        </div>
      </div>

      <div id="forthsec">
        <div id="forthsec1">
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-37875-app-curbside-vpe_der-149659.png;maxHeight=144;maxWidth=144"
              alt=""
            />
            <div>
              <p>Ready in one hour</p>
              <p>with Store or Curbside Pickup.</p>
            </div>
          </div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=144;maxWidth=144"
              alt=""
            />
            <div>
              <p>Free next-day delivery</p>
              <p>on thousands of items.</p>
            </div>
          </div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=144;maxWidth=144"
              alt=""
            />
            <div>
              <p>Same-day delivery.</p>
              <p>Order by 3 p.m., get it by 8 p.m.</p>
              <p>Order by 2 p.m. Sunday.</p>
            </div>
          </div>
        </div>

        <div id="bar_main">
          <div id="bar">
            <div className="positn-abs">
              <h2>Best Buy</h2>
              <h1>Total Tech</h1>
              <button id="bar-btn">Learn More</button>
            </div>
            <div className="Vl positn-abs"></div>

            <div className="positn-abs">
              <h1>The membership you and your tech deserve.</h1>
              <p>
                Best Buy Totaltech™ provides 24/7/365 tech support, up to 24
                months of product protection with active membership, free
                standard installation and so much more.
              </p>
              <p>Terms and conditions apply*.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="fifthsec" style={{ width: "100%" }}>
        <div>
          <p>Everyday Gadgets</p>
          <div>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-fg-220509-6016e3c8-f983-4ac2-8dc9-b241bf9812da.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <p>For chill dads</p>
            </div>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-outdoors-220509-510c4e8d-b671-4e4c-b1ec-8fd8c41bcd13.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <p>For outdoorsy dads</p>
            </div>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-fitness-220509-9d40595e-4ce1-4d7d-8eb4-9d0c9c26e64f.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <p>For exercise-loving dads</p>
            </div>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72996-flex-persona-chef-220509-ea150d50-2edd-4735-ae5c-a6523eea7f37.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <p>For chef dads</p>
            </div>
          </div>
        </div>

        <div>
          <p>Grad gift ideas</p>
          <div>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-little-220516-9c86109f-7477-4382-9033-bb1a7d45a00f.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <p>For little grads</p>
            </div>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-middle-220516-5cb33289-f4ed-4e09-ac3e-2ba0e695496b.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <p>For middle school grads</p>
            </div>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-high-220516-30b898c1-65bb-4bcc-8c86-86f1bafda292.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <p>For high school grads</p>
            </div>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73044-flex-persona-college-220516-7a6d93f6-df65-46e3-be9c-a114e1204842.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <p>For college grads</p>
            </div>
          </div>
        </div>

        <div>
          <p>We’re driven by our impact</p>
          <div>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-74510-Explore-mentorship-220606-bec44b7f-cec2-4932-b5c0-0950e649fa6e.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <p>Tech access means brighter futures</p>
            </div>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-74510-Explore-more-love-220606-7dccad72-4487-4593-9c7c-56a5c2afa038.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <p>More celebrating. More love.</p>
            </div>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73679-flex-circular-eco-220509-e952af56-a1b6-477d-8a25-2ed4159c74e0.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <p>Sustainability is part of our ecosystem</p>
            </div>
            <div>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73679-flex-tablet-ttc-220509-1f7bc22c-3346-4a3a-9ace-031b35eb2c8e.jpg;maxHeight=432;maxWidth=432"
                alt=""
              />
              <p>Committed to making a difference</p>
            </div>
          </div>
        </div>
      </div>

      <div id="sixthsec">
        <p>Our featured offers</p>
        {/* <SliderTwo /> */}
        <div></div>
      </div>

      <div id="ninthsec">
        <div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-37400-pol-dotd-190823_der-98962.png;maxHeight=280;maxWidth=412"
              alt=""
            />
            <p>Deal of the Day.</p>
            <p>Great deals. Every day.</p>
          </div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/GL-37504-pol-outlet-190823-98410.png;maxHeight=280;maxWidth=412"
              alt=""
            />
            <p>Clearance, open-box and more.</p>
            <p>
              Save when you shop the Best Buy Outlet for clearance, open-box,
              refurbished and pre-owned items.
            </p>
          </div>
          <div>
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=272;maxWidth=400"
              alt=""
            />
            <p>Save upto %700 on Macbook</p>
            <p></p>
          </div>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-66611-cb-fs-211018-6dd3346e-0ef8-458c-b16d-5ff2264fbb11.png"
            alt=""
          />
          <div>
            <p>Apply today and get</p>
            <p>10% back</p>
          </div>
          <p>
            in rewards on your first day of purchases when you are approved for
            the Card.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};
