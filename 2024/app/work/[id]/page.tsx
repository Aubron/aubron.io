import { Card, CardFooter } from '@nextui-org/card';
import work from '@/config/work';
import WorkHeader from '@/components/WorkHeader';
import { Image } from '@nextui-org/image';
import TechnologyChips from '@/components/TechnologyChips';
import ColorChips from '@/components/ColorChips';

export default function Page({
  params,
}: {
  params: { id: keyof typeof work };
}) {
  console.log(params);
  const job = work[params.id];
  return (
    <div
      className="overflow-y-auto w-screen"
      style={{ height: 'calc(100vh - 4rem)' }}
    >
      <div className="max-w-7xl mx-auto pb-24">
        <WorkHeader {...job} />
        <div className="grid grid-cols-12 mt-4 gap-4">
          <div className="col-span-3">
            <Card className="p-4">
              <span>Design System</span>
              <span>{job.designSystem}</span>
              <span>Palette</span>
              <ColorChips colors={job.palette} />
              <span>Fonts</span>
              <span>{job.fonts.join(', ')}</span>
              <span>Technologies</span>
              <TechnologyChips technologies={job.technologies} />
            </Card>
          </div>
          <div className="col-span-9">
            <Card isFooterBlurred>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={job.image}
              />

              <CardFooter className="text-center absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <p className="w-full text-small text-white">
                  {job.productSubtitle}
                </p>
              </CardFooter>
            </Card>
            <Card isFooterBlurred>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={job.image}
              />

              <CardFooter className="text-center absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <p className="w-full text-small text-white">
                  {job.productSubtitle}
                </p>
              </CardFooter>
            </Card>
            <Card isFooterBlurred>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={job.image}
              />

              <CardFooter className="text-center absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <p className="w-full text-small text-white">
                  {job.productSubtitle}
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
