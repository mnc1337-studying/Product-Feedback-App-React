import { Suggestion } from "./Suggestion.jsx";
import { MainToolbar } from "./Toolbar.jsx";

export const Main = () => {
    const suggestionsRaw = [
        { id: 1, count: 112, title: "Add tags for solutions", description: "Easier to search for solutions based on a specific stack.", tag: "Enhancement", commentsCount: 2 },
        { id: 2, count: 99, title: "Add a dark theme option", description: "It would help people with light sensitivities and who prefer dark mode.", tag: "Feature", commentsCount: 4 },
        { id: 3, count: 65, title: "Q&A within the challenge hubs", description: "Challenge-specific Q&A would make for easy reference.", tag: "Feature", commentsCount: 1 },
        { id: 4, count: 51, title: "Allow image/video upload to feedback", description: "Images and screencasts can enhance comments on solutions.", tag: "Enhancement", commentsCount: 2 },
        { id: 5, count: 42, title: "Ability to follow others", description: "Stay updated on comments and solutions other people post.", tag: "Feature", commentsCount: 3 },
        { id: 6, count: 3, title: "Preview images not loading", description: "Challenge preview images are missing when you apply a filter.", tag: "Bug", commentsCount: 0 },
    ];

    const suggestions = suggestionsRaw.map(suggestion => {
        return <Suggestion key={suggestion.id} count={suggestion.count} title={suggestion.title} description={suggestion.description} tag={suggestion.tag} commentsCount={suggestion.commentsCount}/>;
    });

    return (
        <>
            <MainToolbar />
            <ul className="suggestions">{suggestions}</ul>
        </>
    );
};