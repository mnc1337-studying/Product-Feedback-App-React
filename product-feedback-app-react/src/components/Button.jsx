export const Button = ({ className, modifier, children }) => {
    return <button className={`button button--${modifier} ${className}`}>{children}</button>;
};