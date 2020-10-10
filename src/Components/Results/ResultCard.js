import React, { useEffect, useState } from 'react'
import {Progress} from 'antd'

function ResultCard(props) {

    const [color, setColor] = useState('')
    const [risk, setRisk] = useState('')
    const [remark,setCalcRemark] = useState('')

    useEffect(()=>{
        setColor(calcColor(props.userData[props.el]))
        setRisk(calcRisk(props.userData[props.el]))
        setCalcRemark(calcRemark(props.userData[props.el]))
    })

    const calcColor = (number) =>{
        if(number <= 30){
            return "#0ED470"
        }
        else if(number>30 && number<=60){
            return "#FAAD14"
        }
        else{
            return "#F51D2C"
        }
    }

    const calcRisk = (number) =>{
        if(number <= 30){
            return "Low"
        }
        else if(number>30 && number<=60){
            return "Medium"
        }
        else{
            return "High"
        }
    }

    const calcRemark = (number) =>{
        if(number <= 30){
            return "You don't need to visit a doctor."
        }
        else if(number>30 && number<=60){
            return "Visit the doctor if you have these symptoms."
        }
        else{
            return "Visit the doctor as soon as possible."
        }
    }

    const symptoms = {
        "artery": "Cough | Nasal Congestion | Fever | Head Cold Symptoms",
        "liver": "General abdominal pain, cramps, or spasms | Changes in abdominal size | Accumulation of fluid under the skin | Liver, Gallbladder, or Biliary Tract Symptoms | Back pain, Ache, Soreness, or Discomfort ",
        "malignancy": "Fatigue | Lump or area of thickening that can be felt under the skin | Weight changes | Skin changes | Changes in bowel or bladder habits | Persistent cough or trouble breathing",
        "pulmonary":"Cough | Nasal Congestion | Fever | Head Cold Symptoms",
        "renal": "Diabetic Nephropathy | High Blood Pressure | Glomerulonephritis | Polycystic Kidney Disease",
        "resp": "Cough | Shortness of breath | Chest pain | Hemoptysis (blood in the sputum)",
        "stroke": "High External Temperatures | Physical Exertion"
    }

    return (
        <div className="row" style= {{boxShadow: '-4px -4px 15px 3px #080A0D, 4px 4px 15px 3px #1B222B', borderRadius: 10, display: 'flex', flexDirection:'column'}}>
            <div style={{ color: color, textAlign: 'center', paddingTop: 10, paddingBottom: 10, fontWeight: 600, letterSpacing: '0.065em' }} >
                {props.diseases[props.el].toUpperCase()}
            </div>
            <div style={{ flexDirection: 'row', display: 'flex' }} >
                <div className="col-lg-2" style={{ padding: 10, display: 'flex',justifyContent:'center', alignItems: 'center' }} >
                    <Progress type="circle" percent={props.userData[props.el].toFixed(2)} width={100} strokeColor={color} style={{ color: 'white' }} />
                </div>
                <div className="row col-lg-10"  style={{ padding: 10 }} >
                    <div className="col" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }} >
                        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 16 }}>
                            Risk
                        </div>
                        <div style={{ textAlign: 'center', fontWeight: 400, fontSize: 16 }}>
                            {risk}
                        </div>
                    </div>
                    <div className="col" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }} >
                        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 16 }}>
                            Symptoms
                        </div>
                        <div style={{ textAlign: 'center', fontWeight: 400, fontSize: 16  }}>
                            {symptoms[props.el]}
                        </div>
                    </div>
                    <div className="col" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }} >
                        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 16}}>
                            Remarks
                        </div>
                        <div style={{ textAlign: 'center', fontWeight: 400, fontSize: 16   }} >
                            {remark}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultCard