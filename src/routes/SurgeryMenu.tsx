import React, {useState, useEffect, useCallback} from 'react';
import styled from "styled-components"
import axios from 'axios';
import Button from '@mui/material/Button';
const BASE_PATH = "https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData";

interface IsurgeryData {
    name:string;
    price:number;
}

const SurgeryMenu = () => {
    const [surgeryData, setSurgeryData]:any = useState();
    const arrData = Object.values({...surgeryData})
    console.log(arrData);
    useEffect(() => {
        getData()    
    }, [])

    const getData = async () => {
    try {
        const response = await axios.get(BASE_PATH)
        const resSurgeryData = await response?.data?.items;        
        setSurgeryData((resSurgeryData));
    } catch(err) {
        console.log("Error >>", err);
        }
    }

    return (
        <Container>
            <InfoBtnBox>
                <div className='infoBox'>
                    <div className='infoName'>시술메뉴</div>                    
                </div>                
            </InfoBtnBox>
            <DataBox>
                {arrData?.map((ele:any) => (
                    <div>{ele?.name}</div>
                ))}
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

export default SurgeryMenu;

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