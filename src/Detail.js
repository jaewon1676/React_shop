import React from 'react'
import {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

let 제목 = styled.h4`
    padding: 10px;
    font-size: 35px;
    color : ${props => props.색상}
`;

function Detail(props) {

    let { id } = useParams();
    let history = useHistory();
    let 찾은상품 = props.shoes.find(x => x.id == id);

    return (
        <div>
            <div className="container">
                <제목 색상='black'>Detail</제목>
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width='110%'/>
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{찾은상품.title}</h4>
                        <p>{찾은상품.content}</p>
                        <p>{찾은상품.price}원</p>
                        <button className="btn btn-danger">주문하기</button>
                        <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detail
