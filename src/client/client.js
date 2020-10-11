import 'isomorphic-fetch';

import React from 'react';
import { render, hydrate } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { HelmetProvider } from 'react-helmet-async';
import createStore from 'Redux/configureStore';
import { browserHistory } from 'Routing/history';
import rootSaga from 'Redux/sagas';

import App from 'App/App';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
// Allow the passed state to be garbage-collected
const scriptEl = document.querySelector('script#redux-state');

delete window.__PRELOADED_STATE__;
scriptEl && scriptEl.parentNode.removeChild(scriptEl);

const store = createStore(fromJS(preloadedState), browserHistory);

store.runSaga(rootSaga);

const client = (
    <HelmetProvider>
        <Provider store={store}>
            <ConnectedRouter history={browserHistory}>
                <App />
            </ConnectedRouter>
        </Provider>
    </HelmetProvider>
);

const appElement = document.getElementById('app');

if (process.env.NODE_ENV === 'production') {
    loadableReady(() => {
        hydrate(client, appElement);
    });
} else {
    render(client, appElement);
}
