/**
 *
 * DashboardPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Header, Card, Icon, Progress } from 'semantic-ui-react';
import H2 from 'components/H2';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDashboardPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <Header
          as={H2}
          icon="hourglass half"
          content="Assignments in Progress"
        />
        <Card.Group>
          <Card fluid>
            <Card.Content header="History Final Thesis" />
            <Card.Content description="Some longggg description.Some longggg description." />
            <Card.Content extra textAlign="right">
              <Icon name="clock" />
              6d 10h 15m
            </Card.Content>
            <Progress percent={60} active success attached="top" />
            <Progress percent={60} active success attached="bottom" />
          </Card>
          <Card fluid>
            <Card.Content header="React Website" />
            <Card.Content description="Some longggg description.Some longggg description." />
            <Card.Content extra textAlign="right">
              <Icon name="clock" />
              2d 6h 56m
            </Card.Content>
            <Progress percent={80} active warning attached="top" />
            <Progress percent={80} active warning attached="bottom" />
          </Card>

          <Card fluid>
            <Card.Content header="DSE M2 Exam Paper" />
            <Card.Content description="Some longggg description.Some longggg description." />
            <Card.Content extra textAlign="right">
              <Icon name="clock" />
              2d 6h 56m
            </Card.Content>
            <Progress percent={95} active error attached="top" />
            <Progress percent={95} active error attached="bottom" />
          </Card>
        </Card.Group>
        <Header as={H2} icon="star" content="Suggested Assignments" />
      </div>
    );
  }
}

DashboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  DashboardPage: makeSelectDashboardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'DashboardPage', reducer });
const withSaga = injectSaga({ key: 'DashboardPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DashboardPage);
