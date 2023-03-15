import React from 'react';

type City = {
  name: string;
  anchor: string;
  isActive: boolean;
};

const cities: City[] = [
  {
    name: 'Paris',
    anchor: '#paris',
    isActive: false,
  },
  {
    name: 'Cologne',
    anchor: '#cologne',
    isActive: false,
  },
  {
    name: 'Brussels',
    anchor: '#brussels',
    isActive: false,
  },
  {
    name: 'Amsterdam',
    anchor: '#amsterdam',
    isActive: true,
  },
  {
    name: 'Hamburg',
    anchor: '#hamburg',
    isActive: false,
  },
  {
    name: 'Dusseldorf',
    anchor: '#dusseldorf',
    isActive: false,
  },
];

function MainNav(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          { cities.map((city: City): JSX.Element => (
            <li className="locations__item" key={ city.name }>
              <a className={`locations__item-link tabs__item${ city.isActive ? ' tabs__item--active' : ''}`} href="#">
                <span>{ city.name }</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MainNav;
