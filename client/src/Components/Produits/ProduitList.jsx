import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
} from 'react-admin'

const ProduitList = (props) =>{
    return <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="titre"/>
            <TextField source="description"/>
            <TextField source="prix"/>
            <TextField source="publishedAt"/>
            <EditButton basePath='/produits'/>
            <DeleteButton basePath='/produits'/>
        </Datagrid>
    </List>
}



export default ProduitList