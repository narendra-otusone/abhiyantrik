import React from 'react';
import Carousel from "react-multi-carousel";
import './newAbout.css';
import 'react-multi-carousel/lib/styles.css';
import img_1 from '../../../Assets/image 11.png';
import img_2 from '../../../Assets/image 10.png';
import img_3 from '../../../Assets/image 9.png';

const About = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const handleClick = () => {
        alert('clicked');
    };

    return (
        <div className="container-fluid about_us" id='about'>
            <div>
                <h1 className='aboutustitle'>
                    Our Services
                </h1>
                <h2 className="about_us_title">
                    Expertise and Solutions
                </h2>
            </div >
            <div>
                <Carousel
                    className='carousel'
                    responsive={responsive}
                    arrows={true}
                    autoPlay={true}
                    rewind={true}
                    rewindWithAnimation={true}
                    partialVisbile={false}
                    renderArrowsWhenDisabled={true}
                >
                    <div className="row m-auto p-5">
                        <div className="col-md-8 web-development" style={{textAlign:'left'}}>
                            <h4
                                className="fw-semibold text-2xl"
                                style={{ color: "#040404", fontFamily: "Source Sans 3, sans-serif" }}
                            >
                                Web Development
                            </h4>
                            <p
                                className="text-lg"
                                style={{ color: "#040404" }}
                            >
                                At Abhiyantrik.ai,we transcend the ordinary in Web Development.
                                Our dedicated team doesn't just build websites; we sculpt
                                digital indentities that resonate with innovation, captivating
                                your ordience.
                                <br />
                                <br />
                                From new platform inception to proactive maintenance, we
                                ensure your digital presence is optimized for lasting success.
                                <br />
                                <br />
                                Ready for Digital Excellence? Let's Get Started!
                            </p>
                            <button
                                className="btn btn-warning fw-semibold text-xl btn-lg"
                                style={{ color: "#002F4D" }}
                                onClick={() => handleClick()}
                            >
                                Let's Start!
                            </button>
                        </div>
                        <div className="col-md-4">
                            <img
                                className="img-fluid"
                                src={img_1} alt="#"
                            />
                        </div>
                    </div>


                    <div className="row m-auto p-5">
                        <div className="col-md-4">
                            <img
                                className="img-fluid"
                                src={img_2} alt="#"
                            />
                        </div>
                        <div className="col-md-8" style={{textAlign:'left'}}>
                            <h4
                                className="fw-semibold text-2xl"
                                style={{ color: "#040404", fontFamily: "Source Sans 3, sans-serif" }}
                            >
                                Software Solution
                            </h4>
                            <p
                                className="text-lg"
                                style={{ color: "#040404" }}
                            >
                                Navigate the digital landscape with confidence through our
                                Software Solutions. We transform concepts into efficient
                                solutions, prioritizing performance and security.
                                <br />
                                <br />
                                From SAAS applications to ERP systems, Abhiyantrik.ai keeps your
                                software abreast of evolving technologies, ensuring robust
                                functionality aligned with your dynamic business needs. <br />
                                <br />
                                Ready for Digital Excellence? Let's Get Started!
                            </p>
                            <button
                                className="btn btn-warning fw-semibold text-xl  btn-lg"
                                style={{ color: "#002F4D" }}
                                onClick={() => handleClick()}
                            >
                                Let's Start!
                            </button>
                        </div>
                    </div>

                    <div className="row m-auto p-5">
                        <div className="col-md-8" style={{textAlign:'left'}}>
                            <h4
                                className="fw-semibold text-2xl"
                                style={{ color: "#040404", fontFamily: "Source Sans 3, sans-serif" }}
                            >
                                AI Services{' '}
                            </h4>
                            <p className="text-lg"
                                style={{ color: "#040404" }}
                            >
                                At the heart of our digital prowess is a commitment to
                                harnessing the transformative potential of Artificial
                                Intelligence.
                                <br />
                                <br />
                                Abhiyantrik.ai stands as a beacon of innovation, offering
                                cutting-edge Gen AI applications, strategic database
                                management, seamless integration, and bespoke data analysis
                                tailored to industry-specific needs. <br />
                                <br />
                                Ready for Digital Excellence? Let's Get Started!
                            </p>
                            <button
                                className="btn btn-warning fw-semibold text-xl  btn-lg"
                                style={{ color: "#002F4D" }}
                                onClick={() => handleClick()}
                            >
                                Let's Start!
                            </button>
                        </div>
                        <div className="col-md-4">
                            <img
                                className="img-fluid"
                                src={img_3} alt="#"
                            />
                        </div>
                    </div>
                </Carousel>
            </div>
        </div >
    );
};

export default About;
