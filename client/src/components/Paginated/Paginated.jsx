import React from "react";
import "./Paginated.css"

export default function Paginado({ productsPerPage, allProducts, paginado, changePage, currentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allProducts / productsPerPage); i++) {
        pageNumbers.push(i)
        
    };
    function handlePrevious(){
        if(currentPage>1){
            changePage(currentPage-1)
        }
    }
    function handleNext(){
        if(currentPage<pageNumbers.length){
            changePage(currentPage+1)
        }
    }

    return (
        <nav className="paginated">
            <ul>
                { currentPage>1 && (
                    <button className="btn" onClick={(e)=>handlePrevious(e)}>🢀</button>
                )
                }
                {pageNumbers.map((number) => (
                    <li className="nro" key={number} >
                        <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
                { currentPage<pageNumbers.length && (
                    <button className="btn" onClick={(e)=>handleNext(e)}>🢂</button>
                )
                }
            </ul>
        </nav>
    );
}