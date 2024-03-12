import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <NavLink to="/" className="font-bold text-inherit">
          blog-app
        </NavLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink to="/">Home</NavLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NavLink to="/blog" aria-current="page">
            Blogs
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/search" color="foreground" href="#" className="text-center">
            <CiSearch />
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">
            <NavbarItem className="hidden lg:flex">
              <CgProfile size={30} />
            </NavbarItem>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
