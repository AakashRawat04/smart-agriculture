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

export default function Page() {
	return (
		<div className="mx-auto h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
			<Card className="w-[700px] mt-3 mx-auto">
				<CardHeader>
					<CardTitle>Plant Grid Stats</CardTitle>
					<CardDescription>Realtime detetcted values.</CardDescription>
					<div className="my-2">
						<TempSlider defaultValue={[30]} />
					</div>
					<Tabs defaultValue={"auto"} className="">
						<TabsList>
							<TabsTrigger value="auto">Automatic</TabsTrigger>
							<TabsTrigger value="manual">Manual Scheduled</TabsTrigger>
						</TabsList>

						<TabsContent value="auto" className="bg-gray-100">
							Automatically iriigate plants using AI.
							<div>
								Mode Selected: <span className="text-green-700">Auto</span>
								<br />
								Irrigation status: <span className="text-green-700">ON</span>
							</div>
						</TabsContent>
						<TabsContent value="manual" className="bg-gray-100">
							Irrigate plants in scheduled intervals.
							<div>
								Mode Selected: <span className="text-green-700">Manual</span>
								<br />
								Irrigation status: <span className="text-red-700">OFF</span>
							</div>
						</TabsContent>

						<div className="w-full mt-4 mx-auto">
							<ReactECharts
								echarts={echarts}
								option={GRAPH_OPTIONS}
								notMerge={true}
								lazyUpdate={true}
								theme={"infographic"}
							/>
						</div>
					</Tabs>
				</CardHeader>
				<CardContent></CardContent>
			</Card>
		</div>
	);
}
