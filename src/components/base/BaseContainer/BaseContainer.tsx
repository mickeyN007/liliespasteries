import * as React from 'react'
import cn from 'classnames'

type BaseContainerProps = {
  children: React.ReactNode
  className?: string
}

const BaseContainer = ({ className, children }: BaseContainerProps) => {
  const id = React.useId()
  return (
    <div key={id} id={id} className={cn('w-full', className)}>
      {children}
    </div>
  )
}

export default BaseContainer