'use strict';

const ItemType = ({item}) => {
  switch(item.type) {
    case 'unisex':
      return <Item color="black" item={item} />;
    case 'male':
      return <Item color="blue" item={item} />;
    case 'female':
      return <Item color="orange" item={item} />;
  }
}

const App = ({items}) => (
  <main>
  {items.map(item => <ItemType item={item} />)}
  </main> 
);
