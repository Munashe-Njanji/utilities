import { RGBToHexConverter } from "@/components/rgb-hex/converter"
import { Shell } from "@/components/shells/shell"

export const metadata = {
  title: "RGB to HEX Color Converter | Utilities",
  description: "Professional RGB to HEX color converter with live preview and advanced color manipulation tools.",
}

export default function RGBToHexPage() {
  return (
    <Shell>
      <RGBToHexConverter />
    </Shell>
  )
}