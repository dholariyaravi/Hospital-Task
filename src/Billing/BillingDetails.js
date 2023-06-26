import React from "react";
import bill from "../IMG/Screenshot 2023-06-24 170144.png";
import { data } from "../Json";

const date = () => {
  var data = new Date();
  var get = data.getDate() + "-" + data.getMonth() + "-" + data.getFullYear();

  return get;
};

const BillingDetails = ({ bill }) => {
  return (
    <div className="rounded-4 p-2" style={{ backgroundColor: "#575f72" }}>
      <div
        className="container-fluid rounded-4 p-3 bg-white"
        style={{ border: "1px solid black" }}
      >
        <div className="row p-2">
          <div className="col-sm-6 text-start">
            <h4>Billing Details</h4>
          </div>
          <div className="col-sm-6 text-end">
            <button
              className="btn btn-danger "
              onClick={() => {
                window.print();
              }}
            >
              Print bill
            </button>
          </div>
        </div>

        <div className="">
          <table
            className="my-3 rounded-3  text-start "
            style={{ width: "100%", backgroundColor: "#a9a9a929" }}
          >
            <thead className="">
              {bill.map((val) => {
                return (
                  <>
                    <tr className="m-5">
                      <th>Patient Name</th>
                      <th>Age/Gender</th>
                      <th>Bill no</th>
                      <th>Date </th>
                      <th>Receipt no</th>
                    </tr>
                    <tr>
                      <td>{val.name}</td>
                      <td>
                        {val.age}/{val.gender}
                      </td>
                      <td>{val.Billno}</td>
                      <td>{date()}</td>
                      <td>{val.receipt}</td>
                    </tr>
                  </>
                );
              })}
            </thead>
          </table>
          <hr />
          <table
            className="my-3 rounded-3  text-start "
            style={{ width: "100%", backgroundColor: "#a9a9a929" }}
          >
            <thead className="">
              <>
                <tr className="m-5">
                  <th>Sr.No</th>
                  <th>Service Name</th>
                  <th>Price</th>
                  <th>Qty </th>
                  <th>Amount</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Xray</td>
                  <td>1500</td>
                  <td>2</td>
                  <td>3000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Consuitlion</td>
                  <td>500</td>
                  <td>2</td>
                  <td>1000</td>
                </tr>
              </>
            </thead>
          </table>

          <div
            className="my-3 p-3 rounded"
            style={{ width: "100%", backgroundColor: "#a9a9a929" }}
          >
            <div className="text-start">
              <span className="font-bold ">
                {" "}
                <b>Mobile Number :- </b>
              </span>
              <span>9874521552</span>
            </div>
            <div className="text-start ">
              <span className="font-bold">
                {" "}
                <b>Discount:- </b>
              </span>
              <span>200</span>
            </div>
            <div className="text-start">
              <span className="font-bold">
                <b>Tax :- </b>
              </span>
              <span>Nan</span>
            </div>
            <hr />
            <div className=" text-start">
              <span className="font-bold">
                {" "}
                <b>Total :- </b>
              </span>
              <span className="text-end">3800</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
