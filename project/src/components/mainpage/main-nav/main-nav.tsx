import React from 'react';
// import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

type City = {
  name: string;
  anchor: string;
  isActive: boolean;
};

type NavProps = {
  cities: City[];
  onClickHandler: (name: string) => void;
};

function MainNav({cities, onClickHandler}: NavProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          { cities.map((city: City): JSX.Element => (
            <li className="locations__item" key={ city.name }>
              <Link
                to={city.anchor}
                className={`locations__item-link tabs__item${ city.isActive ? ' tabs__item--active' : ''}`}
                onClick={
                  () => onClickHandler(city.name)
                }
              >
                <span>{ city.name }</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MainNav;
