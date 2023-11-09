import React from 'react'

export const BackgroundSvg1 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="169" height="169" viewBox="0 0 169 169" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.745373 125.773C0.0749578 95.7721 7.67299 63.1452 23.0925 29.7362C38.5121 -3.61692 58.01 -8.53329 80.413 15.2664C102.816 39.0662 127.286 61.8603 152.427 82.308C177.511 102.756 172.819 121.974 138.627 138.846C104.38 155.718 72.3122 165.607 44.2665 167.842C16.1649 170.076 1.41579 155.774 0.745373 125.773Z" fill="#B451CD"/>
    </svg>
  )
}

export const BackgroundSvg2 = () => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="169" height="168" 
            viewBox="0 0 169 168" 
            fill="none" 
        >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3515 157.021C22.5173 135.12 -1.78524 108.416 0.840555 78.4703C3.52222 48.5251 17.992 28.4685 43.4678 19.5297C68.8877 10.5349 94.6428 4.22187 119.113 0.925658C143.639 -2.37055 159.17 6.34485 164.869 26.6249C170.567 46.905 169.115 79.9229 160.679 123.779C152.243 167.58 122.186 178.921 72.3515 157.021Z" fill="#CE57EC"/>
        </svg>
    )
  }

  export const Photo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={156}
            height={158}
            fill="none"
        >
            <path
            fill="url(#a)"
            fillRule="evenodd"
            d="M84.324 155.608C34.69 147.99 6.659 129.996 1.849 102.684c-4.76-27.324 3.344-48.652 23.91-62.7C46.26 25.9 67.701 14.125 88.718 5.346c21.067-8.793 36.987-4.735 46.906 11.976 9.92 16.711 16.51 46.48 19.465 87.575 2.941 41.046-21.133 58.328-70.766 50.711Z"
            clipRule="evenodd"
            />
            <defs>
            <pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use xlinkHref="#b" transform="matrix(.005 0 0 .005 0 -.125)" />
            </pattern>
            <image id="b" width={200} height={250} href='/isabelcousen_foto.jpg'/>
            </defs>
      </svg>
    )
  }


export const Picture = () => {
  return (
    <div className='relative my-4 block h-44'>
        <div className='flex justify-center group' >
            <div className='absolute group-hover:origin-center group-hover:rotate-3 duration-300'>
                <BackgroundSvg1 />
            </div>
            <div className='absolute group-hover:origin-center group-hover:rotate-6 duration-500'>
                <BackgroundSvg2 />
            </div>
            <div className='absolute group-hover:origin-center group-hover:rotate-12 duration-500'>
                <Photo />
            </div>
        </div>
    </div>
  )
}
