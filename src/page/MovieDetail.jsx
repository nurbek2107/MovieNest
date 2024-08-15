import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../page/Loader"; // Loader komponentini import qilish
import { useState, useEffect } from "react";
import "./MovieDetail.css";

function MovieDetail() {
  const { id } = useParams(); // URL dan id parametresini olish
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://run.mocky.io/v3/2bb3aa51-ecff-4efe-9cce-b8c141b3c21c/id/${id}`
        );
        setMovie(response.data);
      } catch (error) {
        if (error.response?.status === 429) {
          setError(
            "Juda ko'p so'rovlar yuborildi. Iltimos, bir oz kutib turing va qayta urinib ko'ring."
          );
        } else {
          setError(
            "Xatolik yuz berdi: " +
              (error.response?.data?.message || error.message)
          );
        }
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="top">
        <div className="featured_wrapper">
          <img
            src={movie?.thumbnail || "https://www.shorturl.at/jnoAK"}
            alt={movie?.title || "Featured"}
            className="featured"
          />
          <div className="title_wrapper">
            <span>Trending Today</span>
            <h1>
              {movie?.title || "The Untold Story of the great Lorem Ipsum"}
            </h1>
            <button className="button">Watch It Now</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-full">
            <p>Action Movies Collection</p>
          </div>
          {[...Array(8)].map((_, index) => (
            <div key={index} className="column is-one-quarter">
              <img
                src={`https://www.shorturl.at/${
                  [
                    "nCEN2",
                    "pwMU1",
                    "jkqB8",
                    "ciADR",
                    "aefq1",
                    "BGV34",
                    "uzCR2",
                    "hCGOT",
                  ][index]
                }`}
                alt={`Movie ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
