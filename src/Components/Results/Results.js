import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ResultCard from './ResultCard'
import {LinkOutlined} from '@ant-design/icons'
import './Results.css'

import { Switch } from 'antd';


function Results() {

    const [userData, setUserData] = useState(null);
    const [userName, setName] = useState("");
    const [BMI, setBMI] = useState(null);
    const [gender, setGender] = useState(null);
    const [values, setValues] = useState(null);
    const [bph, setbph] = useState(null);
    const [bpl, setbpl] = useState(null);
    const [check,setCheck]=useState(true)


    const location = useLocation();

    useEffect(() => {

        if(!location.userData){
            setUserData({artery: 15.434070303925887,
                liver: 14.646823571901201,
                malignancy: 21.930433229654497,
                pulmonary: 16.695960421457904,
                renal: 12.85126356650014,
                resp: 35.66975279619696,
                stroke: 19.650616788633783})

            setValues({
                Name: "hbh",
                age: "8",
                height: "8",
                hr: "8",
                map1: "8",
                map2: "8",
                temp: "8",
                weight: "8",
            })
            setBMI(22.22222)
            setGender('Male')
            setName("test")
            setbpl(9)
            setbph(100)
        }else{
            setUserData(location.userData.detail);
            setName(location.usersName);
            setBMI(location.bmi);
            setGender(location.gender)
            setValues(location.values)
            setbph(location.bphigh)
            setbpl(location.bplow)

        }
        }, [location]);

    if(!userData){
        return <h1>Loading</h1>
    }

    function onChange(checked) {
        setCheck(checked);
        console.log(checked)
      }
      

    const diseases = {
        "artery": "Coronary Artery Disease",
        "liver": "Liver Disease",
        "malignancy": "Malignancy",
        "pulmonary":"Chronic Obstructive Pulmonary Disease",
        "renal": "Chronic Renal Disease",
        "resp": "Respiratory Disease (non-COPD)",
        "stroke": "Stroke"
    }

    return (
        <div className={check ? 'dark':'light'} >
            <div className="container" style={{ margin: 0 }} >
            <Switch defaultChecked onChange={onChange} />

                <div className={check ? 'dark_text row':'light_text row'} style={{ fontSize: 36, margin: 0, marginBottom: '1rem' }} >
                    Hello <span style={{ color: '#0ED470', fontWeight: 600, paddingLeft: 5 }} >{userName}</span>, your report has been generated.
                </div>

                <div className={check ? 'dark_text row':'light_text row'} style={{ margin: 0, marginBottom: '2rem' }} >
                    <div className="col" style={{ padding: 0 }}>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }} > Age:</span> <span> {values.age} Years old</span></div>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }}>Height:</span> <span> {values.height} cm </span> </div>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }}>Weight:</span> <span> {values.weight} kg</span></div>
                    </div>
                    <div className="col" style={{ padding: 0 }}>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }} > Gender:</span> <span> {gender} </span></div>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }} > Heart Rate:</span> <span> {values.hr} bpm </span></div>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }} >Temperature:</span> <span> {values.temp} °F</span></div>
                    </div>
                    <div className="col" style={{ padding: 0 }}>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }} >Blood Pressure:</span> <span> {bpl} / {bph} </span></div>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }} >Body Mass Index(BMI): </span> <span>{BMI.toFixed(2)}</span></div>
                    </div>
                </div>
                {
                    Object.keys(userData).map(el=>{
                        return(
                            <div>
                                <ResultCard check={check} el={el} userData={userData} diseases={diseases}/>
                                <div className={check ? 'dark_text':'light_text '} style={{ textAlign: 'right', paddingTop: 10, paddingBottom: '2rem', fontSize: 11.69, display: 'flex',justifyContent: 'flex-end', alignItems:'center' }} >
                                    <LinkOutlined style={check ?{ color: '#EFF3F8', paddingRight: 5 }:{ color: '#000', paddingRight: 5 }} />
                                    Know more about {diseases[el]}
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Results
