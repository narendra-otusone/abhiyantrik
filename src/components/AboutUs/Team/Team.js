import React, { useState } from 'react';
import data from './data';
import './Team.css';

const Team = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    return (
        <div>
            <div className='teamtitle'>
                <h1>Know Our Team</h1>
            </div>
            <div className="team">
                <section className="cards">
                    <i
                        className="fas fa-arrow-left-long circleHover"
                        onClick={() =>
                            setHoveredIndex(
                                (((hoveredIndex - 1) % data.length) + data.length) % data.length
                            )
                        }
                    ></i>
                    {data.map((image, index) => {
                        return (
                            <div
                                className={'card' + (hoveredIndex == index ? ' active' : '')}
                                key={index}
                                style={{ backgroundImage: `url( ${image.url})` }}
                                onMouseEnter={() => setHoveredIndex(index)}
                            >
                                <h2 className={hoveredIndex === index ? 'active' : ''}>
                                    {image.name}
                                </h2>
                                <p className={hoveredIndex === index ? 'active' : ''}>
                                    {image.position}, Abhiyantrik.ai
                                </p>
                            </div>
                        );
                    })}
                    <i
                        className="fas fa-arrow-right-long circleHover"
                        onClick={() => setHoveredIndex((hoveredIndex + 1) % data.length)}
                    ></i>
                </section>
            </div>
        </div>  
    );
};

export default Team;
