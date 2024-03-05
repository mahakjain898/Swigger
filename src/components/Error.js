import { useRouteError } from "react-router-dom";

const Error = (()=> {
    const err = useRouteError();
    return(
        <div>
            <h1>Oopsss...</h1>
            <h3>Page not found</h3>
            <p> Unexpected error caought</p>
            <p> {err.status} : {err.statusText}</p>
        </div>
    )
})

export default Error;