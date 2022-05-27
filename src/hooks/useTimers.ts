import { useState, useEffect } from "react";

interface Timer {
	time: number;
	isRunning: boolean;
}

const createTimer = (startingTime: number) => ({ time: startingTime, isRunning: false });

const createTimers = (count: number, startingTime: number) => Array(count).fill(createTimer(startingTime));

const useTimers = (
	count: number,
	countUp: boolean = true,
	startingTime: number = 0,
	tickRate: number = 1000
) => {
	const [timers, setTimers] = useState<Timer[]>(() => createTimers(count, startingTime));

	const getTime = (index: number) => {
		let milliseconds = timers[index].time,
			seconds = 0,
			minutes = 0,
			hours = 0;

		if (milliseconds >= 3600000) {
			hours = Math.floor(milliseconds / 3600000);
			milliseconds -= hours * 3600000;
		}

		if (milliseconds >= 60000) {
			minutes = Math.floor(milliseconds / 60000);
			milliseconds -= minutes * 60000;
		}

		if (milliseconds >= 1000) {
			seconds = Math.floor(milliseconds / 1000);
			milliseconds -= seconds * 1000;
		}

		return {
			milliseconds,
			seconds,
			minutes,
			hours,
		};
	};

	const getTimeFormatted = (index: number, precesion: number): string => {
		const format = (n: number, digits: number) => {
			let str = String(n);
			while (str.length < digits) str = "0" + str;
			return str;
		};

		const { hours, minutes, seconds, milliseconds } = getTime(index);
		// let string = `${format(hours, 2)}:${format(minutes, 2)}:${format(seconds, 2)}`;
		let string = `${format(minutes, 2)}:${format(seconds, 2)}`;

		// if (precesion > 0 || precesion < 4)
		// 	string +=
		// 		"." +
		// 		format(
		// 			Math.floor(milliseconds / Math.pow(10, 3 - precesion)),
		// 			precesion
		// 		);
		return string;
	};

	const resume = (index: number) => {
		setTimers([
			...timers.slice(0, index),
			{ ...timers[0], isRunning: true },
			...timers.slice(index + 1)
		]);
	}

	const stop = (index: number) => {
		setTimers([
			...timers.slice(0, index),
			{ ...timers[0], isRunning: false },
			...timers.slice(index + 1)
		]);
	}

	const restart = (index: number) => {
		setTimers([
			...timers.slice(0, index),
			{ ...timers[0], time: 0 },
			...timers.slice(index + 1)
		]);
	}

	useEffect(() => {
		let prev = Date.now();

		const interval = setInterval(() => {
			const delta = Date.now() - prev;
			const newTimers = [...timers];
			setTimers(newTimers.map(({ time, isRunning }) => isRunning
				? { time: time + delta * (countUp ? 1 : -1), isRunning }
				: { time, isRunning }
			));
			prev = Date.now();
		}, tickRate);

		return () => clearInterval(interval);
	}, [timers, setTimers, tickRate]);

	useEffect(() => console.log(timers[0].isRunning), [timers])

	return {
		timers,
		getTime,
		getTimeFormatted,
		resume,
		stop,
		restart,
	};
};

export default useTimers;
