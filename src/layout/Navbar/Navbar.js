import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav id='Navbar' className="container-fluid py-3">
            <div className="row align-items-center">
                {/* Logo Section */}
                <div className="col-md-2 text-center text-md-start">
                    <Link to={"/"}>
                        <img
                            id="logo"
                            src="/assets/LightLogoTransparentBackground.png"
                            alt="Task Master Design Logo"
                            className="img-fluid"
                        />
                    </Link>
                </div>

                {/* Links Section */}
                <div className="col-md-10">
                    <div className="d-flex justify-content-around">
                        <Link to={"/daily"} className="nav-link">
                            Daily
                        </Link>
                        <Link to={"/weekly"} className="nav-link">
                            Weekly
                        </Link>
                        <Link to={"/monthly"} className="nav-link">
                            Monthly
                        </Link>
                        <Link to={"/yearly"} className="nav-link">
                            Yearly
                        </Link>
                        <Link to={"/masterplan"} className="nav-link">
                            Master
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
