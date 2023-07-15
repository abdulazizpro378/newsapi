import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";


const General = ({  title, content, urlToImage,source}) => {
    return( <section id="Entertainment">
    <div className="container">
      <div className="row">
     
        <Card
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{source.name}</Card.Header>
          <Card.Body>
            <Card.Title>Card Title </Card.Title>
            <Card.Text>
            <div className="cart-body">
            <img src={urlToImage ? urlToImage : ""} alt="logo" />
            <h4>{title}</h4>
            <p>{content}</p>
            <button className="btm">
              <Link to={`posts/${source.id}`}>About more {source.id ? source.id : ""}</Link>
            </button>
          </div>
            </Card.Text>
          </Card.Body>
        </Card>
      
         
    
      </div>
    </div>
  </section>)
}



General.propTypes = {
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string,
    source:PropTypes.object,
  };

export default General