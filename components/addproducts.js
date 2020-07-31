
import { Container,Content,Form,Item,Label,Text,Input,Button } from 'native-base';
import React, {useState} from 'react';

addproducts = ({navigation}) => {
  const [category, setCategory] = useState('');
  const [productcode, setProductcode] = useState('');
  const [productname, setProductname] = useState('');

  return (
        <Container>
        <Content>
        <Form>
            <Item floatingLabel>
            <Label>Category</Label>
            <Input value={category} onChangeText={setCategory}/>
            </Item>
            <Item floatingLabel last>
            <Label>Product Code</Label>
            <Input value={productcode} onChangeText={setProductcode} />
            </Item>
            <Item floatingLabel last>
            <Label>Product Name</Label>
            <Input value={productname} onChangeText={setProductname}/>
            <Input />
            </Item>
            <Button full style={{marginTop:20,marginLeft:20,marginRight:20}}
            onPress={()=>{navigation.navigate('Listproducts')
              ,{mycategory:category
              ,myproductcode:productcode
            ,myproductname:productname}} 
          }
            >
            <Text>Save</Text>
          </Button>
        </Form>
        </Content>
    </Container>
  );
}

export default addproducts;