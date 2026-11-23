import { Tag } from "./Tag.jsx";

export const FilterTags = () => {
    const classNameBase = "filter-tags";
    const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

    const tagsItems = tags.map(tag => (
        <li key={tag}>
            <Tag isActive={tag === "All"}>{tag}</Tag>
        </li>
    ));

    return (
        <nav className={classNameBase}>
            <ul className={`${classNameBase}__list`}>
                {tagsItems}
            </ul>
        </nav>
    );
};