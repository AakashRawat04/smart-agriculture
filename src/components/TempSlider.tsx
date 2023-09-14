import * as React from "react";
import { Slider, SliderProps } from "@radix-ui/react-slider";
import {
	HoverCard,
	HoverCardTrigger,
	HoverCardContent,
} from "@radix-ui/react-hover-card";
import { Label } from "@radix-ui/react-label";

interface TemperatureSelectorProps {
	defaultValue: SliderProps["defaultValue"];
}

export function TempSlider({ defaultValue }: TemperatureSelectorProps) {
	const [value, setValue] = React.useState(defaultValue);

	return (
		<div className="grid gap-2 pt-2 ">
			<HoverCard openDelay={200}>
				<HoverCardTrigger asChild>
					<div className="grid gap-4">
						<div className="flex items-center justify-between">
							<Label htmlFor="temperature">Temperature</Label>
							<span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-borde">
								{30.2}
							</span>
						</div>
						<input
							type="range"
							min={0}
							max={100}
							step={0.1}
							value={value ? value[0] : 60}
							className=" accent-orange-300"
						/>
					</div>
				</HoverCardTrigger>
				<HoverCardContent
					align="start"
					className="w-auto text-sm bg-orange-50 border p-2 rounded m-7"
					side="left"
				>
					Current Temp: {value ? value[0] : 60}
				</HoverCardContent>
			</HoverCard>
			<ul className="flex justify-between w-full px-[10px]">
				<li className="flex justify-center relative">
					<span className="">20</span>
				</li>
				<li className="flex justify-center relative">
					<span className="">30</span>
				</li>
				<li className="flex justify-center relative">
					<span className="absolute">40</span>
				</li>
				<li className="flex justify-center relative">
					<span className="absolute">60</span>
				</li>
				<li className="flex justify-center relative">
					<span className="absolute">80</span>
				</li>
				<li className="flex justify-center relative">
					<span className="absolute">100</span>
				</li>
			</ul>
			<HoverCard openDelay={200}>
				<HoverCardTrigger asChild>
					<div className="grid gap-4">
						<input
							type="range"
							min={0}
							max={100}
							step={0.1}
							value={60}
							className="accent-green-300"
						/>
						<div className="flex items-center justify-between">
							<Label htmlFor="temperature">Humidity</Label>
							<span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-borde">
								{30.2}
							</span>
						</div>
					</div>
				</HoverCardTrigger>
				<HoverCardContent
					align="start"
					className="w-auto text-sm bg-green-50 border p-2 rounded mr-7"
					side="left"
				>
					Humidity Status: {value ? value[0] : 60}
				</HoverCardContent>
			</HoverCard>
		</div>
	);
}
