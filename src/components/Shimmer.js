const Shimmer =()=>{
    return(
        <div className="restaurant-list">
            {Array(10)
            .fill("")
            .map(e => (
                <div key={Shimmer.id} className="shimmer-card"></div>
            ))}
        </div>
    )
}

export default Shimmer; 