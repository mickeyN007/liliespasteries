import * as React from 'react'
import classNames from 'classnames'
import ContentLoader from 'react-content-loader'

export interface LoaderProps {
  className?: string
  backgroundColor?: string
  foregroundColor?: string
  speed?: number
}

const Loader = ({
  className,
  backgroundColor = '#f5f6f7',
  foregroundColor = 'rgba(214,214,214,0.5)',
  speed = 2,
}: LoaderProps) => {
  return (
    <div className={classNames('relative overflow-hidden', className)}>
      <ContentLoader
        className='absolute top-0 left-0 h-full w-full'
        preserveAspectRatio='none'
        speed={speed}
        viewBox='0 0 100 100'
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
      >
        <rect width='100%' height='100%' />
      </ContentLoader>
    </div>
  )
}

export default Loader
