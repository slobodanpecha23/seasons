import React from 'react'

const Loader = ({message}) => {
    return (
        <div class="ui active dimmer">
            <div class="ui big text loader">{message}</div>
        </div>
    )
}

Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader;