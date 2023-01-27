import React, { useState } from "react";
import AddButton from "../atoms/add_button";
import TextInput from "../atoms/text_input";

export type SingleMenuType = {
  name: string;
  menu: string;
};

export const OrderInput = () => {
  const initialData = { name: "", menu: "" };
  const [menu, setMenu] = useState<SingleMenuType>(initialData);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(menu, "-- add menu");
    // call a function
    setMenu(initialData);
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    setMenu({ ...menu, [target.id]: target.value });
  };

  return (
    <>
      <form>
        <TextInput
          label="name"
          id="name"
          required={true}
          onChange={handleChange}
        />
        <TextInput
          label="menu"
          id="menu"
          required={true}
          onChange={handleChange}
        />
        <AddButton label="Add" onClick={handleAdd} />
      </form>
    </>
  );
};

// label: string;
// id?: string;
// required?: boolean;
// helper?: string;
// type?: string;
// value?: string;
// onChange?: React.ChangeEventHandler;
