const FiltersContainer = ({ children }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-yellow-200 border-b border-solid border-yellow-300">
            {children}
        </div>
    )
}

const ItemsLeft = ({ total = 0 }) => {
    return (
        <p className="text-pink-400 text-sm">
            {total} items left
        </p>
    )
}

const FilterButtonContainer = ({ children }) => {
    return (
        <div className="flex items-center space-x-2">
            {children}  
        </div>
    )
}

const FilterButton = ({ action, active, filter }) => {
    return (
        <button onClick={action} className={`hover:text-white cursor-pointer transition-all duration-300 ease-in-out
        ${active?.toLowerCase().includes(filter.toLowerCase()) ? `text-blue-400` : `text-pink-400`}`}
        >
            {filter}
        </button>
    );
};


export { FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton }