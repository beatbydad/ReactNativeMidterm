
import * as React from 'react';
import { Container, Header, Content, List, ListItem,Text, Left, Right, Icon } from 'native-base';
import { useRoute } from '@react-navigation/native';
 listproducts = () => {
   const route =useRoute();
  return (
    <Container>
    <Content>
      <List>
        <ListItem>
        <Text>{route.params.mycategory}</Text>
        </ListItem>
        <ListItem>
        <Text>{route.params.myproductcode}</Text>
        </ListItem>
        <ListItem>
        <Text>{route.params.myproductname}</Text>
        </ListItem>
      </List>
    </Content>
  </Container>
   );
}

export default listproducts;