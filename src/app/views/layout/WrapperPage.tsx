import React, { FC } from 'react'

interface WrapperPageProps {
    children: React.ReactNode;
}

const WrapperPage: FC<WrapperPageProps> = ({ children }) => {
    return (
        <div className="lay-sidebar">
            {children}
        </div>
    )
}

export default WrapperPage;