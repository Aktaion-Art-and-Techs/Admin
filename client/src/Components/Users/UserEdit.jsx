import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Modifier Utilisateur' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='nom' />
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit