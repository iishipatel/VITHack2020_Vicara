import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ResultCard from './ResultCard'
import {LinkOutlined} from '@ant-design/icons'
import './Results.css'

function Results() {

    const [userData, setUserData] = useState(null);
    const [userName, setName] = useState("");
    const [BMI, setBMI] = useState(null);
    const [gender, setGender] = useState(null);
    const [values, setValues] = useState(null);

    const location = useLocation();

    useEffect(() => {
        setUserData(location.userData.detail);
        setName(location.usersName);
        setBMI(location.bmi);
        setGender(location.gender)
        setValues(location.values)
        console.log(location)
    }, [location]);

    if(!userData){
        return <h1>Loading</h1>
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
        <div style={{ backgroundColor: '#11151B', color: '#EFF3F8', justifyContent:'center',alignItems: 'center', display: 'flex', paddingTop:'3.5rem' }} >
            <div className="container" style={{ margin: 0 }} >
                <div className="row" style={{ fontSize: 36, margin: 0, marginBottom: '1rem' }} >
                    Hello <span style={{ color: '#0ED470', fontWeight: 600, paddingLeft: 5 }} >{userName}</span>, your report has been generated.
                </div>

                <div className="row" style={{ margin: 0, marginBottom: '2rem' }} >
                    <div className="col" style={{ padding: 0 }}>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }} > Age:</span> <span> {values.age} </span></div>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }}>Height:</span> <span> {values.height} cm </span> </div>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }}>Weight:</span> <span> {values.weight}kg</span></div>
                    </div>
                    <div className="col" style={{ padding: 0 }}>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }} > Gender:</span> <span> {gender} </span></div>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }} > Heart Rate:</span> <span> {values.hr}cm </span></div>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }} >Temperature:</span> <span> {values.temp} deg F </span></div>
                    </div>
                    <div className="col" style={{ padding: 0 }}>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }} >Blood Pressure:</span> <span> {values.map} </span></div>
                        <div style={{ fontSize: 14 }} ><span style={{ fontSize: 16 }} >Body Mass Index: (BMI)</span> <span> {BMI}</span></div>
                    </div>
                </div>
                {
                    Object.keys(userData).map(el=>{
                        return(
                            <div>
                                <ResultCard el={el} userData={userData} diseases={diseases}/>
                                <div style={{ textAlign: 'right', paddingTop: 10, paddingBottom: '2rem', fontSize: 11.69, display: 'flex',justifyContent: 'flex-end', alignItems:'center' }} >
                                    <LinkOutlined style={{ color: '#EFF3F8', paddingRight: 5 }} />
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
