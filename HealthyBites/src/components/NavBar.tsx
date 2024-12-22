"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {/* Home */}
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        {/* Menu */}
        <MenuItem setActive={setActive} active={active} item="Menu">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/menu/veg">Veg</HoveredLink>
            {/* <HoveredLink href="/menu/non-veg">Non-Veg</HoveredLink> */}
          </div>
        </MenuItem>

        {/* Services */}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services/sponsor">Sponsor</HoveredLink>
            <HoveredLink href="/services/food">Food</HoveredLink>
            <HoveredLink href="/services/water">Water</HoveredLink>
          </div>
        </MenuItem>

        {/* Contact Us */}
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>

        {/* Team */}
        <MenuItem setActive={setActive} active={active} item="Team">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/team/iit-1">IIT 1</HoveredLink>
            <HoveredLink href="/team/iit-2">IIT 2</HoveredLink>
            <HoveredLink href="/team/interns">Interns</HoveredLink>
          </div>
        </MenuItem>

        {/* SignUp */}
        <Link className="text-colo" href={"/login"}>
          <MenuItem setActive={setActive} active={active} item="Login" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;