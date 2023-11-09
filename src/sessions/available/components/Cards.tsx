import { Stars } from '@/components/stars/Stars'
import React from 'react'
import { AvailableItem } from '../Available'

export const Cards = ({availables}: {availables: AvailableItem[]}) => {
  return (
    <div className="container flex-grow w-full mx-auto px-0">
      <div className="mx-auto w-full md:w-4/5">
        <div className="container my-4">
          <div
            id="scrollContainer"
            className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
          >
            {
                availables.map(available => (
                    <div
                        key={available.user}
                        className="flex-none w-5/6 md:w-1/3 bg-[#F1F1F1] rounded-md mr-2"
                    >
                        <div className="px-4 py-2">
                        <div className="text-sm">
                            <p className="mb-2">
                                {available.text}
                            </p>
                            <Stars size={available.rating} />
                            <h5 className="font-medium text-sm mt-1">
                                {available.user}
                            </h5>
                        </div>
                        </div>
                    </div>
                ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}
