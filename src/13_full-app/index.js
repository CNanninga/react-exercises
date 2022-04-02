import React from 'react';
import './index.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.props.onFilterTextChange} /><br />
                <input type="checkbox" checked={this.props.inStockOnly} onChange={this.props.onInStockOnlyChange} /><label>Only show products in stock</label>
            </div>
        );
    }
}

class ProductTable extends React.Component {
    formatProducts(products) {
        let results = {};
        products.map((product) => {
            const productNameLowercase = product.name.toLowerCase();
            if (this.props.inStockOnly && !product.stocked) {
                return false;
            }
            if (this.props.filterText && (productNameLowercase.search(this.props.filterText) < 0)) {
                return false;
            }

            if (typeof(results[product.category]) == 'undefined') {
                results[product.category] = [];
            }
            results[product.category].push(product);
            return true;
        });

        let resultsArr = [];
        for (const categoryName in results) {
            resultsArr.push({
                name: categoryName,
                products: results[categoryName]
            });
        }

        return resultsArr;
    }

    render() {
        const categories = this.formatProducts(this.props.products);

        return (
            <table className="products-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {categories.map((category) => (
                    <tbody key={category.name}>
                        <ProductCategoryRow name={category.name} />
                        {category.products.map((product) => (
                            <ProductRow key={product.name} name={product.name} price={product.price} stocked={product.stocked} />
                        ))}
                    </tbody>
                ))}
            </table>
        );
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr className="category-row">
                <th colSpan="2">{this.props.name}</th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        return (
            <tr className="product-row">
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
        }
    }

    handleFilterText(e) {
        this.setState({
            filterText: e.target.value,
        });
    }

    handleInStockOnly(e) {
        this.setState({
            inStockOnly: e.target.checked,
        });
    }

    getProducts() {
        return [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];
    }

    render() {
        const products = this.getProducts();
        return (
            <div className="filterable-products">
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterText.bind(this)}
                    onInStockOnlyChange={this.handleInStockOnly.bind(this)}
                />
                <ProductTable products={products} filterText={this.state.filterText.toLowerCase()} inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
}

export default FilterableProductTable;