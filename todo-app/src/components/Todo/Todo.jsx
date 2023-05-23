const Todo = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-yellow-200 border-b border-solid border-yellow-300">
            <div className="flex items-center">
                <span className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>
            <p className="pl-3">
                Tutorial React toDoList
            </p>
            </div>
            <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/close-icon.svg" alt="Close Icon" />
        </div>
    )
}
export { Todo }