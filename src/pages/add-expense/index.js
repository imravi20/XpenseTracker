import React from "react";
import TopFold from "../../component/topfold";
import "./add-expense.css";
import AddForm from "../../component/add-form";

const AddExpense = () => {
  return (
    <div className="add-expense">
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
