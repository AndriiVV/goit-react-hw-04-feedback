import "/node_modules/modern-normalize/modern-normalize.css";
import "./App.css";

import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

import { useState } from "react";

const App = () => {
	const [count, setCount] = useState({ good: 0, neutral: 0, bad: 0 });

	const getClick = (e) => {
		setCount({ ...count, [e.target.value]: count[e.target.value] + 1 });
	};

	const countTotalFeedback = () => {
		return Object.values(count).reduce((sum, current) => sum + current, 0);
	};

	const countPositiveFeedbackPercentage = () => {
		const total = countTotalFeedback();
		return total === 0 ? total : Math.round((100 * count.good) / total);
	};

	return (
		<div className="App">
			<Section title="Please leave your feedback">
				<FeedbackOptions options={count} onLeaveFeedback={getClick} />
			</Section>

			<Section title="Statistics">
				{countTotalFeedback() === 0 ? (
					<Notification message="There is no feedback" />
				) : (
					<Statistics
						good={count.good}
						neutral={count.neutral}
						bad={count.bad}
						total={countTotalFeedback()}
						positivePercentage={countPositiveFeedbackPercentage()}
					/>
				)}
			</Section>
		</div>
	);
};

export default App;
