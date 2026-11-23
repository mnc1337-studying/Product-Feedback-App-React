import { Toolbar } from "./Toolbar.jsx";
import { Suggestions } from "./Suggestions.jsx";

export const Main = () => {
    return (
        <>
            <main className="main">
                <Toolbar />
                <Suggestions />
            </main>
        </>
    );
};