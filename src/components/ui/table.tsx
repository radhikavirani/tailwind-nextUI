"use client";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { Button, Tooltip } from '@nextui-org/react';
import { GoTrash } from 'react-icons/go';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const CommonTable = ({ tableData, tableTitle, showIcon, showTrashIcon }: { tableData: any, tableTitle: any; showIcon: boolean; showTrashIcon?: boolean; }) => {
    return (
        <div className='overflow-x-auto'>
            <table className="w-full">
                <thead className="h-16">
                    <tr>
                        {tableTitle.map((data: any, index: any) =>
                            <td key={index} className="text-center text-sm text-[#4A4E57] TableTitle bg-white">{data.title}</td>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data: any, index: any) =>
                        <tr key={index} className='odd:bg-[#F9FBFC] even:bg-white h-20'>
                            <td className="text-center text-[#8894AA] lg:min-w-auto min-w-20">{data.no}</td>
                            <td className='min-w-[200px]'>{data.title}</td>
                            <td className="text-center text-[#8894AA] lg:min-w-auto min-w-[100px]">{data.genre}</td>
                            <td className="text-center text-[#8894AA] lg:min-w-auto min-w-[100px]">{data.lable}</td>
                            <td className="text-center text-[#8894AA] lg:min-w-auto min-w-[100px]">{data.upc}</td>
                            <td className="text-center text-[#8894AA] lg:min-w-auto min-w-[100px]">{data.tracks}</td>
                            <td className="text-center text-[#8894AA] lg:min-w-auto min-w-[160px]">{data.album}</td>
                            <td className="text-center text-[#8894AA] lg:min-w-auto min-w-[160px]">{data.date}</td>
                            <td className='min-w-20'>
                                {showIcon && <Dropdown className='min-w-fit'>
                                    <DropdownTrigger>
                                        <Button variant="light" className='min-w-10' >
                                            <HiOutlineDotsHorizontal size={24} color='#8894AA' />
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu>
                                        <DropdownItem key="new">Change Cover</DropdownItem>
                                        <DropdownItem key="copy">Rename Album</DropdownItem>
                                        <DropdownItem key="delete" className="text-danger" color="danger">
                                            Delete
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>}
                                {showTrashIcon &&
                                    <Tooltip color='danger' placement='bottom' offset={0} showArrow={true} content="Delete">
                                        <Button variant="light" className='min-w-10' >
                                            <GoTrash size={20} color='red' />
                                        </Button>
                                    </Tooltip>
                                }
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CommonTable;
