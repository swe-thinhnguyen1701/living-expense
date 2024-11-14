function ExpenseForm() {
    return (
        <form className="expense-form">
            <input type="text" placeholder="Description" className="expense-form-input expense-form-input expense-description" />
            <div className="input-label">
                <input type="text" placeholder="Amount" className="expense-form-input expense-amount" maxLength={9} />
                <span className="input-dollar-sign">$</span>
            </div>
            <input type="text" placeholder="Category" className="expense-form-input expense-category" />
            <select name="" id="" className="expense-form-input expense-option">
                <option value="1">Earning</option>
                <option value="2">Spending</option>
            </select>
            <button type="submit" className="btn add-btn">Add</button>
        </form>
    )
}

export default ExpenseForm;