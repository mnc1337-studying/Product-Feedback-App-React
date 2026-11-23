import { SidebarHeader } from "./SidebarHeader.jsx";
import { SidebarContent } from "./SidebarContent.jsx";

export const Sidebar = () => {
    const classNameBase = "sidebar";

    return (
        <aside className={classNameBase}>
            <input type="checkbox" id="mobile-menu-toggle" className={`${classNameBase}__checkbox`} />
            <SidebarHeader classNameBase={classNameBase} />
            <div className={`${classNameBase}__overlay`}></div>
            <SidebarContent classNameBase={classNameBase} />
        </aside>
    );
};