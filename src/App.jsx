import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  BrowserRouter as Router, Route, Link, Routes
} from "react-router-dom";
import { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import m from './images/covsub.jpg'
import l from './images/email-logo.png'
import khedma from './images/m1.jpg'
import eqt from './images/eqt.jpg'
import tlataan from './images/3.jpg'
import arba3a from './images/2.jpg'
import khamsa from './images/1.jpg'
import aqiq from './images/emantyba.png'
import s_royal from './images/massa_grand.png'
import fpr from './images/fpr.jpg'
import con from './images/conus.jpg'
import flight from './images/flight.jpg'
import ayafa from './images/abrajdyafa.jpeg'
import mozahab from './images/mokhgold.jpeg'
import arcan from './images/arkanbecca.webp'
import darsalam from './images/darsalamfaddy.webp'
import bomra from './images/bomra.jpg'
import hij from './images/hij.jpg'
import negaj from './images/negmaajyad.jpeg'
import dmadina from './images/dyarmadina.jpeg'
import './App.css';
import Mekka from './components/Mekka';
import Madina from './components/Madina';
import Khedma from './components/Khedma';
import Flight from './components/Flight';

function App() {
  const [showomra,setShowomra]=useState(false);
  const [show5,setShow5]=useState(false); 
  const [show4,setShow4]=useState(false); 
  const [show3,setShow3]=useState(false); 
  const [showe,setShowe]=useState(false); 
  return (
    <div className="App">
      
      <img src={m} className='imgintro'/>


      <div className='mintro'>    <Fade delay={200}>
      <img src={l} className='l'/>
  
      <div className='intro'> <TypeAnimation
        sequence={[
          ' الى كل من غلبهم الشوق و ملأتهم الأمنيات بزيارة بيت اللّه الحرام ومسجد رسول اللّه ﷺ، تعلن شركة الماسة ترافيل-ترخيص سياحة 2197- عن فتح باب حجز الحج و العمرة لموسم 1445 من الهجرة النبوية الشريفة سائلين اللّه-عزّ و جلّ- لنا ولكم القبول والاخلاص',
          1000000,
          "",
        ]}
        speed={15}
        style={{ whiteSpace: 'pre-line', fontSize: '2.4em', color: 'white' 
        ,marginBottom:'12vh'}}
        repeat={Infinity}
      /></div></Fade></div>



    <div className='hintro'><Fade delay={200}>
    <img src={hij}/>
    <div className='hintrot'> <p>
    تعلن شركة الماسة ترافيل جروب عن فتح باب الحج لعملائها الكرام بأسعار تنافسية علي مستوي جمهورية مصر العربية. الان وبدون شروط قم بحجز مكانك معنا لتحصل على خدمات عالية الجودة. الى من لم تصب أساميهم القرعة فرصتك الان امامك فانتهزها. الى السيدات و السادة بجميع الأعمار ندعوكم لحجز مكانكم مع شركة الماسة ترافيل جروب لحج بيت اللّه الحرام لعام 1445 من الهجرة النبوية الشريفة. سائلين المولى-عز و جلّ- لنا ولكم القبول و الاخلاص</p></div>
    </Fade>
    </div>





      
      

      <Fade delay={200}>

     <Khedma img={khedma}para={"تقوم الشركة بتوفير خدمات ذات مستويات عالية لعملائها الكرام كما تتيح لهم فرصة اختيار ما ينسابهم من برامج اقامة و خدمات اضافة الى امكانية تقديم برامج مخصوصة للأفراد حسبما يناسب العملاء و الشركة"} />
     <Flight img={flight}para={"كما توفر الشركة خدمة استخراج تأشيرات السفر للمملكة العربية السعودية و لغيرها من البلدان العربية "}/>
    
    <img className='im' src={bomra}/>
    <button onClick={()=>{setShowomra(!showomra) ;setShow3(false);setShow5(false);setShowe(false);setShow4(false) }} className='bt'>{showomra? "اخفاء" :"عرض"} </button>
   
    {showomra?
   <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'>من 8 رمضان الى 7 شوال</h1>
   <Mekka title={"فندق نجمة أجياد"} img={negaj} para={"من 13 رمضان الى 7 شوال "}/>
   <Madina title={"فندق مجموعة ديار المدينة"} img={dmadina} para={" من 8 رمضان الى 13 رمضان "}/> 
   <ul>
   <li>سعر الفرد 69900 جنسه مصري</li>


   </ul>
     </Fade> 
   </div>:null} 

    {showomra?
   <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'>من 8 رمضان الى 7 شوال</h1>
   <Mekka title={"فندق أركان بكة"} img={arcan} para={"من 13 رمضان الى 7 شوال "}/>
   <Madina title={"فندق ديار السلام الفضّيّ"} img={darsalam} para={" من 8 رمضان الى 13 رمضان " }/> 
   <ul>
   <li>سعر الفرد 65000 جنسه مصري</li>


   </ul>
     </Fade> 
   </div>:null} 


     
    {showomra?
   <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'>من 23 شعبان الى 8 رمضان</h1>
   <Mekka title={"فندق نجمة أجياد"} img={negaj} para={"من 5 رمضان الى 13 رمضان "}/>
   <Madina title={"فندق مجموعة ديار المدينة"} img={dmadina} para={" من 13 رمضان الى 17 رمضان "}/> 
   <ul>
   <li>سعر الفرد 45000 جنسه مصري</li>


   </ul>
     </Fade> 
   </div>:null} 


    {showomra?
   <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'>من 5 رمضان الى 17 رمضان</h1>
   <Mekka title={"فندق أركان بكة"} img={arcan} para={"من 5 رمضان الى 13 رمضان "}/>
   <Madina title={"فندق ديار السلام الفضّيّ"} img={darsalam} para={" من 13 رمضان الى 17 رمضان " }/> 
   <ul>
   <li>سعر الفرد 42000 جنسه مصري</li>


   </ul>
     </Fade> 
   </div>:null} 
  
  
  
    {showomra?
   <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'>من 23 شعبان الى 8 رمضان</h1>
   <Mekka title={"فندق نجمة أجياد"} img={negaj} para={"من 23 شعبان الى 5 رمضان "}/>
   <Madina title={"فندق مجموعة ديار المدينة"} img={dmadina} para={" من 5 رمضان الى 8 رمضان " }/> 
   <ul>
   <li>سعر الفرد 45000 جنسه مصري</li>


   </ul>
     </Fade> 
   </div>:null} 




    {showomra?
   <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'>من 23 شعبان الى 8 رمضان</h1>
   <Mekka title={"فندق أركان بكة"} img={arcan} para={"من 23 شعبان الى 5 رمضان "}/>
   <Madina title={"فندق ديار السلام الفضّيّ"} img={darsalam} para={" من 5 رمضان الى 8 رمضان " }/> 
   <ul>
   <li>سعر الفرد 42000 جنسه مصري</li>


   </ul>
     </Fade> 
   </div>:null} 




        {showomra?
   <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'>برنامج العاشر من شعبان</h1>
   <Mekka title={"فندق أركان بكة"} img={arcan} para={"مدة الاقامة:5 ليال  "}/>
   <Madina title={"فندق ديار السلام الفضّيّ"} img={darsalam} para={" مدة الاقامة:ليلتان " }/> 
   <ul>
   <li>الأسعار تبدأ من 27500 جنيه مصري</li>


   </ul>
     </Fade> 
   </div>:null} 





    {showomra?
   <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'>برنامج الرابع من شعبان</h1>
   <Mekka title={"فندق أبراج الضيافة"} img={ayafa} para={" مدة الاقامة:11 ليلة  "}/>
   <Madina title={"فندق المختارة الذهبي"} img={mozahab} para={"  مدة الاقامة:4 ليال " }/> 
   <ul>
   <li>الأسعار تبدأ من 39900 جنيه مصري</li>


   </ul>
     </Fade> 
   </div>:null} 
    
    {/* {showomra?
      <img src={khamsa}alt='Loading⏳' className='im'/>:null}{showomra?
            <button onClick={()=>{setShow5(!show5)}} className='bt'>{show5? "اخفاء" :"عرض"} </button>:null}
           {show5?
 <h1 className='no'>عذرا، لا يتوفر برامج من هذه الفئة حاليا</h1>
    
    
    
     :null}  */}
        

    
    
    







{/* 
{showomra?
     <img src={arba3a}alt='Loading⏳' className='im'/> :null} {showomra?  
             <button onClick={()=>{setShow4(!show4)}} className='bt'>{show4? "اخفاء" :"عرض"} </button>:null}
            {show4?

<h1 className='no'>عذرا، لا يتوفر برامج من هذه الفئة حاليا</h1> :null} */}
 
   










{/* {showomra?  
    <img src={tlataan}alt='Loading⏳' className='im'/>:null}{showomra? 
            <button onClick={()=>{setShow3(!show3)}} className='bt'>{show3? "اخفاء" :"عرض"} </button>:null}

      // {/*show3?
//    <div className='types'>
  
//   <Fade delay={200}>
//   <h1 className='ked'> ⭐⭐⭐ برنامج ال15 يوم ثلاثة نجوم  </h1>
//    <Mekka title={"بدر الماسة أو ما يماثله"} img={magrnd} para={" التصنيف: ثلاثة نجوم   "}/>
//    <Madina title={"كيان الماسي"} img={zgp} para={"  التصنيف: ثلاثة نجوم " }/> 
//    <h2 className='date' >تاريخ الرحلة:  يوم 21 جمادى الاخرة 1445 هجري - 3 يناير 2023</h2>
//     <h2 className='date' >تاريخ الرحلة:  يوم 16 رجب 1445 هجري - 28 يناير 2023</h2>
//    <ul>
//    <li>سعر الثنائي:43000 جنيه مصري-</li>
//  <li>سعر الثلاثي:37000 جنيه مصري-</li>
//  <li>سعر الرباعي:34000 جنيه مصري-</li>

//    </ul>
//      </Fade> 
//    </div>:null*/}  

    {/* {show3?

    <h1 className='no'>عذرا، لا يتوفر برامج من هذه الفئة حاليا</h1>:null} */}















{/* 
   {showomra? 
   <img src={eqt}alt='Loading⏳' className='im'/>:null} {showomra? 
            <button onClick={()=>{setShowe(!showe)}} className='bt'>{showe? "اخفاء" :"عرض"} </button>:null} 
            {showe?
              <h1 className='no'>عذرا، لا يتوفر برامج من هذه الفئة حاليا</h1>:null} */}








     </Fade>
     <Fade delay={200}>
     <div className='prices'>
     <h1>الأسعار تشمل</h1>
      <div className='print'>
        <ul>
          <li>المزارات داخل المملكةالعربية السعودية</li>
          <li>استخراج تأشيرة العمرة بالباركود</li>
          <li>تذكرة الطيران+الاقامة</li>
          <li>مرافقة مشرف ذو خبرة</li>
          <li>التنقلات الداخلية داخل المملكة العربية السعودية</li>
        </ul>
<img src={fpr}/></div>




     </div>
     </Fade>
     <Fade delay={200}>
     <div className='pricesb'>
     <h1>ملاحظات بالنسبة للبرامج </h1>
      <div className='printb'>
        <ul>
    
          <li>أية زيادة تطرأ علي الأسعار يتم علي اثرها تغيير الأسعار </li>
          <li>مطلوب جواز سفر بصلاحية لا تقل عن سنة</li>
          <li>مطلوب عدد 2 صورة شخصية بخلفية بيضاء</li>
          <li>مطلوب تصريح سفر لمن هم في سن التجنيد-مسئولية المعتمر</li>
          <li>خصم خاص لخاملي تأشيرات الزيارة</li>
          <li>في حالة سداد كامل الثمن لن يتم تحصيل رسوم اضافية</li>
          
        </ul>
</div>




     </div>
     </Fade>

     

     {/* <Fade delay={200}>
     <div className='prices'>
     <h1>الأسعار بالنسبة للبرامج الاقتصادية تشمل</h1>
      <div className='print'>
        <ul>
          <li>السفر علي خطوط طيران النيل خط السير :القاهرة-جدة والعودة : جدة-القاهرة و أي زيادة تطرأ تضاف علي البرامج</li>
          <li>سعر الريال بالبرنامج تم تقديره علي أساس 11.5 جنيه مصري و أي زيادة أو نقصان يتم في عقبها تغيير الأسعار</li>
          <li>الانتقالات داخل السعودية بأتوبيسات فاخرة</li>
          <li>مزارات مكة المكرمة و المدينة المنورة</li>
          <li>استخراج تأشيرة العمرة بالباركود</li>
        </ul>
<img src={fpp}/></div>




     </div>
     </Fade>
     <Fade delay={200}>
     <div className='pricesb'>
     <h1>ملاحظات بالنسبة للبرامج الاقتصادية</h1>
      <div className='printb'>
        <ul>
          <li>مطلوب جواز سفر بصلاحية لا تقل عن سنة</li>
          <li>عدد 2 صور بخلفية بيضاء</li>
          <li>يمكن الدفع كاش أو بالتقسيط بدون فوائد وبدون مقدم علي سنة،سنتين أو ثلاث سنوات</li>
          <li>السعر خاص للمجموعات</li>
          <li>بالنسبة لفندق مكة يتوفر باص مجانا من الفندق الى الحرم المكي و العكس يوميا علي مدار 24 ساعة</li>
          <li>لمن يرغب بحجز الحج لهذا العام سرعة التقدم بالتسجيل لان الاعداد محدودة</li>
          
        </ul>
</div>




     </div>
     </Fade> */}



     <Fade delay={200}>
     <div className='pricesc'>
     <h1>للحجز و التواصل</h1>
      <div className='printc'>
        <ul>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSduJ_PMDHLPPEPTy-dcnn17lvGcsm7xEI2UzAc572_NbsTUcQ/viewform'  className='f'>يمكنكم الحجز مباشرة من هنا</a>
          <li>أو من خلال</li>
          <li>هواتف الشركة: 35722066</li>
          <li>01001485673</li>
          <li>01009266616</li>
          <li>01005176087</li>
          <a href="mailto:e-mail: info@almassa-travelgroup.com" className='pricesa'>e-mail: info@almassa-travelgroup.com</a>
          <a href ="https://www.facebook.com/profile.php?id=61554023739000" className='pricesa'>أو من خلال صفحتنا علي فيسبوك </a>
         
        </ul>
<img src={con}/></div>




     </div>
     </Fade>



    </div>
  );
}

export default App;
