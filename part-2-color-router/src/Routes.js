import { Switch, Route, Redirect } from "react-router";
import ColorDetails from "./ColorDetails";
import ColorList from "./ColorList";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/colors'>
                <ColorList />
            </Route>
            <Route exact path='/colors/:color'>
                <ColorDetails />
            </Route>
            <Redirect to='/colors' />
        </Switch>
    );
}

export default Routes;