import cn from 'classnames'
import { Link } from 'react-router-dom';

import Button from '../../assets/button.svg?react'

interface CTAButtonProps {
  setModal?: (value: boolean) => void;
  text?: string;
  textColor?: string;
  color?: string;
  height?: string;
  width?: string;
  link?: string;
  closeMainAlert?: boolean;
}

const CTAButton: React.FC<CTAButtonProps>  = ({
  color, height, text='LEARN TODAY!', width, textColor, link
}) => {
  return (
    <Link
      to={link ? link:''}
      className={cn(`
        ${height ? height : 'h-[50px] md:h-[43px]'}
        ${width ? width : 'w-[200px] md:w-[200px]'}
        relative
      `)}
    >
      <Button
        className={cn(`
          ${height ? height : 'h-[50px] md:h-[43px]'}
          ${color ? color : 'text-secondary'}
          object-cover absolute cursor-pointer h-full w-full
        `)}
      />
      <p
        className={`flex absolute items-center justify-center w-full h-full cursor-pointer ${textColor}`}
      >
        {text}
      </p>
    </Link>
  )
}

export default CTAButton;