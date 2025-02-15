import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        // const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        // let page = pages[`'./Pages/${name}.jsx'`];
        // page.default.layout =
        //     page.default.layout ||
        //     ((page) => <Navbar children={page} title={page} />);

        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
        showSpinner: true,
    },
});
