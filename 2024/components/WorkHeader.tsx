import work, { WorkDetails } from '@/config/work';
import { Card } from '@nextui-org/card';
import { Chevron, DIRECTION } from './icons';
import { Tooltip } from '@nextui-org/tooltip';
import { Link } from '@nextui-org/link';
import Markdown from 'react-markdown';

const WorkHeader: React.FC<WorkDetails> = ({
  bg,
  TextIcon,
  SquareIcon,
  domain,
  title,
  previous,
  next,
  yearStart,
  yearEnd = 'Present',
}) => {
  return (
    <Card
      className={`${bg} + text-white flex flex-row h-60 items-center justify-center gap-8 overflow-visible`}
    >
      {previous ? (
        <div className="absolute -left-12 cursor-pointer">
          <Tooltip content={work[previous].employer} placement="left">
            <Link
              className="h-40 flex flex-col items-center justify-center w-12 text-foreground"
              href={`/work/${previous}`}
            >
              <Chevron direction={DIRECTION.LEFT} />
            </Link>
          </Tooltip>
        </div>
      ) : null}
      {next ? (
        <div className="absolute -right-12 cursor-pointer">
          <Tooltip content={work[next].employer} placement="right">
            <Link
              className="h-40 flex flex-col items-center justify-center w-12 text-foreground"
              href={`/work/${next}`}
            >
              <Chevron direction={DIRECTION.RIGHT} />
            </Link>
          </Tooltip>
        </div>
      ) : null}
      {SquareIcon ? <SquareIcon height="110" /> : null}
      <div className="text-center">
        <TextIcon height="120" />
        <h2 className="-mt-2">
          {title} - {domain}
        </h2>
        <h2 className="text-xs text-gray-300">
          {yearStart} - {yearEnd}
        </h2>
      </div>
    </Card>
  );
};

export default WorkHeader;
