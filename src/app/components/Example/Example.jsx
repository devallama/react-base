import React from 'react';
import PropTypes from 'prop-types';

class Example extends React.Component {
    static propTypes = {
        heading: PropTypes.string
    };

    render() {
        const { heading } = this.props;

        return (
            <div>
                {heading && <h1>{heading}</h1>}
                Hello, mars.
            </div>
        );
    }
}

export default Example;
