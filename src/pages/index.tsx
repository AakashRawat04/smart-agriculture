import { GRAPH_OPTIONS } from "@/lib/constants";
import { useRouter } from "next/router";
import * as echarts from "echarts/core";
import ReactECharts from "echarts-for-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart } from "echarts/charts";
import {
	DatasetComponent,
	GridComponent,
	TitleComponent,
	TooltipComponent,
} from "echarts/components";
import {
	CanvasRenderer,
	// SVGRenderer,
} from "echarts/renderers";
import { useState } from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { TempSlider } from "@/components/TempSlider";

import { Button } from "@/components/ui/button";
import NavMenu from "@/components/NavMenu";

// Register the required components
echarts.use([
	TitleComponent,
	TooltipComponent,
	GridComponent,
	BarChart,
	CanvasRenderer,
]);

export default function Page() {
	const router = useRouter();
	const [mode, setMode] = useState("auto");
	const options = {};
	return (
		//  stroke="#888888"
		//         fontSize={12} radius={[4, 4, 0, 0]}
		<main className="mx-auto h-screen flex flex-col items-center justify-center bg-black">
			{/* ID: {router.query.slug}
      <h1>Plant</h1> */}
			<NavMenu />

			<div className=""></div>
		</main>
	);
}
