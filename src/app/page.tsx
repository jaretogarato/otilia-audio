import Image from 'next/image'
import styles from './page.module.css'
import PlayAudio from '@components/PlayAudio'
//import audioFile from '../audio/OtiliaAudio-09.wav'

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h2>Otilia</h2>
				<p>
					<code className={styles.code}>Spoken by Gustavo Gallardo</code>
				</p>
				<div>
					<a
						href="https://www.gyvdesign.com"
						//target="_blank"
						//rel="noopener noreferrer"
					>
						By{' '}
						{/*<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className={styles.vercelLogo}
							width={100}
							height={24}
							priority
						/>*/}
						Gyv Design
					</a>
				</div>
			</div>

			<div className={styles.center}>
				{/*<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js Logo"S
					width={180}
					height={37}
					priority
				/>*/}
				<PlayAudio filePath="/audio/OtiliaAudio-10.wav" />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<div className={styles.sneaky}>
					<PlayAudio filePath="/audio/OtiliaAudio-09.wav" />
				</div>
			</div>

			<div className={styles.grid}>
				{/*<a
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Docs <span>-&gt;</span>
					</h2>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Learn <span>-&gt;</span>
					</h2>
					<p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Templates <span>-&gt;</span>
					</h2>
					<p>Explore starter templates for Next.js.</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Deploy <span>-&gt;</span>
					</h2>
					<p>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>*/}
			</div>
		</main>
	)
}
