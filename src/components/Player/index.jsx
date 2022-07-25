import React, { useState, useRef } from "react";
import {
	PlayIcon,
	PauseIcon
} from '@heroicons/react/outline';
import './style.css'
import { useEffect } from "react";

function usePlayerState($videoPlayer) {
	const [playerState, setPlayerState] = useState({
		playing: false,
		percentage: 0,
	});

	useEffect(() => {
		playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause()
	}, [
		$videoPlayer,
		playerState.playing
	])

	function toggleVideoPlay() {
		setPlayerState({
			...playerState,
			playing: !playerState.playing,
		})
	}

	function handleTimeUpdate() {
		const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100;
		setPlayerState({
			...playerState,
			percentage: currentPercentage
		})
	}

	function handleChangeVideoPercentage(event) {
		const currentPercentageValue = event.target.value;
		$videoPlayer.current.currentTime = $videoPlayer.current.duration / 100 * currentPercentageValue;

		setPlayerState({
			...playerState,
			percentage: currentPercentageValue
		})
	}

	return {
		playerState,
		toggleVideoPlay,
		handleTimeUpdate,
		handleChangeVideoPercentage
	}
}

const videoURL = '';
export default function Player(){
	const $videoPlayer = useRef(null);
	const { playerState, toggleVideoPlay, handleTimeUpdate, handleChangeVideoPercentage } = usePlayerState();

	return (
		<div className="videoWrapper">
			<video 
				ref={$videoPlayer}
				src={videoURL}
				poster="img.png" 
				onTimeUpdate={handleTimeUpdate}
			/>
			<div className="controls">
				<button onClick={toggleVideoPlay}>
					{ playerState.playing ? PauseIcon : PlayIcon }
				</button>
				<input 
					type="range"
					min="0"
					max="100" 
					onChange={handleChangeVideoPercentage}
					value={playerState.percentage}
				/>
				<select>
					{[1,2,3].map(speed => {
						<option key={`speedChange_${speed}`}
						>
							{speed}
						</option>
					})}
				</select>
			</div>
		</div>
	);
}