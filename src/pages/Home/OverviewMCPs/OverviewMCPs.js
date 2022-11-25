import Block from "../../../components/OverviewMCP"
import { useState } from "react";
import { Link } from "react-router-dom";

import { BiChevronsRight } from "react-icons/bi";
import { BiChevronsLeft } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

import data from "./data.json"

const OverviewMCPs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const handlePage = (pageNext) => {
        setCurrentPage(pageNext);
        window.scrollTo(0, 0);
    }
    const quantity = 6;
    const maxPage = data.length / quantity
    const lastIndex = currentPage * quantity;
    const firstIndex = lastIndex - quantity;
    const currentData = data.slice(firstIndex, lastIndex);
    let numberOfPage = [];

    for (var i = 0; i < maxPage; i++) {
        numberOfPage.push(i + 1);
    }

    return (
        <>
            <div class="mt-[70px] w-full">
                <img class="w-full " src="https://mehedi.asiandevelopers.com/westo-demo/assets/images/breadcrumb/breadcrumb-1.jpg"></img>
            </div>
            <div class="w-full mt-20">

                <div id='right ' class="w-77/100 m-auto">
                    <div class="grid grid-cols-2 gap-8 gap-y-10">
                        {currentData.map((item, index) => (

                            <Block item={item} />
                        )
                        )
                        }
                    </div>

                </div>
            </div>
            {numberOfPage.length > 1
                ? <div class="switchPage flex w-[225px] justify-between mt-[85px] m-auto mb-[100px]">
                    <button class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out" onClick={() => handlePage(currentPage - 1)} disabled={currentPage < 2 ? true : false}><BiChevronsLeft /></button>
                    {numberOfPage.map((numPage) => (
                        <>
                            {numPage !== currentPage ? <div class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out" onClick={() => handlePage(numPage)}>{numPage}</div> : <div class="flex flex-none w-[45px] h-[45px] justify-center items-center bg-gray-100 boder rounded-full cusor:default " onClick={() => handlePage(numPage)}>{numPage}</div>
                            }
                        </>
                    )
                    )}
                    <button class="flex flex-none w-[40px] h-[40px] justify-center items-center hover:bg-gray-100 hover:boder hover:rounded-full hover:cursor-pointer transition ease-in-out" onClick={() => handlePage(currentPage + 1)} disabled={currentPage >= maxPage ? true : false}><BiChevronsRight /></button>
                </div>
                : <div class="mt-[85px] mb-[115px] h-10">
                </div>
            }
            <div class="w-full h-[285px] bg-green-800 flex align-middle">
                <div class="flex  w-75/100 justify-between m-auto">
                    <div class="w-35/100 flex flex-none justify-between" >
                        <div class="flex-none flex text-center align-middle  w-[75px] h-[75px]  boder rounded-full bg-emerald-900 hover:bg-yellow-400 hover:text-white transition delay-150 " >
                            <div class="m-auto"><BsTelephone /> </div>
                        </div>
                        <div class="flex-none place-content-around  w-67/100">
                            <p class="text-lg text-amber-300 ">Have any questions ?</p>
                            <div class="h-2"></div>
                            <p class="text-3xl font-semibold text-white mb-1 hover:text-amber-300 cursor-pointer ">+1-(246) 333-0089</p>
                        </div>
                    </div>
                    <div class="flex-none w-30/100 text-lg w-1/3">
                        <p class="text-gray-300">Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit.</p>
                    </div>
                    <div class="flex-none w-15/100 ">
                        <Link to="/home/backofficer"> <button class="w-full h-5/6 bg-yellow-400 text-lg">DISCOVER MORE</button> </Link>
                    </div>
                </div>
            </div>
        </>
    );

}

export default OverviewMCPs;