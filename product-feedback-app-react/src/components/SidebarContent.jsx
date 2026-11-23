import { FilterTags } from "./FilterTags.jsx";
import { Roadmap } from "./Roadmap.jsx";

export const SidebarContent = ({ classNameBase }) => {
    return (
        <div className={`${classNameBase}__content`}>
            <FilterTags />
            <Roadmap />
        </div>
    );
};