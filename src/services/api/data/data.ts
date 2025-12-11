// client/src/services/api/ip.ts

import { useEffect, useState } from "react";

let cachedTimelineData: any[] | null = null;

const useTimelineData = () => {
	const [timelineData, setTimelineData] = useState<any[]>(
		cachedTimelineData || [{}]
	);

	useEffect(() => {
		if (cachedTimelineData) return;

		const fetchTimelineData = async () => {
			console.log("fetched timeline");

			try {
				const response = await fetch("/api/data/timeline");
				if (response.ok) {
					const data = await response.json();
					cachedTimelineData = data;
					setTimelineData(data);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchTimelineData();
	}, []);

	return timelineData;
};

// const useTimelineData = () => {
// 	const [TimelineData, setTimeLineData] = useState<any>([{}]);

// 	useEffect(() => {
// 		const fetchTimelineData = async () => {
// 			try {
// 				console.log("fetched timeline");

// 				const response = await fetch("/api/data/timeline");
// 				if (response.ok) {
// 					const data = await response.json();
// 					setTimeLineData(data || [{}]);
// 				} else {
// 					setTimeLineData([{}]);
// 				}
// 			} catch (error) {
// 				console.error("Failed to fetch TimelineData address:", error);
// 			}
// 		};

// 		fetchTimelineData();
// 	}, []);
// 	return TimelineData;
// };

export { useTimelineData };
