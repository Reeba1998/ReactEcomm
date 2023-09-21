

const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [action.payload],
          all_products: [action.payload],
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };

        case "SET_LIST_VIEW":
          return {
            ...state,
            grid_view: false,
          };

          case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
           
            //console.log(action.payload);
            return {
              ...state,
              sorting_value:action.payload,
            };

            case "SORTING_PRODUCTS":
              let newSortData;
            
           
              // let tempSortProduct = [...action.payload];
        
               const { filter_products, sorting_value } = state;
              let tempSortProduct = [...filter_products];

              // filter_products.forEach((item) => {
              // const Product = item.products;
              //  data=Product;
               
              // });

              // const allProducts = tempSortProduct.reduce((accumulator, item) => {
              //   return accumulator.concat(item.products);
              // }, []);



           

              //let tempSortProduct = [action.payload];
              // console.log(filter_products);
              // console.log(allProducts);
              // console.log(tempSortProduct);

              
       
            
        
        
              const sortingProducts = (a, b) => {
                // console.log("sorting",sorting_value);
                if (sorting_value === "lowest") {
                  // console.log('Sorting by lowest price:');
                  return a.price - b.price;
                }
        
                if (sorting_value === "highest") {
                  // console.log('Sorting by highest price:', a.price, b.price);
                  return b.price - a.price;
                }
        
                if (sorting_value === "a-z") {
                
                  return a.title.localeCompare(b.title);
                
                }
        
                if (sorting_value === "z-a") {
               
                  return b.title.localeCompare(a.title);
                 
                }
              };
               
          //  console.log("2", allProducts)
              //newSortData =[...tempSortProduct].sort(sortingProducts);

              if ( tempSortProduct) {
                // console.log(allProducts);
                // console.log("hi")
                newSortData = tempSortProduct.sort(sortingProducts);
                // console.log("newdata," , newSortData)
              } else {
                console.log('allProducts is empty or not properly initialized.');
              }

             
        
              return {
                ...state,
                filter_products: newSortData,
              };

              case "UPDATE_FILTERS_VALUE":
                const { name, value } = action.payload;
          
                return {
                  ...state,
                  filters: {
                    ...state.filters,
                    [name]: value,
                  },
                };

                case "FILTER_PRODUCTS":
                  let { all_products } = state;
                  let tempFilterProduct = [...all_products];

                  console.log(tempFilterProduct);

                  // const allProducts = tempFilterProduct.reduce((accumulator, item) => {
                  //   return accumulator.concat(item.products);
                  // }, []);

                  const {text} = state.filters

                  if (text) {
                    tempFilterProduct = tempFilterProduct.filter((curElem) => {
                     
                      
                    //  console.log(curElem);
                     if(curElem){
                    //  const titles = [];
                       console.log("check",curElem.products[3].title);
                     // for (const product of curElem.products) {
                        //if (product && product.title && typeof product.title === 'string') {
                        return curElem.products[3].title.toLowerCase().includes(text);
                       // return curElem.products.includes(text);
                         // titles.push(product.title.toLowerCase()); 
                         
                          // console.log(titles)
                       // }
                     // }
                   
                      // if (titles.some((title) => title.includes(text))) {
                      //   return true; // If any title includes 'text', return true to keep curElem
                      // }
                    }
                     } );
                  
                       }

                  return {
                    ...state,
                    filter_products: tempFilterProduct,
                  };
                
  
      default:
        return state;
    }
  };
  
  export default filterReducer;