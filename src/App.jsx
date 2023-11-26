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
import flight from './images/flight.jpg'
import sm from './images/hiltonmd.png'
import con from './images/conus.jpg'
import er from './images/emaar.png'
import tr from './images/hiltonmk.png'
import ty from './images/emroyal.png'
import trb from './images/angom.png'
import smb from './images/mov.png'
import hty from './images/hayah_tyba.webp'
import ka from './images/keswa.jpg'
import htyq from './images/emar.png'
import bomra from './images/bomra.jpg'
import kaq from './images/kher.png'
import fpr from './images/fpr.jpg'
import hij from './images/hij.jpg'
import fpp from './images/fpp.jpg'
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
          ' الى كل من غلبهم الشوق و ملأتهم الأمنيات بزيارة بيت اللّه الحرام ومسجد رسول اللّه ﷺ، تعلن شركة الماسة ترافيل-ترخيص سياحة 2197- عن فتح باب حجز الحج العمرة لموسم 1445 من الهجرة النبوية الشريفة سائلين اللّه-عزّ و جلّ- لنا ولكم القبول والاخلاص',
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
 <div className='types'>
  
   <Fade delay={200}>
    <h1 className='ked'> ⭐⭐⭐⭐⭐ برامج الخمس نجوم -أ- 10 أيام- 9 ليالي </h1>
    <Mekka title={"هيلتون مكة أو المروة روتانا أو ما يماثلها"} img={tr} para={"   مدة الاقامة: خمس ليالي || الوجبات: بالافطار "}/>
    <Madina title={" هيلتون المدينة أو رؤوف المدينة أو ما يماثلها"} img={sm} para={"  مدة الاقامة: أربع ليالي || الوجبات: بالافطار " }/> 
    <h2 className='date' >تاريخ الرحلة:  يوم 22 جمادى الأولي 1445 هجري و 29 جمادي الأولي 1445 هجري</h2>
    <h2 className='date'>تاريخ الرحلة:  يوم 6 ديسمبر 2023 و 13 ديسمبر 2023</h2>
    <ul>
      <li>سعر الثنائي:86500 جنيه مصري-</li>
      <li>سعر الثلاثي:75500 جنيه مصري-</li>
      <li>سعر الرباعي:------ جنيه مصري-</li>
    </ul>
      </Fade> 
    </div>
    
    
    
    :null}
         {show5?
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
    
    
    
    :null}
  {show5?
 <div className='types'>
  
   <Fade delay={200}>
    <h1 className='ked'> ⭐⭐⭐⭐⭐ برامج الخمس نجوم -أ- 7 أيام- 6 ليالي </h1>
    <Mekka title={"هيلتون مكة أو المروة روتانا أو ما يماثلها"} img={tr} para={"   مدة الاقامة: ثلاث ليالي || الوجبات: بالافطار "}/>
    <Madina title={" هيلتون المدينة أو رؤوف المدينة أو ما يماثلها"} img={sm} para={"  مدة الاقامة: ثلاث ليالي || الوجبات: بالافطار " }/> 
    <h2 className='date' >تاريخ الرحلة:  يوم 22 جمادى الأولي 1445 هجري و 29 جمادي الأولي 1445 هجري</h2>
    <h2 className='date'>تاريخ الرحلة:  يوم 6 ديسمبر 2023 و 13 ديسمبر 2023</h2>
    <ul>
      <li>سعر الثنائي:70500 جنيه مصري-</li>
      <li>سعر الثلاثي:63500 جنيه مصري-</li>
      <li>سعر الرباعي:------ جنيه مصري-</li>
    </ul>
      </Fade> 
    </div>
    
    
    
    :null}      
  {show5?
 <div className='types'>
  
   <Fade delay={200}>
    <h1 className='ked'> ⭐⭐⭐⭐⭐ برامج الخمس نجوم -ب- 7 أيام- 6 ليالي </h1>
    <Mekka title={"أنجم مكة أو الشهداء أو ما يماثلها"} img={trb} para={"   مدة الاقامة: ثلاث ليالي || الوجبات: بالافطار "}/>
    <Madina title={" موفنبيك أنوار المدينة أو سجي المدينة أو ما يماثلها"} img={smb} para={"  مدة الاقامة: ثلاث ليالي || الوجبات: بالافطار " }/> 
    <h2 className='date' >تاريخ الرحلة:  يوم 22 جمادى الأولي 1445 هجري و 29 جمادي الأولي 1445 هجري</h2>
    <h2 className='date'>تاريخ الرحلة:  يوم 6 ديسمبر 2023 و 13 ديسمبر 2023</h2>
    <ul>
      <li>سعر الثنائي:59500 جنيه مصري-</li>
      <li>سعر الثلاثي:54500 جنيه مصري-</li>
      <li>سعر الرباعي:51500 جنيه مصري-</li>
    </ul>
      </Fade> 
    </div>
    
    
    
    :null}     








