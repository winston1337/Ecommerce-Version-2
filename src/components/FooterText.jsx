import React from 'react';
import Footer from './Footer/Footer';


export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">Canada</Footer.Link>
                    <Footer.Link href="#">Customer Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-facebook"></i> Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-instagram"></i> Instagram</Footer.Link>
                    <Footer.Link href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-youtube"></i> YouTube</Footer.Link>
                    <Footer.Link href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-twitter"></i> Twitter</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}

export default FooterContainer;