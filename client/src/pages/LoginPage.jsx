import React, {useContext ,useState } from 'react'
import assets from '../assets/assets'
import { AuthContext } from '../../context/AuthContext'

const LoginPage = () => {

  const [currState, setCurrState] = useState("Sign up")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const {login} = useContext(AuthContext)


  const onSubmitHandler = (event) => {
    event.preventDefault()
    
    console.log({
      fullName,
      email,
      password,
      bio
    })
  

    if (currState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true)
      return
    }

    login (currState === "Sign up" ? 'signup' : 'login', {fullName,email,password,bio})
  
  }

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>

      {/* Left Side */}
      <img
        src={assets.logo}
        alt="logo"
        className='w-[min(30vw,250px)]'
      />

      {/* Right Side */}
      <form
        onSubmit={onSubmitHandler}
        className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg min-w-[340px]'
      >

        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currState === "Sign up" && isDataSubmitted
            ? "Tell us about yourself"
            : currState}

          <img
            src={assets.arrow_icon}
            alt=""
            className='w-5 cursor-pointer'
            onClick={() => {
              if (currState === "Sign up" && isDataSubmitted) {
                setIsDataSubmitted(false)
              } else {
                setCurrState(
                  currState === "Sign up"
                    ? "Login"
                    : "Sign up"
                )
                setIsDataSubmitted(false)
              }
            }}
          />
        </h2>

        {currState === "Sign up" && !isDataSubmitted && (
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className='p-2 border border-gray-500 rounded-md bg-transparent placeholder-gray-300 focus:outline-none'
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='p-2 border border-gray-500 rounded-md bg-transparent placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='p-2 border border-gray-500 rounded-md bg-transparent placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              required
            />
          </>
        )}

        {currState === "Sign up" && isDataSubmitted && (
          <textarea
            rows={4}
            placeholder="Provide a short bio..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className='p-2 border border-gray-500 rounded-md bg-transparent placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            required
          />
        )}

        <button
          type='submit'
          className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'
        >
          {currState === "Sign up"
            ? (isDataSubmitted ? "Complete Signup" : "Create Account")
            : "Login Now"}
        </button>

        <div className='flex items-center gap-2 text-sm text-gray-400'>
          <input type="checkbox" required />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className='flex flex-col gap-2'>
          {currState === "Sign up" ? (
            <p className='text-sm text-gray-400'>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrState("Login")
                  setIsDataSubmitted(false)
                }}
                className='font-medium text-violet-500 cursor-pointer'
              >
                Login here
              </span>
            </p>
          ) : (
            <p className='text-sm text-gray-400'>
              Create an account?{" "}
              <span
                onClick={() => {
                  setCurrState("Sign up")
                  setIsDataSubmitted(false)
                }}
                className='font-medium text-violet-500 cursor-pointer'
              >
                Click here
              </span>
            </p>
          )}
        </div>

      </form>
    </div>
  )
}

export default LoginPage