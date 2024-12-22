"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MenuList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Create Story",
    path: "/create",
  },
  {
    name: "Explore Stories",
    path: "/explore",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isSignedIn } = useUser();

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
        <p className="font-bold text-2xl text-primary ml-3">Kidso Story</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {MenuList.map((item, index) => (
          <NavbarItem
            className="text-xl text-primary font-medium hover:underline"
            key={index}
          >
            <Link aria-current="page" href={item.path}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Link href={"/dashboard"}>
          <Button color="primary">
            {isSignedIn ? "Dashboard" : "Get Started"}
          </Button>
        </Link>
        <UserButton />
      </NavbarContent>
      <NavbarMenu>
        {MenuList.map((item, index) => (
          <NavbarMenuItem className="text-xl text-primary font-medium hover:underline ml-2">
            <Link aria-current="page" href={item.path}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
