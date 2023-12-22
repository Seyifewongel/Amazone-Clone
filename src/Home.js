import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/614rDhrz2-L._SX1500_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Skullcandy Terrain XL Wireless Bluetooth Speaker - IPX7 Waterproof Portable Speaker with Dual Custom Passive Radiators, 18 Hour Battery, Nylon Wrist Wrap, & True Wireless Stereo"
            price={34}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71dcFKMrWlL._AC_UY218_.jpg"
            alt=""
          />
          <Product
            id="49538094"
            title="LG 27MP400-B 27” Full HD (1920 x 1080) IPS Display with 3-Side Virtually Borderless Design, AMD FreeSync and OnScreen Control – Black, 27"
            price={79}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71SXcXnDBcL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Spigen Ultra Hybrid for iPhone 14 Pro Max Case, [Anti-Yellowing Technology] [Military Grade Drop Protection] Phone Case for iPhone 14 Pro Max - Frost Black"
            price={23}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61BHXUURgYL._AC_UY218_.jpg"
          />
          <Product
            id="23445930"
            title="Apple Watch Series 9 [GPS 41mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band M/L. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display"
            price={345.51}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/719DHTuqS4L._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos"
            price={479}
            rating={3}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71EWRyqzw0L._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="345903850"
            title="Sorbus Kids Dresser with 8 Drawers - Chest Organizer Unit with Steel Frame Wood Top & Handle, Fabric Bins for Clothes - Wide Furniture for Bedroom Hallway Kids Room Nursery & Closet"
            price={119.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91RmIzlMzXL._AC_UL320_.jpg"
          />
          <Product
            id="923445930"
            title="Hewlett Packard Enterprise HPE ProLiant ML110 G10 4.5U Tower Server - 1 x Xeon Silver 4208-16 GB RAM HDD SSD - Serial ATA/600 Controller"
            price={1529.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81nNETV8pBS._AC_SY879_.jpg"
          />
          <Product
            id="4554354345"
            title="hrm Automatic T-Shirt Printing Machine Printer Tshirt Machine for Sweatshirts/Hoodies/Pants/Jeans etc,A3 dtg + ink"
            price={5699}
            rating={4}
            image="https://m.media-amazon.com/images/I/61dwu282jKL._AC_SX425_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG 49” Odyssey CRG Series Dual QHD (5120x1440) Curved Gaming Monitor, 120Hz, QLED, HDR, Height Adjustable Stand, Radeon FreeSync, LC49RG90SSNXZA"
            price={1299.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/818jj0DF-dL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
