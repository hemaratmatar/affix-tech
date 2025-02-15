import Link from "next/link";
import AuthLayout from "../components/layouts/AuthLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - Affix Tech",
    description: "Affix Tech Blog Post",
  };

const Signin = ({ }) => {
//   const [formData, setFormData] = useState({
//     identifier: "",
//     password: "",
//   });

//   const { identifier, password } = formData;
//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     login(identifier, password);
//     // console.log(formData.identifier);
//   };
  // const navigate = useNavigate();

//   if (isAuthenticated) {
//     return <Navigate to="/home" />;
//   }

  // const backendurl = "http://localhost:1337/admin";

  return (
    <div className="flex overflow-auto min-h-screen p-4 bg-[url(/bg/bg-signin.jpg)]   md:items-center lg:justify-center">
      <div className="flex flex-col w-full lg:overflow-hidden overflow-auto bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-xl">
        <div className="lg:flex content-center lg:flex-1 lg:max-w-screen-xl p-4 py-6 text-white bg-gradient-to-tl from-purple-500 to-red-500  md:w-80 md:flex-1 md:flex-shrink-0 md:flex md:flex-col md:items-center ">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <p>Affix Tech</p>
          </div>


          <div className="flex flex-col items-center justify-center my-4 ">
            <p className="text-center text-xl">
              <span>See You The Answer</span>
            </p>
            <div className=" my-4 p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 md:justify-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src="https://api.dicebear.com/9.x/bottts/webp"
                alt="ChitChat Logo"
              />
            </div>
            <div>
              <div className="text-xl font-medium text-black">
              Coventry City Guide Including Coventry Hotels
              </div>
              <p className="text-gray-500 text-md  line-clamp-3">The diseases most commonly seen in travellers are diarrhoea, malaria (if you travel in a malaria-infested area), accidents (when travelling by automobile or swimming), wound infections and</p>
            </div>
          </div>
          <div className="my-4 p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src="https://api.dicebear.com/9.x/bottts/webp"
                alt="ChitChat Logo"
              />
            </div>
            <div>
              <div className="text-xl font-medium text-black">
              Planning a Trip to Japan in the Time of Covid
              </div>
              <p className="text-gray-500 line-clamp-3">Whether you’re just daydreaming for the moment, or planning a trip for the future, we’ve compiled essential information about visiting Japan in the time of Covid-19...</p>
            </div>
          </div>

          <p className="flex flex-col items-center justify-center text-white my-4 text-center">
            <span>Create by Hemarat & Natthakit</span>
            {/* <a href="#" className="underline">
                Get Started!
              </a> */}
          </p>
          {/* <p className="mt-6 text-sm text-center text-gray-300">
              Read our{" "}
              <a href="#" className="underline">
                terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                conditions
              </a>
            </p> */}
          </div>


        </div>
        <div className="items-center p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Account Login
          </h3>
          <form
            className="flex flex-col space-y-5"
            // onSubmit={(e) => onSubmit(e)}
          >
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="text"
                className="text-sm font-semibold text-gray-500"
              >
                Email
              </label>
              <input
                type="email"
                // id="email"
                name="identifier"
                // value={identifier}
                // onChange={(e) => onChange(e)}
                required
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-red-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-500"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                // value={password}
                // onChange={(e) => onChange(e)}
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-red-200"
              />
            </div>
            {/*  Check Box Remember*/}
              <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
            </div> 
            <div className="flex items-center justify-end">
              <a
                href="#"
                className="text-sm text-red-400 hover:underline focus:text-blue-800"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-semibold text-white bg-red-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-red-400 transition-all duration-700 ease-in-out bg-[length:200%_100%] hover:bg-[length:100%_100%] rounded-md shadow focus:outline-none focus:ring-red-200 focus:ring-4"
            >
              Log in
            </button>

            <Link href="/signup" className="w-full px-4 py-2 text-lg text-center font-semibold text-white bg-red-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-red-400 transition-all duration-700 ease-in-out bg-[length:200%_100%] hover:bg-[length:100%_100%] rounded-md shadow  focus:outline-none focus:ring-red-200 focus:ring-4">

                Sign Up
 
            </Link>
            {/*Google Authen with SSO */}
            <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-500">or login with</span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex flex-col space-y-4">
                  <a
                    href="http://localhost:1337/api/connect/google"
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-100 border border-red-400 rounded-full group hover:bg-red-400 focus:outline-none"
                  >
                    <span>
                      <img
                        className=" h-5 cursor-pointer"
                        src="https://i.imgur.com/arC60SB.png"
                        alt=""
                      />
                    </span>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                      Google
                    </span>
                  </a>
                </div>
              </div>
            <p className="flex flex-col items-center justify-center text-sm  mt-10 text-center">
              <Link href={"http://localhost:1337/admin"} className="">
                Go To Admin
              </Link>
            </p>
            {/* <Alert /> */}
            {/* Alert Sucessfuly */}
            {/* <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-emerald-500">
              <span className="text-xl inline-block mr-5 align-middle">
                
              </span>
              <span className="inline-block align-middle mr-8">
                <b className="capitalize">Login is Sucessfuly</b>
              </span>
          </div> */}
            {/* Alert Error */}
            {/* <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
              <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
              </span>
              <span className="inline-block align-middle mr-8">
                <b className="capitalize">red!</b> This is a red alert - check
                it out!
              </span>
              <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                <span>×</span>
            </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

// Login.propTypes = {
//   login: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool,
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, { login })(Login);
// export default Login
export default function Page() {
  return <AuthLayout><Signin /></AuthLayout>;
}