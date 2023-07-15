import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({  title, content, urlToImage,source}) => {
  return (
  
        <div className="row">
          <div className="cart">
            <div className="cart-body">
              <img src={urlToImage ? urlToImage : ""} alt="logo" />
              <h4>{title}</h4>
              <p>{content}</p>
              <button className="btm">
                <Link to={`posts/${source.id}`}>About more {source.id ? source.id : ""}</Link>
              </button>
            </div>
          </div>
        </div>
      

  );
};

Home.propTypes = {
  urlToImage: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
  source:PropTypes.object,
};

export default Home;
