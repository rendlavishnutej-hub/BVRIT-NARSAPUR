export default function StudentDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-charcoal">Welcome back! 👋</h1>
        <p className="text-charcoal-lighter mt-1">Ready to continue your learning quest?</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-2xl font-heading font-bold text-peach-dark">350 XP</div>
          <div className="text-sm text-charcoal-lighter">Total Points</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-3xl mb-2">🔥</div>
          <div className="text-2xl font-heading font-bold text-peach-dark">5 Days</div>
          <div className="text-sm text-charcoal-lighter">Learning Streak</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-3xl mb-2">📚</div>
          <div className="text-2xl font-heading font-bold text-peach-dark">Level 3</div>
          <div className="text-sm text-charcoal-lighter">Reading World</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-3xl mb-2">🔢</div>
          <div className="text-2xl font-heading font-bold text-peach-dark">Level 2</div>
          <div className="text-sm text-charcoal-lighter">Numeracy World</div>
        </div>
      </div>

      {/* Learning Quest */}
      <div className="bg-white rounded-2xl p-8 shadow-soft border border-soft-peach/20 mb-8">
        <h2 className="font-heading text-xl font-bold mb-6">📖 My Learning Quest</h2>
        <div className="space-y-4">
          {[
            { emoji: '🌱', name: 'Letter Explorer', status: 'completed', progress: 100 },
            { emoji: '🔤', name: 'Word Builder', status: 'completed', progress: 100 },
            { emoji: '📖', name: 'Sentence Navigator', status: 'completed', progress: 100 },
            { emoji: '📚', name: 'Paragraph Explorer', status: 'current', progress: 72 },
            { emoji: '🏰', name: 'Story Master', status: 'locked', progress: 0 },
          ].map((stage) => (
            <div key={stage.name} className="flex items-center gap-4">
              <span className="text-2xl">{stage.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-medium text-sm ${
                    stage.status === 'locked' ? 'text-charcoal-lighter' : 'text-charcoal'
                  }`}>
                    {stage.name}
                  </span>
                  <span className="text-xs text-charcoal-lighter">
                    {stage.status === 'completed' ? '✓' : stage.status === 'locked' ? '🔒' : `${stage.progress}%`}
                  </span>
                </div>
                <div className="h-2.5 bg-ivory rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      stage.status === 'completed'
                        ? 'bg-mastery-secure'
                        : stage.status === 'current'
                        ? 'bg-peach'
                        : 'bg-mastery-not-assessed'
                    }`}
                    style={{ width: `${stage.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Quest */}
      <div className="bg-soft-peach/30 rounded-2xl p-8 border border-peach/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🎯</span>
          <h2 className="font-heading text-xl font-bold">Current Quest</h2>
        </div>
        <p className="text-charcoal-light mb-4">Master connected-text reading to unlock Story Master!</p>
        <button className="px-6 py-3 bg-peach text-charcoal font-bold rounded-xl hover:bg-peach-dark transition-all shadow-soft hover:shadow-card">
          Continue Quest →
        </button>
      </div>
    </div>
  );
}
