import { RiBookLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                        <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2023 - 2026'} title={'Bachelor of Computer Applications'} institution={'Swarrnim Startup and Innovation University'} />
                                    <Card year={'2022 - 2023'} title={'Higher secoundery Education'} institution={'Ankur School Of Commerce'} />
                                    <Card year={'2008 - 2021'} title={'Secondary School Certificate'} institution={'Sarswati Vidhyalay'} />
                                </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'June 2024 - present '} title={'React JS Developer'} institution={'We3vision Infotech '} />
                                    {/* <Card year={'june 2024 - November 2024'} title={'React js Developer Intern '} institution={'We3vision Infotech'} /> */}
                                    {/* <Card year={'2021 - 2022'} title={'Web Designer'} institution={'Web Developer & Business Partner'} /> */}
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}