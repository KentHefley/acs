// components/Address.js
const Address = () => {
    return (
      <div className="mt-2 p-6 text-center">
        <p className="text-sm font-semibold">America’s Cart Service</p>
        <p className="text-sm">16 E Jones Avenue</p>
        <p className="text-sm">Phoenix, Arizona 85040</p>
        <p className="text-sm">Phone: <a href="tel:800-843-2278" className="text-blue-500 hover:underline">(800) 843-2278</a></p>
        <p className="text-sm">
          Email: <a href="mailto:sales@americascartservice.com" className="text-blue-500 hover:underline">sales@americascartservice.com</a>
        </p>
      </div>
    );
  };
  
  export default Address;
  