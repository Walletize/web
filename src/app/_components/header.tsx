'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import discordImg from '@/public/logos/discord.svg';
import githubImg from '@/public/logos/github.svg';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LandingThemeToggle } from './landing-theme-toggle';

function Header({ sessionCookieExists }: { sessionCookieExists: boolean }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY || window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    setScrollPosition(window.scrollY || window.pageYOffset);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={
        'fixed top-0 z-50 flex h-16 w-full items-center px-4 transition-all duration-300 md:px-6' +
        (scrollPosition > 40
          ? ' bg-white bg-opacity-80 backdrop-blur-md dark:bg-black dark:bg-opacity-60'
          : ' bg-transparent')
      }
    >
      <nav className="flex w-full justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <div className="h-8 w-8">
            <Image
              src="/walletize.svg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              alt="Walletize Logo"
            />
          </div>
          <span className="sr-only">Walletize</span>
        </Link>
        <div className="hidden flex-col gap-8 text-lg font-medium md:flex md:flex-row md:items-center md:gap-7 md:text-sm lg:gap-8">
          <Link href="/#features" className="text-foreground/80 transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="/#pricing" className="text-foreground/80 transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link href="/#faq" className="text-foreground/80 transition-colors hover:text-foreground">
            FAQ
          </Link>
          <Link
            href="https://github.com/Walletize/"
            className="opacity-75 transition-opacity hover:opacity-100 dark:invert"
            target="_blank"
          >
            <Image src={githubImg} width={20} height={20} alt="GitHub" />
          </Link>
          <Link
            href="https://discord.gg/w6KMSFjFTQ"
            className="opacity-75 transition-opacity hover:opacity-100 dark:invert"
            target="_blank"
          >
            <Image src={discordImg} width={20} height={20} alt="Discord" />
          </Link>
          <LandingThemeToggle></LandingThemeToggle>
        </div>
      </nav>
      <Separator orientation="vertical" className="mx-6 hidden h-2/3 md:block" />
      {sessionCookieExists ? (
        <Link href="/dashboard">
          <Button>Go to dashboard</Button>
        </Link>
      ) : (
        <div className="flex items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Link href="/login" className="hidden md:block">
            <Button variant="outline">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button>Get started for free</Button>
          </Link>
        </div>
      )}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="ml-4 shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
              <div className="h-8 w-8">
                <Image
                  src="/walletize.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: 'auto', height: 'auto' }}
                  alt="Walletize Logo"
                />
              </div>
              <span className="sr-only">Walletize</span>
            </Link>
            <Link href="/#features" className="text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="/#pricing" className="text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="/#faq" className="text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
            <Link
              href="https://github.com/Walletize/"
              className="opacity-75 transition-opacity hover:opacity-100 dark:invert"
              target="_blank"
            >
              <Image src={githubImg} width={20} height={20} alt="GitHub" />
            </Link>
            <Link
              href="https://discord.gg/w6KMSFjFTQ"
              className="opacity-75 transition-opacity hover:opacity-100 dark:invert"
              target="_blank"
            >
              <Image src={discordImg} width={20} height={20} alt="Discord" />
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header;
