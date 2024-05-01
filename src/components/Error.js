import {useRouteError} from "react";
const Error = ()=> {
    const error = useRouteError();
    return (
        <div className="pageNotFound-container">
            <h1>OOps !!!!!!</h1>
            <h2>Something Went Wrong</h2>
            <h2>{error.status} : {error.stausText}</h2>
        </div>
    );
}

export default Error;