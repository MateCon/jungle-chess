import { useState, useEffect } from "react";

const useTimer = (
	tickRate: number = 1000,
	countUp: boolean = true,
	startingTime: number = 0
) => {
	const [time, setTime] = useState<number>(startingTime);
	const [isRunning, setIsRunning] = useState<boolean>(false);

	const getTime = () => {
		let milliseconds = time,
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

	const getTimeFormatted = (precesion: number): string => {
		const format = (n: number, digits: number) => {
			let str = String(n);
			while (str.length < digits) str = "0" + str;
			return str;
		};

		const { hours, minutes, seconds, milliseconds } = getTime();
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

	const resume = () => setIsRunning(true);
	const stop = () => setIsRunning(false);
	const restart = () => setTime(0);

	useEffect(() => {
		let prev = Date.now();

		const interval = setInterval(() => {
			const delta = Date.now() - prev;
			if (isRunning) setTime((time) => time + delta * (countUp ? 1 : -1));
			prev = Date.now();
		}, tickRate);

		return () => clearInterval(interval);
	}, [setTime, tickRate, isRunning]);

	return {
		...getTime(),
		getTimeFormatted,
		isRunning,
		resume,
		stop,
		restart,
	};
};

export default useTimer;
