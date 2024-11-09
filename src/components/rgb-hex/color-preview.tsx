"use client";

interface ColorPreviewProps {
  color: string;
}

function getContrastColor(hex: string) {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness(luma) of the color(https://en.wikipedia.org/wiki/Luma_%28video%29)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white based on brightness
  return brightness > 155 ? "#000000" : "#FFFFFF";
}

export function ColorPreview({ color }: ColorPreviewProps) {
  const textColor = getContrastColor(color);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Color Preview</h2>
      <div className="rounded-lg overflow-hidden border">
        <div
          className="w-full h-64 transition-colors duration-200"
          style={{ backgroundColor: color }}
        />
        <div className="grid grid-cols-3 divide-x">
          <div
            className="p-4 text-center"
            style={{ backgroundColor: color, color: textColor, opacity: 0.75 }}
          >
            75%
          </div>
          <div
            className="p-4 text-center"
            style={{ backgroundColor: color, color: textColor, opacity: 0.5 }}
          >
            50%
          </div>
          <div
            className="p-4 text-center"
            style={{ backgroundColor: color, color: textColor, opacity: 0.25 }}
          >
            25%
          </div>
        </div>
      </div>
    </div>
  );
}
