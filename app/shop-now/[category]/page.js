import FilterSide from '@/components/filter/FilterSide';
import React from 'react'

async function page({params}) {
  const category = await params
  console.log(category.category);
  
  return (
    <div className=' max-w-[400px]'>
      <FilterSide/>
    </div>
  )
}

export default page