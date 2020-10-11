import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from './reducers';

export default (initialState, history) => {
    let reduxDevToolsMiddleware = f => f;

    if (process.env.NODE_ENV === 'development') {
        reduxDevToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f;
    }

    const sagaMiddleware = createSagaMiddleware();
    const reducers = rootReducer(history);
    const middleware = compose(
        applyMiddleware(sagaMiddleware, routerMiddleware(history)),
        reduxDevToolsMiddleware
    );
    const store = initialState => {
        const store = createStore(reducers, initialState, middleware);

        store.runSaga = sagaMiddleware.run;
        store.close = () => store.dispatch(END);

        return store;
    };

    return { ...store(initialState, history), history };
};
