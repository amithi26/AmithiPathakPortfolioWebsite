import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../style';
import {navLinks} from '../constants';
import {logo, menu, close} from "../assets";
/*
GEN. SYNTAX NOTES:
- JSX allows for writing HTML-like code in JavaScript
- <div> is a general container element
- <Link> handles internal navigation without a full page refresh
- <a> tag for external or internal links, where href defines the URL or sectionID the link points to
- className used in React to apply CSS classes (class keyword reserved for JS)
- tailwind css uses template literals `...` to dynamically switch styles
- onClick event handling
- sm: hidden hides mobile menu on larger screens, where sm means small breakpoint in Tailwind
- hidden sm: flex shows desktop menu only on larger screens
- className={`${toggle ? 'flex' : 'hidden'}`}; Uses a ternary operator to switch between classes based on the 
toggle state. If toggle is true, the menu is shown (flex). If false, it’s hidden (hidden).
- JavaScript in JSX: Wrapped in {} for dynamic values ({toggle}, {link.title}).
- Map Function: navLinks.map dynamically generates menu items.
- key={link.id}: Ensures unique keys for React’s rendering optimization.

TAILWIND NOTES:
- w-full: Set width to 100% of the parent container.
- h-9: Set height to 2.25rem (based on Tailwind's spacing scale).
- max-w-7xl: Limits the maximum width of the content to a predefined value (7xl).
- py-5: Add vertical padding (py) of 5 units (1.25rem).
- fixed: Fixes the navigation bar at the top of the viewport.
- top-0: Positions the navbar at the very top of the viewport.
- z-20: Sets the stacking order (z-index) so the navbar stays on top of other elements.

- Flexbox is used for layout alignment and spacing.
    -flex: Activates Flexbox on the container.
    -items-center: Aligns items vertically in the center of the flex container.
    -justify-between: Spaces out items evenly, with the first item pushed to the start and the last item pushed to the end.
    -gap-10: Adds spacing (gap) of 10 units between child elements.
    -flex-col: Changes the flex direction to column (used in the mobile dropdown menu).
    -sm:flex: Applies flex only for small screens and up.
    -sm:hidden: Hides the element on small screens and up.

- hidden: Hides the element entirely.
- hover:text-white: Changes text color to white on hover.
- bg-primary: Applies a predefined background color (primary).
- black-gradient: Applies a custom gradient background (defined in your Tailwind configuration).
- rounded-xl: Adds extra-large rounded corners to the element.
- p-6: Adds padding of 6 units (1.5rem)
*/

const Navbar = () => {
  //use states track the currently active navigation link
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false); //whether the mobile menu is open/closed

  return (
    <nav className= {`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 bg-primary`}>
      <div className = "w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" 
        className = "flex items-center gap-2" 
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer">Amithi Pathak</p>
        </Link>
        <ul className= "list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary" //switching between text types/colors based on active state
              } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items.center">
          <img 
          src={toggle ? close : menu} 
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer" 
          onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0
          mx-4 my-2 min-w-[140px] z-10 rounded-xl`}> 
            <ul className= "list-none flex justify-end items-start flex-col gap-4 ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] 
                    hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar