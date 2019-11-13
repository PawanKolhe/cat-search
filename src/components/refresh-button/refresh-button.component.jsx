import React from 'react';

import './refresh-button.styles.css';

const RefreshButton = (props) => {
    return (
        <div className="button-container">
            <button className="refresh-button" onClick={props.handleRefresh}>
                <i className={`fas fa-sync-alt ${props.spin ? 'fa-spin' : ''}`}></i> Refresh
            </button>
        </div>
    );
}

export default RefreshButton;