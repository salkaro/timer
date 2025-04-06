import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='relative min-h-screen flex flex-col p-4 justify-center items-center overflow-x-hidden bg-white mx-0 md:mx-48 2xl:mx-96'>
            {children}
        </div>
    )
}

export default Layout
