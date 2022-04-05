import React, {Fragment} from 'react';
import './index.css';

function SearchBar(props) {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." value={props.filterText} onChange={props.onFilterTextChange} /><br />
            <input type="checkbox" checked={props.inStockOnly} onChange={props.onInStockOnlyChange} /><label>Only show products in stock</label>
        </div>
    );
}

function ProductTable(props) {
    const categories = formatProducts(props.products);

    function formatProducts(products) {
        let results = {};
        products.map((product) => {
            const productNameLowercase = product.name.toLowerCase();
            if (props.inStockOnly && !product.stocked) {
                return false;
            }
            if (props.filterText && (productNameLowercase.search(props.filterText) < 0)) {
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

    return (
        <table className="products-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {categories.map((category) => (
                <Fragment key={category.name}>
                    <ProductCategoryRow name={category.name} />
                    {category.products.map((product) => (
                        <ProductRow key={product.name} name={product.name} price={product.price} stocked={product.stocked} />
                    ))}
                </Fragment>
            ))}
            </tbody>
        </table>
    );
}

function ProductCategoryRow(props) {
    return (
        <tr className="category-row">
            <th colSpan="2">{props.name}</th>
        </tr>
    );
}

function ProductRow(props) {
    return (
        <tr className="product-row">
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    );
}

function FilterableProductTable(props) {
    const [filterText, setFilterText] = React.useState('');
    const [inStockOnly, setInStockOnly] = React.useState(false);

    const products = getProducts();

    function handleFilterText(e) {
        setFilterText(e.target.value);
    }

    function handleInStockOnly(e) {
        setInStockOnly(e.target.checked);
    }

    function getProducts() {
        return [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];
    }

    return (
        <div className="filterable-products">
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={handleFilterText}
                onInStockOnlyChange={handleInStockOnly}
            />
            <ProductTable products={products} filterText={filterText.toLowerCase()} inStockOnly={inStockOnly} />
        </div>
    );
}

export default FilterableProductTable;