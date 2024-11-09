"use client"

interface ColorHistoryProps {
  history: string[]
  onSelect: (color: string) => void
}

export function ColorHistory({ history, onSelect }: ColorHistoryProps) {
  if (history.length === 0) return null

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Color History</h2>
      <div className="grid grid-cols-8 gap-2">
        {history.map((color, index) => (
          <button
            key={`${color}-${index}`}
            className="w-full aspect-square rounded-md border overflow-hidden hover:scale-105 transition-transform"
            style={{ backgroundColor: color }}
            onClick={() => onSelect(color)}
            title={color.toUpperCase()}
          />
        ))}
      </div>
    </div>
  )
}