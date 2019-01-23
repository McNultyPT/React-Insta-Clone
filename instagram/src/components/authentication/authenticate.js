import React from 'react';

import App from '../../App';

const authenticate = App =>
    class extends React.Component {
        render() {
            return <App />
        }
    }

export default authenticate;