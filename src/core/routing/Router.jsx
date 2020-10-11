import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => (
                        <Route key={index} {...route} />
                    ))}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;