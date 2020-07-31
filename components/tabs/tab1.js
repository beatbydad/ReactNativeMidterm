import React, { Component } from 'react';
import { View } from 'react-native';
import { Container,Content,Form,Item,Label,Text,Input,Button } from 'native-base';

export default class addproducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category:'',
      productcode:''
    };
  }
  

  render() {
    return (
      <Container>
      <Content>
      <Form>
          <Item floatingLabel>
          <Label>Category</Label>
          <Input  onChange={this.setState.category} />
          </Item>
          <Item floatingLabel last>
          <Label>Product Code</Label>
          <Input onChange={this.setState.productcode}/>
          </Item>
          <Item floatingLabel last>
          <Label>Product Name</Label>
          <Input />
          </Item>
          <Button full style={{marginTop:20,marginLeft:20,marginRight:20}}
          onPress={()=>this.props.navigation.navigate('Listproducts',{
            category: this.state.category,
            productcode: this.state.productcode,
          })}
          >
          <Text>Save</Text>
        </Button>
      </Form>
      </Content>
  </Container>
    );
  }
}
