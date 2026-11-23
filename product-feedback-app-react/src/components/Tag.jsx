export const Tag = ({ isActive, children }) => {
    return <button className={isActive ? "tag tag--active" : "tag"}>{children}</button>;
};