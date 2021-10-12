import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

const Navbar = () => (
  <section>
    <div>
      <Link to="./">
        <AiOutlineArrowLeft />
      </Link>
      <h1>2021</h1>
    </div>
    <div>
      <h2>World Covid-19 Stats</h2>
    </div>
    <div>
      <FaMicrophone />
      <MdSettings />
    </div>
  </section>
);

export default Navbar;
