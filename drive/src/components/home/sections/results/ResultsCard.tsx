import * as React from "react";
import { BackArrow } from "../../../ui/buttons/BackArrow";
import { Button } from "../../../ui/buttons/Button";
import { LearnMoreButton } from "../../../ui/buttons/LearnMoreButton";
import { NextArrow } from "../../../ui/buttons/NextArrow";

import { Result as ResultType } from "./Result.type";
import { useSwipeable } from "react-swipeable";

interface ResultsCardProps {
	results: Array<ResultType>;
}

const normalizeNumber = (num: number | string) => {
	let numStr: string;
	if (typeof num === "string") numStr = num;
	else numStr = num.toString();
	return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ResultsCard: React.FC<ResultsCardProps> = ({ results }) => {
	const [activeResult, setActiveResult] = React.useState<number>(0);

	const handlers = useSwipeable({
		onSwipedLeft: () => setActiveResult(activeResult + 1),
		onSwipedRight: () => setActiveResult(activeResult - 1),
	});

	const updateActiveResult = () => {
		if (activeResult >= results.length) setActiveResult(0);
		else if (activeResult < 0) setActiveResult(results.length - 1);
	};

	React.useEffect(() => {
		updateActiveResult();
	}, [activeResult]);

	return (
		<div {...handlers} className="result-card-container">
			<BackArrow
				height="2rem"
				width="1rem"
				onClick={() => setActiveResult(activeResult - 1)}
			/>
			<div id="ResultsCard">
				<div className={`result-card-row r${activeResult}`}>
					{results.map((res, i) => (
						<div className={`result-text row${i}`}>
							<p>{res.description}</p>
						</div>
					))}
				</div>
			</div>
			<NextArrow
				height="2rem"
				width="1rem"
				onClick={() => setActiveResult(activeResult + 1)}
			/>
		</div>
	);
};

export { ResultsCard };
