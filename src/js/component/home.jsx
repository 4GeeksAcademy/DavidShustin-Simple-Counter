import React, { useEffect, useState } from "react";
import SimpleCounter from "./SimpleCounter.jsx"
import calculateSeconds from "../calculateSeconds";


//create your first component
const Home = () => {
	const [counter, setCounter] = useState(0)
	useEffect(() => {
		let interval;
		interval = setInterval(() => {
			setCounter(prevCounter =>
				prevCounter + 1)

		}, 1000)
		return () => clearInterval(interval);
	})

	return (
		<>
			<SimpleCounter
				hundredThousandsDigit={calculateSeconds(counter, 100000)}
				tenThousandsDigit={calculateSeconds(counter, 10000)}
				thousandsDigit={calculateSeconds(counter, 1000)}
				hundredsDigit={calculateSeconds(counter, 100)}
				tensDigit={calculateSeconds(counter, 10)}
				onesDigit={calculateSeconds(counter, 1)}
			/>
		</>
	);
};

export default Home;
