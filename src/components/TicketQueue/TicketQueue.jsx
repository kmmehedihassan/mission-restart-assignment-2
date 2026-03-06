import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
    getPriorityBadgeClasses,
    getStatusBadgeClasses,
} from "../../utils/ticketUtils";

const TicketQueue = ({ tickets, onAssignTicket }) => {
    if (!tickets.length) {
        return (
            <section className="w-full rounded-3xl bg-white p-6 shadow-sm lg:w-9/12">
                <div className="mb-5 flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-bold text-slate-900">Open tickets</h2>
                    <span className="badge badge-outline px-4 py-3 text-sm">
                        0 available
                    </span>
                </div>
                <div className="rounded-2xl border-2 border-dashed border-slate-200 p-10 text-center text-slate-500">
                    <p>There are no open tickets waiting to be assigned.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full rounded-3xl bg-white p-6 shadow-sm lg:w-9/12">
            <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-900">Open tickets</h2>
                <span className="badge badge-outline px-4 py-3 text-sm">
                    {tickets.length} available
                </span>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">
                {tickets.map((ticket) => {
                    const statusStyles = getStatusBadgeClasses(ticket.status);

                    return (
                        <article
                            key={ticket.id}
                            className="card w-full border border-slate-200 bg-white shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="card-body gap-4 p-5">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="card-title text-lg font-bold leading-tight text-slate-900">
                                        {ticket.title}
                                    </h3>
                                    <div
                                        className={`badge gap-1 rounded-2xl px-3 py-4 ${statusStyles.badge}`}
                                    >
                                        <span
                                            className={`h-2 w-2 rounded-full ${statusStyles.dot}`}
                                        />
                                        {ticket.status}
                                    </div>
                                </div>

                                <p className="line-clamp-2 text-sm text-slate-600">
                                    {ticket.description}
                                </p>

                                <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-3">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-sm text-slate-500">
                                            #{ticket.id}
                                        </span>
                                        <span
                                            className={`text-xs font-bold tracking-wide ${getPriorityBadgeClasses(ticket.priority)}`}
                                        >
                                            {ticket.priority}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4 text-right">
                                        <span className="text-sm font-medium text-slate-700">
                                            {ticket.customer}
                                        </span>
                                        <div className="flex items-center gap-1 text-slate-400">
                                            <FontAwesomeIcon icon={faCalendar} className="text-sm" />
                                            <span className="text-xs font-semibold">
                                                {ticket.createdAt}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-actions mt-2">
                                    <button
                                        type="button"
                                        onClick={() => onAssignTicket(ticket.id)}
                                        className="btn btn-block border-none text-white hover:opacity-90"
                                        style={{
                                            background:
                                                "linear-gradient(125.04deg, #632EE3 5.68%, #9F62F2 88.38%)",
                                        }}
                                    >
                                        Add to active queue
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default TicketQueue;
