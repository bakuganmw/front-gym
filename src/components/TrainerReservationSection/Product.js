import React, { Component } from 'react'
import { Data } from './Data'
import ProductList from './ProductList'


class Product extends Component {
    state = {
        ProductData: Data,
        term: ''
    }
    searchHandler = (event) => {
        this.setState({ term: event.target.value })
    }

    render() {
        const { ProductData, term } = this.state;
        return (
          <div className='container'>
            <input
              className="form-control inputTrainer"
              type="search"
              placeholder="Search"
              onChange={this.searchHandler}
            />
            <div className="row">
              {ProductData.filter(searchingFor(term)).map(({ EventId, ...otherprops }) => (
                <div className="col-md-4" key={EventId}>
                  <ProductList {...otherprops} />
                </div>
              ))}
            </div>
          </div>
        );
      }
}
export default Product

function searchingFor(term) {
    return function (x) {
        return x.EventName.toLowerCase().includes(term.toLowerCase()) || !term
    }
}