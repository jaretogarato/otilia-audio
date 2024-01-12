'use client'

import React, { useState, useEffect } from 'react'
import { Howl } from 'howler'
import { FaCirclePlay, FaCircleStop } from 'react-icons/fa6'
import '@styles/main.css'

type AudioPlayerProps = {
	filePath: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ filePath }) => {
	const [audio, setAudio] = useState<Howl | null>(null)
	const [isPlaying, setIsPlaying] = useState(false)

	useEffect(() => {
		// Setup the audio
		const howl = new Howl({
			src: [filePath],
			onplay: () => setIsPlaying(true),
			onend: () => setIsPlaying(false),
			onstop: () => setIsPlaying(false),
			onloaderror: (e, msg) => {
				console.error('Loading error:', msg)
			},
		})

		setAudio(howl)

		// Cleanup function
		return () => {
			howl.unload()
		}
	}, [filePath])

	const handlePlay = () => {
		if (audio && !isPlaying) {
			audio.play()
		}
	}

	const handleStop = () => {
		if (audio && isPlaying) {
			audio.stop()
		}
	}

	return (
		<div className="howl-button">
			{isPlaying ? (
				<button onClick={handleStop} className="howl-button">
					<FaCircleStop />
				</button>
			) : (
				<button onClick={handlePlay} className="howl-button">
					<FaCirclePlay />
				</button>
			)}
		</div>
	)
}

export default AudioPlayer
