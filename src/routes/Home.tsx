import React from 'react';
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { IsurgeryData } from '../App';

type Props = {
  cartItems: IsurgeryData[];
//   handleAddToCart: (clickedItem: IsurgeryData ) => void;
//   removeFromCart: (id: number) => void;
};

const Home:React.FC<Props> = ( { cartItems } ) => {
    console.log(cartItems);
    const calculateTotal = (items: IsurgeryData[]) =>
    items.reduce((ack: number, item) => ack + item.count * item.price, 0);
    const navigate = useNavigate();
    
    const surgeryClick = () => {
        navigate(`./SurgeryMenu`);
    }

    const DiscountClick = () => {
        navigate(`./DiscountMenu`);
    }
    return (
        <Container>
            <InfoBtnBox>
                <div className='infoBox'>
                    <div className='infoName'>김용희</div>
                    <div>2022. 10.20. 오후 5:00</div>
                </div>
                <div className='btnBox'>                    
                    <Button onClick={surgeryClick} style={{backgroundColor: "#ede7f6"}} variant="contained">시술</Button>
                    <Button onClick={DiscountClick} style={{backgroundColor: "#ffb2dd"}} variant="contained">확인</Button>
                </div>
            </InfoBtnBox>
            <DataBox>
                {cartItems?.map((ele, id) => (
                    <div key={id}>
                        <div>{ele?.name}</div>
                        <div>{ele?.price}</div>
                        <div>{ele?.count}</div>
                    </div>                   
                ))}
            </DataBox>
            <FooterBox>
                <TotalCountBox>
                    <div>합계</div>
                    <div>${calculateTotal(cartItems).toFixed(2)}</div>
                </TotalCountBox>
                <NextBtn>
                    <Button variant="contained">확인</Button>
                </NextBtn>
            </FooterBox>
        </Container>
    )
}

export default Home;

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