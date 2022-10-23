import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Button from '@mui/material/Button';
import { IdiscountData } from '../App';

type Props = {
    discountItems: IdiscountData[];
    handleCheckChange: (check:boolean, ele:IdiscountData) => void;
}

const DiscountMenu:React.FC<Props> = ( { discountItems, handleCheckChange } ) => {
    const navigate = useNavigate();  
    const surgeryClick = () => {navigate(`/SurgeryMenu`)};
    const homeClick = () => {navigate(`/`)}
    const [checkedState, setCheckedState] = useState(new Array(discountItems.length).fill(false));
    console.log(checkedState);
    console.log(discountItems);
    const handleOnChange = (position:any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);    

  };
    return (
        <Container>
            <InfoBtnBox>
                <div className='infoBox'>
                    <div className='infoName'>김용희</div>
                </div>
                <div className='btnBox'>                    
                    <Button onClick={surgeryClick} style={{backgroundColor: "#ede7f6", margin: "5px"}} variant="contained">시술</Button>
                    <Button style={{backgroundColor: "#ffb2dd", margin: "5px"}} variant="contained">할인</Button>
                </div>
            </InfoBtnBox>
            <DataBox>
                <div>
                    {discountItems?.map((ele, id) => (
                    <div className='data' key={id}>    
                        <div className='name'>{ele?.name}</div>
                        <div className='rate'>{ele?.rate}%</div>                    
                        <input
                            className='check'
                            type="checkbox"
                            id={`custom-checkbox-${id}`}
                            name={ele?.name}
                            value={ele?.name}
                            onChange={(e) => {
                                handleCheckChange(e.target.checked ,ele)
                                handleOnChange(id)
                                }}                            
                            checked={checkedState[id]}>
                        </input> 
                    </div>   
                    ))}
                </div>
            </DataBox>
            <FooterBox>                
                <NextBtn>
                    <Button onClick={homeClick} style={{backgroundColor: "#d1c4e9" , width: '300px'}} variant="contained">완료</Button>
                </NextBtn>
            </FooterBox>
        </Container>
    )
}

export default React.memo(DiscountMenu);

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
    .data {
        border-top: 1px solid #9e9e9e;
        margin: 10px;
        .name {
            font-weight: bolder;
            margin: 10px;
        }
        .price {
            color:#9e9e9e;
            font-size: 12px; 
            margin: 5px;
        }        
        .rate {
            color:#9e9e9e;
            font-size: 12px; 
            margin: 5px;
        }        
        .check {
            margin: 5px;
        }
    }
`;

const FooterBox = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    font-weight: bolder;
    border-top: 1px solid #9e9e9e;
    margin: 10px;
`;

const NextBtn = styled.div`
    margin: 10px;
`;