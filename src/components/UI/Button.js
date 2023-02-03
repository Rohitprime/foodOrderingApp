
export const WhiteButton = (props)=>{
  return (
    <div className="border border-rose-800 text-rose-800 rounded-xl mx-4 px-4 mt-2 hover:bg-rose-800 hover:text-white">
        {props.children}
    </div>
  )
}

export const RoseButton = (props)=>{

  return(
    <div className="border bg-rose-800 text-white border rounded-xl mt-2  px-4 hover:bg-white hover:text-rose-800 hover:border-rose-900">
    {props.children}
    </div> 
  )
}

