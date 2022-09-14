import React from "react";


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
        <nav className="page li">
            <ul>
                <button onClick={(e)=>handlePrevious(e)}>Back</button>

                {pageNumbers.map((number) => (
                    <li key={number} >
                        <a className="btn" onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
                <button onClick={(e)=>handleNext(e)}>Next</button>

            </ul>
        </nav>
    );
}