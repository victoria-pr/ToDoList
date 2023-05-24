const Todo = ({todo, handleSetCompleted , handleDelete}) => {

    const {id, title, completed} = todo

    return (
        <div className="flex items-center justify-between p-4 bg-yellow-200 border-b border-solid border-yellow-300">
            <div className="flex items-center">
                {
                    completed ? ( 
                        <div onClick={() =>handleSetCompleted (id)} className="bg-blue-200 p-1 rounded-full cursor-pointer"> 
                            <img className="h-4 w-4" src="check-icon.svg" alt="Check Icon"/>
                        </div>
                    ) :  (
                        <span onClick={() =>handleSetCompleted (id)} className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>
                    )
                }
            <p className={"pl-3 " + (completed ? "line-through" : "")}>
            {title}
            </p>
            </div>
            <img onClick={() =>handleDelete(id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/close-icon.svg" alt="Close Icon" />
        </div>
    )
}
export { Todo }