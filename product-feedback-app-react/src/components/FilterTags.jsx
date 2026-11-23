export const FilterTags = () => {
    const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
    
    return (
        <nav className="filter-tags">
            <ul className="filter-tags__list">
                {tags.map((tag) => (
                    <li key={tag}>
                        <button className={tag === "All" ? "tag tag--active" : "tag"}>{tag}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};