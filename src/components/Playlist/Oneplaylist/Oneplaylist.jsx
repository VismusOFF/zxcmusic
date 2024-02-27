import React from 'react';
import style from './oneplaylist.module.scss'
import { IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import { AudioContext } from "../../../context/AudioContext";

const Oneplaylist = () => {
    const audioplay = new Audio();

    return (
        <div className={style.firstplaylist}>
                <IconButton onClick={() => audioplay}>
                    {audioplay ? <Pause /> : <PlayArrow />}
                </IconButton>
                <div className={style.imgplaylist}>

                </div>
                <div className={style.nameplaylist}>
                Playlist
                </div>
            </div>
    );
};

export default Oneplaylist;