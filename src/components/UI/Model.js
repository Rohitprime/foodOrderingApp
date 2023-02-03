
const Model = props =>{
    return (
        <div className="w-screen  h-screen fixed bg-black z-30 bg-opacity-50 flex justify-center items-center bg-blend-exclusion ">
             {props.children}
         </div>
    )
}

export default Model