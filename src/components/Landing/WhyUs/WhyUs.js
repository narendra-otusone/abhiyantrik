import React, { useState } from 'react';
import './WhyUs.css';

const WhyUs = () => {
    const [img1Hovered, setImg1Hovered] = useState(false);
    const [img2Hovered, setImg2Hovered] = useState(false);
    const [img3Hovered, setImg3Hovered] = useState(false);
    const [img4Hovered, setImg4Hovered] = useState(false);
    return (
        <div className="container-fluid" style={{ marginTop: '0rem' }}>
            <div className="gridd">
                <div className='whyus'>
                    <div className='whyus_title'>
                        <h1>Why US ?</h1>
                    </div>
                    <div className='whyus_content'>
                        <h4>Know What Sets Us Apart</h4>
                        <p> Innovation, Expertise, Excellence — That's Us.</p>
                    </div>
                </div>
                <ul id="hexGrid">
                    <li className='hex'> </li>
                    <li className='hex'></li>
                    <li className="hex">
                        <div className="hexIn">
                            <a className="hexLink" >
                                <div
                                    className="img img1"
                                    style={{
                                        backgroundImage: img1Hovered ? 'url(/image23.png)' : 'url(/image5.png)'
                                    }}
                                    onMouseEnter={() => setImg1Hovered(true)}
                                    onMouseLeave={() => setImg1Hovered(false)}
                                ></div>
                            </a>
                        </div>
                    </li>

                    <li className="hex">
                        <div className="hexIn">
                            <a className="hexLink" >
                                <div
                                    className="img"
                                    style={{ backgroundImage: img2Hovered ? 'url(/image24.png)' : 'url(/image6.png' }}
                                    onMouseEnter={() => setImg2Hovered(true)}
                                    onMouseLeave={() => setImg2Hovered(false)}
                                ></div>
                            </a>
                        </div>
                    </li>
                    <li className="hex">
                        {' '}
                        <div className="hexIn">
                            <a className="hexLink" >
                                <div
                                    className="halfimg1"
                                    style={{ backgroundImage: 'url(/image10.png)' }}
                                ></div>
                            </a>
                        </div>
                    </li>
                    <li className="hex">
                        {' '}
                        <div className="hexIn">
                            <a className="hexLink" >
                                <div
                                    className="img"
                                    style={{ backgroundImage: 'url(/image9.png)' }}
                                ></div>
                            </a>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn">
                            <a className="hexLink" >
                                <div
                                    className="img"
                                    style={{ backgroundImage: img3Hovered ? 'url(/image25.png)' : 'url(/image7.png' }}
                                    onMouseEnter={() => setImg3Hovered(true)}
                                    onMouseLeave={() => setImg3Hovered(false)}
                                ></div>
                            </a>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn">
                            <a className="hexLink" >
                                <div
                                    className="img"
                                    style={{ backgroundImage: img4Hovered ? 'url(/image26.png)' : 'url(/image8.png' }}
                                    onMouseEnter={() => setImg4Hovered(true)}
                                    onMouseLeave={() => setImg4Hovered(false)}
                                ></div>
                            </a>
                        </div>
                    </li>
                    <li className="hex">
                        {' '}
                        <div className="hexIn">
                            <a className="hexLink" >
                                <div
                                    className="halfimg2"
                                    style={{ backgroundImage: 'url(/image9.png)' }}
                                ></div>
                            </a>
                        </div>
                    </li>
                    <li className='hex'></li>
                    <li className='hex'></li>
                    <li className="hex">
                        {' '}
                        <div className="hexIn">
                            <a className="hexLink" >
                                <div
                                    className="halfimg3"
                                    style={{ backgroundImage: 'url(/image10.png)' }}
                                ></div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhyUs;
