import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  residenceType: Yup.string().required("Residence type is required"),
  monthlyIncome: Yup.number()
    .required("Monthly income is required")
    .positive("Income must be positive"),
  previousLoan: Yup.boolean(),
  maritalStatus: Yup.string().required("Marital status is required"),
  numberOfDependents: Yup.number()
    .required("Number of dependents is required")
    .min(0, "Cannot be negative"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
});

const BorrowerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await axios.post("https://borrower-sign-up.onrender.com", data);
      alert("Borrower Registered Successfully!");
      reset();
    } catch (error) {
      alert(
        "Error: " + (error.response?.data?.error || "Something went wrong")
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="bg-indigo-600 py-4 px-6">
          <h2 className="text-2xl font-bold text-white">
            Borrower Registration
          </h2>
          <p className="text-indigo-100">Please fill in your details below</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                {...register("name")}
                placeholder="Ayush Dubey"
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                {...register("email")}
                placeholder="ayush@example.com"
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                {...register("phone")}
                placeholder="+1234567890"
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Residence Type */}
            <div>
              <label
                htmlFor="residenceType"
                className="block text-sm font-medium text-gray-700"
              >
                Residence Type
              </label>
              <select
                id="residenceType"
                {...register("residenceType")}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.residenceType ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              >
                <option value="">Select residence type</option>
                <option value="Owned">Owned</option>
                <option value="Rented">Rented</option>
                <option value="Other">Other</option>
              </select>
              {errors.residenceType && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.residenceType.message}
                </p>
              )}
            </div>

            {/* Monthly Income */}
            <div>
              <label
                htmlFor="monthlyIncome"
                className="block text-sm font-medium text-gray-700"
              >
                Monthly Income ($)
              </label>
              <input
                id="monthlyIncome"
                type="number"
                {...register("monthlyIncome")}
                placeholder="3000"
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.monthlyIncome ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.monthlyIncome && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.monthlyIncome.message}
                </p>
              )}
            </div>

            {/* Previous Loan */}
            <div>
              <label
                htmlFor="previousLoan"
                className="block text-sm font-medium text-gray-700"
              >
                Previous Loan?
              </label>
              <select
                id="previousLoan"
                {...register("previousLoan")}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.previousLoan ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              >
                <option value="">Select an option</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            {/* Marital Status */}
            <div>
              <label
                htmlFor="maritalStatus"
                className="block text-sm font-medium text-gray-700"
              >
                Marital Status
              </label>
              <select
                id="maritalStatus"
                {...register("maritalStatus")}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.maritalStatus ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              >
                <option value="">Select marital status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
              {errors.maritalStatus && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.maritalStatus.message}
                </p>
              )}
            </div>

            {/* Number of Dependents */}
            <div>
              <label
                htmlFor="numberOfDependents"
                className="block text-sm font-medium text-gray-700"
              >
                Number of Dependents
              </label>
              <input
                id="numberOfDependents"
                type="number"
                {...register("numberOfDependents")}
                placeholder="2"
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.numberOfDependents
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.numberOfDependents && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.numberOfDependents.message}
                </p>
              )}
            </div>

            {/* City and State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  id="city"
                  {...register("city")}
                  placeholder="New York"
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State/Province
                </label>
                <input
                  id="state"
                  {...register("state")}
                  placeholder="NY"
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.state && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.state.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => reset()}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BorrowerForm;
