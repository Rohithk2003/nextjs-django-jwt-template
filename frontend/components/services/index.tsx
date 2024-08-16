import React from "react";
import { AiOutlineAudit } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";
import { CiCalculator2 } from "react-icons/ci";
import { IoBusiness } from "react-icons/io5";

export default function Services() {
  return (
    <section className="bg-white ">
      <div className="container px-6 py-10 mx-auto">
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            Our Services
          </h1>
          <hr className="w-32 h-1 bg-yellow-400"></hr>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="space-y-3 border p-4 rounded-lg">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
              <AiOutlineAudit />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize ">
              Auditing Services
            </h1>

            <p className="text-gray-500 ">
              We provide thorough and independent audits of your financial
              statements to ensure accuracy and compliance. Our team delivers
              reliable results for internal, statutory, or forensic audits,
              helping you improve your financial health.
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="space-y-3 border p-4 rounded-lg">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
              <CiMoneyBill />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize ">
              Taxation Services
            </h1>

            <p className="text-gray-500 ">
              We guide you through tax complexities, offering planning and
              filing services that ensure compliance and minimize liabilities.
              Let us optimize your tax position, giving you peace of mind.
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="space-y-3 border p-4 rounded-lg">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
              <CiCalculator2 />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize ">
              Accounting & Bookkeeping Services
            </h1>

            <p className="text-gray-500 ">
              We offer accurate accounting and bookkeeping services, providing
              real-time financial data and reports. Stay compliant and make
              informed decisions with our comprehensive support.
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="space-y-3 border p-4 rounded-lg">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
              <IoBusiness />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize ">
              Business Consultancy
            </h1>

            <p className="text-gray-500 ">
              We help you achieve your business goals with strategic planning
              and operational efficiency. Our consultancy services identify
              growth opportunities and streamline processes to drive success.
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="space-y-3 border p-4 rounded-lg">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize ">
              IT & Software Services
            </h1>

            <p className="text-gray-500 ">
              We deliver cutting-edge IT and software solutions, from custom
              software development to IT support and cloud services. Enhance
              your business operations with our expertise in technology.
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="space-y-3 border p-4 rounded-lg">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize ">
              Risk Management Services
            </h1>

            <p className="text-gray-500 ">
              We assess, identify, and mitigate risks to safeguard your
              business. Our risk management services protect your assets and
              ensure continuity, helping you navigate challenges with
              confidence.
            </p>

            <a
              href="#"
              className="inline-flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              <span className="mx-1">read more</span>
              <svg
                className="w-4 h-4 mx-1 rtl:-scale-x-100"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
