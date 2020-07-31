import React, { Component } from 'react';
import { View,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
        <Content>
          <Card onTouchStart={()=>this.props.navigation.navigate('Addproduct')}>
            <CardItem>
              <Left>
                <Body>
                  <Text>ADD</Text>
                  <Text note>Products</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri:'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?cs=srgb&dl=top-view-of-assorted-gadgets-on-desk-3568520.jpg&fm=jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
          <Card onTouchStart={()=>this.props.navigation.navigate('Listproducts')}>
            <CardItem>
              <Left>
                <Body>
                  <Text>View</Text>
                  <Text note>Products</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?cs=srgb&dl=photo-of-keyboard-near-mouse-3184460.jpg&fm=jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Configuration</Text>
                  <Text note>Products</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg?cs=srgb&dl=abstract-art-circle-clockwork-414579.jpg&fm=jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}