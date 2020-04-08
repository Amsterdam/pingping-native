import React, {Component} from 'react';
import {Container, Header, Left, Button, Icon} from 'native-base';
export default class HeaderIconExample extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      </Header>
    );
  }
}
