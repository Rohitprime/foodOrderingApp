
const Card = props =>{
    return (
        <div className="bg-white p-4 rounded-xl shadow-xl">
            {props.children}
        </div>
    )
}

export default Card