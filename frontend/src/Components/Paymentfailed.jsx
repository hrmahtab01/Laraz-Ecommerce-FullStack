import { FiAlertCircle } from "react-icons/fi";

export default function PaymentFailed() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-red-100 rounded-2xl shadow-lg max-w-md mx-auto mt-10">
      <FiAlertCircle className="w-12 h-12 text-red-600" />
      <h2 className="text-xl font-semibold text-red-700 mt-4">
        Payment Failed
      </h2>
      <p className="text-gray-700 text-center mt-2">
        Oops! Something went wrong with your payment. Please try again.
      </p>
    </div>
  );
}
