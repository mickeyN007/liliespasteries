import cn from "classnames";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { Footer } from "../../components/Footer";

import cakeHero from '../../assets/banners/cakeHero.png'
import chinChinHero from '../../assets/banners/chinChinHero.png'
import cupcakesHero from '../../assets/banners/cupcakesHero.png'
import sconesHero from '../../assets/banners/sconesHero.png'
import { DisplayProducts, Dropdown } from "../../components";
import { ProductSearchParams, ProductType } from "../../../global";

import Chinchin from '../../assets/products/chinchin.png'
import Teatime from '../../assets/products/teatime.png'
import Richfruit from '../../assets/products/richfruit.png'
import Buttercake from '../../assets/products/buttercake.png'


interface DisplayProductsNavProps {
  products: string[];
}

const Products = () => {
  let { param } = useParams();

  const newUrl = param ?? 'cakes'
  const [view, setView] = useState(newUrl)
  const [isValidLink, setIsValidLink] = useState(true)
  const [eventSelectedOption, setEventSelectedOption] = useState<string | null>(null);
  const [sortSelectedOption, setSortSelectedOption] = useState<string | null>(null);
  

  const validateLink = (param: string | undefined, validArr?: Array<string>)=> {
    // Check if the name is present in a list of valid names
    //const validNames = ['ifunnaya', 'story2', 'story3'];
    if (param===undefined) return true
    return (param === 'cakes' ||  param === 'chinchin' ||  param === 'cupcakes' ||  param === 'scones' )
  }
  
  useEffect(() => {
    setIsValidLink(validateLink(param))
  }, [])

  
  if (!isValidLink) {
    // Redirect to the 404 page if the name is not valid
    return <Navigate to="/404" />;
  }

  const handleFindEventSelect = (option: string) => {
    setEventSelectedOption(option);
    setState({ ...state, searchTerm: option })
  };

  const products = ['Cakes', 'ChinChin', 'Cupcakes', 'Scones']
  const leftProducts = products.slice(0,2)
  const rightProducts = products.slice(2,4)

  const heroDivContainer = `w-full h-[63vh] bg-cover flex justify-between items-center`
  const heroDivLeftContainer = `w-[90%] lg:w-[39%] xl:w-[50%] 2xl:w-[45%] h-[80%] lg:h-[80%] xl:h-[10%] 2xl:h-[80%] flex flex-col items-center justify-between`

  const CakeDiv = () => {
    return (
      <div
        className={`${heroDivContainer}`}
      >
        <div
          className={`${heroDivLeftContainer}`}
        >
          <p className='font-bold text-[40px] text-center'>
            CAKES
          </p>
          <div className='text-[22px] w-[90%] xl:w-[77%] 2xl:w-[58%] text-center'>
            <p className=''>
              Our cakes have been spreading the good taste for more than three decades. We are equipped to cater to every occasion: Birthdays, Anniversaries, Weddings, Graduations, and much more!
              <br /> All of our cakes are personalized to your best flavors and with  your preferred message and toppers. 
            </p>
          </div>
          <div className='text-[22px] w-[90%] xl:w-[77%] 2xl:w-[58%] text-center'>
            <p className=''>
              Order now, and we’ll get to baking!
            </p>
          </div>
        </div>
        <img
          src={cakeHero}
          className='w-[60%]  justify-end'
        />
      </div>
    )
  }
  const ChinChinDiv = () => {
    return (
      <div
        className={`${heroDivContainer}`}
      >
        <div
          className={`${heroDivLeftContainer}`}
        >
          <p className='font-bold text-[40px] text-center'>
            SNACK SEASON!
          </p>
          <div className='text-[22px] w-[90%] xl:w-[77%] 2xl:w-[58%] text-center'>
            <p className=''>
              Our chinchin sticks to tradition: We use an authentic Grandma’s recipe that will leave you reaching for more.
            </p>
          </div>
          <div className='text-[22px] w-[90%] xl:w-[77%] 2xl:w-[58%] text-center'>
            <p className=''>
              We offer this classic snack in a variety of sizes - big enough to feed your guests, and smaller options to grab as a quick snack on the go.
            </p>
          </div>
          <div className='text-[22px] w-[90%] xl:w-[77%] 2xl:w-[58%] text-center'>
            <p className=''>
              Place your order NOW.
            </p>
          </div>
        </div>
        <img
          src={chinChinHero}
          className='w-[60%]  justify-end'
        />
      </div>
    )
  }
  const SconesDiv = () => {
    return (
      <div
        className={`${heroDivContainer}`}
      >
        <div
          className={`${heroDivLeftContainer} lg:h-[60%] xl:h-[10%] 2xl:h-[60%]`}
        >
          <p className='font-bold text-[40px] text-center'>
            SCONES
          </p>
          <div className='text-[22px] w-[90%] xl:w-[77%] 2xl:w-[58%] text-center'>
            <p className=''>
              Our iconic scones deliver a blend of sweet, soft biscuits for your enjoyment! We make them from scratch just for you, once you order.
            </p>
          </div>
          <div className='text-[22px] w-[90%] xl:w-[77%] 2xl:w-[58%] text-center'>
            <p className=''>
              Select the size that best suits your need, and confirm that order.
            </p>
          </div>
        </div>
        <img
          src={sconesHero}
          className='w-[60%]  justify-end'
        />
      </div>
    )
  }
  const CupcakesDiv = () => {
    return (
      <div
        className={`${heroDivContainer}`}
      >
        <div
          className={`${heroDivLeftContainer} lg:h-[45%] xl:h-[10%] 2xl:h-[45%]`}
        >
          <p className='font-bold text-[40px] text-center'>
            CUPCAKES 
          </p>
          <div className='text-[22px] w-[90%] xl:w-[77%] 2xl:w-[58%] text-center'>
            <p className=''>
              We handcraft each cupcake with unique toppings just for you.
            </p>
          </div>
          <div className='text-[22px] w-[90%] xl:w-[77%] 2xl:w-[58%] text-center'>
            <p className=''>
              Select your best topping and leave the baking to perfection to us!
            </p>
          </div>
        </div>
        <img
          src={cupcakesHero}
          className='w-[60%]  justify-end'
        />
      </div>
    )
  }
  const productHeros = {
    cakes: <CakeDiv />,
    chinchin: <ChinChinDiv />,
    scones: <SconesDiv />,
    cupcakes: <CupcakesDiv />
  }

  const DisplayProductsNav: React.FC<DisplayProductsNavProps> = ({products}) => {
    return (
      <div className="flex flex-row gap-24">
        {
          products.map((name, i) => {
            return (
              <Link
                key={name}
                to={`/products/${name.toLowerCase()}`}
                className={cn(`
                  ${newUrl === name.toLowerCase() ? 'text-activeLink':''}
                  font-bold text-[24px]
                `)}
              >
                {name}
              </Link>
            )
          })
        }
      </div>
    )
  }

  const allCakes: ProductType[] = [
    {
      name: "Triple-tiered Buttercream Cake",
      productImg: Teatime,
      to: '/products/cakes',
      price: '3,500',
      type: 'teatime'
    },
    {
      name: "Butter Birthday Cake",
      productImg: Buttercake,
      to: '/products/chinchin',
      price: '25,500',
      type: 'buttercake'
    },
    {
      name: "Carrot Cake-8’’",
      productImg: Richfruit,
      to: '/products/cupcakes',
      price: '40,500',
      type: 'richfruit'
    },
    {
      name: "Cheesecake",
      productImg: Chinchin,
      to: '/products/scones',
      price: '10,500'
    },
    {
      name: "Coconut Cake",
      productImg: Teatime,
      to: '/products/cakes',
      price: '3,500',
      type: 'teatime'
    },
    {
      name: "Red velvet Birthday Cake",
      productImg: Buttercake,
      to: '/products/chinchin',
      price: '25,500',
      type: 'butter'
    },
    {
      name: "Rich Fruit Cake-8’’",
      productImg: Richfruit,
      to: '/products/cupcakes',
      price: '40,500',
      type: 'richfruit'
    },
    {
      name: "Chinchin - 400 GMS.",
      productImg: Chinchin,
      to: '/products/scones',
      price: '10,500'
    }
  ]

  const allProducts = {
    cakes: allCakes,
    chinchin: [
    ],
    cupcakes: [
    ],
    scones: []
  }

  const eventOptions = {
    cakes: [
      'Birthday',
      'Triple-tiered Buttercream',
    ],
    chinchin: [
    ],
    cupcakes: [
    ],
    scones: []
  }

  const displayProducts = allProducts[newUrl.toLowerCase()]
  console.log(displayProducts, 'psss')

  let sortOptions = ['Name: A-Z', 'Name: Z-A', 'Price: A-Z', 'Price: Z-A']
  const [state, setState] = useState<ProductSearchParams>({
    searchTerm: '',
    sortBy: 'name', // Default sort by name
    sortOrder: 1, // Default sort in ascending order
  });
  

  const setSortValue = (value: string | null) => {
    if (value) {
      let vals = value.split(': ')
      console.log(vals)
      let sortBy = vals[0].toLowerCase()
      let sortOrder = (vals[1]==='A-Z') ? 1 : -1
      setState({ ...state, sortBy: sortBy as keyof ProductType, sortOrder })
      if (value === '') 
        setSortSelectedOption(`Sort By`)
      else {
        let capitalizedWord = sortBy.charAt(0).toUpperCase() + sortBy.slice(1)
        setSortSelectedOption(`${capitalizedWord}: ${vals[1]}`)
      }
    }
  }

  // Filtered and sorted data
  // .filter((item: { [s: string]: unknown; } | ArrayLike<unknown>) =>
  console.log(displayProducts, 'psss aaaa')

  let filteredAndSortedData = displayProducts
    .filter((item) =>
      Object.values(item)
        .some(
          (value) =>
            typeof value === 'string' &&
            value.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    )
    // sort
    //.sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => {
    .sort((a, b) => {
    const sortOrder = state.sortOrder;
    return sortOrder * (a[state.sortBy] as any).toString().localeCompare((b[state.sortBy] as any).toString());
  });

  console.log(filteredAndSortedData, 'psss zzzz')
  
  useEffect(() => {
    //
  }, [filteredAndSortedData])
  return (
    <div className=''>
      <div className="flex justify-between w-[70%] mx-auto 2xl:pb-5">
        <DisplayProductsNav products={leftProducts} />
        <DisplayProductsNav products={rightProducts} />
      </div>
      <div className="w-[90%] mx-auto">
        {
          productHeros[newUrl.toLowerCase()]
        }
        <div
          className={cn(`
            flex w-full my-5 2xl:my-10
            ${ newUrl.toLowerCase() === 'cakes' ? 'justify-between' : 'justify-end'}
          `)}
        >
          {
            newUrl.toLowerCase() === 'cakes' &&
            <Dropdown 
              selectedOption={eventSelectedOption}
              onOptionSelect={handleFindEventSelect}
              containerStyle='w-auto'
              buttonStyle='bg-[#F5F5F5]'
              defaultLabel="Find Event"
              dropdownStyle="bg-[#F5F5F5]"
              selectedTextStyle="text-[#0E538C] text-[16px]"
              options={eventOptions[newUrl.toLowerCase()]}
            />
          }
          <Dropdown 
            selectedOption={sortSelectedOption}
            onOptionSelect={setSortValue}
            containerStyle='w-auto'
            buttonStyle='bg-[#F5F5F5]'
            defaultLabel="Sort By"
            dropdownStyle="bg-[#F5F5F5]"
            selectedTextStyle="text-[#0E538C] text-[16px]"
            options={sortOptions}
            //options={eventOptions[newUrl.toLowerCase()]}
          />
        </div>
        {
          console.log(filteredAndSortedData, 'yyyyyy')
        }
        <div className="my-20">
          <DisplayProducts products={filteredAndSortedData} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products;