import React from 'react';

import { ScaleIcon } from '@heroicons/react/24/solid';

function ResponsibleBadge() {
  const [isTooltipShown, setIsTooltipShown] = React.useState(false);
  return (
    <div
      onClick={() => setIsTooltipShown(true)}
      onMouseOver={() => setIsTooltipShown(true)}
      onMouseOut={() => setIsTooltipShown(false)}
    >
      <div className="cursor-pointer">
        <ScaleIcon className="h-6 rounded-full bg-zinc-700 p-1 text-[#EC6EAD]" />
      </div>
      <div
        className={`${
          isTooltipShown ? '' : 'hidden'
        } absolute -mt-10 ml-8 w-80 rounded bg-zinc-100 pl-4 shadow-lg transition dark:bg-zinc-700`}
      >
        <p className="text-xs dark:text-zinc-50">
          This roastery have a strong focus on sustainable coffee sourcing and ethical trade models.
        </p>
      </div>
    </div>
  );
}

const coffee = [
  {
    roaster: 'Ønsk',
    beans: 'Café de Alturas',
    price: 300,
    rating: 5,
    responsible: true,
    link: 'https://onsk.dk/vare/cafe-de-alturas-moerkristet-kaffe/',
    triedAt: '01/2022',
  },
  {
    roaster: 'Name',
    beans: 'Beans',
    price: 300,
    rating: 1,
    responsible: false,
    link: '',
    triedAt: '03/2022',
  },
  {
    roaster: 'Impact Roasters',
    beans: '...',
    price: 300,
    rating: 5,
    responsible: true,
    link: '',
    triedAt: '12/2022',
  },
];

const CoffeeComparisonTable = () => (
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th className="hidden sm:block">Beans/Blend/?</th>
        <th className="text-right">price/kg</th>
        <th className="text-center">My rating</th>
      </tr>
    </thead>
    <tbody>
      {coffee.map((item) => (
        <tr key={item.beans}>
          <td className="p-0 align-middle">{item.responsible && <ResponsibleBadge />}</td>
          <td className="hidden sm:block">{item.roaster}</td>
          <td>
            <span className="sm:hidden">{item.roaster} - </span>
            <a href={item.link}>{item.beans}</a>
          </td>
          <td className="text-right">{item.price}</td>
          <td className="text-center">{item.rating}&nbsp;/&nbsp;5</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CoffeeComparisonTable;
