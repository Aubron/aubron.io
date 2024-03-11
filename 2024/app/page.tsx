import { DownloadIcon, GithubIcon } from '@/components/icons';
import { subtitle, title } from '@/components/primitives';
import { Button } from '@nextui-org/button';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import { Tooltip } from '@nextui-org/tooltip';
import WorkCard from '@/components/WorkCard';
import {
  BandwidthText,
  GoogleText,
  IndeedText,
  ScoreShotsText,
} from '@/components/workText';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-between h-full">
      <div></div>
      <Card className="aspect-video flex flex-col gap-8 justify-center">
        <CardHeader className="absolute z-10 top-0 flex-col items-end">
          <Link isExternal href="#" aria-label="Github">
            <Tooltip content="Download Contact">
              <DownloadIcon className="text-default-500" />
            </Tooltip>
          </Link>
        </CardHeader>
        <div className="px-24">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title({ color: 'violet', size: 'lg' })}>
              Aubron&nbsp;
            </h1>
            <h1 className={title({ size: 'lg' })}>Wood</h1>
            <br />
            <h1 className={subtitle()}>Engineering Leader&nbsp;</h1>
            <h1 className={subtitle({ color: 'violet' })}>-&nbsp;</h1>
            <h1 className={subtitle()}>Team Builder&nbsp;</h1>
            <h1 className={subtitle({ color: 'violet' })}>-&nbsp;</h1>
            <h1 className={subtitle()}>Product Owner&nbsp;</h1>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Button size="md" variant="ghost">
            Résumé
          </Button>
          <Button
            as={Link}
            size="md"
            variant="ghost"
            href="mailto:aubron+website@daemon.group"
          >
            Email
          </Button>
        </div>
      </Card>
      <div className="text-center -mb-20 pt-32 shrink opacity-40 hover:opacity-100 hover:mb-0 transition-all w-[100vw]">
        <h1 className="font-semibold text-default-foreground">my work</h1>
        <div className="mt-8 w-[970px] gap-4 grid grid-cols-12 grid-rows-1 m-auto">
          <WorkCard
            color="indeed"
            domain="Microfrontend Platform"
            title="Engineering Team Lead"
            Icon={IndeedText}
          />
          <WorkCard
            color="google"
            domain="Material Design System"
            title="Engineering Team Lead"
            Icon={GoogleText}
          />
          <WorkCard
            color="bandwidth"
            domain="Frontend Dashboard"
            title="Eng Lead, Product Owner"
            Icon={BandwidthText}
          />
          <WorkCard
            color="scoreshots"
            domain="Web-based Graphic Design"
            title="CTO & Cofounder"
            Icon={ScoreShotsText}
          />
        </div>
        <div className="h-10"></div>
      </div>
    </section>
  );
}
