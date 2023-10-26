import React from 'react'
import './Footer.css'
import logo from '../../Assets/LOGO.png'
import { BiLogoFacebook, BiSolidPhone } from 'react-icons/bi'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'

function Footer() {
    const logoData = [BiLogoFacebook, AiOutlineInstagram, AiOutlineTwitter]
    return (
        <div className='f-main'>
            <div className='l-main'>
                <img src={logo} alt="" height='36px' width='120px' />
                <p className='address'>
                    H163, 63 Noida Utter<br /> Pradesh-201301,INDIA
                </p>
                <div className='l-data'>
                    {
                        logoData.map((Icon, index) => (
                            <div className='iconsss' >
                                <Icon size={20} key={index} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='links'>
                <div>
                    <h5 className='heading'>Services</h5>
                    <p>Website design</p>
                    <p>App design</p>
                    <p>Web design</p>

                </div>
                <div>
                    <h5 className='heading'>About</h5>
                    <p>Our story</p>
                    <p>Team</p>
                </div>
                <div>
                    <h5 className='heading'>Help</h5>
                    <p>FAQs</p>
                    <p>Contact us</p>

                </div>
                <div className='contact'>
                    <p> <FiMail/> prince12@gmail.com</p>
                    <p> <BiSolidPhone/> +91-8076190721</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
