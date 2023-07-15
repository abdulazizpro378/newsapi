import axios from "axios";
import { useEffect, useState } from "react";
import Science from "../components/Science/Science";


const ScienceP = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let { data } = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=9ef6cad66df549148ebbc18809b6238b`
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
    return <div className="conatiner">
      Loading...
      </div>;
  }

  return (
    <section id="home">
        <div className="container control-gird ">
      {data.articles.map((post) => (
        <Science key={post.id} {...post} />
      ))}
        </div>
   
    </section>
  );
}

export default ScienceP