import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title='Créer un utilisateur' {...props}>
      <SimpleForm>
        <TextInput source='nom' />
        <TextInput source='email' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate