import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-countext";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No expense yet"
    />
  );
}

const styles = StyleSheet.create({});
