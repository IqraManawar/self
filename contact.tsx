// export default function Contact() {
//   return (
//     <section className="bg-[#1f2d4f] text-white py-12 px-4">
//       <div className="max-w-4xl mx-auto bg-[#2a3d66] p-8 rounded-2xl shadow-md">
//         <h2 className="text-4xl font-semibold text-center mb-8">
//           Contact <span className="text-[#00bfff]">Me!</span>
//         </h2>

//         <form className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               required
//               className="p-3 rounded-md w-full text-black"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               required
//               className="p-3 rounded-md w-full text-black"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               placeholder="Mobile Number"
//               required
//               className="p-3 rounded-md w-full text-black"
//             />
//             <input
//               type="text"
//               placeholder="Email Subject"
//               required
//               className="p-3 rounded-md w-full text-black"
//             />
//           </div>

//           <div>
//             <textarea
//               rows={4}
//               placeholder="Your Message"
//               required
//               className="p-3 rounded-md w-full text-black"
//             ></textarea>
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-[#00bfff] hover:bg-[#0099cc] text-white px-6 py-2 rounded-md text-base font-medium transition-all"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>

//       <footer className="text-center mt-10 text-sm text-gray-400">
//         Copyright © 2023 by Codehal | All Rights Reserved.
//       </footer>
//     </section>
//   );
// }

export default function Contact() {
  return (
    <section className="bg-[#1f2d4f] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-[#2a3d66] p-8 md:p-12 rounded-3xl shadow-2xl">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact <span className="text-[#00bfff]">Me!</span>
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-4 bg-white text-black rounded-md outline-none placeholder-gray-500"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-4 bg-white text-black rounded-md outline-none placeholder-gray-500"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Mobile Number"
              required
              className="w-full p-4 bg-white text-black rounded-md outline-none placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Email Subject"
              required
              className="w-full p-4 bg-white text-black rounded-md outline-none placeholder-gray-500"
            />
          </div>

          {/* Message Box */}
          <textarea
            rows={5}
            placeholder="Your Message"
            required
            className="w-full p-4 bg-white text-black rounded-md outline-none placeholder-gray-500"
          ></textarea>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00bfff] to-[#0099cc] hover:from-[#0099cc] hover:to-[#00bfff] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="text-center mt-12 text-sm text-gray-400">
        © 2023 by <span className="text-[#00bfff] font-medium">Iqra Manawar</span> | All Rights Reserved.
      </footer>
    </section>
  );
}
