import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Button from '@mui/material/Button';
import { IdiscountData } from '../App';

type Props = {
    discountItems: IdiscountData[];
    handleAddDiscount: (clickedItem: IdiscountData ) => void;
    handleCheckChange: any
    discountOption:any
}

const DiscountMenu:React.FC<Props> = ( { discountItems, handleAddDiscount, handleCheckChange, discountOption, } ) => {
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
                    <div>2022. 10.20. 오후 5:00</div>
                </div>
                <div className='btnBox'>                    
                    <Button onClick={surgeryClick} style={{backgroundColor: "#ede7f6"}} variant="contained">시술</Button>
                    <Button style={{backgroundColor: "#ffb2dd"}} variant="contained">할인</Button>
                </div>
            </InfoBtnBox>
            <DataBox>
                <div>
                    {discountItems?.map((ele:any, id) => (
                    <div key={id}>    
                        <div onClick={()=>handleAddDiscount(ele)}>{ele?.name}</div>
                        <div>{ele?.rate}</div>                    
                        <input
                            type="checkbox"
                            id={`custom-checkbox-${id}`}
                            name={ele?.name}
                            value={ele?.name}
                            onChange={(e) => {
                                handleCheckChange(e.target.checked ,ele)
                                handleOnChange(id)
                                }
                           
                            }
                            
                            checked={checkedState[id]}>
                        </input> 
                    </div>   
                    ))}
                </div>
            </DataBox>
            <FooterBox>                
                <NextBtn>
                    <Button onClick={homeClick} variant="contained">확인</Button>
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