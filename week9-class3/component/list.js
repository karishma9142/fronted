const App = () => {
    const todos = [{
        title: "sleep",
        done: false
    }, {
        title: "eat",
        done: false
    }];
    const todoscomponenet = todos.map((todo,index) => (
        <Todo
            key={index}
            title={todo.title}
            done={todo.done}
        />
    ));
    return (
        <div>
            {todoscomponenet}
        </div>
    )
}
function Todo({ title, done }) {
    return (
        <div>
            {title} - {done ? "done" : "not done"}
        </div>
    )
}
export default App