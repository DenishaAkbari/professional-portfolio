import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiShakeHandsLine } from '@remixicon/react'
import logo from '../../assets/images/logo.png'
import { menuList } from '../../utlits/fackData/menuList'

const Header = () => {
    const pathName = useLocation().pathname
    const [isSticky, setisSticky] = useState(false)
    
    useEffect(() => {
        const navbar_collapse = document.querySelector(".navbar-collapse")
        navbar_collapse.classList.remove("show")
    }, [pathName])

    useEffect(() => {
        window.addEventListener("scroll", stickyHeader)
        return () => window.removeEventListener("scroll", stickyHeader)
    }, [])

    const stickyHeader = () => {
        const scrollTop = window.scrollY
        if (scrollTop > 85) {
            setisSticky(true)
        }
        else {
            setisSticky(false)
        }
    }
    return (
        <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center">
                        {/* <!-- START LOGO DESIGN AREA --> */}
                        <div className="logo-outer">
                            <div className="logo">
                                <h2>DENISHA AKBARI</h2>
                            </div>
                        </div>
                        {/* <!-- / END LOGO DESIGN AREA -->
                        <!-- START NAV DESIGN AREA --> */}
                        <div className="nav-outer clearfix mx-auto">
                            {/* <!-- Main Menu --> */}
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo">
                                    <h2 style={{fontSize:'18px'}}>DENISHA AKBARI</h2>
                                        
                                    </div>
                                    {/* <!-- Toggle Button --> */}
                                    <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="navbar-collapse collapse">
                                    <ul className="navigation onepage clearfix">
                                        {
                                            menuList.map(({ id, label, path }) => <li key={id}><Link to={path} className="nav-link-click" >{label}</Link></li>)
                                        }
                                    </ul>
                                </div>
                            </nav>

                        </div>
                        {/* <div className="menu-btns">
                            <Link to="/contact" className="theme-btn">Hire Me <RiShakeHandsLine size={15} /> </Link>
                        </div> */}
                        <div className="menu-btns">
                                    <a
                                        href="https://wa.me/7202000414?text=Hi%20Denisha%2C%20I%20visited%20your%20portfolio%20and%20want%20to%20talk."
                                        className="theme-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Hire me <i> <RiShakeHandsLine size={15}/></i>
                                    </a>
                                </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header