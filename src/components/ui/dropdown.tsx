import React from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IoLanguageOutline } from "react-icons/io5";

const Selected = () => {
    return (
        <Dropdown className='min-w-fit'>
            <DropdownTrigger>
                <Button variant="solid" className='min-w-10'>
                    <IoLanguageOutline size={20} />En
                </Button>
            </DropdownTrigger>
            <DropdownMenu>
                <DropdownItem key="new">Lg</DropdownItem>
                <DropdownItem key="copy">Lg</DropdownItem>
                <DropdownItem key="cut">Lg</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
export default Selected;
