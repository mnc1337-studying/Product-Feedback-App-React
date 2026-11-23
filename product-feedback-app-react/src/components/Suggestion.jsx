import iconArrowUp from "../assets/icons/icon-arrow-up.svg";
import iconComments from "../assets/icons/icon-comments.svg";

export const Suggestion = ({ count, title, description, tag, commentsCount, classNameBase }) => {
    return (
        <li className={classNameBase}>
            <button className={`${classNameBase}__upvote-btn`}>
                <img src={iconArrowUp} alt="Upvote icon" />
                <span className={`${classNameBase}__upvote-count`}>{count}</span>
            </button>
            <div className={`${classNameBase}__content`}>
                <a href="#" className={`${classNameBase}__title`}>{title}</a>
                <p className={`${classNameBase}__description`}>{description}</p>
                <span className="tag">{tag}</span>
            </div>
            <a href="#" className={`${classNameBase}__comments`}>
                <img src={iconComments} alt="Comments icon" />
                <span>{commentsCount}</span>
            </a>
        </li>
    );
};
