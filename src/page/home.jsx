import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import Carousel from "./Carousel";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Qidiruv so'zi uchun holat
  const [selectedCategory, setSelectedCategory] = useState(""); // Kategoriya uchun holat

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/2bb3aa51-ecff-4efe-9cce-b8c141b3c21c"
        );
        setData(response.data.data || response.data);
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

  // Qidiruv va kategoriya termiga muvofiq data'ni filtrlash
  const filteredData = data.filter((item) => {
    const matchesSearchTerm = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? item.category === selectedCategory
      : true;
    return matchesSearchTerm && matchesCategory;
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const categories = [...new Set(data.map((item) => item.category))];

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <div className="container p-4 pt-20">
      {/* Qidiruv maydoni */}
      {/* <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border rounded w-full"
        />
      </div> */}
      {/* Carousel */}
      <Carousel
        images={filteredData.map((item) => item.thumbnail)} // Carousel uchun rasm URL'larini olish
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
        {Array.isArray(filteredData) &&
          filteredData.map((item) => (
            <a
              href={`https://www.youtube.com/watch?v=${item.youtube_video_id}`}
              key={item.id}
              className="card shadow-md bg-white mt-10 w-[350px] h-[300px] transition-shadow hover:shadow-xl cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
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
                  {/* YouTube video link */}
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}

export default Home;
