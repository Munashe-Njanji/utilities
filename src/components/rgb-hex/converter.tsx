"use client"

import { useState, useEffect } from "react"
import { ColorInput } from "./color-input"
import { ColorPreview } from "./color-preview"
import { ColorHistory } from "./color-history"
import { ColorSliders } from "./color-sliders"
import { ColorInfo } from "./color-info"
import { useToast } from "@/hooks/use-toast"

export function RGBToHexConverter() {
  const [rgb, setRGB] = useState({ r: 0, g: 0, b: 0 })
  const [hex, setHex] = useState("#000000")
  const [history, setHistory] = useState<string[]>([])
  const { toast } = useToast()

  useEffect(() => {
    const newHex = rgbToHex(rgb.r, rgb.g, rgb.b)
    setHex(newHex)
  }, [rgb])

  const handleRGBChange = (color: { r: number, g: number, b: number }) => {
    setRGB(color)
  }

  const handleHexChange = (hexValue: string) => {
    if (/^#[0-9A-F]{6}$/i.test(hexValue)) {
      const rgbValue = hexToRgb(hexValue)
      if (rgbValue) {
        setRGB(rgbValue)
        setHex(hexValue)
      }
    }
  }

  const addToHistory = () => {
    setHistory(prev => {
      const newHistory = [hex, ...prev.slice(0, 19)]
      return Array.from(new Set(newHistory))
    })
    toast({
      title: "Color saved to history",
      description: `${hex.toUpperCase()} has been saved to your color history.`,
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">RGB to HEX Converter</h1>
        <p className="text-muted-foreground">
          Convert RGB colors to hexadecimal color codes with live preview and advanced tools.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <ColorSliders rgb={rgb} onChange={handleRGBChange} />
          <ColorInput 
            rgb={rgb} 
            hex={hex} 
            onRGBChange={handleRGBChange}
            onHexChange={handleHexChange}
          />
          <ColorInfo rgb={rgb} hex={hex} onSave={addToHistory} />
        </div>
        
        <div className="space-y-4">
          <ColorPreview color={hex} />
          <ColorHistory history={history} onSelect={handleHexChange} />
        </div>
      </div>
    </div>
  )
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => n.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function hexToRgb(hex: string): { r: number, g: number, b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}