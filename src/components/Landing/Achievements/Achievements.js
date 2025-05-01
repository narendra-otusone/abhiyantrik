import React, { useState } from 'react';
import './Achievements.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
const Achievements = () => {
    const navigate=useNavigate();
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
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

    const [index, setIndex] = useState(0);

    const projectTypes = [['/image11.png', '/image12.png', '/image17.jpg'], ['/image13.png', '/image14.png', '/image17.jpg'], ['/image15.png', '/image16.png', '/image17.jpg']];
    return (
        <div className='container-fluid' style={{textAlign: 'center'}}>
            <div className='achievementstitle'>
                <h1 className='achievementstitle1'>What we can do</h1>
                <h4 className='achievementstitle2'>Our Digital Triumphs</h4>
            </div>
            
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className={(index === 0 && "highlight")} onClick={() => setIndex(0)} >Web Development</a>
                </li>
                <li className="nav-item">
                    <a className={(index === 1 && "highlight")} onClick={() => setIndex(1)}>Software Solutions</a>
                </li>
                <li className="nav-item">
                    <a className={(index === 2 && "highlight")} onClick={() => setIndex(2)} >AI Services</a>
                </li>
            </ul>

            <Carousel responsive={responsive} className='carousel' arrows={true} autoPlay={true} rewind={true} rewindWithAnimation={true}
                partialVisbile={false} renderArrowsWhenDisabled={true}
            >
                {projectTypes[index].map((projectPath, index) => (
                    <div className="projects" key={index}>
                        <img src={projectPath} className="d-block w-100" alt="..." />
                    </div>
                ))}
            </Carousel>
            <button className='achievementsviewmorebutton btn' onClick={()=>{navigate('/projects')}}>View More <i class="fa-solid fa-caret-right" style={{color:'white'}}></i></button>
        </div>

    )
}

export default Achievements;
