import "/node_modules/modern-normalize/modern-normalize.css";
import "./App.css";

import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

import { Component } from "react";

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	getClick = (e) => {
		this.setState((prev) => ({ [e.target.value]: prev[e.target.value] + 1 }));
	};

	countTotalFeedback = () => {
		return Object.values(this.state).reduce((sum, current) => sum + current, 0);
	};

	countPositiveFeedbackPercentage = () => {
		const total = this.countTotalFeedback();
		return total === 0 ? total : Math.round((100 * this.state.good) / total);
	};

	render() {
		return (
			<div className="App">
				<Section title="Please leave your feedback">
					<FeedbackOptions
						options={this.state}
						onLeaveFeedback={this.getClick}
					/>
				</Section>

				<Section title="Statistics">
					{this.countTotalFeedback() === 0 ? (
						<Notification message="There is no feedback" />
					) : (
						<Statistics
							good={this.state.good}
							neutral={this.state.neutral}
							bad={this.state.bad}
							total={this.countTotalFeedback()}
							positivePercentage={this.countPositiveFeedbackPercentage()}
						/>
					)}
				</Section>
			</div>
		);
	}
}

export default App;
