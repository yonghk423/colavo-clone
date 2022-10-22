import React, {useState, useEffect, useCallback} from 'react';
import styled from "styled-components"
import axios from 'axios';
import Button from '@mui/material/Button';
import { IdiscountData } from '../App';

type Props = {
    discountItems: IdiscountData[];
}

const DiscountMenu:React.FC<Props> = ( { discountItems } ) => {
    console.log(discountItems);
    return (
        <Container>
            <InfoBtnBox>
                <div className='infoBox'>
                    <div className='infoName'>김용희</div>
                    <div>2022. 10.20. 오후 5:00</div>
                </div>
                <div className='btnBox'>                    
                    <Button style={{backgroundColor: "#ede7f6"}} variant="contained">시술</Button>
                    <Button style={{backgroundColor: "#ffb2dd"}} variant="contained">확인</Button>
                </div>
            </InfoBtnBox>
            <DataBox>
                <div>
                    {discountItems?.map((ele, id) => (
                    <div key={id}>    
                        <div>{ele?.name}</div>
                        <div>{ele?.rate}</div>
                    </div>    
                    ))}
                </div>
            </DataBox>
            <FooterBox>
                <TotalCountBox>
                    <div>합계</div>
                    <div>0원</div>
                </TotalCountBox>
                <NextBtn>
                    <Button variant="contained">확인</Button>
                </NextBtn>
            </FooterBox>
        </Container>
    )
}

export default DiscountMenu;

const Container = styled.div`
    margin: 30px;
    background-color: rgba(225, 225, 225, 0.2);
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px     rgba(0, 0, 0, 0.06);  
`;

const InfoBtnBox = styled.div`
    .infoBox {
        margin: 10px;
        display: grid;
        justify-content: center;
        justify-items: center;
        font-weight: bolder;
        .infoName {
            margin: 10px;
        }
    }
    .btnBox {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: center;
        justify-items: center;
    }
`;

const DataBox = styled.div`
    height: 450px;
`;

const FooterBox = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    font-weight: bolder;
`;

const TotalCountBox = styled.div`
    margin: 10px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 100px;   
`;

const NextBtn = styled.div`
    margin: 10px;
`;