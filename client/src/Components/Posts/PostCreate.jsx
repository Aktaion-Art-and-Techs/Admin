import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput source='titre' />
        <TextInput multiline source='contenu' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate