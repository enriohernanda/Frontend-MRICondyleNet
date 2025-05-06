'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-[#578FCA] dark:bg-[#161B22] h-screen w-16 lg:w-60 p-4 flex flex-col gap-2 items-center lg:items-start">
      {/* SECTION: Data */}
      <h2 className="text-white dark:text-gray-200 text-sm font-semibold uppercase hidden lg:block">Data</h2>
      <SidebarItem href="/upload" icon="/upload.png" text="Upload Data" pathname={pathname} />
      <SidebarItem href="/history" icon="/analytics.png" text="History" pathname={pathname} />

      {/* SECTION: Models */}
      <h2 className="text-white dark:text-gray-200 text-sm font-semibold uppercase hidden lg:block mt-4">Models</h2>
      <SidebarItem href="/models" icon="/models.png" text="Models" pathname={pathname} />
      <SidebarItem href="/visualize" icon="/visualize.png" text="Visualize" pathname={pathname} />
    </aside>
  );
};

interface SidebarItemProps {
  href: string;
  icon: string;
  text: string;
  pathname: string;
}

const SidebarItem = ({ href, icon, text, pathname }: SidebarItemProps) => {
  return (
    <Link href={href} className={`flex items-center gap-4 p-2 rounded-md transition-all ${pathname === href ? 'bg-[#3674B5] dark:bg-[#30363D] text-white dark:text-gray-200' : 'text-white'} justify-center lg:justify-start w-full`}>
      <Image src={icon} alt={text} width={24} height={24} />
      <span className="hidden lg:block">{text}</span>
    </Link>
  );
};

export default Sidebar;