{showomra?
    <img src={arba3a}alt='Loading⏳' className='im'/> :null} {showomra?  
            <button onClick={()=>{setShow4(!show4)}} className='bt'>{show4? "اخفاء" :"عرض"} </button>:null}
            {show4?

    <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'> ⭐⭐⭐⭐ برامج الأربع نجوم 10 أيام- 9 ليالي </h1>
   <Mekka title={"اعمار جراند أو ورث أجياد أو ما يماثلها"} img={er} para={"   مدة الاقامة: خمس ليالي || الوجبات: بالافطار "}/>
   <Madina title={"اعمار رويال أو طيبة المدينة أو ما يماثلها"} img={ty} para={"  مدة الاقامة: أربع ليالي|| الوجبات: بالافطار " }/> 
   <h2 className='date' >تاريخ الرحلة:  يوم 22 جمادى الأولي 1445 هجري و 29 جمادي الأولي 1445 هجري</h2>
    <h2 className='date'>تاريخ الرحلة:  يوم 6 ديسمبر 2023 و 13 ديسمبر 2023</h2>
   <ul>
     <li>سعر الثنائي:58500 جنيه مصري-</li>
     <li>سعر الثلاثي:53500 جنيه مصري-</li>
     <li>سعر الرباعي:48500 جنيه مصري-</li>
   </ul>
     </Fade> 
   </div>:null}
 
   {show4?

<div className='types'>

<Fade delay={200}>
<h1 className='ked'> ⭐⭐⭐⭐ برامج الأربع نجوم 7 أيام- 6 ليالي </h1>
<Mekka title={"اعمار جراند أو ورث أجياد أو ما يماثلها"} img={er} para={"   مدة الاقامة: ثلاث ليالي || الوجبات: بالافطار "}/>
   <Madina title={"اعمار رويال أو طيبة المدينة أو ما يماثلها"} img={ty} para={"  مدة الاقامة: ثلاث ليالي|| الوجبات: بالافطار " }/> 
<h2 className='date' >تاريخ الرحلة:  يوم 22 جمادى الأولي 1445 هجري و 29 جمادي الأولي 1445 هجري</h2>
    <h2 className='date'>تاريخ الرحلة:  يوم 6 ديسمبر 2023 و 13 ديسمبر 2023</h2>
<ul>
 <li>سعر الثنائي:52500 جنيه مصري-</li>
 <li>سعر الثلاثي:47500 جنيه مصري-</li>
 <li>سعر الرباعي:44500 جنيه مصري-</li>
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
   <Mekka title={"أبراج الكسوة-ديار الضيافة أو ما يماثلها"} img={ka} para={"مدة الاقامة: 11 ليلة || الوجبات: بدون "}/>
   <Madina title={"حياة طيبة أو اعمار طيبة أو ما يماثلها"} img={hty} para={"  مدة الاقامة: ثلاث ليال || الوجبات: بدون " }/> 
   <h2 className='date' >تاريخ الرحلة:  يوم 22 جمادى الأولي 1445 هجري و 29 جمادي الأولي 1445 هجري</h2>
    <h2 className='date'>تاريخ الرحلة:  يوم 6 ديسمبر 2023 و 13 ديسمبر 2023</h2>
   <ul>
     <li>سعر الثنائي:36500 جنيه مصري-</li>
     <li>سعر الثلاثي:33500 جنيه مصري-</li>
     <li>سعر الرباعي:31500 جنيه مصري-</li>
   </ul>
     </Fade> 
   </div>:null}
















   {showomra? 
   <img src={eqt}alt='Loading⏳' className='im'/>:null} {showomra? 
            <button onClick={()=>{setShowe(!showe)}} className='bt'>{showe? "اخفاء" :"عرض"} </button>:null} 
            {showe?
   <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'>  برامج المستوي الاقتصادي-ب-15 يوم - 14 ليلة </h1>
   <Mekka title={"أبراج الخير أو مجموعة مسك أو أو ما يماثله بالمواصلات للحرم"} img={kaq} para={"مدة الاقامة: 11 ليلة || الوجبات: بدون "}/>
   <Madina title={"اعمار المدينة أو بارادايس أو ما يماثله"} img={htyq} para={"  مدة الاقامة: ثلاث ليال || الوجبات: بدون " }/> 
   <h2 className='date' >تاريخ الرحلة:  يوم 22 جمادى الأولي 1445 هجري و 29 جمادي الأولي 1445 هجري</h2>
    <h2 className='date'>تاريخ الرحلة:  يوم 6 ديسمبر 2023 و 13 ديسمبر 2023</h2>
   <ul>
     <li>سعر الثنائي:33500 جنيه مصري-</li>
     <li>سعر الثلاثي:30500 جنيه مصري-</li>
     <li>سعر الرباعي:28500 جنيه مصري-</li>
   </ul>
     </Fade> 
   </div>:null}








     </Fade>
     <Fade delay={200}>
     <div className='prices'>
     <h1>الأسعار بالنسبة للبرامج فوق الاقتصادية تشمل</h1>
      <div className='print'>
        <ul>
          <li>السفر علي خطوط مصر للطيران أو الخطوط السعودية يكون علي الدرجة السياحية و أي زيادة تطرأ تضاف علي البرامج</li>
          <li>سعر الريال بالبرنامج تم تقديره علي أساس 11.5 جنيه مصري و أي زيادة أو نقصان يتم في عقبها تغيير الأسعار</li>
          <li>الانتقالات داخل السعودية بأتوبيسات فاخرة</li>
          <li>مزارات مكة المكرمة و المدينة المنورة</li>
          <li>استخراج تأشيرة العمرة بالباركود</li>
        </ul>
