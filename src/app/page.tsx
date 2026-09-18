import Link from 'next/link';

const features = [
  {
    emoji: '🔍',
    title: 'AI Learning Investigator',
    description: 'Goes beyond right or wrong. Finds out WHY a child is struggling and where learning breaks down.',
  },
  {
    emoji: '🧬',
    title: 'Learning DNA',
    description: 'Every child gets a unique skill profile — not just one score. See strengths and gaps across every sub-skill.',
  },
  {
    emoji: '🎮',
    title: 'Learning Quest',
    description: 'Children progress through fun learning worlds. Level up by showing real mastery, not just answering questions.',
  },
  {
    emoji: '👩🏫',
    title: 'Teacher Command Center',
    description: 'See your whole classroom at a glance. Know exactly who needs help with what — right now.',
  },
  {
    emoji: '🤖',
    title: 'AI Teacher Copilot',
    description: 'Get ready-to-use activity plans for each learning group. Powered by classroom intelligence.',
  },
  {
    emoji: '🌳',
    title: 'Skill Tree',
    description: 'See how skills connect. Find the real bottleneck — the missing building block that holds a child back.',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white/60 backdrop-blur-sm border-b border-soft-peach/30">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧠</span>
          <span className="font-heading font-bold text-xl text-charcoal">Pragya</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/student"
            className="px-4 py-2 text-sm font-medium text-charcoal hover:text-peach-dark transition-colors"
          >
            Student
          </Link>
          <Link
            href="/teacher"
            className="px-4 py-2 text-sm font-medium text-charcoal hover:text-peach-dark transition-colors"
          >
            Teacher
          </Link>
          <Link
            href="/admin"
            className="px-4 py-2 text-sm font-medium text-charcoal hover:text-peach-dark transition-colors"
          >
            Admin
          </Link>
          <Link
            href="/teacher"
            className="px-5 py-2.5 bg-peach text-charcoal font-semibold rounded-xl hover:bg-peach-dark transition-all shadow-soft hover:shadow-card"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 py-20 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 bg-sky/40 text-charcoal-light text-sm font-medium rounded-full mb-6">
          Inspired by ASER DIYA assessment methodology
        </div>
        <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-charcoal leading-tight mb-6">
          Making Learning{' '}
          <span className="text-peach-dark">Visible</span>
        </h1>
        <p className="text-xl text-charcoal-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Two children can sit in the same Class 5 row and be reading three grade levels apart — with no one able to see it.
          <br />
          <strong className="text-charcoal">Pragya makes the invisible visible.</strong>
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/teacher"
            className="px-8 py-4 bg-peach text-charcoal font-bold text-lg rounded-2xl hover:bg-peach-dark transition-all shadow-card hover:shadow-hover"
          >
            Teacher Dashboard →
          </Link>
          <Link
            href="/student"
            className="px-8 py-4 bg-white text-charcoal font-bold text-lg rounded-2xl border-2 border-soft-peach hover:border-peach transition-all shadow-soft"
          >
            Student Journey →
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 text-center shadow-soft border border-soft-peach/20">
            <div className="text-4xl font-heading font-extrabold text-peach-dark">76%</div>
            <div className="text-sm text-charcoal-lighter mt-2">of Class 3 students cannot read at Class 2 level</div>
            <div className="text-xs text-charcoal-lighter mt-1">ASER 2024</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-soft border border-soft-peach/20">
            <div className="text-4xl font-heading font-extrabold text-peach-dark">649K+</div>
            <div className="text-sm text-charcoal-lighter mt-2">children surveyed across 17,997 villages</div>
            <div className="text-xs text-charcoal-lighter mt-1">ASER 2024</div>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-soft border border-soft-peach/20">
            <div className="text-4xl font-heading font-extrabold text-peach-dark">Invisible</div>
            <div className="text-sm text-charcoal-lighter mt-2">learning gaps in every classroom — until now</div>
            <div className="text-xs text-charcoal-lighter mt-1">The Grade-Level Illusion</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-4">How Pragya Works</h2>
        <p className="text-center text-charcoal-lighter mb-12 max-w-2xl mx-auto">
          From assessment to action — in minutes, not months.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {[
            { emoji: '📝', label: 'Assess', desc: 'Short adaptive diagnostic' },
            { emoji: '🔍', label: 'Investigate', desc: 'Find where learning breaks' },
            { emoji: '🧬', label: 'Understand', desc: 'Build skill profile' },
            { emoji: '👥', label: 'Group', desc: 'By instructional need' },
            { emoji: '🎯', label: 'Intervene', desc: 'Targeted activities' },
            { emoji: '📈', label: 'Grow', desc: 'Track real progress' },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className="bg-white rounded-2xl p-6 text-center shadow-soft border border-soft-peach/20 min-w-[140px]">
                <div className="text-3xl mb-2">{step.emoji}</div>
                <div className="font-heading font-bold text-charcoal">{step.label}</div>
                <div className="text-xs text-charcoal-lighter mt-1">{step.desc}</div>
              </div>
              {i < 5 && <span className="hidden md:block text-2xl text-peach">→</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">What Makes Pragya Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-soft border border-soft-peach/20 hover:shadow-card transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="font-heading font-bold text-lg mb-2 text-charcoal">{feature.title}</h3>
              <p className="text-sm text-charcoal-lighter leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 text-center border-t border-soft-peach/30">
        <p className="text-sm text-charcoal-lighter">
          <strong>Pragya — Making Learning Visible</strong>
        </p>
        <p className="text-xs text-charcoal-lighter mt-2">
          Assessment methodology inspired by publicly available ASER DIYA framework.
          <br />
          Not officially affiliated with ASER, Pratham, NCERT, or NIPUN Bharat.
          <br />
          All student data is synthetic — no real children&apos;s data is used.
        </p>
      </footer>
    </div>
  );
}
