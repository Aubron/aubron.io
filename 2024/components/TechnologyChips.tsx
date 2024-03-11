'use client';

import { Chip } from '@nextui-org/chip';
import { Avatar } from '@nextui-org/avatar';
import { TECHNOLOGIES } from '@/config/work';

interface TechnologyChipsProps {
  technologies: TECHNOLOGIES[];
}

const TechnologyChips: React.FC<TechnologyChipsProps> = ({ technologies }) => (
  <div className="flex gap-1">
    {technologies.map(technology => (
      <Chip
        variant="flat"
        key={technology}
        avatar={<Avatar name={technology} src={`/${technology}.svg`} />}
      >
        {technology}
      </Chip>
    ))}
  </div>
);

export default TechnologyChips;
