import { Input } from "@nextui-org/react";
import React from "react";

export const SearchPage = () => {
  return (
    <div className="border-2 border-yellow-900">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="email" label="Email" />
        <Input type="email" label="Email" placeholder="Enter your email" />
      </div>
    </div>
  );
};
