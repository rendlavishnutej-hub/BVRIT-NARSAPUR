import Sidebar from '@/components/ui/sidebar';

const studentNavItems = [
  { label: 'My Dashboard', href: '/student', emoji: '🏠' },
  { label: 'Reading World', href: '/student/reading', emoji: '📚' },
  { label: 'Numeracy World', href: '/student/numeracy', emoji: '🔢' },
  { label: 'My Learning DNA', href: '/student/profile', emoji: '🧬' },
  { label: 'Achievements', href: '/student/achievements', emoji: '🏆' },
];

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-ivory">
      <Sidebar title="Student" emoji="🎒" items={studentNavItems} role="student" />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
