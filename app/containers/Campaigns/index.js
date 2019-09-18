/**
 *
 * Campaigns
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { compose } from 'redux';
import { makeSelectLoadInfluencer } from './selectors';
import { loadInfluencer } from './actions';
import Form from './Form';
import Input from './Input';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';


export function Campaigns({ influencer, onSubmitForm, onChangeUsername }) {
  useInjectReducer({ key: 'campaigns', reducer });
  useInjectSaga({ key: 'campaigns', saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (!influencer) onSubmitForm();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Campaigns</title>
        <meta name="description" content="Description of Campaigns" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="username">
          <span>foo</span>
          <Input
            id="username"
            type="text"
            placeholder="mxstbr"
            value="username"
            onChange={onChangeUsername}
          />
        </label>
      </Form>
      <div>
      {influencer && 
          <span>
            {influencer.firstName} {influencer.lastName}
          </span>
      }
      </div>
    </div>
  );
}

Campaigns.propTypes = {
  influencer: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  influencer: makeSelectLoadInfluencer(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(loadInfluencer()),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadInfluencer());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Campaigns);
