import React from 'react'
import { Link } from 'react-router-dom'
import { RiDownloadLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                                <h2>Ready to bring your ideas to life with a spark of creativity</h2>
                                <p>Let’s connect and create something visually impactful ✨. I’m available for full-time or part-time roles where I can blend creativity with functionality to deliver exceptional design.</p>
                                <div className="hero-btns">
                                    <a
                                        href="https://wa.me/7202000414?text=Hi%20Denisha%2C%20I%20visited%20your%20portfolio%20and%20want%20to%20talk."
                                        className="theme-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Let's Talk <i><RiDownloadLine size={16} /></i>
                                    </a>
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

export default CallToAction