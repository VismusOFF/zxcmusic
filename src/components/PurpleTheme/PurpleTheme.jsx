import { useState } from "react";
import tracksList from "../../assets/tracksList";
import style from "./Purple.module.scss";
import Playbar1 from "./Playbar1/Playbar1";
import { Input } from "@mui/material";
import Track1 from "./Track1/Track1";



const runSearch = (query) => {
  if (!query) {
    return tracksList;
  }

  const lowerCaseQuery = query.toLowerCase();

  return tracksList.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  );
};

const PurpleTheme = () => {
  const [tracks, setTracks] = useState(tracksList);

  const handleChange = (event) => {
    const foundTracks = runSearch(event.target.value);
    setTracks(foundTracks);
  };

  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Поиск треков"
        onChange={handleChange}
      />
      <div className={style.list}>
        {tracks.map((track) => (
          <Track1 key={track.id} {...track} />
        ))}
      </div>
      <Playbar1/>
    </div>
  );
};

export default PurpleTheme;