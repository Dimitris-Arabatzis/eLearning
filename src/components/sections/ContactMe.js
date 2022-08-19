import React, { useState } from 'react'

function ContactMe() {
  const [show, setShow] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompanyName] = useState('')
  const [country, setCountry] = useState('')

  function isValid(str) {
    if (str.trim() === '') {
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      name,
      email,
      message,
      company,
      country,
    }

    if (!isValid(data.email)) {
      alert('⛔️ Please add an email.')
      return false
    }

    if (!isValid(message)) {
      alert('⛔️ Please add a message.')
      return false
    }

    //console.log(data);
    fetch('/api/sendmail', {
      method: 'post',
      body: JSON.stringify(data),
    })

    setName('')
    setEmail('')
    setMessage('')
    setCompanyName('')
    setCountry('')
    alert('Thank you for contacting me! I am trying my best to reply the soonest!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-12 flex w-full items-center justify-center">
        <div className="top-40 rounded bg-white py-12 px-8 shadow-2xl lg:px-28">
          <p className="text-center text-xl font-bold leading-7 text-gray-700 md:text-3xl">
            Let’s chat!
          </p>
          <div className="mt-12 items-center md:flex">
            <div className="flex flex-col md:w-72">
              <label className="text-base font-semibold leading-none text-gray-800">Name</label>
              <input
                tabIndex={0}
                arial-label="Please input name"
                type="name"
                className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                placeholder="Please input  name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mt-4 flex flex-col md:ml-6 md:mt-0 md:w-72">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email Address
              </label>
              <input
                tabIndex={0}
                arial-label="Please input email address"
                type="email"
                className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                placeholder="Please input email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>
          <div className="mt-8 items-center md:flex">
            <div className="flex flex-col md:w-72">
              <label className="text-base font-semibold leading-none text-gray-800">
                Company name
              </label>
              <input
                tabIndex={0}
                role="input"
                arial-label="Please input company name"
                type="name"
                className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700 "
                placeholder="Please input company name"
                onChange={(e) => setCompanyName(e.target.value)}
                value={company}
              />
            </div>
            <div className="mt-4 flex flex-col md:ml-6 md:mt-0 md:w-72">
              <label className="text-base font-semibold leading-none text-gray-800">Country</label>
              <input
                tabIndex={0}
                arial-label="Please input country name"
                type="name"
                className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                placeholder="Please input country name"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              />
            </div>
          </div>
          <div>
            <div className="mt-8 flex w-full flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">Message</label>
              <textarea
                tabIndex={0}
                aria-label="leave a message"
                role="textbox"
                type="name"
                className="focus:oultine-none mt-4 h-36 resize-none rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
          </div>
          <p className="mt-4 text-xs leading-3 text-gray-600">
            By clicking submit you agree to share your info with me.
          </p>
          <div className="flex w-full items-center justify-center pt-12 pb-8">
            <button
              type="submit"
              className="rounded-full bg-green-600 py-2 px-4 font-bold hover:bg-green-500"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactMe
