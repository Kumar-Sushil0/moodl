import { Fugaz_One } from 'next/font/google';
import React from 'react';

const fugaz = Fugaz_One({ subsets: ["latin"],weight:["400"] });

function Button(props) {
    const {text,dark,full,clickHandler}=props;
  return (
    <button
    onClick={clickHandler}
  className={
    'border-solid border-2 overflow-hidden rounded-full border-indigo-600 duration-200 hover:opacity-60 ' + 
    (dark ? 'text-white bg-indigo-600 ' : 'text-indigo-600') +(full?'grid place-items-center w-full ':'')
  }
>
  <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + fugaz.className}>
    {text}
  </p>
</button>

  );
}

export default Button;