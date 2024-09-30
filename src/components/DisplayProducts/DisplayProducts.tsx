import { Link } from "react-router-dom"
import cn from 'classnames'

import {
  ProductType
} from "../../../global"

interface DisplayProductsProps {
  products: ProductType[];
}

const DisplayProducts: React.FC<DisplayProductsProps>  = ({
  products
}) => {
  return (
    <div className="se:w-[90%] w-[45%] md:w-[63%] lg:w-[100%]">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-7 mx-auto">
        {
          products.map((product, i) => {
            console.log('dip', i)
            const { name, productImg, to } = product
            return (
              <Link
                key={name}
                to={to}
                className={cn(
                  'w-[249px] flex flex-col gap-5 items-center transition-colors duration-200 ease-in-out ', {
                  //'text-white': pathname === path || (path.length > 1 && pathname.includes(path)),
                })}
              >
                <img
                  src={productImg}
                  className='w-full h-full'
                />
                <div className='font-semibold'>
                  <p>{name} {i}</p>
                  {
                    product?.price &&
                    <p>N{product.price}</p>
                  }
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default DisplayProducts;