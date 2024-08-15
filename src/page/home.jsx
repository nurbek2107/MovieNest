import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/2bb3aa51-ecff-4efe-9cce-b8c141b3c21c"
        );
        // `response.data.data` yoki boshqa kerakli maydonni tekshiring
        setData(response.data.data || response.data); // data maydonini to'g'ri olish
      } catch (error) {
        setError(
          "Xatolik yuz berdi: " +
            (error.response?.data?.message || error.message)
        );
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 pt-20">
      {Array.isArray(data) &&
        data.map((item) => (
          <Link
            to={`/movie/${item.id}`}
            key={item.id}
            className="card shadow-md bg-white mt-10 w-[350px] h-[300px] transition-shadow hover:shadow-xl cursor-pointer"
          >
            <div className="group w-[100%] m-auto -mt-10 relative rounded-xl items-center justify-center overflow-hidden shadow-xl transition-shadow hover:shadow-xl hover:shadow-black/30">
              <img
                className="w-[500px] h-[225px] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={item.thumbnail}
                alt={item.title}
                width={500}
                height={225}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-10 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white ">
                  MovieNest
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center gap-2">
                  tomoshabin: <span>{Math.floor(item.views / 1000)}</span> mig
                </p>
                <button className="bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow">
                  See More
                </button>
              </div>
            </div>
            <div className="flex gap-10 mb-8 items-center justify-center p-4">
              <div className="flex flex-col items-center justify-center">
                <h3>{item.title}</h3>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default Home;
