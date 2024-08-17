import React from 'react'

function Button({
    children ,//  children kuch bhi ni hai bass text ko pass karne ke loye naam kuch bhhi ho skta hai 
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',// use bhi le skata hai 
    ...props// why this jitni bhi properties di hai vo le li user ne isliye propds le li kyuki hamne to ek h class li hai 
}) {
    return (//  backticks ko ese use ni kar skte js hai kyuki uske baad y string ban n jati hai 
       <button className={`px-4 py-2 rounded-lg ${bgColor}${textColor}${className}`} {...props}>
        {children}
       </button> 
    )
}

export default Button
