export const normalizeTicketStatus = (status = "") =>
    status.toLowerCase().trim().replace(/[\s-]+/g, "_");

export const getInitialTicketBuckets = (tickets) => ({
    activeTicketIds: tickets
        .filter((ticket) => normalizeTicketStatus(ticket.status) === "in_progress")
        .map((ticket) => ticket.id),
    resolvedTicketIds: tickets
        .filter((ticket) => normalizeTicketStatus(ticket.status) === "resolved")
        .map((ticket) => ticket.id),
});

export const getPriorityBadgeClasses = (priority = "") => {
    switch (priority) {
        case "HIGH PRIORITY":
            return "text-error";
        case "MEDIUM PRIORITY":
            return "text-warning";
        default:
            return "text-success";
    }
};

export const getStatusBadgeClasses = (status = "") => {
    switch (normalizeTicketStatus(status)) {
        case "resolved":
            return {
                badge: "bg-sky-100 text-sky-800",
                dot: "bg-sky-600",
            };
        case "in_progress":
            return {
                badge: "bg-amber-100 text-amber-800",
                dot: "bg-amber-600",
            };
        default:
            return {
                badge: "bg-emerald-100 text-emerald-800",
                dot: "bg-emerald-600",
            };
    }
};
