import "./playerstyle.css";
import React from "react";
import { useState, useRef } from "react";


import backward from "../assets/backward.png"
import play from "../assets/play.png"
import forward from "../assets/forward.png"
import pause from "../assets/pause.svg"
import KGF from "../assets/KGF2.mp4"


function Player() {

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [videoTime, setVideoTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);

    const videoHandler = (control) => {
        if (control === "play") {
            videoRef.current.play();
            setPlaying(true);
        } else if (control === "pause") {
            videoRef.current.pause();
            setPlaying(false);
        }


        if (control === "play") {
            videoRef.current.play();
            setPlaying(true);
            var vid = document.getElementById("video1");
            setVideoTime(vid.duration);
        }

    };



    const fastForward = () => {
        videoRef.current.currentTime += 5;
    };

    const revert = () => {
        videoRef.current.currentTime -= 5;
    };


    window.setInterval(function () {
        setCurrentTime(videoRef.current?.currentTime);
        setProgress((videoRef.current?.currentTime / videoTime) * 100);
    }, 1000);




    return (


        <div className="app" style={{ position: "initial", width: "50%", height: "50%" }}>

            <video
                id="video1"
                ref={videoRef}
                className="video"
                src={KGF}>

            </video>

            <div className="controlsContainer">
                <div className="controls">



                    <img onClick={revert} className="controlsIcon" alt="" src={backward} />


                    {playing ? (
                        <img
                            onClick={() => videoHandler("pause")}
                            className="controlsIcon--small"
                            alt=""
                            src={pause}
                        />
                    ) : (
                        <img
                            onClick={() => videoHandler("play")}
                            className="controlsIcon--small"
                            alt=""
                            src={play}
                        />
                    )}



                    <img onClick={fastForward} className="controlsIcon" alt="" src={forward} />


                </div>
            </div>


            <div className="timecontrols">
                <p className="controlsTime">
                    {Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}

                </p>

                <div className="time_progressbarContainer">
                    <div
                        style={{ width: `${progress}%` }}
                        className="time_progressBar"
                    ></div>
                </div>


                <p className="controlsTime">
                    {Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}

                </p>
            </div>

        </div>
    )
}

export default Player;