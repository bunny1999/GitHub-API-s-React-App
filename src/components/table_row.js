import React from 'react'

const TableRow = ({heading,value})=>{
    return value!==null
    ?(
        <tr>
            <th>{heading}</th>
            <th>{value}</th>
        </tr>
    ):("")
}

export default TableRow;