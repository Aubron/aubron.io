'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import { ThemeSwitch } from '@/components/theme-switch';
import { DownChevron, GithubIcon } from '@/components/icons';
import {
  BandwidthText,
  GoogleText,
  IndeedText,
  ScoreShotsText,
} from './workText';
import WorkNav from './WorkNav';
import { usePathname } from 'next/navigation';
import { subtitle } from './primitives';

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      {pathname !== '/' ? (
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <p className={subtitle()}>Aubron Wood</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
      ) : null}

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
                endContent={<DownChevron />}
              >
                my work
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[190px]"
            itemClasses={{
              base: 'data-[hover=true]:bg-inherit group data-[hover=true]:bg-white text-white',
            }}
          >
            <DropdownItem
              key="indeed"
              className="bg-indeed"
              as={Link}
              href="/work/indeed"
            >
              <WorkNav color="indeed" Icon={IndeedText} />
            </DropdownItem>
            <DropdownItem
              key="google"
              className="bg-google"
              as={Link}
              href="/work/google"
            >
              <WorkNav color="google" Icon={GoogleText} />
            </DropdownItem>
            <DropdownItem
              key="bandwidth"
              className="bg-bandwidth"
              as={Link}
              href="/work/bandwidth"
            >
              <WorkNav color="bandwidth" Icon={BandwidthText} />
            </DropdownItem>
            <DropdownItem
              key="scoreshots"
              className="bg-scoreshots"
              as={Link}
              href="/work/scoreshots"
            >
              <WorkNav color="scoreshots" Icon={ScoreShotsText} />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="hidden sm:flex gap-2">
          {/*
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
  */}
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
