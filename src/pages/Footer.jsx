import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section id="footer">
            <div className="scroll-top">
                <a href="#main" className="back-to-top"></a>
            </div>
            <div className="footer">
                <h3 className="footer-text">Made by Bryce Hadl</h3>
                <Link target='_blank' to={'https://www.linkedin.com/in/bryce-h-604b802b1/'}><i className="fa-brands fa-linkedin-in github-footer github-spacing"></i></Link>
                <Link target='_blank' to={'https://github.com/brycehadl'}><i className="fa-brands fa-github github-footer github-spacing"></i></Link>
            </div>
        </section>
    );
}

export default Footer;