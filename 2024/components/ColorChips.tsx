'use client';

import { Tooltip } from '@nextui-org/tooltip';

interface ColorChipsProps {
  colors: string[];
}

const ColorChips: React.FC<ColorChipsProps> = ({ colors }) => (
  <div className="flex gap-2">
    {colors.map(color => (
      <Tooltip key={color} content={color} placement="bottom">
        <div
          className="rounded-xl w-8 h-8 border-gray-700 border-1"
          style={{ backgroundColor: color }}
        ></div>
      </Tooltip>
    ))}
  </div>
);

export default ColorChips;
