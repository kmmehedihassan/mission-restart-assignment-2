const ActiveWorkQueue = ({ tickets, onResolveTicket }) => {
    return (
        <section>
            <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-900">Active work queue</h2>
                <span className="badge badge-outline px-4 py-3 text-sm">
                    {tickets.length} active
                </span>
            </div>

            {tickets.length ? (
                <div className="space-y-4">
                    {tickets.map((ticket) => (
                        <article
                            key={ticket.id}
                            className="card w-full border border-slate-200 bg-white shadow-sm"
                        >
                            <div className="card-body">
                                <h3 className="card-title text-slate-900">{ticket.title}</h3>
                                <p className="text-sm text-slate-600">{ticket.customer}</p>
                                <div className="card-actions justify-end">
                                    <button
                                        type="button"
                                        onClick={() => onResolveTicket(ticket.id)}
                                        className="btn btn-block border-none bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
                                    >
                                        Mark as resolved
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="rounded-2xl border-2 border-dashed border-slate-200 p-10 text-center text-slate-500">
                    <p>No tickets are currently being worked on.</p>
                </div>
            )}
        </section>
    );
};

export default ActiveWorkQueue;
