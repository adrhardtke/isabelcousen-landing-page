import { Stars } from '@/components/stars/Stars'
import React from 'react'
import { AvailableItem } from '../Avaliacoes'

export const Cards = ({availables}: {availables: AvailableItem[]}) => {
  return (
    <div className="container flex-grow w-full mx-auto px-0">
      <div className="mx-auto w-full md:w-4/5">
        <div className="container my-4">
          <div
            id="scrollContainer"
            className="flex flex-no-wrap overflow-x-scroll scrolling-touch  mb-8"
          >
            {
                availables.map(available => (
                    <div
                        key={available.user}
                        className="bg-light-grey rounded-md mr-2 grow"
                    >
                        <div className="px-4 py-2 h-full">
                          <div className="text-sm  flex flex-col justify-between h-full">
                            <div>
                              <p className="mb-2 w-[230px]">
                                  {available.text}
                              </p>
                              <Stars size={available.rating} />
                            </div>
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
