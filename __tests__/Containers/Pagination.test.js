// import React from 'react';
// import PropTypes from 'prop-types';

//  
// const propTypes = {
//     items: PropTypes.array.isRequired,
//     onChangePage: PropTypes.func.isRequired,
//     pageSize: PropTypes.number.isRequired,
// 	initialPage: PropTypes.number
// }
//  
// const defaultProps = {
//     initialPage: 1,
// 	pageSize: 10
// }

// const isEqual = function (value, other) {
// 	let type = Object.prototype.toString.call(value);
// 	if (type !== Object.prototype.toString.call(other)) return false;
// 	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;
// 	let valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
// 	let otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
// 	if (valueLen !== otherLen) return false;
// 	let compare = function (item1, item2) {
// 		let itemType = Object.prototype.toString.call(item1);
// 		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
// 			if (!isEqual(item1, item2)) return false;
// 		}
// 		else {
// 			if (itemType !== Object.prototype.toString.call(item2)) return false;
// 			if (itemType === '[object Function]') {
// 				if (item1.toString() !== item2.toString()) return false;
// 			} else {
// 				if (item1 !== item2) return false;
// 			}
// 		}
// 	};
// 	if (type === '[object Array]') {
// 		for (let i = 0; i < valueLen; i++) {
// 			if (compare(value[i], other[i]) === false) return false;
// 		}
// 	} else {
// 		for (let key in value) {
// 			if (value.hasOwnProperty(key)) {
// 				if (compare(value[key], other[key]) === false) return false;
// 			}
// 		}
// 	}
// 	return true;
// };
//  
// class Pagination extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { pager: {}};

// 		this.setPage=this.setPage.bind(this);
// 		this.getPager=this.getPager.bind(this);

// 	}
//  
//     componentWillMount=()=> {
//         
//         if (this.props.items && this.props.items.length) {
// 			// console.log("componentWillMount");
//             this.setPage(this.props.initialPage);
//         }
//     }
//  
//     componentDidUpdate=(prevProps)=> {
// 	//    console.log("prevProps.pageSize ", prevProps.pageSize);
// 	//    console.log("this.props.pageSizee ", this.props.pageSize);
//         if (!(isEqual(prevProps.items,this.props.items)) || prevProps.pageSize !== this.props.pageSize ) {
// 				// console.log("componentDidUpdate");
//                 this.setPage(this.props.initialPage);
// 	        }
// 	}

//     setPage=(page)=>{
// 	console.log("this.props.pageSize " , this.props.pageSize);
//         var { items, pageSize } = this.props;
// 		console.log("SetPage ", pageSize );
//         var pager = this.state.pager;
//  
//         if (page < 1 || page > pager.totalPages) {
//             return;
//         }
//  
//         pager = this.getPager(items.length, page, pageSize);
//         var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
//         this.setState({ pager: pager });
//         this.props.onChangePage(pageOfItems);
//     }
//  
//     getPager=(totalItems, currentPage, pageSize)=>{
// 	// console.log("GetPager ", pageSize);
// 		// pageSize=this.props.itemsPerPage;
//         currentPage = currentPage || 1;
//         pageSize = pageSize || 8;
// 		// console.log("pageSize in getPager ", pageSize);
//         var totalPages = Math.ceil(totalItems / pageSize);
//         var startPage, endPage;
//         if (totalPages <= 10) {
//             startPage = 1;
//             endPage = totalPages;
//         } else {
//             
//             if (currentPage <= 6) {
//                 startPage = 1;
//                 endPage = 10;
//             } else if (currentPage + 4 >= totalPages) {
//                 startPage = totalPages - 9;
//                 endPage = totalPages;
//             } else {
//                 startPage = currentPage - 5;
//                 endPage = currentPage + 4;
//             }
//         }
//  
//         const startIndex = (currentPage - 1) * pageSize;
//         const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
//  
//         const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
// 		// let itemsCount = this.props.pageSize;
// 		// console.log("itemsCount ", itemsCount);
//         return {
//             totalItems: totalItems,
//             currentPage: currentPage,
//             pageSize: pageSize,
//             totalPages: totalPages,
//             startPage: startPage,
//             endPage: endPage,
//             startIndex: startIndex,
//             endIndex: endIndex,
//             pages: pages
//         };
//     }
//  

//     render() {
// 		console.log("rendering in Pagination ", this.props.pageSize);
		
// 		let pager = this.state.pager;
		
//         let activePage = pager.currentPage;
//         if (!pager.pages || pager.pages.length <= 1) {
//             return null;
//         }
//         return (
		
//         <div>
//             <ul className="list-group list-inline pull-right">
//                 <li className={pager.currentPage === 1 ? 'list-group-item disabled' : 'list-group-item'}
//                      onClick={() => this.setPage(pager.currentPage - 1)}>Previous</li>
//                 <li key={activePage} className={pager.currentPage === activePage ? 'list-group-item active' : 'list-group-item'}
//                     onClick={() => this.setPage(pager.currentPage)}>{activePage}</li>
//                 <li key={activePage+1} className={'list-group-item'}
//                     onClick={() => this.setPage(pager.currentPage+1)}>{activePage+1}</li>
//                 <li key={activePage+2} className={'list-group-item'}
//                     onClick={() => this.setPage(pager.currentPage+2)}>{activePage+2}</li>
//                 <li className={pager.currentPage === pager.totalPages ? 'list-group-item disabled' : 'list-group-item'}
//                     onClick={() => this.setPage(pager.currentPage + 1)}>Next</li>
//             </ul>
//         </div>
//         );
//     }
// }
//  
// Pagination.propTypes = propTypes;
// Pagination.defaultProps = defaultProps;


// export default Pagination;