import './Alert.css'
import ShowComponent from '../ShowComponent/ShowComponent'
import React, { Dispatch, SetStateAction, useEffect } from 'react'

interface IAlertProps {
  message: string
  showAlert: boolean
  setShowAlert: Dispatch<SetStateAction<boolean>>
}

function Alert(props: IAlertProps) {
  const { showAlert, setShowAlert} = props

  /*
   * useEffect that creates a timeout to
   * hide the error alert after 3 seconds 
   */
  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false)
      }, 3000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [showAlert, setShowAlert])
  
  return (
    <ShowComponent show={showAlert}>
      <label className="alert">{props.message}</label> 
    </ShowComponent>
  )
}

export default Alert