import React from 'react'
import profile from "../../assets/images/banner/me.jpg"
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Denisha akbari.
                                </h2>
                                <p>Hi, I'm Akbari Denisha, a passionate Front-End Developer focused on building clean, responsive, and user-friendly web experiences. I specialize in technologies like React and Tailwind CSS, and I love exploring new trends in UI/UX and smooth web animations.</p>
                                <p>For me, design isn’t just about looks — it’s about how it feels and functions. Every project I work on reflects creativity, attention to detail, and performance. I enjoy collaborating with like-minded teams to bring purposeful ideas to life. I’m currently open to full-time or part-time opportunities where I can learn, grow, and contribute meaningfully. Let’s connect and create something amazing together!</p>
                                <div className="hero-btns">
                                    <a href="contact.html" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></a>
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

export default Summery