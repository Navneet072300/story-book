"use client";

import Image from "next/image";
import { useState } from "react";
import { isOptions } from "./StoryType";

const OptionList = [
  {
    label: "0-2 Years",
    imageUrl: "/02Years.png",
    isFree: true,
  },
  {
    label: "3-5 Years",
    imageUrl: "/35Years.png",
    isFree: true,
  },
  {
    label: "5-8 Years",
    imageUrl: "/58Years.png",
    isFree: true,
  },
];

const AgeGroup = ({ userSelection }: any) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const onUserSelect = (item: isOptions) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item?.label,
      fieldName: "ageGroup",
    });
  };

  return (
    <div>
      <label className="text-4xl font-bold text-primary">3. Age Group</label>
      <div className="grid grid-cols-3 gap-5 mt-3 ">
        {OptionList.map((item, index) => (
          <div
            key={index}
            className={`relative grayscale hover:grayscale-0 cursor-pointer p-1 ${
              selectedOption == item.label
                ? "grayscale-0 border-3 border-primary rounded-3xl"
                : "grayscale"
            }`}
            onClick={() => onUserSelect(item)}
          >
            <h2 className="absolute bottom-5 text-2xl font-bold text-white text-center w-full">
              {item.label}
            </h2>
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={300}
              height={500}
              className="object-cover h-[260px] rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeGroup;