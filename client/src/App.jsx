import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './Components/Posts/PostList'
import PostCreate from './Components/Posts/PostCreate'
import PostEdit from './Components/Posts/PostEdit'
import UserList from './Components/Users/UserList'
import UserCreate from './Components/Users/UserCreate'
import UserEdit from './Components/Users/UserEdit'
import ProduitCreate from './Components/Produits/ProduitCreate'
import ProduitEdit from './Components/Produits/ProduitEdit'
import ProduitList from './Components/Produits/ProduitList'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:5000')}>
      <Resource
        name='produits'
        list={ProduitList}
        create={ProduitCreate}
        edit={ProduitEdit}
      />
      <Resource
        name='posts'
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name='utilisateurs'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  )
}

export default App