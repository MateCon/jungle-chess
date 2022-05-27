import { useState, useEffect } from "react";

interface Timer {
	time: number;
	isRunning: boolean;
}

const createTimer = (startingTime: number) => ({ time: startingTime, isRunning: false });

const createTimers = (count: number, startingTime: number) => Array(count).fill(createTimer(startingTime));

const useTimers = (
	count: number,
	tickRate: number = 1000,
	countUp: boolean = true,
	startingTime: number = 0
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
		let string = `
      ${format(hours, 2)}:${format(minutes, 2)}:${format(seconds, 2)}`;

		if (precesion > 0 || precesion < 4)
			string +=
				"." +
				format(
					Math.floor(milliseconds / Math.pow(10, 3 - precesion)),
					precesion
				);
		return string;
	};

	const resume = (index: number) => {
		const copy = [...timers];
		copy[index].isRunning = true;
		setTimers(copy);
	}

	const stop = (index: number) => {
		const copy = [...timers];
		copy[index].isRunning = false;
		setTimers(copy);
	}

	const restart = (index: number) => {
		const copy = [...timers];
		copy[index].time = 0;
		setTimers(copy);
	}

	useEffect(() => {
		let prev = Date.now();

		const interval = setInterval(() => {
			const delta = Date.now() - prev;
			setTimers(prev => prev.map(timer => timer.isRunning 
				? {
					isRunning: true,
					time: timer.time + delta * (countUp ? 1 : -1)
				}
				: timer
			));
			prev = Date.now();
		}, tickRate);

		return () => clearInterval(interval);
	}, [setTimers, tickRate]);

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
