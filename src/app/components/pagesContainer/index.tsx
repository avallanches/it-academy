import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export const PagesContainer = ({
  children,
  className,
}: Props) => {
  return (
    <div className={`desktop:max-w-[1440px] tablet:w-[90%] w-full mx-auto desktop:px-10 tablet:px-6 phone:px-3 py-4 ${className}`}>
      {children}
    </div>
  )
}
