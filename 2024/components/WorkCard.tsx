import { Card } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { IconSvgProps } from '@/types';

const colorVariants = {
  indeed: 'bg-indeed hover:bg-white hover:text-indeed',
  google: 'bg-google hover:bg-white hover:text-google',
  scoreshots: 'bg-scoreshots hover:bg-white hover:text-scoreshots',
  bandwidth: 'bg-bandwidth hover:bg-white hover:text-bandwidth',
};

interface WorkCardProps {
  color: keyof typeof colorVariants;
  title: string;
  domain: string;
  Icon: React.FC<IconSvgProps>;
}

const WorkCard: React.FC<WorkCardProps> = ({ color, Icon, title, domain }) => {
  return (
    <Card
      className={`${colorVariants[color]} col-span-12 sm:col-span-3 h-[120px] p-4 text-white hover:cursor-pointer flex flex-col justify-center text-center group rounded-md`}
      as={Link}
      href={`/work/${color}`}
    >
      <Icon />
      <p className="text-sm opacity-0 -mt-8 group-hover:-mt-0 group-hover:opacity-100 transition-all">
        {domain}
      </p>
      <p className="text-xs opacity-0 group-hover:opacity-100 transition-all">
        {title}
      </p>
    </Card>
  );
};

export default WorkCard;
