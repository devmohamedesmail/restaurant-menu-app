'use client'
import { useParams, useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataProvider';

export default function page() {
    const { id } = useParams();
    const { tableNo, setTableNo } = useContext(DataContext);


    useEffect(() => {
        setTableNo(id)
    }, [id])
    return (
        <div>
            {id}
        </div>
    )
}
