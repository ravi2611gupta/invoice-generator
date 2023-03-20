import React, { useRef } from 'react'
// import jsPDF from 'jspdf';
import Pdf from "react-to-pdf";
import Form from './Form';


const Outer = () => {

  const formRef = useRef(null);


  return (
    <div className='min-h-screen w-10/12 flex justify-center pt-10'>
      <div className='w-[62%]' ref={formRef}>
        <Form />
      </div>
      <div className='w-2/12 text-center px-3'>
      <Pdf targetRef={formRef} filename={`Gen-${Date.now()}.pdf`}>
        {({ toPdf }) => <button className='h-10 px-5 w-full bg-violet-700 text-white rounded-md' onClick={toPdf}>Download Invoice</button>}
      </Pdf>
    </div>
    </div>
  )
}

export default Outer