"use client"

import { Button } from "@/components/ui/button"
import { Copy, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ColorInfoProps {
  rgb: { r: number, g: number, b: number }
  hex: string
  onSave: () => void
}

export function ColorInfo({ rgb, hex, onSave }: ColorInfoProps) {
  const { toast } = useToast()

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: `${text} has been copied to your clipboard.`,
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy RGB
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => copyToClipboard(hex.toUpperCase())}
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy HEX
        </Button>
        <Button
          variant="default"
          className="w-full"
          onClick={onSave}
        >
          <Save className="mr-2 h-4 w-4" />
          Save Color
        </Button>
      </div>
    </div>
  )
}