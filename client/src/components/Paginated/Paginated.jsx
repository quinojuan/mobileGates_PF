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
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
           <li class="page-item">
                  { currentPage>1 && (
                       <button class="page-link" onClick={(e)=>handlePrevious(e)}>Anterior</button>
                   )
                   }
               </li>
               {pageNumbers.map((number) => (
                      <li class='page-item' key={number} >
                       <button a class="page-link" onClick={() => paginado(number)}>{number}</button>
                   </li>
               ))}
           <li class="page-item">
           { currentPage<pageNumbers.length && (
                       <button class='page-link' onClick={(e)=>handleNext(e)}>Siguiente</button>
                   )
                   }
              {/* <a class="page-link" href="#">Next</a> */}
           </li>
        </ul>
     </nav>
    );
}