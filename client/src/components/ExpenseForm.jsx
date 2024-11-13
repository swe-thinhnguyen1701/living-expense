function ExpenseForm () {
    return (
        <form className="expense-form">
            <input type="text" placeholder="Description"/>
            <input type="text" placeholder="Amount"/>
            <input type="text" placeholder="Category"/>
            <select name="" id="">
                <option value="1">Earning</option>
                <option value="2">Spending</option>
            </select>
            <button type="submit">Add</button>
        </form>
    )
}

export default ExpenseForm;