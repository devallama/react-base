import { all } from 'redux-saga/effects';

function* rootSaga() {
    const sagas = [];

    yield all([...sagas]);
}

export default rootSaga;
