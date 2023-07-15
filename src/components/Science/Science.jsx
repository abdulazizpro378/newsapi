import { Link } from "react-router-dom"
import PropTypes from "prop-types";


const Science = ({  title, content, urlToImage,source}) => {
    return( <section id="Entertainment">
    <div className="container">
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
    </div>
  </section>)
}



Science.propTypes = {
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string,
    source:PropTypes.object,
  };

export default Science