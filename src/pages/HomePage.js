import { Link } from 'react-router-dom';
import '../style/HomePage.css';
function HomePage() {
  return (
    <>
      <nav className="home-page-nav">
        <h1 className="logo">Book<span className="color-effect">Stacks</span></h1>
        <ul className="nav">
          <li>Home</li>
          <li>Books</li>
          <li>
            <Link to="/login" className="Register">
              Get Started / Log In
            </Link>
          </li>
        </ul>
      </nav>
      <div className="slogan-container">
        <h1 className="slogan">
          Find your next favorite <span className="color-effect">book</span> today!
        </h1>
        <p className="small-text">Discover the joy of reading and get lost in the story.</p>
      </div>
      <div className="svg-picture">
        <img src="svg-picture-nobg.png" alt=""></img>
      </div>
      <div className="button-container">
        <Link to="/register" className="Register">
          Get Started For Free
        </Link>
      </div>
    </>
  );
}

export default HomePage;
