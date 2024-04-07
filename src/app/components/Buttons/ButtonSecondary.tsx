import React, { FC } from 'react'

interface ButtonSecondaryProps {
    text : string
}

const ButtonSecondary: FC<ButtonSecondaryProps> = ({ text }) => {
  return (
    <div>
     <button className="--btn --secondary">{text}</button>
    </div>
  )
}

export default ButtonSecondary;