import MovieBanner from "../../../components/movies/home/detailMovie/MovieBanner";
import Similar from "../../../components/movies/home/detailMovie/Similar";

const MovieIsSelected = () => {
  return (
    <div className="flex flex-col gap-y-10 w-full h-auto">
      <MovieBanner />
      <Similar />
    </div>
  );
};

export default MovieIsSelected;
