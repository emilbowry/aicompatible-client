// client/src/features/access-managment/default_routes.tsx

import { lazy } from "react";
import dropdownImage from "../../assets/aicwork.jpg";
import { IRoutes } from "./accessmanagent.types";

const ContactPage = lazy(() => import("../../pages/contact-page/ContactPage"));
const ToolPage = lazy(() => import("../../pages/dpo-tool/tool"));
const HomePage = lazy(() => import("../../pages/home-page/HomePage"));
const OurServices = lazy(
	() => import("../../pages/our-services-page/OurServices")
);
const TheJourneyPage = lazy(
	() => import("../../pages/the-journey-page/TheJourney")
);
const DemoPage = lazy(() => import("../../pages/demo/DemoPage"));
const AdminPortal = lazy(() => import("../../pages/admin-portal/AdminPortal"));
// import TheJourneyPage from "../../pages/the-journey-page/TheJourney";
// import ToolPage from "../../pages/dpo-tool/tool";
// import OurServices from "../../pages/our-services-page/OurServices";
// import DemoPage from "../../pages/demo/DemoPage";
// import HomePage from "../../pages/home-page/HomePage";
// import ContactPage from "../../pages/contact-page/ContactPage";
// import AdminPortal from "../../pages/admin-portal/AdminPortal";
const default_routes: [IRoutes[][], IRoutes[]] = [
	[
		[
			{
				path: "/",
				alias: "Home",
				image: dropdownImage,
				component: HomePage,
			},
			{
				path: "/demo_and_testing",
				alias: "Demo Page",
				component: DemoPage,
			},
			{
				path: "/dpotool",
				alias: "DPO Tool",
				component: ToolPage,
				altTitleBar: true,
			},
		],
		[
			{
				path: "/thejourney",
				alias: "The Journey",
				component: TheJourneyPage,
			},
		],

		[
			{
				path: "/ourservices",
				alias: "Our Services",
				component: OurServices,
			},
		],
		[{ path: "/contact", alias: "Contact", component: ContactPage }],
	],
	[],
];

const TestSideBar: [IRoutes[][], IRoutes[]] = [
	[
		[
			{
				path: "/",
				alias: "Home",
				image: dropdownImage,
				component: HomePage,
			},
			{
				path: "/demo_and_testing",
				alias: "Demo Page",
				component: DemoPage,
			},
			{ path: "/dpotool", alias: "DPO Tool", component: ToolPage },
		],
		[
			{
				path: "/thejourney",
				alias: "The Journey",
				component: TheJourneyPage,
			},
		],
		[
			{
				path: "/ourservices",
				alias: "Our Services",
				component: OurServices,
			},
		],
		[{ path: "/contact", alias: "Contact", component: ContactPage }],
	],
	[
		{
			path: "/",
			alias: "Home",
			image: dropdownImage,
			component: HomePage,
		},
		{
			path: "/demo_and_testing",
			alias: "Demo Page",
			component: DemoPage,
		},
		{ path: "/dpotool", alias: "DPO Tool", component: ToolPage },
	],
];

const AdminRoutes: [IRoutes[][], IRoutes[]] = [
	TestSideBar[0],
	[
		// ...TestSideBar[1],
		{ path: "/admin", component: AdminPortal, alias: "Admin" },
	],
];
/* lets define any dropdown links as being TestNavLinks[1] */
export { AdminRoutes, default_routes, TestSideBar };
