const ResolvedTicketList = ({ tickets }) => {
    return (
        <section>
            <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-900">Resolved tickets</h2>
                <span className="badge badge-outline px-4 py-3 text-sm">
                    {tickets.length} resolved
                </span>
            </div>

            {tickets.length ? (
                <div className="space-y-4">
                    {tickets.map((ticket) => (
                        <article
                            key={ticket.id}
                            className="card w-full border border-sky-200 bg-sky-50 shadow-sm"
                        >
                            <div className="card-body py-5">
                                <h3 className="card-title text-sky-950">{ticket.title}</h3>
                                <p className="text-sm text-sky-900/70">{ticket.customer}</p>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="rounded-2xl border-2 border-dashed border-slate-200 p-10 text-center text-slate-500">
                    <p>No resolved tickets yet.</p>
                </div>
            )}
        </section>
    );
};

export default ResolvedTicketList;