<img src={fpr}/></div>




     </div>
     </Fade>
     <Fade delay={200}>
     <div className='pricesb'>
     <h1>ملاحظات بالنسبة للبرامج فوق الاقتصادية</h1>
      <div className='printb'>
        <ul>
          <li>مطلوب جواز سفر بصلاحية لا تقل عن سنة</li>
          <li>عدد 2 صور بخلفية بيضاء</li>
          <li>يتم خصم مبلغ 7500 جنيه مصري لحاملي تأشيرات الزيارة بأنواعها أو الشنجن</li>
          <li>متاح لدينا سيارات ليموزين بالمملكة ويتم التنسيق أثناء الحجز</li>
          <li>بالنسبة للفنادق الخمس و الأربع نجوم التسكين بالغرفة الثلاثي عبارة عن 2 سرير ستاندرد زائد 1 اكسترا بيد والرباعي 2 سرير ستاندرد زائد 2 اكسترا بيد</li>
          <li>لمن يرغب بحجز الحج لهذا العام سرعة التقدم بالتسجيل لان الاعداد محدودة</li>
          
        </ul>
</div>




     </div>
     </Fade>

     

     <Fade delay={200}>
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
     </Fade>



     <Fade delay={200}>
     <div className='pricesc'>
     <h1>للحجز و التواصل</h1>
      <div className='printc'>
        <ul>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSduJ_PMDHLPPEPTy-dcnn17lvGcsm7xEI2UzAc572_NbsTUcQ/viewform'  className='f'>يمكنكم الحجز مباشرة من هنا</a>
          <li>أو من خلال</li>
          <li>هواتف الشركة: 35722066</li>
          <li>01001485673</li>
          <li>01004245835</li>
          <li>01005176087</li>
          <li>e-mail: info@almassa-travelgroup.com</li>
          <a href ="https://www.facebook.com/profile.php?id=61552124111227" className='pricesa'>أو من خلال صفحتنا علي فيسبوك </a>
          <li className='t'>مسئول التقسيط:01006501820</li>
        </ul>
<img src={con}/></div>




     </div>
     </Fade>



    </div>
  );
}

export default App;
