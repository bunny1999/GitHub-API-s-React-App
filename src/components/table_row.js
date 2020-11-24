import React from 'react'

export const TableRow = ({heading,value})=>{
    return value!==null
    ?(
        <tr>
            <th>{heading}</th>
            <th>{value}</th>
        </tr>
    ):("")
}

export const TableRowLink=({heading,link,icon})=>{
    return link!==null
    ?(
        <TableRow heading={heading} value={
            <a href={link} className="text-info">{link} <span>{icon}</span></a>
        }/>
    ):("")
}