import ContinueWatching from "../../../components/movies/home/movielist/ContinueWatching";
import MovieCarousel from "../../../components/movies/home/movielist/MovieCarousel";
import MyList from "../../../components/movies/home/movielist/MyList";
import Original from "../../../components/movies/home/movielist/Original";
import PopularMovie from "../../../components/movies/home/movielist/PopularMovie";
import TopIndonesian from "../../../components/movies/home/movielist/TopIndonesianMovies";
import WatchAgain from "../../../components/movies/home/movielist/WatchAgain";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <MovieCarousel />
      <PopularMovie />
      <ContinueWatching />
      <Original />
      <TopIndonesian />
      <WatchAgain />
      <MyList />
    </div>
  );
};
export default Home;
