import React from 'react'
import { Edit, SimpleForm, TextInput, DateField} from 'react-admin'

const ProduitEdit = (props) => {
  return (
    <Edit titre='Modifier Produit' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='titre' />
        <TextInput multiline source='description' />
        <TextInput source='prix' />
        <DateField source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default ProduitEdit