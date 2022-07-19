import { useEffect } from "react";
import useGet from "../../../../hooks/useGet";
import { useParams } from "react-router-dom";
import { setDotInterval } from "../movielist/movieCategory/SetDotSeparator";
import { Link } from "react-router-dom";

const WatchMovie = () => {
  const { id } = useParams();
  const { data, get } = useGet(`movie/${id}`);
  // data
  const dataFeedback = data.feedback;

  useEffect(() => {
    get();
  }, [id]);

  const opts = {
    height: "810",
    width: "100%",
    playerVars: {
      authoplay: 1,
    },
  };

  return <div className="flex flex-col w-full h-auto gap-y-8"></div>;
};

export default WatchMovie;
