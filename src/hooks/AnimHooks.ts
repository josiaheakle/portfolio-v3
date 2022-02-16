import { useSpring } from "react-spring";
import { useScrollYPosition } from "react-use-scroll-position";

const useOpacityAnim = (delay: number, noDelayIfScroll?: boolean) => {
	return useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		delay: noDelayIfScroll && useScrollYPosition() > 100 ? 0 : delay,
		config: { duration: 500 },
	});
};

export { useOpacityAnim };
