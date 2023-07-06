import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultTable = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
          {/* <th>test</th> */}
        </tr>
      </thead>

      <tbody>
        {props.enteredData.map((YearData) => (
          <tr key={YearData.year}>
            <td>{YearData.year}</td>
            <td>{formatter.format(YearData.savingsEndOfYear)}</td>
            <td>{formatter.format(YearData.yearlyInterest)}</td>
            <td>
              {formatter.format(
                YearData.savingsEndOfYear -
                  props.initialInvestment -
                  YearData.yearlyContribution * YearData.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment +
                  YearData.yearlyContribution * YearData.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
