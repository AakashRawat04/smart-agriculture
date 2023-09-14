import * as React from "react"
import { Slider, SliderProps } from "@radix-ui/react-slider"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card"
import { Label } from "@radix-ui/react-label"

interface TemperatureSelectorProps {
  defaultValue: SliderProps["defaultValue"]
}

export function TempSlider({
  defaultValue ,
}: TemperatureSelectorProps) {
  const [value, setValue] = React.useState(defaultValue)

  return (
    <div className="grid gap-2 pt-2 ">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="temperature">Temperature</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                {30.2}
              </span>
            </div>
            <input type='range' step={0.1} max={100} value={30.2} className="mb-3"/>
        
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm bg-gray-100 border p-2 rounded"
          side="left"
        >
          Controls randomness: lowering results in less random completions. As
          the temperature approaches zero, the model will become deterministic
          and repetitive.
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}