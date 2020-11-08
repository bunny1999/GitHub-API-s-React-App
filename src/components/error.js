import React from 'react'

export default function Eror({code,message="Something Went Wrong"}) {
    return (
        <div className="text-center">
            <h1 className="text-danger">{code}</h1>
            <h2>{message}</h2>
        </div>
    )
}
