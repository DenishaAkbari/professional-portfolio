import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import profile from "../../assets/images/banner/me.jpg"
import partner1 from "../../assets/images/banner/html.png"
import partner2 from "../../assets/images/banner/css.png"
import partner3 from "../../assets/images/banner/js.png"
import partner4 from "../../assets/images/banner/bootstrap.png"
import partner5 from "../../assets/images/banner/react.png"
import partner6 from "../../assets/images/banner/c.png"
import partner7 from "../../assets/images/banner/c-.png"
import partner8 from "../../assets/images/banner/tailwind.png"
import partner9 from "../../assets/images/banner/threejs.png"
import SlideUp from '../../utlits/animations/slideUp';


const skills = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
];

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                                <h2 style={{ marginTop: '40px' }}>Denisha Akbari</h2>
                                <p>I am a React JS Developer living in Gujarat.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        {/* <li><Link to=""><RiFacebookCircleFill size={20} /></Link></li>
                                        <li><Link to=""><RiTwitterXLine size={20} /></Link></li> */}
                                        <li><Link to="https://www.linkedin.com/in/denisha-akbari-2820872ab/"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link to="https://github.com/dashboard"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                                    I’m Denisha Akbari, a passionate React developer with strong skills in web design and development
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for Freelancing</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <a
                                        href="/Denisha resume.pdf"
                                        download
                                        className="theme-btn"
                                    >
                                        Download CV <i><RiDownloadLine size={16} /></i>
                                    </a>
                                </div>

                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="about-content-part-bottom">
                                <h2>Design & Development Expertise</h2>
                                <div className="company-list">
                                    <div className="scroller">
                                        <div className="scroller__inner">
                                            <Marquee>
                                                {skills.map((img, index) => (
                                                    <div key={index} className="mx-6">
                                                        <img
                                                            src={img}
                                                            alt={`logo-${index}`}
                                                            className="w-14 h-14 object-contain"
                                                        />
                                                    </div>
                                                ))}
                                            </Marquee>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero