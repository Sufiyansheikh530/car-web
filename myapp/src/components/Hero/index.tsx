import React from 'react'
import { BsFuelPumpFill } from "react-icons/bs";
import { GiCartwheel } from "react-icons/gi";
import { MdPeopleAlt } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <div className=' bg-[#F6F7F9]  flex sm:flex-col  md:flex-row   '>
      <div className=' bg-[#54A6FF] w-[640px] h-[340px] top-[32px] left-[64px] rounded-md  text-[#FFFFFF] p-4 m-4  '>
        <div className='w-[284px] h-[160] gap-[16px] '>
          <h1 className='w-[272px] h-[96px] font-extrabold weight-[600] text-2xl ' >The Best Platform  
            for Car Rental</h1>

            
          <div>
            
<p className='w-[284px] h-[48px]'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
</div>
<button  className=' bg-[#3563E9] w-[120px] h-[44px] text-white rounded-md mt-3 justify-center'>Rental Car</button>
<div className=' ml-16 w-[300px]  top-[200px] left-[137px] '>
        <img   src="car1.png" alt="car"  className=''/>
      </div>
        </div>
        
      </div>
      

      <div className=' bg-[#3563E9] w-[640px] h-[340px] top-[32px] left-[64px] rounded-md  text-[#FFFFFF] p-4 m-4  '>
        <div className='w-[284px] h-[160] gap-[16px] '>
          <h1 className='w-[272px] h-[96px] font-extrabold weight-[600] text-2xl ' >Easy way to rent a car at a low price
          </h1>

            
          <div>
            
<p className='w-[284px] h-[48px]'>Providing cheap car rental services and safe and comfortable facilities.</p>
</div>
<button  className=' bg-[#54A6FF] w-[130px] h-[44px] text-white rounded-md mt-3 justify-center '>Rental Car</button>
<div className=' ml-16 w-[230px]  top-[290px] left-[137px]'>
        <img   src="car2.png" alt="car" />
      </div>
        </div>
        </div>
        
      </div>
<div className='flex *:justify-around bg-[#F6F7F9]    '>
      <div className=' bg-[#FFFFFF] w-[582px] h-[132px] top-[424px] ml-6 radius-[10px] '>
<p className='mb-2'>Pick Up</p>
<ul className='flex space-x-16 ml-3'>
  <li>Locations</li>
  <li>Date</li>
  <li>Time</li>
</ul>
<ul className='text-sm flex space-x-6'>
  <li>select your city</li>
  <li>select your date</li>
  <li>select you time</li>
</ul>
      </div>

      <div className=' bg-[#FFFFFF] w-[582px] h-[132px] top-[424px] ml-6 radius-[10px] '>
<p className='mb-2'>Drop-Off</p>
<ul className='flex space-x-16 ml-3'>
  <li>Locations</li>
  <li>Date</li>
  <li>Time</li>
</ul>
<ul className='text-sm flex space-x-6'>
  <li>select your city</li>
  <li>select your date</li>
  <li>select you time</li>
</ul>
</div>
      </div>


      <div className='w-[1312px] h-[960px] top[592px] left-[64px] gap-[32px] bg-[#F6F7F9] m-5 '>
<p>Popular Car</p>

<div className='flex m-4 sm:flex-row'>

  <div className='w-[290px] h-[280px] radius[10px] bg-white'>Koinegsegg  
    <p className='text-sm'>sports</p>

    <div className='w-[232px] h-[72px]  mb-4 '> <img src="car1.png" alt="Car" />
     <div className='mr-4 flex '> <BsFuelPumpFill /> <div className='mr-3'>90L</div>
     <GiCartwheel />
     <div className=' mr-2'> Manual </div>
      <MdPeopleAlt /> 
      2people
     </div>

     <div className='m-2 '>$99.00/day
      <button className='bg-[#3563E9] w-[94px] h-[35px] rounded-md text-white'>Rent Now</button>
     </div>
     
    </div>
    
    
  </div>

  <div>

<div className='w-[290px] h-[280px] radius[10px] bg-white '>Nissan GT - R  
  <p className='text-sm'>sports</p>

  <div className='w-[200px] h-[240px] mb-2 '> <img src="car2.png " alt="Car" />
   <div className='mr-4 flex'> <BsFuelPumpFill /> <div className='mr-3'>80L</div>
   <GiCartwheel />
   <div className=' mr-2'> Manual </div>
    <MdPeopleAlt /> 
    2people
   </div>

   <div className='m-2 '>$80.00/day
    <button className='bg-[#3563E9] w-[94px] h-[35px] rounded-md text-white'>Rent Now</button>
   </div>
   
  </div>
  
</div>



</div>
<div>

  <div className='w-[290px] h-[280px] radius[10px] bg-white '>Rolls - Royce  
    <p className='text-sm  '>sports</p>

    <div className='w-[220px] h-[90px]  m-4 mb-3  '> <img src="car3.png" alt="Car" />
     <div className='mr-4 flex'> <BsFuelPumpFill /> <div className='mr-3'>90L</div>
     <GiCartwheel />
     <div className=' mr-2'> Manual </div>
      <MdPeopleAlt /> 
      4people
     </div>

     <div className='m-2 '>$96.00/day
      <button className='bg-[#3563E9] w-[94px] h-[35px] rounded-md text-white'>Rent Now</button>
     </div>
     
    </div>
    
  </div>



</div>
<div>

  <div className='w-[290px] h-[280px] radius[10px] bg-white'>Nissan GT - R  
    <p className='text-sm'>sports</p>

    <div className='w-[200px] h-[240px]  mb-2 '> <img src="car2.png" alt="Car" />
     <div className='mr-4 flex'> <BsFuelPumpFill /> <div className='mr-3'>90L</div>
     <GiCartwheel />
     <div className=' mr-2'> Manual </div>
      <MdPeopleAlt /> 
      2people
     </div>

     <div className='m-2 '>$80.00/day
      <button className='bg-[#3563E9] w-[94px] h-[35px] rounded-md text-white'>Rent Now</button>
     </div>
     
    </div>
    
  </div>



</div>


</div>
<p className='mb-2'>Recommendation car</p>
<div className='flex sm:flex-row  '>
<div className='w-[290px] h-[280px] radius[10px] bg-white'>All New Rush  
    <p className='text-sm'>SUV</p>

    <div className='w-[165px] h-[10px]  mb-4 pb-5 '> <img src="car33.png" alt="Car" />
     <div className='right-[10px] flex'> <BsFuelPumpFill /> <div className='mr-3'>70L</div>
     <GiCartwheel />
     <div className=' mr-2'> Manual </div>
      <MdPeopleAlt /> 
      6people
     </div>

     <div className='m-2 flex '>$72.00/day
      <button className='bg-[#3563E9] w-[94px] h-[35px] rounded-md text-white'>Rent Now</button>
     </div>
     
    </div>
    
    
  </div>
<div className='w-[290px] h-[280px] radius[10px] bg-white'> CR-V
    <p className='text-sm'>SUV</p>

    <div className='w-[232px] h-[72px]  mb-4 '> <img src="car44.png" alt="Car" />
     <div className='mr-4 flex'> <BsFuelPumpFill /> <div className='mr-3'>80L</div>
     <GiCartwheel />
     <div className=' mr-2'> Manual </div>
      <MdPeopleAlt /> 
      6people
     </div>

     <div className='m-2 '>$80.00/day
      <button className='bg-[#3563E9] w-[94px] h-[35px] rounded-md text-white'>Rent Now</button>
     </div>
     
    </div>
    
  
    </div>
<div className='w-[290px] h-[280px] radius[10px] bg-white'>  All New Terios
    <p className='text-sm'>SUV</p>

    <div className='w-[165px] h-[10px]  mb-4  pb-5'> <img src="car33.png" alt="Car" />
     <div className='mr-4 flex'> <BsFuelPumpFill /> <div className='mr-3'>90L</div>
     <GiCartwheel />
     <div className=' mr-2'> Manual </div>
      <MdPeopleAlt /> 
      6people
     </div>

     <div className='m-2  flex'>$74.00/day
      <button className='bg-[#3563E9] w-[94px] h-[35px] rounded-md text-white '>Rent Now</button>
     </div>
     
    </div>
    
    </div>
