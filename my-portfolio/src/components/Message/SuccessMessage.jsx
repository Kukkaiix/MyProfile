const SuccessMessage = () => {
    return (
      <div className="text-center text-[#1A1A7A] mt-8 space-y-3">
        <h2 className="text-xl font-bold">Thanks for reaching out! 💌</h2>
        <p className="text-sm text-gray-700">We got your message and will get back to you soon.</p>
        <p className="text-xs text-[#4B4BE1] italic">Redirecting to homepage...</p>
  
        <div className="flex justify-center pt-2">
          <div className="w-5 h-5 border-2 border-[#4B4BE1] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  };
  
  export default SuccessMessage;