export const SidebarHeader = () => {
    const classNameBase = "sidebar";

    return (
        <div className={`${classNameBase}__header`}>
            <div className={`${classNameBase}__brand`}>
                <h2 className={`${classNameBase}__title`}>Frontend Mentor</h2>
                <p className={`${classNameBase}__subtitle`}>Feedback Board</p>
            </div>

            <label htmlFor="mobile-menu-toggle" className={`${classNameBase}__toggle`}>
                <span className={`${classNameBase}__toggle-icon`}></span>
            </label>
        </div>
    );
};