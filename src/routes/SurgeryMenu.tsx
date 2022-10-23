import React from 'react';
import styled from "styled-components"
import { IsurgeryData } from '../App';
import { useNavigate } from "react-router-dom";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Button from '@mui/material/Button';

type Props = {
    surgeryItems: IsurgeryData[];
    handleAddToCart: (clickedItem: IsurgeryData ) => void;
}

const SurgeryMenu:React.FC<Props> = ({ surgeryItems, handleAddToCart }) => {
    const navigate = useNavigate();
    const surgeryClick = () => {navigate(`/SurgeryMenu`)};
    const DiscountClick = () => {navigate(`/DiscountMenu`)}; 
    const homeClick = () => {navigate(`/`)}
    return (
        <Container>
            <InfoBtnBox>
                <div className='infoBox'>
                    <div className='infoName'>시술메뉴</div>
                </div>
                <div className='btnBox'>                    
                    <Button onClick={surgeryClick} style={{backgroundColor: "#ede7f6", margin: "5px" }} variant="contained">시술</Button>
                    <Button onClick={DiscountClick} style={{backgroundColor: "#ffb2dd", margin: "5px" }} variant="contained">할인</Button>
                </div>                
            </InfoBtnBox>
            <DataBox>
                {surgeryItems?.map((ele, id) => (
                    <div className='data' key={id}>
                        <div className='nameBox'>
                            <div className='name' onClick={() => handleAddToCart(ele)}>{ele?.name}</div>
                            <BorderColorOutlinedIcon style={{ color: "#9e9e9e"}}/>
                        </div>
                        <div className='price' onClick={() => handleAddToCart(ele)}>{ele?.price}원</div>
                    </div>
                ))}
            </DataBox>
            <FooterBox>               
                <NextBtn>
                    <p className='btnString'>서비스를 선택하세요(여러 개 선택가능)</p>
                    <Button style={{backgroundColor: "#d1c4e9" , width: '300px'}} onClick={homeClick} variant="contained">완료</Button>
                </NextBtn>
            </FooterBox>
        </Container>
    )
}

export default React.memo(SurgeryMenu);

const Container = styled.div`
    margin: 30px;
    background-color: rgba(225, 225, 225, 0.2);
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
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
            font-size: 20px;
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
    overflow: auto;
    .data {
        background-color: rgba(225, 225, 225, 0.2);
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);  
        margin: 15px;
        cursor: pointer;
        .nameBox {
            display: flex;
            .name {
                font-weight: bolder;
            }
        }
        .price {
            color:#9e9e9e;
            font-size: 12px;
        }       
    }
`;

const FooterBox = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    font-weight: bolder;
    background-color:#9474cc;
    margin: 10px;
    border-radius: 5px;
    height: 100px;
`;

const NextBtn = styled.div`
    .btnString {
        text-align : center;
        color: white;
        font-size: 12px;
    }
`;