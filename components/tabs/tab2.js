import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';

export default class listproducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category:'',
      productcode:'',
      productnames:'',
    };
  }
  componentDidMount() {
    this.setState({
      category = this.state.route.params,
      productcode = this.state.route.params
    })
  }
  render() {
    return (
      <Container>
      <Content>
        <List>
          <ListItem>
            <Text>{route.params.category}</Text>
          </ListItem>
          <ListItem>
          <Text>{route.params.productcode}</Text>
          </ListItem>
          <ListItem>
          <Text>{route.params.productcode}</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
    );
  }
}
