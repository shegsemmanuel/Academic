"use client"
import { Listbox } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from "react";

type Coursetype = {
    name: string;
};

const course: Coursetype[] = [
    {name: 'UX & Design'},
    {name: 'Front End Development'},
    {name: 'Back End Development'},
    {name: 'Ethical Hacking'},
]

const Dropdownone = () => {
    // const [selected, setSelected] = useState(course[0]);

    const [selected, setSelected] = useState(options[0]);

    const options = [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
        { id: 3, name: "Option 3" },
    ];

  return (
    <div className="w-full">
      <Listbox>
        <h3 className="text-lg text-lightgrey">What do you want to learn?</h3>

            {/* Toggle dropdown */}
        <div className="relative mt-1">
              {/* <Listbox.Options>
                <span className="block truncate text-xl font-semibold">
                    {selected.name}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </span>
            </Listbox.Options> */}

          {/* <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                  <Listbox.Button className="block truncate text-xl font-semibold">
                      {selected.name}
                  </Listbox.Button>
                  <Listbox.Options>
                      {options.map((option, idx) => (
                          <Listbox.Option
                              key={idx}
                              value={option}
                              className={({ active }) =>
                                  `relative cursor-pointer select-none ${
                                      active ? "bg-blue-500 text-white" : "text-gray-900"
                                  }`
                              }
                          >
                              {option.name}
                          </Listbox.Option>
                      ))}
                  </Listbox.Options>
              </div>
          </Listbox> */}

            <div className="relative mt-1">
                <Listbox.Button className="block truncate text-xl font-semibold">
                    {selected.name}
                </Listbox.Button>
                <Listbox.Options>
                    {options.map((option) => (
                        <Listbox.Option
                            key={option.id}
                            value={option}
                            className={({ active }) =>
                                `relative cursor-pointer select-none ${
                                    active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                }`
                            }
                        >
                            {option.name}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
                <span className="pointer-events-none absolute inset-y-0 right-0">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </span>
            </div>

        </div>



      </Listbox>
    </div>
  );
};

export default Dropdownone;
