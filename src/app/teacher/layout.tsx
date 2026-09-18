import Sidebar from '@/components/ui/sidebar';

const teacherNavItems = [
  { label: 'Dashboard', href: '/teacher', emoji: '📊' },
  { label: 'Classroom Map', href: '/teacher/classroom', emoji: '🗺️' },
  { label: 'Learning Groups', href: '/teacher/groups', emoji: '👥' },
  { label: 'Skill Tree', href: '/teacher/skills', emoji: '🌳' },
  { label: 'AI Copilot', href: '/teacher/copilot', emoji: '🤖' },
  { label: 'Progress', href: '/teacher/progress', emoji: '📈' },
  { label: 'Assessments', href: '/teacher/assessments', emoji: '📝' },
];

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-ivory">
      <Sidebar title="Teacher" emoji="👩🏫" items={teacherNavItems} role="teacher" />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
