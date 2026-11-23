export const Roadmap = () => {
    const classNameBase = "roadmap";

    const roadmapItems = [
        { status: "Planned", count: 2 },
        { status: "In-Progress", count: 3 },
        { status: "Live", count: 1 },
    ];

    return (
        <div className={classNameBase}>
            <div className={`${classNameBase}__header`}>
                <h2 className={`${classNameBase}__title`}>Roadmap</h2>
                <a href="#" className={`${classNameBase}__link`}>View</a>
            </div>
            <ul className={`${classNameBase}__list`}>
                {roadmapItems.map((item) => (
                    <li
                        key={item.status}
                        className={`${classNameBase}__item ${classNameBase}__item--${item.status.toLowerCase()}`}
                    >
                        <span className={`${classNameBase}__status`}>{item.status}</span>
                        <span className={`${classNameBase}__count`}>{item.count}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};