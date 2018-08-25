/**
 *
 * OrderItem
 *
 */

import React from 'react';

import { Segment, Icon, Button, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import numeral from 'numeral';
class OrderItem extends React.Component {
  state = { isExtraVisible: false };

  toggleExtra = () => {
    this.setState(prevState => ({
      isExtraVisible: !prevState.isExtraVisible,
    }));
  };

  render() {
    const {
      // id,
      isRead,
      subject,
      // description,
      type,
      price,
      created,
      deadline,
    } = this.props;

    const { isExtraVisible } = this.state;
    const ItemWrapper = styled(Segment.Group)`
      margin-top: 20px;
    `;

    const ItemContent = styled(Segment)`
      flex: 1;
    `;

    const ItemTopInfo = styled(Segment)``;
    const ItemSubject = styled.div`
      margin-bottom: 5px;
    `;
    const ItemType = styled.span`
      margin-bottom: 5px;
    `;
    const ItemAction = styled(Segment)`
      flex: 0 0 200px !important;
    `;
    const ItemPrice = styled.div``;
    const ItemTime = styled.span`
      margin-left: 50px;
      margin-right: 50px;
    `;

    return (
      <ItemWrapper>
        <ItemTopInfo color={isRead ? 'teal' : 'blue'} inverted compact>
          {isRead ? 'Read' : 'Not Read'}
          <ItemTime>{created.format('Do MMMM YYYY, h:mm a')}</ItemTime>
          <ItemTime>{deadline.format('Do MMMM YYYY, h:mm a')}</ItemTime>
        </ItemTopInfo>
        <Segment.Group horizontal compact raised>
          <ItemContent>
            <ItemSubject>
              <Header as="h2">{subject}</Header>
            </ItemSubject>
            <ItemType>
              <Header as="h4">{type}</Header>
            </ItemType>
          </ItemContent>
          <ItemAction>
            <ItemPrice>
              <span>
                {price > 0
                  ? numeral(price / 100).format('$0,0.00')
                  : 'Negotiable'}
              </span>
            </ItemPrice>

            <Button onClick={this.toggleExtra}>
              <Icon
                name="dropdown"
                {...!isExtraVisible && { rotated: 'counterclockwise' }}
              />
              {isExtraVisible ? 'Hide' : 'More'}
            </Button>
          </ItemAction>
        </Segment.Group>
        {isExtraVisible && (
          <Segment>
            Extra Content
            <Button>Place a bid</Button>
          </Segment>
        )}
      </ItemWrapper>
    );
  }
}

OrderItem.propTypes = {
  isRead: PropTypes.bool.isRequired,
  subject: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  created: PropTypes.object.isRequired,
  deadline: PropTypes.object.isRequired,
};

export default OrderItem;
