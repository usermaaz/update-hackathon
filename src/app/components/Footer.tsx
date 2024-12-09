export default function Footer(){
  return(
    <div>

<footer className="bg-black text-[#7E7E7E] py-8">
<div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-4 text-sm">
  <div>
    <p className="font-bold mb-2">FIND A STORE</p>
    <p>BECOME A MEMBER</p>
    <p>SIGN UP FOR EMAIL</p>
    <p>SEND US FEEDBACK</p>
    <p>STUDENT DISCOUNTS</p>
  </div>
  <div>
    <p className="font-bold mb-2">GET HELP</p>
    <p>Order Status</p>
    <p>Delivery</p>
    <p>Returns</p>
    <p>Payment Options</p>
    <p>Contact Us</p>
  </div>
  <div>
    <p className="font-bold mb-2">ABOUT NIKE</p>
    <p>News</p>
    <p>Careers</p>
    <p>Investors</p>
    <p>Sustainability</p>
  </div>
</div>
<div className="flex justify-between items-center text-xs mt-6 p-4 ml-6">
  <p>&copy; 2023 Nike, Inc. All Rights Reserved</p>
  <div className="space-x-4">
    <a href="#" className="hover:underline">
      Guides
    </a>
    <a href="#" className="hover:underline">
      Terms of Sale
    </a>
    <a href="#" className="hover:underline">
      Terms of Use
    </a>
    <a href="#" className="hover:underline">
      Nike Privacy Policy
    </a>
  </div>
</div>
</footer>
</div>
  )
}
      