import { Card, CardFooter, CardBody, CardHeader } from '@nextui-org/card';
import work from '@/config/work';
import WorkHeader from '@/components/WorkHeader';
import { Image } from '@nextui-org/image';
import TechnologyChips from '@/components/TechnologyChips';
import ColorChips from '@/components/ColorChips';
import { redirect } from 'next/navigation';
import { tv } from 'tailwind-variants';
import Markdown from 'react-markdown';

const sidebarHeading = tv({
  base: 'tracking-tight',
  variants: {
    color: {
      primary: 'text-foreground-900',
      secondary: 'text-foreground-500',
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-3xl font-semibold',
    },
    indent: {
      true: 'indent-2',
    },
    margin: {
      '-sm': '-mb-1',
      none: 'mb-0',
      sm: 'mb-2',
      md: 'mb-4',
      lg: 'mb-5',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    margin: 'none',
  },
});

export default function Page({
  params,
}: {
  params: { id: keyof typeof work };
}) {
  const job = work[params.id];
  if (!job) {
    redirect('/');
  }
  return (
    <div
      className="overflow-y-auto w-screen"
      style={{ height: 'calc(100vh - 4rem)' }}
    >
      <div className="max-w-7xl mx-auto pb-24">
        <WorkHeader {...job} />
        <div className="grid grid-cols-12 mt-4 gap-4">
          <div className="col-span-3 flex flex-col gap-4">
            <Card className="p-4">
              <span className={sidebarHeading({ size: 'xl' })}>
                {job.employer}
              </span>
              <span
                className={sidebarHeading({
                  size: 'lg',
                  color: 'secondary',
                  margin: 'md',
                })}
              >
                {job.location}
              </span>
              {job.titles.map(title => (
                <span
                  className={sidebarHeading({
                    size: 'sm',
                    color: 'secondary',
                    indent: true,
                  })}
                  key={title}
                >
                  {title}
                </span>
              ))}
            </Card>
            <Card className="p-4">
              <span
                className={sidebarHeading({
                  size: 'sm',
                  margin: 'sm',
                })}
              >
                {job.tldr}
              </span>
            </Card>
            <Card className="p-4">
              <span
                className={sidebarHeading({ size: 'md', color: 'secondary' })}
              >
                Design System
              </span>
              <span className={sidebarHeading({ size: 'xl', margin: 'md' })}>
                {job.designSystem}
              </span>
              <span
                className={sidebarHeading({ size: 'md', color: 'secondary' })}
              >
                Palette
              </span>
              <ColorChips colors={job.palette} />
              <span
                className={sidebarHeading({ size: 'md', color: 'secondary' })}
              >
                Fonts
              </span>
              <span className={sidebarHeading({ size: 'lg', margin: 'md' })}>
                {job.fonts.join(', ')}
              </span>
              <span
                className={sidebarHeading({
                  size: 'md',
                  color: 'secondary',
                  margin: 'sm',
                })}
              >
                Technologies
              </span>
              <TechnologyChips technologies={job.technologies} />
            </Card>
          </div>
          <div className="col-span-9">
            <Card isFooterBlurred>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={job.imageFull}
              />

              <CardFooter className="text-center absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <Markdown className="m-auto max-w-2xl text-small text-white">
                  {job.productSubtitle}
                </Markdown>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
