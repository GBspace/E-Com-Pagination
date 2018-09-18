// import React from 'react';
// import {connect} from 'react-redux';
// import {updateItemsCount} from '../actions/Products';
// import {itemsPerPageCount} from '../selectors/Products';

// export class Dropdown extends React.Component{

//     handleClick=(e)=>{
//         e.preventDefault();
//         // console.log(e.target.id);
//         this.props.updateItemsCount(e.target.id);
//     };

//     render(){
//         return(
//             <div className="dropdown pull-right" >
//                 <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">{this.props.pageSize} Per Page
//                 <span className="caret"></span></button>
//                 <ul className="dropdown-menu dropdown-items">
//                     <li><a id={8} onClick={this.handleClick} href="#">8</a></li>
//                     <li><a id={16} href="#" onClick={this.handleClick}>16</a></li>
//                     <li><a id={24} href="#" onClick={this.handleClick}>24</a></li>
//                 </ul>
//           </div>
//         );
//     };
// };


// const mapDispatchToProps=(dispatch)=>({
//     updateItemsCount: count=>dispatch(updateItemsCount(count))
// });

// const mapStateToProps=(state)=>({
//     pageSize:parseInt(itemsPerPageCount(state))
// });

// export default connect(mapStateToProps,mapDispatchToProps)(Dropdown);




