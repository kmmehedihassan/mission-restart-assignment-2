import leftPattern from "../../assets/vector1.png";
import rightPattern from "../../assets/vector2.png";

const metricCards = [
    {
        title: "Active tickets",
        key: "activeCount",
        background: "linear-gradient(125.04deg, #632EE3 5.68%, #9F62F2 88.38%)",
    },
    {
        title: "Resolved tickets",
        key: "resolvedCount",
        background: "linear-gradient(90deg, #54CF68 9.6%, #00827A 92.23%)",
    },
];

const DashboardMetrics = ({ activeCount, resolvedCount }) => {
    const metrics = {
        activeCount,
        resolvedCount,
    };

    return (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {metricCards.map(({ title, key, background }) => (
                <article
                    key={key}
                    className="relative flex h-44 items-center justify-center overflow-hidden rounded-2xl text-white shadow-lg sm:h-48 md:h-52 lg:h-56"
                    style={{ background }}
                >
                    <img
                        src={leftPattern}
                        alt=""
                        className="pointer-events-none absolute left-0 top-0 h-full w-auto"
                    />
                    <div className="relative z-10 text-center">
                        <p className="text-base font-medium sm:text-lg">{title}</p>
                        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl md:text-6xl">
                            {metrics[key]}
                        </h1>
                    </div>
                    <img
                        src={rightPattern}
                        alt=""
                        className="pointer-events-none absolute right-0 top-0 h-full w-auto"
                    />
                </article>
            ))}
        </section>
    );
};

export default DashboardMetrics;
