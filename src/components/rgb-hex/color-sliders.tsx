"use client"

import { Slider } from "@/components/ui/slider"

interface ColorSlidersProps {
  rgb: { r: number, g: number, b: number }
  onChange: (rgb: { r: number, g: number, b: number }) => void
}

export function ColorSliders({ rgb, onChange }: ColorSlidersProps) {
  const handleSliderChange = (component: 'r' | 'g' | 'b', value: number[]) => {
    onChange({ ...rgb, [component]: value[0] })
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Red</span>
          <span className="text-sm text-muted-foreground">{rgb.r}</span>
        </div>
        <Slider
          value={[rgb.r]}
          max={255}
          step={1}
          className="[&_[role=slider]]:bg-red-500"
          onValueChange={(value) => handleSliderChange('r', value)}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Green</span>
          <span className="text-sm text-muted-foreground">{rgb.g}</span>
        </div>
        <Slider
          value={[rgb.g]}
          max={255}
          step={1}
          className="[&_[role=slider]]:bg-green-500"
          onValueChange={(value) => handleSliderChange('g', value)}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Blue</span>
          <span className="text-sm text-muted-foreground">{rgb.b}</span>
        </div>
        <Slider
          value={[rgb.b]}
          max={255}
          step={1}
          className="[&_[role=slider]]:bg-blue-500"
          onValueChange={(value) => handleSliderChange('b', value)}
        />
      </div>
    </div>
  )
}