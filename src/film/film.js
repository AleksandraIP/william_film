function Film(props){
    return(
        <>
            <div>
                <img  width="200px" src={process.env.PUBLIC_URL + props.data.photo} alt=""/>
            </div>

            <h1>{props.data.name}</h1>
            <h3>{props.data.year}</h3>
            <p><b>Director:</b> {props.data.producer}</p>
            <p><b>Actors:</b> {props.data.cast}</p>
        </>
    )
}
export default Film;