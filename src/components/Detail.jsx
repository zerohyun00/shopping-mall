import React from 'react';
import {useParams} from "react-router-dom";
import './Detail.css';

const Detail = () => {
    let params = useParams();
    console.log('파라미터 아이디',params.id)
    return (
        <div>
            <h2 className='detail_page'>상품상세페이지</h2>
            <h3 className='deatail_id'>제품의 아이디는 {params.id} 입니다.</h3>
        </div>
    );
};

export default Detail;