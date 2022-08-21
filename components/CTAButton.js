import React from 'react'

const Button = ({ textColor, bgColor, borderColor }) => {
  return (
    <button
      className={`${bgColor} ${textColor} mt-2 w-fit font-bold transition duration-700 translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 group`}
    >
      <a
        className={`${borderColor} block w-full h-full px-3 py-2 border-2 md:py-4 md:px-8 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700`}
        href='mailto:hello@creativevaluemarketing.com'
        target='_blank'
        rel='noreferrer'
      >
        Kontakta oss
      </a>
    </button>
  )
}

export default Button
