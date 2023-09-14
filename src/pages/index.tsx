import { GRAPH_OPTIONS, MOCK_GRAPH_DATA } from "@/lib/constants";
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
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TempSlider } from "@/components/TempSlider";

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
  const [mode,setMode]=useState('auto')
  const options = {};
  return (
    //  stroke="#888888"
    //         fontSize={12} radius={[4, 4, 0, 0]}
    <main className="mx-auto h-screen flex items-center justify-center">
      {/* ID: {router.query.slug}
      <h1>Plant</h1> */}
    
      <Card className="w-[700px] mt-3 mx-auto">
      <CardHeader>
        <CardTitle>Plant Grid Stats</CardTitle>
        <CardDescription>Realtime detetcted values.</CardDescription>
        <div className="my-2">
          <TempSlider defaultValue={[0.56]} />
        </div>
        <Tabs defaultValue={'auto'} className="">
          <TabsList>
            <TabsTrigger value="auto">Automatic</TabsTrigger>
            <TabsTrigger value="manual">Manual Scheduled</TabsTrigger>
          </TabsList>

          <TabsContent value="auto">
           Automatically iriigate plants using AI.
          </TabsContent>
          <TabsContent value="manual">Irrigate plants in scheduled intervals.</TabsContent>

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
      <CardContent></CardContent></Card>
      <div className="">
      
      </div>
    </main>
  );
}
