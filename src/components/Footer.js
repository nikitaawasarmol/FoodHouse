import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className = 'footer-container'>
            <section className = 'footer-order'>
                <p className = 'footer-order-heading'>
                    We serve the best for you.
                </p>

                <div className = 'input-areas'> 

                <form>
                <input type = 'text' name = 'name' placeholder = 'Your Order' className = 'footer-input'/>
                <button className = 'button'>ORDER</button>

                </form>
                </div>
            </section>

            <div className = 'footer-links'>
                <div className ='footer-link-wrapper'>
                    <div className = 'footer-link-items'>
                        <h2>About Us</h2>
                        <Link to = '/'>Benifits</Link>
                        <Link to = '/'>Blog</Link>
                        <Link to = '/'>Staff and Contribution</Link>
                        <Link to = '/'>About HeathBenifits</Link>
                        <Link to = '/'>Terms and conditions</Link>
                    </div>

                    <div className = 'footer-link-items'>
                        <h2>Products</h2>
                        <Link to = '/'>BREADS</Link>
                        <Link to = '/'>PASTA</Link>
                        <Link to = '/'>OATS</Link>
                        <Link to = '/'>PIZZA BASE</Link>
                        <Link to = '/'>STRAWBERRIES</Link>
                    </div>
                </div>


                
                <div className = 'footer-link-wrapper'>
                     <div className = 'footer-link-items'>
                        <h2>RECIPES</h2>
                        <Link to = '/'>Peanut butter toast</Link>
                        <Link to = '/'>Beer-battered Hake & Chips</Link>
                        <Link to = '/'>Fish Tacos with Broccoli Slaw</Link>
                        <Link to = '/'>Pan-fried lemon and hearb hake and noodles</Link>
                        <Link to = '/'>Tuna Stack</Link>
                    </div>

                    <div className = 'footer-link-items'>
                        <h2>FOOD HOUSE ENTERPRICES PRIVATE LIMITED </h2>
                    </div>

                </div>


            </div>
            <section className = 'social-media'>
                <div className = 'social-media-wrap'>
                    
                        <small className = 'website-rights'>FOOD-HOUSE © 2021 </small>
                        <div className = 'social-icons'></div>
                        <Link className = 'social-icon-link facebook'
                        to = '/' target = 'blank'
                        aria-label = 'facebook'>
                            <i className = 'fab fa-facebook-f'></i>
                        </Link>

                        <Link className = 'social-icon-link instagram'
                        to = '/' target = 'blank'
                        aria-label = 'instagram'>
                            <i className = 'fab fa-instagram'></i>
                        </Link>

                        <Link className = 'social-icon-link twitter'
                        to = '/' target = 'blank'
                        aria-label = 'twitter'>
                            <i className = 'fab fa-twitter'></i>
                        </Link>


                   
                </div>
            </section>
            
        </div>
    )
}

export default Footer



