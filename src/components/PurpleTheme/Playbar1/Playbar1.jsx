import { useContext, useEffect, useState } from "react";
import { AudioContext } from "../../../context/AudioContext";
import style from "./playbar.module.scss";
import { Slider, IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import secondsToMMSS from "../../../utils/secondsToMMSS";
import tracksList from "../../../assets/tracksList";

const TimeControls = () => {
  const { audio, currentTrack } = useContext(AudioContext);
  const { duration } = currentTrack;
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(audio?.volume ?? 1);

  const formattedCurrentTime = secondsToMMSS(currentTime);
  const sliderCurrentTime = Math.round((currentTime / duration) * 100);
  
  const handleChangeCurrentTime = (_, value) => {
    const time = Math.round((value / 100) * duration);
    setCurrentTime(time);
    audio.currentTime = time;
  };
  
  const handleChangeVolume = (_, value) => {
    const normalizedVolume = value / 100;
    setVolume(normalizedVolume);
    audio.volume = normalizedVolume;
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 1000);
    
    const volumeInterval = setInterval(() => {
      setVolume(audio.volume);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(volumeInterval);
    };
  }, [audio]);

  return (
    <>
      <p>{formattedCurrentTime}</p>
      <Slider
        step={1}
        min={0}
        max={100}
        value={sliderCurrentTime}
        onChange={handleChangeCurrentTime}
      />
      <div style={{ width: "100px" }}>
        <Slider
          step={1}
          min={0}
          max={20}
          value={volume * 100}
          onChange={handleChangeVolume}
        />
      </div>
    </>
  );
};

const Playbar1 = () => {
  const { audio, currentTrack, handleToggleAudio, isPlaying } = useContext(AudioContext);
  const { title, artists, preview, duration } = currentTrack;
  const formattedDuration = secondsToMMSS(duration);

  const handleTrackEnd = () => {
    const nextTrackId = currentTrack.id + 1;
    const nextTrack = tracksList.find(track => track.id === nextTrackId);

    if (nextTrack) {
      handleToggleAudio(nextTrack); 
    }
  };

  useEffect(() => {
    audio.addEventListener("ended", handleTrackEnd);
    return () => {
      audio.removeEventListener("ended", handleTrackEnd);
    };
  }, [audio, currentTrack, handleTrackEnd]);

  return (
    <div className={style.playbar}>
      <img className={style.preview} src={preview} alt="" />
      <IconButton onClick={() => handleToggleAudio(currentTrack)}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <div className={style.credits}>
        <h4>{title}</h4>
        <p>{artists}</p>
      </div>
      <div className={style.slider}>
        <TimeControls />
        <p>{formattedDuration}</p>
      </div>
    </div>
  );
};

export default Playbar1;