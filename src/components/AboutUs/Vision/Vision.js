import React from 'react'
import "./Vision.css"
import img_1 from "../../../Assets/image 9.png"


const Vision = () => {
    return (
        <div className="vision">
            <div className="vision-heading">
                <div>
                    Our Vision
                </div>
                <p>
                    At Abhiyantrik.ai, we envision a future where digital boundaries are limitless, and innovation is the driving force behind every solution. Our vision is to pioneer transformative experiences, empowering businesses to thrive in the ever-evolving digital landscape.
                </p>
            </div>
            <div className="row w-90% m-auto vision-container">
                <div className="vision-image col-md-4 m-auto">
                    <img className="img-fluid" src={img_1} alt="#" />
                    <div>Our_Visionary</div>
                </div>
                <div className="vision-material col-md-7 m-auto" style={{textAlign:'left'}}>
                    <div>
                        Meet the visionary behind Yantik
                    </div>
                    <p>
                        Meet the Visionary Force Behind Abhiyantrik.ai
                        <br /> <br />
                        At the helm of Abhiyantrik.ai stands our founder, [Founder's Name], a trailblazer in the digital realm. With a passion for innovation and an unwavering commitment to excellence, [Founder's Name] has steered Abhiyantrik.ai towards new horizons.
                        <br /><br />
                        Driven by a vision to redefine digital experiences, [Founder's Name] brings a wealth of expertise to the table.Their journey is a testament to a relentless pursuit of excellence, propelling Abhiyantrik.ai into a future where each endeavor reflects a perfect blend of creativity and cutting-edge technology.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Vision