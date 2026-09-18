'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItem {
  label: string;
  href: string;
  emoji: string;
}

interface SidebarProps {
  title: string;
  emoji: string;
  items: SidebarItem[];
  role: 'student' | 'teacher' | 'admin';
}

export default function Sidebar({ title, emoji, items, role }: SidebarProps) {
  const pathname = usePathname();

  const roleColors = {
    student: 'bg-soft-peach/40',
    teacher: 'bg-sky/30',
    admin: 'bg-peach/20',
  };

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-soft-peach/30 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-soft-peach/20">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">🧠</span>
          <span className="font-heading font-bold text-lg text-charcoal">Pragya</span>
        </Link>
        <div className={`mt-3 px-3 py-1.5 rounded-lg text-xs font-medium text-charcoal-light ${roleColors[role]}`}>
          {emoji} {title}
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-peach/20 text-charcoal font-semibold'
                  : 'text-charcoal-light hover:bg-ivory hover:text-charcoal'
              }`}
            >
              <span>{item.emoji}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Back to Home */}
      <div className="px-3 py-4 border-t border-soft-peach/20">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-charcoal-lighter hover:bg-ivory hover:text-charcoal transition-all"
        >
          <span>🏠</span>
          <span>Back to Home</span>
        </Link>
      </div>
    </aside>
  );
}
