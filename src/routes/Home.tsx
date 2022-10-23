import React from 'react';
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { IsurgeryData } from '../App';
import { IdiscountData } from '../App';

type Props = {
    cartItems: IsurgeryData[];
    discountItems: IdiscountData[];
    addToCart: (clickedItem: IsurgeryData) => void;
    removeFromCart: (clickedItem: IsurgeryData) => void;
    discountOption:IdiscountData[];
};

const Home:React.FC<Props> = ( { cartItems, addToCart, removeFromCart, discountItems, discountOption} ) => {    
    console.log(discountItems);  
    console.log(discountOption)
    const navigate = useNavigate();  
    const surgeryClick = () => {navigate(`/SurgeryMenu`)};
    const DiscountClick = () => {navigate(`/DiscountMenu`)}; 
    let calculateTotal = (cartItems: IsurgeryData[]) => (
    cartItems.reduce((first:number, cartItems) => first + cartItems.count * cartItems.price, 0)
    );

 //-------------------------할인 옵션 선택 -------------------------------------------
    let test = discountOption.map((ele) => ele.rate * calculateTotal(cartItems))
    let test1 = test.reduce((a:number, b:number) => (a + b), 0)
    let test2 = calculateTotal(cartItems) - test1
//-------------------------할인 옵션 선택 X-------------------------------------------
    let ttest = discountItems.map((ele) => 
        ele.rate * calculateTotal(cartItems)
    )
    console.log(ttest);
    let ttest1 = ttest.reduce((a:number, b:number) => (a + b), 0)
    console.log(ttest1);
    let ttest2 = calculateTotal(cartItems) - ttest1
    console.log(ttest2);

    return (
        <Container>
            <InfoBtnBox>
                <div className='infoBox'>
                    <div className='infoName'>김용희</div>
                </div>
                <div className='btnBox'>                    
                    <Button onClick={surgeryClick} style={{backgroundColor: "#ede7f6"}} variant="contained">시술</Button>
                    <Button onClick={DiscountClick} style={{backgroundColor: "#ffb2dd"}} variant="contained">할인</Button>
                </div>
            </InfoBtnBox>
            <DataBox>
                {cartItems?.map((ele, id) => (
                    <div className='data' key={id}>
                        <div>{ele?.name}</div>
                        <div>{ele?.price}원</div>
                        <div>{ele?.count}개</div>                       
                        <Button
                            size='small'
                            disableElevation
                            variant='contained'
                            onClick={() => addToCart(ele)}
                        >
                            +
                        </Button>
                        <Button
                            size='small'
                            disableElevation
                            variant='contained'
                            onClick={() => removeFromCart(ele)}
                        >
                            -
                        </Button>
                    </div>                   
                ))}
                {discountOption?.map((ele, id) => (
                    <div className='data' key={id}>    
                        <div>{ele.name}</div>
                        <div>{ele.rate}</div>
                    </div>    
                ))}
            </DataBox>
            <FooterBox>
                <TotalCountBox>
                    <div>합계</div>
                    <div>{test.length === 0 ? ttest2 : test2 }원</div>
                </TotalCountBox>
                <NextBtn>
                    <Button variant="contained">확인</Button>
                </NextBtn>
            </FooterBox>
        </Container>
    )
}

export default React.memo(Home);

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
    .data {
        margin: 10px;
    }
    
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