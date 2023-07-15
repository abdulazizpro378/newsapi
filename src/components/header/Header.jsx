import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate, } from "react-router-dom";

import './Header.css'

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
      console.log(e.target.value);
    setSearch(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header>
      <div className="container">
      <InputGroup className="my-4" onSubmit={handleSubmit}>
        <Form.Control
         value={search}
         onChange={handleSearch}
          placeholder="search..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">add</InputGroup.Text>
      </InputGroup>

      <div className="catigory-gape text-center ">
        <button className="btn btn-danger"><Link className="nav-link-post" to='/'>business</Link></button>
        <button className="btn btn-danger"><Link className="nav-link-post" to='./entertainment'>entertainment</Link></button>
        <button className="btn btn-danger"><Link className="nav-link-post" to='/general'> general</Link></button>
        <button className="btn btn-danger"><Link className="nav-link-post" to='/health'> health</Link></button>
        <button className="btn btn-danger"><Link className="nav-link-post" to='/science'>science</Link></button>
      </div>
    </div>
    </header>
  );
};

export default Header;
