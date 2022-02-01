import { useEffect, useLayoutEffect, useState } from "react";

function useWindowSize() {
	const [size, setSize] = useState({ x: 0, y: 0 });
	function updateSize() {
		setSize({ x: window.innerWidth, y: window.innerHeight });
	}
	useLayoutEffect(() => {
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

function useIsMobile() {
	const size = useWindowSize();
	const [isMobile, setIsMobile] = useState(size.x < 1024 ? true : false);
	useEffect(() => {
		if (size.x < 1024) setIsMobile(true);
		else setIsMobile(false);
	}, [size]);
	return isMobile;
}

export { useWindowSize, useIsMobile };
