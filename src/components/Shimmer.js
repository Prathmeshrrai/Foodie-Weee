const Shimmer =()=>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {Array(10)
            .fill("")
            .map(e => (
                <div key={Shimmer.id} className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
            ))}
        </div>
    )
}

export default Shimmer; 