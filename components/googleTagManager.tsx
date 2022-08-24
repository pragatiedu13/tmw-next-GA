import React, {useState} from 'react'
import useGoogleAnalyticsState from '../hooks/useGoogleAnalyticsState'

function StatusCheck(){

    const [GoogleAnalyticSetUp] = useGoogleAnalyticsState()
    return (
        <div>
               {...GoogleAnalyticSetUp as Object}             
        </div>
    )
 }
 export default StatusCheck