import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Entertainment from "../components/entertainment/Entertainment";


const EntertainmentP = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let { data } = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=9ef6cad66df549148ebbc18809b6238b`
        );
        setData(data);
        console.log(data.articles);
      } catch (err) {
        toast.error(err.message);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div className="container  control-gird">

      {data.articles.map((post) => (
        <Entertainment key={post.id} {...post} />
      ))}
      </div>
    </Fragment>
  );
}

export default EntertainmentP