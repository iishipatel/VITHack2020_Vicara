import React from 'react'
import FormSection from './FormSection'
import {Alert} from 'antd'

function Form() {
    return (
        <div style={{ backgroundColor: '#11151B', color: '#EFF3F8', justifyContent:'center',alignItems: 'center', display: 'flex', paddingTop:'3.5rem' }}  >
            <div className="row container" style={{ margin: 0 }} >
                <div className="col-lg-7">
                    <Alert
                        message="Warning"
                        description="Make sure that values provided are accurate and latest. These will highly influence final reports."
                        type="warning"
                        showIcon
                        style={{ width: '70%' }}
                    />
                </div>
                <div className="col-lg-5"><FormSection /> </div>
            </div>
        </div>
    )
}

export default Form
