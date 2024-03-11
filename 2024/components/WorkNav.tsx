import { useState } from 'react';
import { Button } from '@nextui-org/button';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import { Tooltip } from '@nextui-org/tooltip';
import { ScoreShotsText } from './workText';
import { IconSvgProps } from '@/types';

const colorVariants = {
  indeed: 'group-hover:text-indeed',
  google: 'group-hover:text-google',
  scoreshots: 'group-hover:text-scoreshots',
  bandwidth: 'group-hover:text-bandwidth',
};

interface WorkNavProps {
  color: keyof typeof colorVariants;
  Icon: React.FC<IconSvgProps>;
}

const WorkNav: React.FC<WorkNavProps> = ({ color, Icon }) => {
  return (
    <div className={`${colorVariants[color]} h-10 -mb-3`}>
      <Icon height={32} style={{ margin: 'auto' }} />
    </div>
  );
};

export default WorkNav;
