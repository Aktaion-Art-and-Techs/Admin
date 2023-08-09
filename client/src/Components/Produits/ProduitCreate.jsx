import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const ProduitCreate = (props) => {
  return (
    <Create title='Créer un Produit' {...props}>
      <SimpleForm>
        <TextInput source='titre' />
        <TextInput multiline source='description' />
        <TextInput source='prix' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default ProduitCreate