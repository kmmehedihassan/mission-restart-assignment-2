import { useEffect, useState } from "react";

const TICKETS_ENDPOINT = "/tickets.json";

export const useTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        let isSubscribed = true;

        const loadTickets = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(TICKETS_ENDPOINT);

                if (!response.ok) {
                    throw new Error("Unable to load ticket data.");
                }

                const payload = await response.json();

                if (isSubscribed) {
                    setTickets(payload);
                    setErrorMessage("");
                }
            } catch (error) {
                if (isSubscribed) {
                    setErrorMessage(
                        error instanceof Error
                            ? error.message
                            : "Something went wrong while loading tickets.",
                    );
                }
            } finally {
                if (isSubscribed) {
                    setIsLoading(false);
                }
            }
        };

        loadTickets();

        return () => {
            isSubscribed = false;
        };
    }, []);

    return {
        tickets,
        isLoading,
        errorMessage,
    };
};
