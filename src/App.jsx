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
import fpr from './images/fpr.jpg'
import con from './images/conus.jpg'
import flight from './images/flight.jpg'
import zgp from './images/z_gp.jpg'
import bs from './images/bakka_salah.png'
import alyan from './images/alyan.png'
import magrnd from './images/massa_grand.png'
import bomra from './images/bomra.jpg'
import hij from './images/hij.jpg'
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
          1000,
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
     <Flight img={flight}para={"كما لم تنس الشركة توفير خدمة الطيران من والى الحرمين علي متن طائرات مصر للطيران و الخط السعودي للطيران متيحة لعملائها أفضل الخدمات"}/>
    
    <img className='im' src={bomra}/>
    <button onClick={()=>{setShowomra(!showomra) ;setShow3(false);setShow5(false);setShowe(false);setShow4(false) }} className='bt'>{showomra? "اخفاء" :"عرض"} </button>
    
    
    {showomra?
     <img src={khamsa}alt='Loading⏳' className='im'/>:null}{showomra?
            <button onClick={()=>{setShow5(!show5)}} className='bt'>{show5? "اخفاء" :"عرض"} </button>:null}
            {show5?
<h1 className='no'>عذرا، لا يتوفر برامج من هذه الفئة حاليا</h1>
    
    
    
    :null}
         {/* {show5?
 <div className='types'>
  
   <Fade delay={200}>
    <h1 className='ked'> ⭐⭐⭐⭐⭐ برامج الخمس نجوم -ب- 10 أيام- 9 ليالي </h1>
    <Mekka title={"أنجم مكة أو الشهداء أو ما يماثلها"} img={trb} para={"   مدة الاقامة: خمس ليالي || الوجبات: بالافطار "}/>
    <Madina title={" موفنبيك أنوار المدينة أو سجي المدينة أو ما يماثلها"} img={smb} para={"  مدة الاقامة: أربع ليالي || الوجبات: بالافطار " }/> 
    <h2 className='date' >تاريخ الرحلة:  يوم 22 جمادى الأولي 1445 هجري و 29 جمادي الأولي 1445 هجري</h2>
    <h2 className='date'>تاريخ الرحلة:  يوم 6 ديسمبر 2023 و 13 ديسمبر 2023</h2>
    <ul>
      <li>سعر الثنائي:72000 جنيه مصري-</li>
      <li>سعر الثلاثي:65000 جنيه مصري-</li>
      <li>سعر الرباعي:60000 جنيه مصري-</li>
    </ul>
      </Fade> 
    </div>
    
    
    
    :null} */}








{showomra?
    <img src={arba3a}alt='Loading⏳' className='im'/> :null} {showomra?  
            <button onClick={()=>{setShow4(!show4)}} className='bt'>{show4? "اخفاء" :"عرض"} </button>:null}
            {show4?

    <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'> ⭐⭐⭐⭐ برامج الأربع نجوم 10 أيام- 9 ليالي </h1>
   <Mekka title={"الماسة جراند أو رامادا"} img={magrnd} para={"   مدة الاقامة: خمس ليالي || الوجبات: بالافطار "}/>
   <Madina title={"مجموعة الزهراء"} img={zgp} para={"  مدة الاقامة: أربع ليالي|| الوجبات: بالافطار " }/> 
   <h2 className='date' >تاريخ الرحلة:  يوم 14 جمادى الاخرة 1445 هجري - 27 ديسمبر 2023</h2>
    {/* <h2 className='date'>تاريخ الرحلة:  يوم 6 ديسمبر 2023 و 13 ديسمبر 2023</h2> */}
   <ul>
     <li>سعر الثنائي:48700 جنيه مصري-</li>
     <li>سعر الثلاثي:44500 جنيه مصري-</li>
     <li>سعر الرباعي:43500 جنيه مصري-</li>
     <li>سعر الطفل من عامين الى 11 عاما:23500 جنيه مصري-</li>
     <li>سعر الطفل حتى عامين:15500 جنيه مصري-</li>
   </ul>
     </Fade> 
   </div>:null}
 
   










