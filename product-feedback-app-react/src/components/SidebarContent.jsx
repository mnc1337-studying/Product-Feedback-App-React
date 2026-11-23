import { FilterTags } from "./FilterTags.jsx";
import { Roadmap } from "./Roadmap.jsx";

export const SidebarContent = () => {
    return (
        <div className="sidebar__content">
            <FilterTags />
            <Roadmap />
        </div>
    );
};