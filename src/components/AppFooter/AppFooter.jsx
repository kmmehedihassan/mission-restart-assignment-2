import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faLinkedinIn,
    faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const footerSections = [
    {
        title: "Company",
        links: ["About Us", "Our Mission", "Contact Sales"],
    },
    {
        title: "Services",
        links: ["Products & Services", "Customer Stories", "Download Apps"],
    },
    {
        title: "Information",
        links: ["Privacy Policy", "Terms & Conditions", "Careers"],
    },
];

const socialLinks = [
    { label: "@supportdeskpro", icon: faXTwitter },
    { label: "SupportDesk Pro", icon: faLinkedinIn },
    { label: "SupportDesk Pro", icon: faFacebookF },
    { label: "support@supportdeskpro.com", icon: faEnvelope },
];

const AppFooter = () => {
    return (
        <footer className="bg-slate-950 pb-10 pt-20 text-slate-400">
            <div className="mx-auto w-11/12">
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    <div className="max-w-sm flex-1">
                        <h2 className="mb-4 text-2xl font-extrabold text-white">
                            SupportDesk Pro
                        </h2>
                        <p className="text-sm leading-6 text-slate-400">
                            SupportDesk Pro helps teams manage customer issues with
                            clarity, speed, and accountability. Track every ticket,
                            prioritize the right work, and close the loop with
                            confidence.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-12 md:gap-16 lg:gap-20">
                        {footerSections.map(({ title, links }) => (
                            <div key={title}>
                                <h3 className="mb-5 font-semibold text-white">{title}</h3>
                                <ul className="space-y-3 text-sm">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="whitespace-nowrap transition hover:text-white"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="min-w-max">
                            <h3 className="mb-5 font-semibold text-white">Social</h3>
                            <ul className="space-y-4 text-sm">
                                {socialLinks.map(({ label, icon }) => (
                                    <li
                                        key={label}
                                        className="flex items-center gap-3 whitespace-nowrap transition hover:text-white"
                                    >
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-400">
                                            <FontAwesomeIcon
                                                icon={icon}
                                                className="text-[10px]"
                                            />
                                        </span>
                                        <a href="#">{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-800 pt-6 text-center text-white">
                    <p>&copy; 2026 SupportDesk Pro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;
