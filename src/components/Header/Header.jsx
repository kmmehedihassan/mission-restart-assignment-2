import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";

const navigationItems = [
    "Home",
    "FAQ",
    "Changelog",
    "Blog",
    "Download",
    "Contact",
];

const Header = () => {
    return (
        <header
            className="border-b border-white/5 text-slate-100 shadow-[0_14px_35px_rgba(15,23,42,0.25)]"
            style={{
                background:
                    "linear-gradient(90deg, #111827 0%, #0f172a 55%, #111827 100%)",
            }}
        >
            <nav className="mx-auto flex min-h-[88px] w-full items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 xl:px-16">
                <div className="flex items-center gap-4">
                    <div className="dropdown lg:hidden">
                        <button
                            type="button"
                            tabIndex={0}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10"
                            aria-label="Open navigation menu"
                        >
                            <FontAwesomeIcon icon={faBars} className="text-lg" />
                        </button>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content z-20 mt-3 w-56 rounded-2xl border border-slate-700 bg-slate-900/95 p-2 text-slate-100 shadow-2xl"
                        >
                            {navigationItems.map((item) => (
                                <li key={item}>
                                    <a href="#" className="rounded-xl px-3 py-2 hover:bg-white/5">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a
                        href="#"
                        className="text-2xl font-bold tracking-[-0.02em] text-white sm:text-[2rem]"
                    >
                        CS-Ticket System
                    </a>
                </div>

                <div className="flex items-center gap-3 lg:gap-6">
                    <ul className="hidden items-center gap-2 lg:flex xl:gap-4">
                        {navigationItems.map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="rounded-xl px-3 py-2 text-[1.05rem] font-semibold text-slate-200 transition hover:bg-white/5 hover:text-white"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className="inline-flex items-center gap-3 rounded-xl border border-violet-400/20 px-4 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(139,92,246,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(139,92,246,0.4)] sm:px-6"
                        style={{
                            background:
                                "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 55%, #a855f7 100%)",
                        }}
                    >
                        <FontAwesomeIcon icon={faPlus} className="text-base" />
                        <span className="hidden sm:inline">New Ticket</span>
                        <span className="sm:hidden">New</span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
