import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import '../app/globals.css'

export default function stripeSuccess() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <FaCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for you purchase. We hope you enjoy it.
          </p>
          <p>Have a great day!</p>

          <button  className="mt-5">
            <Link href="/" className="text-green-400 underline">GO back</Link>
          </button>
        </div>
      </div>
    </div>
  );
}