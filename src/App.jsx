import { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import spinner from "./assets/spinner.svg";
import AppFooter from "./components/AppFooter/AppFooter";
import DashboardMetrics from "./components/DashboardMetrics/DashboardMetrics";
import Header from "./components/Header/Header";
import ActiveWorkQueue from "./components/ActiveWorkQueue/ActiveWorkQueue";
import ResolvedTicketList from "./components/ResolvedTicketList/ResolvedTicketList";
import TicketQueue from "./components/TicketQueue/TicketQueue";
import { useTickets } from "./hooks/useTickets";
import { getInitialTicketBuckets } from "./utils/ticketUtils";

function App() {
    const { tickets, isLoading, errorMessage } = useTickets();
    const initialTicketBuckets = useMemo(
        () => getInitialTicketBuckets(tickets),
        [tickets],
    );
    const [activeTicketIds, setActiveTicketIds] = useState(null);
    const [resolvedTicketIds, setResolvedTicketIds] = useState(null);

    const effectiveActiveTicketIds =
        activeTicketIds ?? initialTicketBuckets.activeTicketIds;
    const effectiveResolvedTicketIds =
        resolvedTicketIds ?? initialTicketBuckets.resolvedTicketIds;

    const ticketBuckets = useMemo(() => {
        const activeIdSet = new Set(effectiveActiveTicketIds);
        const resolvedIdSet = new Set(effectiveResolvedTicketIds);

        return tickets.reduce(
            (bucket, ticket) => {
                if (resolvedIdSet.has(ticket.id)) {
                    bucket.resolvedTickets.push(ticket);
                    return bucket;
                }

                if (activeIdSet.has(ticket.id)) {
                    bucket.activeTickets.push(ticket);
                    return bucket;
                }

                bucket.openTickets.push({
                    ...ticket,
                    status: "Open",
                });
                return bucket;
            },
            {
                openTickets: [],
                activeTickets: [],
                resolvedTickets: [],
            },
        );
    }, [tickets, effectiveActiveTicketIds, effectiveResolvedTicketIds]);

    const handleAssignTicket = (ticketId) => {
        if (effectiveResolvedTicketIds.includes(ticketId)) {
            toast.info("This ticket has already been resolved.");
            return;
        }

        if (effectiveActiveTicketIds.includes(ticketId)) {
            toast.warning("This ticket is already in the active work queue.");
            return;
        }

        setActiveTicketIds([...effectiveActiveTicketIds, ticketId]);
        toast.success("Ticket added to the active work queue.");
    };

    const handleResolveTicket = (ticketId) => {
        if (!effectiveActiveTicketIds.includes(ticketId)) {
            toast.info("Only active tickets can be marked as resolved.");
            return;
        }

        setActiveTicketIds(
            effectiveActiveTicketIds.filter(
                (currentId) => currentId !== ticketId,
            ),
        );

        if (effectiveResolvedTicketIds.includes(ticketId)) {
            toast.success("Ticket marked as resolved.");
            return;
        }

        setResolvedTicketIds([...effectiveResolvedTicketIds, ticketId]);
        toast.success("Ticket marked as resolved.");
    };

    return (
        <>
            <Header />

            <main className="mx-auto w-11/12 py-12 md:py-14">
                <DashboardMetrics
                    activeCount={ticketBuckets.activeTickets.length}
                    resolvedCount={ticketBuckets.resolvedTickets.length}
                />

                {isLoading ? (
                    <div className="flex justify-center py-16">
                        <img src={spinner} alt="Loading tickets" className="w-20" />
                    </div>
                ) : errorMessage ? (
                    <div className="mt-8 rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-700 shadow-sm">
                        <h2 className="text-xl font-semibold">Unable to load tickets</h2>
                        <p className="mt-2 text-sm">{errorMessage}</p>
                    </div>
                ) : (
                    <section className="flex flex-col-reverse gap-6 py-8 lg:flex-row">
                        <TicketQueue
                            tickets={ticketBuckets.openTickets}
                            onAssignTicket={handleAssignTicket}
                        />

                        <aside className="w-full space-y-8 lg:w-3/12">
                            <ActiveWorkQueue
                                tickets={ticketBuckets.activeTickets}
                                onResolveTicket={handleResolveTicket}
                            />
                            <ResolvedTicketList tickets={ticketBuckets.resolvedTickets} />
                        </aside>
                    </section>
                )}
            </main>

            <AppFooter />
            <ToastContainer position="top-right" autoClose={2500} />
        </>
    );
}

export default App;
