import { RiMailLine, RiMapPinLine, RiPhoneLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactOption = () => {
    return (
        <div className="col-lg-4">
            <SlideUp>
                <div className="contact-content-part">
                    <SlideUp delay={2}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i> <RiMapPinLine size={20} /></i>
                            </div>
                            <h2>Locaation</h2>
                            <p>Surat , Gujrat , India</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={3}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                            <div className="contact-icon">
                                <i> <RiPhoneLine size={20} /></i>
                            </div>
                            <h2>contact number:</h2>
                            <p>+91 7202000414</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={4}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <div className="contact-icon">
                                <i><RiMailLine size={20} /></i>
                            </div>
                            <h2>Email us:</h2>
                            <a
                                href="mailto:denishaakbari1136@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p>denishaakbari1136@gmail.com</p>
                            </a>
                        </div>

                    </SlideUp>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactOption