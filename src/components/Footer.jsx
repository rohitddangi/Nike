import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="text-white font-semibold uppercase mb-4 text-sm tracking-wider">Resources</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm hover:text-white transition-colors">Find A Store</a></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">Become A Member</a></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">Send Us Feedback</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold uppercase mb-4 text-sm tracking-wider">Help</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm hover:text-white transition-colors">Get Help</a></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">Order Status</a></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">Delivery</a></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">Payment Options</a></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold uppercase mb-4 text-sm tracking-wider">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm hover:text-white transition-colors">About Nike</a></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">News</a></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">Investors</a></li>
            <li><a href="#" className="text-sm hover:text-white transition-colors">Sustainability</a></li>
          </ul>
        </div>
        
        
        <div className="flex space-x-4 md:justify-end">
          <a href="#" className="bg-gray-700 h-10 w-10 flex items-center justify-center rounded-full text-white hover:bg-gray-500 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.8.36-1.65.6-2.54.7c.9-.54 1.6-1.4 1.93-2.45c-.85.5-1.8.87-2.8.1c-.8-.86-1.95-1.4-3.2-1.4c-2.43 0-4.4 1.97-4.4 4.4c0 .34.04.68.1.1C8.2 8.1 4.3 6 1.73 2.9c-.44.75-.7 1.63-.7 2.57c0 1.53.78 2.88 1.96 3.67c-.72-.02-1.4-.22-2-.54v.05c0 2.14 1.52 3.92 3.54 4.33c-.37.1-.76.15-1.16.15c-.28 0-.56-.03-.83-.08c.56 1.75 2.18 3.03 4.1 3.06c-1.5 1.18-3.4 1.88-5.46 1.88c-.36 0-.7-.02-1.05-.06C2.03 20.2 4.27 21 6.7 21c7.7 0 11.9-6.4 11.9-11.9c0-.18 0-.36-.01-.54c.83-.6 1.55-1.35 2.13-2.22z"></path></svg>
          </a>
          <a href="#" className="bg-gray-700 h-10 w-10 flex items-center justify-center rounded-full text-white hover:bg-gray-500 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3.3 16H13v-6h2.3l.3-2.7H13V8c0-.7.2-1.1 1.1-1.1H15V4.5c0 0-.8-.1-1.5-.1c-1.5 0-2.5 1-2.5 2.6V9.3H9v2.7h2V18z"></path></svg>
          </a>
          <a href="#" className="bg-gray-700 h-10 w-10 flex items-center justify-center rounded-full text-white hover:bg-gray-500 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07c1.27.06 2.16.27 2.93.58c.78.3 1.45.75 2.12 1.42c.67.67 1.12 1.34 1.42 2.12c.3.77.52 1.66.58 2.93c.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.27-.27 2.16-.58 2.93c-.3.78-.75 1.45-1.42 2.12c-.67.67-1.34 1.12-2.12 1.42c-.77.3-1.66.52-2.93.58c-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.27-.06-2.16-.27-2.93-.58c-.78-.3-1.45-.75-2.12-1.42c-.67-.67-1.12-1.34-1.42-2.12c-.3-.77-.52-1.66-.58-2.93c-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.06-1.27.27 2.16.58 2.93c.3-.78.75-1.45 1.42-2.12c.67.67 1.34-1.12 2.12-1.42c.77-.3 1.66-.52 2.93.58C8.42 2.18 8.8 2.16 12 2.16m0-1.62c-3.26 0-3.64.01-4.9.07c-1.28.06-2.16.27-2.94.58c-.8.3-1.5.75-2.18 1.43c-.68.68-1.13 1.38-1.43 2.18c-.3.78-.52 1.66-.58 2.94c-.06 1.26-.07 1.64-.07 4.9s.01 3.64.07 4.9c.06 1.28.27 2.16.58 2.94c.3.8.75 1.5 1.43 2.18c.68.68 1.38 1.13 2.18 1.43c.78.3 1.66.52 2.94.58c1.26.06 1.64.07 4.9.07s3.64-.01 4.9-.07c1.28-.06 2.16-.27 2.94-.58c.8-.3 1.5-.75 2.18-1.43c.68.68 1.13-1.38 1.43-2.18c.3-.78.52-1.66-.58-2.94c.06-1.26.07-1.64.07-4.9s-.01-3.64-.07-4.9c-.06-1.28-.27-2.16-.58-2.94c-.3-.8-.75-1.5-1.43-2.18c-.68-.68-1.38-1.13-2.18-1.43c-.78-.3-1.66-.52-2.94-.58C15.64.56 15.26.54 12 .54z"></path><path d="M12 6.8c-2.88 0-5.2 2.32-5.2 5.2s2.32 5.2 5.2 5.2s5.2-2.32 5.2-5.2s-2.32-5.2-5.2-5.2zm0 8.8c-1.99 0-3.6-1.61-3.6-3.6s1.61-3.6 3.6-3.6s3.6 1.61 3.6 3.6s-1.61 3.6-3.6 3.6zm6.4-9.2c-.72 0-1.3.58-1.3 1.3s.58 1.3 1.3 1.3s1.3-.58 1.3-1.3s-.58-1.3-1.3-1.3z"></path></svg>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-6 flex flex-col-reverse md:flex-row justify-between text-xs">
        <div className="text-gray-500 mt-4 md:mt-0">
          <span>© 2025 Nike, Inc. All Rights Reserved</span>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <a href="#" className="hover:text-white transition-colors">Guides</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Sale</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">Nike Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;