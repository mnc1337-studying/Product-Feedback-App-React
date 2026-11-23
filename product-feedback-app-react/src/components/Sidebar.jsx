import { SidebarHeader } from "./SidebarHeader.jsx";
import { SidebarContent } from "./SidebarContent.jsx";

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <input type="checkbox" id="mobile-menu-toggle" className="sidebar__checkbox" />
            <SidebarHeader />
            <div className="sidebar__overlay"></div>
            <SidebarContent />
        </aside>
    );
};