import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="mb-4 flex items-center justify-center gap-2 font-semibold sm:mb-0">
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
            <span className="font-bold">Walletize</span>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <Link href="/legal/terms" className="me-4 hover:underline md:me-6">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="mailto:support@walletize.app" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
          © 2024{' '}
          <Link href="/" className="hover:underline">
            Walletize
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
