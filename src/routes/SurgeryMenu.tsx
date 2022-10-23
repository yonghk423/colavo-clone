import React from 'react';
import styled from "styled-components"
import Button from '@mui/material/Button';
import { IsurgeryData } from '../App';
import { useNavigate } from "react-router-dom";

type Props = {
    surgeryItems: IsurgeryData[];
    handleAddToFirstCart: (clickedItem: IsurgeryData ) => void;
}

const SurgeryMenu:React.FC<Props> = ({ surgeryItems, handleAddToFirstCart }) => {
    const navigate = useNavigate();
    const homeClick = () => {navigate(`/`)}
    return (
        <Container>
            <InfoBtnBox>
                <div className='infoBox'>
                    <div className='infoName'>시술메뉴</div>                    
                </div>                
            </InfoBtnBox>
            <DataBox>
                {surgeryItems?.map((ele, id) => (
                    <div key={id}>
                        <div onClick={() => handleAddToFirstCart(ele)}>{ele?.name}</div>
                        <div>{ele?.price}</div>
                    </div>
                ))}
            </DataBox>
            <FooterBox>               
                <NextBtn>
                    <Button onClick={homeClick} variant="contained">완료</Button>
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
    overflow: auto;
`;

const FooterBox = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    font-weight: bolder;
`;

const NextBtn = styled.div`
    margin: 10px;
`;