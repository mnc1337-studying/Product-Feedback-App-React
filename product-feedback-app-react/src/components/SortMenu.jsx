import iconCheck from "../assets/icons/icon-check.svg";


export const SortMenu = () => {
    const classNameBase = "sort-menu";
    const options = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"];

    const optionsItems = options.map(option => {
        return option === "Most Upvotes" ? (
            <li key={option} className={`${classNameBase}__item ${classNameBase}__item--selected`}>
                Most Upvotes
                <img src={iconCheck} alt="Check icon" className={`${classNameBase}__check`} />
            </li>
        ) : (
            <li key={option} className={`${classNameBase}__item`}>{option}</li>
        )
    });

    return <ul className={classNameBase}>{optionsItems}</ul>;
};
