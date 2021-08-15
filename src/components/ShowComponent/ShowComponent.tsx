import React from 'react'

interface IShowComponentProps {
  show: boolean
  children: React.ReactNode
}

function ShowComponent(props: IShowComponentProps) {
  return (
    <React.Fragment>
      {props.show && props.children}
    </React.Fragment>
  )
}

export default ShowComponent