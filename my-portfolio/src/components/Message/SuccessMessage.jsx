const SuccessMessage = () => {
    return (
      <div className="text-center text-[#d4d4d4] mt-8 space-y-3">
        <h2 className="text-xl font-bold text-[#98c379]">✓ Message Received</h2>
        <p className="text-sm text-gray-400">
          Thanks for getting in touch. We'll respond soon.
        </p>
        <p className="text-xs italic text-[#4FC1FF]">Redirecting to homepage...</p>
  
        <div className="flex justify-center pt-2">
          <div className="w-5 h-5 border-2 border-[#4FC1FF] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  };
  
  export default SuccessMessage;