<div className='w-[290px] h-[280px] radius[10px] bg-white'>CR-V  
    <p className='text-sm'>SUV</p>

    <div className='w-[232px] h-[72px]  mb-4 '> <img src="car44.png" alt="Car" />
     <div className='mr-4 flex'> <BsFuelPumpFill /> <div className='mr-3'>80L</div>
     <GiCartwheel />
     <div className=' mr-2'> Manual </div>
      <MdPeopleAlt /> 
      6people
     </div>

     <div className='m-2 '>$80.00/day
      <button className='bg-[#3563E9] w-[94px] h-[35px] rounded-md text-white'>Rent Now</button>
     </div>
     
    </div>
    

      </div>
      

      </div>
      
      <div className='flex sm:flex-row'>
<div className='w-[290px] h-[280px] radius[10px] bg-white'>MG ZX Exclusice  
    <p className='text-sm'>Hatchback</p>

    <div className='w-[232px] h-[72px]  mb-4 '> <img src="car111.png" alt="Car" />
     <div className='mr-4 flex'> <BsFuelPumpFill /> <div className='mr-3'>70L</div>
     <GiCartwheel />
     <div className=' mr-2'> Manual </div>
      <MdPeopleAlt /> 
      4people
     </div>

     <div className='m-2 '>$76.00/day
      <button className='bg-[#3563E9] w-[94px] h-[35px] rounded-md text-white'>Rent Now</button>
     </div>
     
    </div>
    
    
  </div>
<div className='w-[290px] h-[280px] radius[10px] bg-white'>New MG ZS
    <p className='text-sm'>SUV</p>

    <div className='w-[232px] h-[72px]  mb-4 '> <img src="car222.png" alt="Car" />
     <div className='mr-4 flex'> <BsFuelPumpFill /> <div className='mr-3'>80L</div>
     <GiCartwheel />
     <div className=' mr-2'> Manual </div>
      <MdPeopleAlt /> 
      6people
     </div>

     <div className='m-2 '>$80.00/day
      <button className='bg-[#3563E9] w-[94px] h-[35px] rounded-md text-white'>Rent Now</button>
     </div>
     
    </div>
    
  
    </div>
<div className='w-[290px] h-[280px] radius[10px] bg-white'> MG ZX Excite
    <p className='text-sm'>Hatchback</p>

    <div className='w-[232px] h-[72px]  mb-4 '> <img src="car111.png" alt="Car" />
     <div className='mr-4 flex'> <BsFuelPumpFill /> <div className='mr-3'>90L</div>
     <GiCartwheel />
     <div className=' mr-2'> Manual </div>
      <MdPeopleAlt /> 
      4people
     </div>

     <div className='m-2 '>$74.00/day
      <button className='bg-[#3563E9] w-[94px] h-[35px] rounded-md text-white'>Rent Now</button>
     </div>
     
    </div>
    
    </div>
<div className='w-[290px] h-[280px] radius[10px] bg-white'>New MG ZS  
    <p className='text-sm'>SUV</p>

    <div className='w-[232px] h-[72px]  mb-4 '> <img src="car222.png" alt="Car" />
     <div className='mr-4 flex'> <BsFuelPumpFill /> <div className='mr-3'>80L</div>
     <GiCartwheel />
     <div className=' mr-2'> Manual </div>
      <MdPeopleAlt /> 
      6people
     </div>

     <div className='m-2 '>$80.00/day
      <button className='bg-[#3563E9] w-[94px] h-[35px] rounded-md text-white'>Rent Now</button>
     </div>
     
    </div>
    

      </div>
</div>
<div className='justify-center flex mr-8 sm:flex-col '>
<button className='  bg-[#3563E9] w-[156px] h-[44px] top-5 rounded-md '>Show more car</button>
</div>

      </div>
      
</div>


  )
}

export default Hero
