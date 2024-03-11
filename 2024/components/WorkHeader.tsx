import { WorkDetails } from '@/config/work';
import { Card } from '@nextui-org/card';

interface WorkHeaderProps {}

const WorkHeader: React.FC<WorkDetails> = ({
  bg,
  TextIcon,
  SquareIcon,
  domain,
  title,
}) => {
  return (
    <Card
      className={`${bg} + text-white flex flex-row h-60 items-center justify-center gap-8`}
    >
      {SquareIcon ? <SquareIcon height="110" /> : null}
      <div className="text-center">
        <TextIcon height="120" />
        <h2 className="-mt-2">
          {title} - {domain}
        </h2>
      </div>
    </Card>
  );
};

export default WorkHeader;
