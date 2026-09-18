export default function TeacherDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-charcoal">Class 5A Dashboard</h1>
          <p className="text-charcoal-lighter mt-1">40 learners • Last assessed: Today</p>
        </div>
        <button className="px-5 py-2.5 bg-peach text-charcoal font-semibold rounded-xl hover:bg-peach-dark transition-all shadow-soft">
          + New Assessment
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-sm text-charcoal-lighter mb-1">Assessed</div>
          <div className="text-3xl font-heading font-bold text-charcoal">38/40</div>
          <div className="text-xs text-mastery-secure mt-1">95% complete</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-sm text-charcoal-lighter mb-1">Learning Groups</div>
          <div className="text-3xl font-heading font-bold text-charcoal">4</div>
          <div className="text-xs text-sky-dark mt-1">By instructional need</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-sm text-charcoal-lighter mb-1">Priority Skill</div>
          <div className="text-3xl font-heading font-bold text-charcoal">Reading</div>
          <div className="text-xs text-mastery-needs-support mt-1">14 need support</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-sm text-charcoal-lighter mb-1">Recent Progress</div>
          <div className="text-3xl font-heading font-bold text-mastery-secure">+12%</div>
          <div className="text-xs text-charcoal-lighter mt-1">Since last assessment</div>
        </div>
      </div>

      {/* Today's Next Action */}
      <div className="bg-sky/20 rounded-2xl p-6 border border-sky/30 mb-8">
        <div className="flex items-start gap-4">
          <div className="text-3xl">🎯</div>
          <div className="flex-1">
            <h3 className="font-heading font-bold text-lg">Today&apos;s Next Action</h3>
            <p className="text-charcoal-light mt-1">Start with <strong>Group B — Sentence Fluency</strong></p>
            <p className="text-sm text-charcoal-lighter mt-2">
              12 learners show strong word recognition but have difficulty moving to connected text.
              A 15-minute guided reading activity is recommended.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-peach text-charcoal font-semibold rounded-lg text-sm hover:bg-peach-dark transition-all">
                View Group
              </button>
              <button className="px-4 py-2 bg-white text-charcoal font-medium rounded-lg text-sm border border-soft-peach hover:border-peach transition-all">
                Get Activity Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Classroom Map Preview */}
      <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-bold text-lg">Classroom Learning Map</h3>
          <a href="/teacher/classroom" className="text-sm text-peach-dark hover:underline">View Full Map →</a>
        </div>
        <p className="text-sm text-charcoal-lighter">Quick view of reading levels across your classroom.</p>
        <div className="mt-4 grid grid-cols-5 gap-1">
          {/* Column Headers */}
          {['Letter', 'Word', 'Sentence', 'Paragraph', 'Story'].map((skill) => (
            <div key={skill} className="text-xs font-medium text-charcoal-lighter text-center py-2">
              {skill}
            </div>
          ))}
          {/* Sample rows */}
          {Array.from({ length: 8 }).map((_, row) => (
            ['secure', 'secure', 'developing', 'needs-support', 'needs-support'].map((status, col) => {
              const colors: Record<string, string> = {
                'secure': 'bg-mastery-secure',
                'developing': 'bg-mastery-developing',
                'needs-support': 'bg-mastery-needs-support',
              };
              return (
                <div
                  key={`${row}-${col}`}
                  className={`h-6 rounded ${colors[status]} opacity-80`}
                />
              );
            })
          ))}
        </div>
        <div className="flex gap-4 mt-4 text-xs text-charcoal-lighter">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-mastery-secure"></span> Demonstrated</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-mastery-developing"></span> Developing</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-mastery-needs-support"></span> Needs Support</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-mastery-not-assessed"></span> Not Assessed</span>
        </div>
      </div>
    </div>
  );
}
