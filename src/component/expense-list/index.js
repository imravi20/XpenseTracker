import React from "react";
import "./expense-list.css";
import Card from "./card";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  console.log(list);
  const filteredList = list.filter((item) => item.title.includes(query));
  const notifySuccess = () => toast.success("Expense Deleted");
  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((item) => (
          <Card item={item} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="empty-state">
          <label>Uh oh! Your Expense List is Empty </label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