{showomra?  
   <img src={tlataan}alt='Loading⏳' className='im'/>:null}{showomra? 
            <button onClick={()=>{setShow3(!show3)}} className='bt'>{show3? "اخفاء" :"عرض"} </button>:null}
   {show3?

<div className='types'>

<Fade delay={200}>
<h1 className='ked'> ⭐⭐⭐ برامج الثلاثة نجوم 15 يوم- 14 ليلة </h1>
<Mekka title={"بكة الصلاح أو الأيام"} img={bs} para={"   مدة الاقامة: 11 ليلة || الوجبات: بدون "}/>
   <Madina title={"مجموعة الزهراء"} img={zgp} para={"  مدة الاقامة: أربع ليالي|| الوجبات: بدون " }/> 
   <h2 className='date' >تاريخ الرحلة:  يوم 14 جمادى الاخرة 1445 هجري - 27 ديسمبر 2023</h2>
    {/* <h2 className='date'>تاريخ الرحلة:  يوم 6 ديسمبر 2023 و 13 ديسمبر 2023</h2> */}
<ul>
 <li>سعر الثنائي:40500 جنيه مصري-</li>
 <li>سعر الثلاثي:36000 جنيه مصري-</li>
 <li>سعر الرباعي:33500 جنيه مصري-</li>
 <li>سعر الطفل من عامين الى 11 عاما:23500 جنيه مصري-</li>
     <li>سعر الطفل حتى عامين:15500 جنيه مصري-</li>
</ul>
 </Fade> 
</div>:null}
{show3?

<div className='types'>

<Fade delay={200}>
<h1 className='ked'> ⭐⭐⭐ برامج الثلاثة نجوم 15 يوم- 14 ليلة </h1>
<Mekka title={"قصر العليان - بالمواصلات"} img={bs} para={"   مدة الاقامة: 11 ليلة || الوجبات: بدون "}/>
   <Madina title={"مجموعة الزهراء"} img={zgp} para={"  مدة الاقامة: أربع ليالي|| الوجبات: بدون " }/> 
<h2 className='date' >تاريخ الرحلة:  يوم 14 جمادى الاخرة 1445 هجري - 27 ديسمبر 2023</h2>
 {/* <h2 className='date'>تاريخ الرحلة:  يوم 6 ديسمبر 2023 و 13 ديسمبر 2023</h2> */}
<ul>
  <li>سعر الثنائي:35500 جنيه مصري-</li>
  <li>سعر الثلاثي:32700 جنيه مصري-</li>
  <li>سعر الرباعي:28500 جنيه مصري-</li>
  <li>سعر الطفل من عامين الى 11 عاما:23500 جنيه مصري-</li>
     <li>سعر الطفل حتى عامين:15500 جنيه مصري-</li>
</ul>
  </Fade> 
</div>:null}















   {showomra? 
   <img src={eqt}alt='Loading⏳' className='im'/>:null} {showomra? 
            <button onClick={()=>{setShowe(!showe)}} className='bt'>{showe? "اخفاء" :"عرض"} </button>:null} 
            {showe?
              <h1 className='no'>عذرا، لا يتوفر برامج من هذه الفئة حاليا</h1>:null}








     </Fade>
     <Fade delay={200}>
     <div className='prices'>
     <h1>الأسعار بالنسبة للبرامج فوق الاقتصادية تشمل</h1>
      <div className='print'>
        <ul>
          <li>هدايا قيمة للمعتمرين-</li>
          <li>الانتقالات  بأتوبيسات حديثة مكيفة موديل 2022-2023- + المزارات داخل المملكةالعربية السعودية</li>
          <li>استخراج تأشيرة العمرة بالباركود-</li>
          <li>تذكرة الطيران+الاقامة-</li>
          <li>مرافقة مشرف ذو خبرة-</li>
        </ul>
<img src={fpr}/></div>




     </div>
     </Fade>
     <Fade delay={200}>
     <div className='pricesb'>
     <h1>ملاحظات بالنسبة للبرامج فوق الاقتصادية</h1>
      <div className='printb'>
        <ul>
          <li>مطلوب جواز سفر بصلاحية لا تقل عن ستة أشهر</li>
          <li>مطلوب عدد 2 صورة شخصية بخلفية بيضاء</li>
          <li>مطلوب تصريح سفر لمن هم في سن التجنيد-مسئولية المعتمر</li>
          <li>خصم 5000 جنيه لأصحاب التأشيرات الشخصية و السياحية</li>
          <li>خصم 8000 جنيه لأصحاب تأشيرات الأعمال و العائلية</li>
          
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
          <li>e-mail: info@almassa-travelgroup.com</li>
          <a href ="https://www.facebook.com/profile.php?id=61554023739000" className='pricesa'>أو من خلال صفحتنا علي فيسبوك </a>
          <li className='t'>مسئول التقسيط:01006501820</li>
        </ul>
<img src={con}/></div>




     </div>
     </Fade>



    </div>
  );
}

export default App;
