"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ColorInputProps {
  rgb: { r: number, g: number, b: number }
  hex: string
  onRGBChange: (rgb: { r: number, g: number, b: number }) => void
  onHexChange: (hex: string) => void
}

export function ColorInput({ rgb, hex, onRGBChange, onHexChange }: ColorInputProps) {
  const handleRGBInput = (component: 'r' | 'g' | 'b', value: string) => {
    const numValue = parseInt(value) || 0
    if (numValue >= 0 && numValue <= 255) {
      onRGBChange({ ...rgb, [component]: numValue })
    }
  }

  const handleHexInput = (value: string) => {
    const hexValue = value.startsWith('#') ? value : `#${value}`
    onHexChange(hexValue)
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="r-value">Red</Label>
          <Input
            id="r-value"
            type="number"
            min="0"
            max="255"
            value={rgb.r}
            onChange={(e) => handleRGBInput('r', e.target.value)}
            className="font-mono"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="g-value">Green</Label>
          <Input
            id="g-value"
            type="number"
            min="0"
            max="255"
            value={rgb.g}
            onChange={(e) => handleRGBInput('g', e.target.value)}
            className="font-mono"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="b-value">Blue</Label>
          <Input
            id="b-value"
            type="number"
            min="0"
            max="255"
            value={rgb.b}
            onChange={(e) => handleRGBInput('b', e.target.value)}
            className="font-mono"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="hex-value">Hexadecimal</Label>
        <Input
          id="hex-value"
          value={hex}
          onChange={(e) => handleHexInput(e.target.value)}
          className="font-mono uppercase"
          maxLength={7}
        />
      </div>
    </div>
  )
}