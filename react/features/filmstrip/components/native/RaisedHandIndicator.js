// @flow

import React from 'react';

import { connect } from '../../../base/redux';

import AbstractRaisedHandIndicator, {
    type Props,
    _mapStateToProps
} from '../AbstractRaisedHandIndicator';

import BaseIndicator from './BaseIndicator';

/**
 * Thumbnail badge showing that the participant would like to speak.
 *
 * @extends Component
 */
class RaisedHandIndicator extends AbstractRaisedHandIndicator<Props> {
    /**
     * Renders the platform specific indicator element.
     *
     * @returns {React$Element<*>}
     */
    _renderIndicator() {
        return (
            <BaseIndicator
                highlight = { true }
                icon = 'raised-hand' />
        );
    }
}

export default connect(_mapStateToProps)(RaisedHandIndicator);
