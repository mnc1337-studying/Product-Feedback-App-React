import iconSuggestions from "../assets/icons/icon-suggestions.svg";
import { SortMenu } from "./SortMenu.jsx";
import { Button } from "./Button.jsx";

export const Toolbar = () => {
    const classNameBase = "toolbar";

    return (
        <div className={classNameBase}>
            <div className={`${classNameBase}__logo`}>
                <img src={iconSuggestions} alt="Suggestions icon" className={`${classNameBase}__icon`} />
                <h2 className={`${classNameBase}__title`}>6 Suggestions</h2>
            </div>

            <details className={`${classNameBase}__sort`}>
                <summary className={`${classNameBase}__sort-button`}>
                    <span className={`${classNameBase}__sort-label`}>Sort by :</span>
                    <span className={`${classNameBase}__sort-value`}>Most Upvotes</span>
                    <span className={`${classNameBase}__sort-arrow`}></span>
                </summary>

                <SortMenu />
            </details>

            <Button className={`${classNameBase}__button`} modifier="purple">
                <span>+ Add Feedback</span>
            </Button>
        </div>
    );
};