import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

const BuggyComponent = () => {
    throw new Error("I crashed!");
};

const App = () => {
    return (
        <div>
            <ErrorBoundary>
                <card1 />
            </ErrorBoundary>
            <ErrorBoundary>
                <card2 />
            </ErrorBoundary>
        </div>

    );
};

function card1() {
    throw new error("error while rendering");
    return (
        <div style={{ background: "blue", borderRadius: 10, padding: 20 }}>
            hii
        </div>
    )
}

function card2() {
    return (
        <div style={{ background: "blue", borderRadius: 10, padding: 20 }}>
            hello
        </div>
    )
}
