export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-charcoal">School Overview</h1>
        <p className="text-charcoal-lighter mt-1">Aggregate view — no individual student data shown</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-sm text-charcoal-lighter mb-1">Classes Assessed</div>
          <div className="text-3xl font-heading font-bold text-charcoal">6</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-sm text-charcoal-lighter mb-1">Learners Assessed</div>
          <div className="text-3xl font-heading font-bold text-charcoal">238</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-sm text-charcoal-lighter mb-1">Most Common Gap</div>
          <div className="text-3xl font-heading font-bold text-charcoal">Reading</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-soft-peach/20">
          <div className="text-sm text-charcoal-lighter mb-1">Progress Trend</div>
          <div className="text-3xl font-heading font-bold text-mastery-secure">↑ 8%</div>
        </div>
      </div>

      <div className="bg-sky/10 rounded-2xl p-6 border border-sky/20">
        <p className="text-sm text-charcoal-lighter">
          🔒 This dashboard shows aggregate data only. Individual student information is never publicly displayed or ranked.
        </p>
      </div>
    </div>
  );
}
