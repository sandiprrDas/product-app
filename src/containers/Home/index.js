import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Compare, ProductList,Modals,CheckBox} from '../../components'
import * as productActions from '../../actions/product'
import {connect} from 'react-redux'
import {ModalRoot} from '../'
import { showModal, hideModal } from '../../actions/modal'


//import { ConfirmModal } from '../Modals/ConfirmModal'

class Home extends Component {
constructor(props) {
    super(props)
    this.state = {
      isToggleOn:true
    };
    this.openConfirmModal = this.openConfirmModal.bind(this);
  }

  componentWillMount() {
    this.props.actions.getProducts();
  }

  openConfirmModal = () => {
    this.setState(function(prevState) {
        return {isToggleOn: !prevState.isToggleOn};
     });
  }
  closeConfirmModal = () =>{
    this.setState(function(prevState) {
        return {isToggleOn: !prevState.isToggleOn};
     });
  }
   handleCheckChieldElement = (event) => {
//    let fruites = this.state.fruites
//    fruites.forEach(fruite => {
//       if (fruite.value === event.target.value)
//          fruite.isChecked =  event.target.checked
//    })
//    this.setState({fruites: fruites})
  }
  render() {
    const {products, actions} = this.props;
    const compareProducts = products.filter(product => product.compare);
    console.log('this---',actions);


    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-6">
            <h2 className="mb-3">Compare Products</h2>
          </div>
          <div className="col-6 text-right">
            <button type="button" className="btn btn-default" onClick={this.openConfirmModal}>Add/Remove Attributes</button>
            </div>

           {this.state.isToggleOn == false ? <div className="modal">
          <div className="modal-content">
          <div className="header"><h4>Add/Remove Attributes</h4></div>
            <div className="modal-body">
                 <div className="form-group">
                    <input type="text" placeholder="Search Attributes" className="form-control search_attributes" />
                 </div>
                 <div className="form-group border_bottom mr_left">
                     <input type="checkbox" className="select_all" /> <label className="select_title">Select All</label>
                 </div>
                 <ul>

                    <li>
                        <div className="form-group mr_btm">
                             <input type="checkbox" /> <label>Price</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-group mr_btm">
                             <input type="checkbox" /> <label>Colors</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-group mr_btm">
                             <input type="checkbox" /> <label>Condition</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-group mr_btm">
                             <input type="checkbox" /> <label>Vendor</label>
                        </div>
                    </li>
                 </ul>
            </div>
            <div className="modal-footer">
                <div className="form-group">
                <div className="btn_group">
                    <button type="button" className="btn btn-default btn_close" onClick={this.closeConfirmModal}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={this.closeConfirmModal}>Apply</button>
                    </div>
                </div>
          </div>
          </div>
</div>:''}

         </div>
        <ProductList products={products} compare={actions.compare}/>
        {compareProducts.length >= 2 &&
          <Compare products={compareProducts}/>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
