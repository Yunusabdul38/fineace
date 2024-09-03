import call from "../assets/call.jpg";
import Footer from "../components/footer";
import NavigationBar from "../components/navigation";
import { useView } from "../hook/useView";
export default function ContactUs() {
    useView()
  return (
    <section>
      <NavigationBar />
      <div className="mt-[8rem] font-Urbanist md:px-20 p-5 pt-10">
        <h1 className="text-orangeText font-LexendDeca font-bold text-3xl">Get in touch</h1>
        <h3>Our friendly team would love to hear from you!</h3>
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
        <form className="w-full md:w-1/2 ">
          <div>
            <label
              htmlFor="organization name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              organization name
            </label>
            <input
              type="text"
              id="first_name"
              className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-12 "
              placeholder="fitech"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
               className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-12 "
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
          className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-12 "
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
               className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-12 "
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </form>
        <img src={call} alt="phone" className="hidden md:block md:w-1/2 rounded-md min-h-[300px]"/>
        </div>
      </div>
      <footer />
      <Footer/>
    </section>
  );
}
