import {Redirect, Route} from "react-router-dom";
import useAuth from "../../../context/useAuth";
import {Spinner} from "react-bootstrap";

const PrivateRoute = ({children, ...rest}) => {
    const {isLoading, user} = useAuth()
    if (isLoading) {
        return <Spinner animation="border" variant="danger"/>
    }
    return (
        <Route
            {...rest}
            render={({location}) =>
                user.displayName ?
                    children
                    : (
                        <Redirect
                            to={{
                                pathname: "/user_login",
                                state: {from: location}
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;