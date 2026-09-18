import Sidebar from '@/components/ui/sidebar';

const adminNavItems = [
  { label: 'Overview', href: '/admin', emoji: '📊' },
  { label: 'Schools', href: '/admin/schools', emoji: '🏫' },
  { label: 'Trends', href: '/admin/trends', emoji: '📈' },
  { label: 'Settings', href: '/admin/settings', emoji: '⚙️' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-ivory">
      <Sidebar title="Admin" emoji="🏫" items={adminNavItems} role="admin" />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
