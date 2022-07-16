// import { totalPage } from "../index";
const pagination = document.querySelector("ul");
let paginationNumbers


// let totalPage = 221;
// export let currentPage = 1;
let activePage= '';
// let prevPage= currentPage - 2;
// let nextPage = currentPage + 2;


export function createPagination(total, page){
    let paginationMark = '';

   
        if (page <= 3) {
            if (page === 1){
                paginationMark = `        
                <li class='first' data-id="${page}"> ${page} </li>                  
                <li class='page' data-id="${page+1}"> ${page+1} </li>
                <li class='page' data-id="${page+2}"> ${page+2} </li>   
                <li class='page' data-id="${page+3}"> ${page+3} </li>             
                <li class='dots'> ... </li>
                <li class='last' data-id="${total}"> ${total} </li>
                ` 
                pagination.innerHTML = paginationMark;
            } else if(page === 2) {
                paginationMark = `
                <li class='first' data-id="1"> 1 </li>                  
                <li class='page' data-id="${page}"> ${page} </li>
                <li class='page' data-id="${page+1}"> ${page+1} </li>   
                <li class='page' data-id="${page+2}"> ${page+2} </li>             
                <li class='dots'> ... </li>
                <li class='last' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark;
            } else{
                paginationMark = `
                <li class='first' data-id="1"> 1 </li>                  
                <li class='page' data-id="${page -1}"> ${page-1} </li>
                <li class='page' data-id="${page}"> ${page} </li>   
                <li class='page' data-id="${page+1}"> ${page+1} </li>
                <li class='page' data-id="${page+2}"> ${page+2} </li>              
                <li class='dots'> ... </li>
                <li class='last' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark;
            }           
        }       

        //--------------------------------------------------------
        if (page >= 4) {
            if (page === 4){
                paginationMark = `
                <li class='first' data-id="1"> 1 </li>                  
                <li class='page' data-id="${page-2}"> ${page-2} </li>
                <li class='page' data-id="${page-1}"> ${page-1} </li>
                <li class='page' data-id="${page}"> ${page} </li>   
                <li class='page' data-id="${page+1}"> ${page+1} </li>
                <li class='page' data-id="${page+2}"> ${page+2} </li>              
                <li class='dots'> ... </li>
                <li class='last' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark; 
            } else if(page === total){
                paginationMark = `
                <li class=' first' data-id="1"> 1 </li> 
                <li class='dots'> ... </li>   
                <li class='page' data-id="${page-3}"> ${page-3} </li>              
                <li class='page' data-id="${page-2}"> ${page-2} </li>
                <li class='page' data-id="${page-1}"> ${page-1} </li>
                <li class='last' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark; 
            } else if(page === total - 1){
                paginationMark = `
                <li class=' first' data-id="1"> 1 </li> 
                <li class='dots'> ... </li>
                <li class='page' data-id="${page-2}"> ${page-2} </li>              
                <li class='page' data-id="${page-1}"> ${page-1} </li>
                <li class='page' data-id="${page}"> ${page} </li>
                <li class='last' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark; 
            } else if(page === total - 2){
                paginationMark = `
                <li class='first' data-id="1"> 1 </li> 
                <li class='dots'> ... </li>
                <li class='page' data-id="${page-2}"> ${page-2} </li> 
                <li class='page' data-id="${page-1}"> ${page-1} </li>              
                <li class='page' data-id="${page}"> ${page} </li>
                <li class='page' data-id="${page+1}"> ${page+1} </li>
                <li class='last' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark; 
            } else if(page === total - 3){
                paginationMark = `
                <li class=' first' data-id="1"> 1 </li> 
                <li class='dots'> ... </li>
                <li class='page' data-id="${page-2}"> ${page-2} </li> 
                <li class='page' data-id="${page-1}"> ${page-1} </li>              
                <li class='page' data-id="${page}"> ${page} </li>
                <li class='page' data-id="${page+1}"> ${page+1} </li>
                <li class='page' data-id="${page+2}"> ${page+2} </li>
                <li class='last' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark; 
            }
            else {
            paginationMark = `
                <li class='first' data-id="1"> 1 </li>                  
                <li class='dots'> ... </li>
                <li class='page' data-id="${page -2}"> ${page-2} </li>
                <li class='page' data-id="${page-1}"> ${page-1} </li>
                <li class='page' data-id="${page}"> ${page} </li>   
                <li class='page' data-id="${page+1}"> ${page+1} </li>
                <li class='page' data-id="${page+2}"> ${page+2} </li>              
                <li class='dots'> ... </li>
                <li class='last' data-id="${total}"> ${total} </li>
                `
                pagination.innerHTML = paginationMark; 
            }
        }
      
        
    }


// function centerMark(prev, next){
//     let centerMark
//     for (let i = prev; i <= next ; i++) {
//         centerMark +=`<li>${i}</li>`       
// }
//     return centerMark
// }

// createPagination(totalPage, currentPage);



// function setCurrentPage(e){
//     currentPage = Number(e.target.innerHTML);
//     console.log(currentPage);
//     const pageId = e.target.dataset.id
//     console.log(`pageId: ${pageId}`);    

//     createPagination(totalPage, currentPage);

    
//     const list = document.querySelector(`[data-id="${pageId}"]`)
//     list.classList.add('active')
   
    
// }

// // createPagination(totalPage, currentPage);
// pagination.addEventListener("click", setCurrentPage)