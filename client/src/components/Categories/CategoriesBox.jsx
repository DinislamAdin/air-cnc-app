import React from 'react';
import qs from 'query-string';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoriesBox = ({label, icon:Icon}) => {

    const [params, setSearchParams] = useSearchParams()
    const value = params.get('category')
    const navigate = useNavigate();

    const handelClick =()=>{
        let currentQuery = {}
        if(params){
            currentQuery = qs.parse(params.toString())
        }
        const updatedQuery ={
            ...currentQuery, 
            category: label,
        }
        const url = qs.stringifyUrl(
            {
            url: '/',
            query: updatedQuery
        },
        {skipNull: true}
        )
        navigate(url)
    }

    return (
        <div onClick={handelClick} className='flex flex-col items-center justify-center gpa-2 border-b-2 hover:text-neutral-800 cursor-pointer border-transparent text-neutral-500'>
            <Icon size={26}></Icon>
            <div>{label}</div>
        </div>
    );
};

export default CategoriesBox;