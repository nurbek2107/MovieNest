// import { useRef } from "react";

// function Login() {
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const email = emailRef.current.value;
//         const password = passwordRef.current.value;
//         console.log(email, password);
//     }
// return <>
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input type="email" placeholder="email" ref={emailRef} />
//             <input type="password" placeholder="password" ref={passwordRef} />
//             <button type="submit">Login</button>
            
//         </form>
//     </div>
// </>;
// }

// export default Login;

function Login() {
  return (
    <div>
      <div className="flex font-poppins items-center justify-center">
    <div className="h-screen w-screen flex justify-center items-center">
    <div className="grid gap-8">
      <div
        id="back-div"
        className="bg-gradient-to-r from-[#ff6f61] to-purple-500 rounded-[26px] m-4"
      >
        <div
          className="border-[20px] border-transparent rounded-[20px]  bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
        >
          <h1 className="pt-8 pb-6 font-bold dark:text-black text-5xl text-center cursor-default">
            Log in
          </h1>
          <form action="#" method="post" className="space-y-4">
            <div>
              <label  className="mb-2  dark:text-black text-lg">Email</label>
              <input
                id="email"
                className="border outline-none p-3  dark:text-black  dark:border-[#ff6f61]   shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-text-black rounded-lg w-full"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label  className="mb-2 dark:text-black text-lg">Password</label>
              <input
                id="password"
                className="border outline-none p-3 shadow-md  dark:text-black  dark:border-[#ff6f61] placeholder:text-base focus:scale-105 ease-in-out duration-300 border-text-black rounded-lg w-full"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <a
              className="group text-[#ff6f61] transition-all duration-100 ease-in-out"
              href="#"
            >
              <span
                className="bg-left-bottom bg-gradient-to-r text-sm from-[#ff6f61] to-[#ff6f61] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              >
                Forget your password?
              </span>
            </a>
            <button
              className="bg-gradient-to-r  from-[#ff6f61] to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-[#ff6f61] transition duration-700 ease-in-out"
              type="submit"
            >
              LOG IN
            </button>
          </form>
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3 className="dark:text-black">
              Don’t have an account?
              <a
                className="group text-[#ff6f61] transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  className="bg-left-bottom bg-gradient-to-r from-[#ff6f61] to-[#ff6f61] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Sign Up
                </span>
              </a>
            </h3>
          </div>
          <div
            id="third-party-auth"
            className="flex items-center justify-center mt-5 flex-wrap"
          >
            <button
              href="#"
              className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                alt="Google"
              />
            </button>
            <button
              href="#"
              className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                alt="Linkedin"
              />
            </button>
            <button
              href="#"
              className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px] filter dark:invert"
                src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                alt="Github"
              />
            </button>
            <button
              href="#"
              className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                alt="Facebook"
              />
            </button>
            <button
              href="#"
              className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px] dark:gray-100"
                src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                alt="twitter"
              />
            </button>

            <button
              href="#"
              className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                alt="apple"
              />
            </button>
          </div>

          <div
            className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
          >
            <p className="cursor-default">
              By signing in, you agree to our
              <a
                className="group text-[#ff6f61] transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  className="cursor-pointer bg-left-bottom bg-gradient-to-r from-[#ff6f61] to-[#ff6f61] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Terms
                </span>
              </a>
              and
              <a
                className="group text-[#ff6f61] transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  className="cursor-pointer bg-left-bottom bg-gradient-to-r from-[#ff6f61] to-[#ff6f61] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Privacy Policy
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Login
