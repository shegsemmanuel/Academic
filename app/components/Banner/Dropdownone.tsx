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
    const [selected, setSelected] = useState(course[0])

  return (
    <div className="w-full">
      <Listbox>
        <h3 className="text-lg text-lightgrey">What do you want to learn?</h3>

            {/* Toggle dropdown */}
        <div className="relative mt-1">
            <Listbox.Button>
                <span
                 className="block truncate text-xl font-semibold"
                >
                    {selected.name}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0">
                    <ChevronDownIcon 
                      className="h-5 w-5 text-gray-400"  
                    />
                </span>
            </Listbox.Button>
        </div>
      </Listbox>
    </div>
  );
};

export default Dropdownone;
