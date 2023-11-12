import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  BrowserRouter as Router, Route, Link, Routes
} from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import m from './images/covsub.jpg'
import l from './images/email-logo.png'
import khedma from './images/m1.jpg'
import flight from './images/flight.jpg'
import sm from './images/ram.jpg'
import con from './images/conus.jpg'
import er from './images/elaf.jpg'
import tr from './images/483742076.jpg'
import ty from './images/sa7a.png'
import hty from './images/hayah_tyba.webp'
import ka from './images/keswa.jpg'
import htyq from './images/emar.png'
import kaq from './images/kher.png'
import fpr from './images/fpr.jpg'
import fpp from './images/fpp.jpg'
import './App.css';
import Mekka from './components/Mekka';
import Madina from './components/Madina';
import Khedma from './components/Khedma';
import Flight from './components/Flight';

function App() {
  return (
    <div className="App">
       {window.scrollTo(0,0)}
      <img src={m} className='imgintro'/>
      <div className='mintro'>    <Fade delay={200}>
      <img src={l} className='l'/>
  
      <div className='intro'> <TypeAnimation
        sequence={[
          ' الى كل من غلبهم الشوق و ملأتهم الأمنيات بزيارة بيت اللّه الحرام ومسجد رسول اللّه ﷺ، تعلن شركة الماسة ترافيل-ترخيص سياحة 2197- عن فتح باب حجز العمرة لموسم 1445 من الهجرة النبوية الشريفة سائلين اللّه لنا ولكم القبول والاخلاص',
          1000,
          "",
        ]}
        speed={15}
        style={{ whiteSpace: 'pre-line', fontSize: '2.4em', color: 'white' 
        ,marginBottom:'12vh'}}
        repeat={Infinity}
      /></div></Fade></div>
      

      <Fade delay={200}>

     <Khedma img={khedma}para={"تقوم الشركة بتوفير خدمات ذات مستويات عالية لعملائها الكرام كما تتيح لهم فرصة اختيار ما ينسابهم من برامج اقامة و خدمات اضافة الى امكانية تقديم برامج مخصوصة للأفراد حسبما يناسب العملاء و الشركة"} />
     <Flight img={flight}para={"كما لم تنس الشركة توفير خدمة الطيران من والى الحرمين علي متن طائرات مصر للطيران و الخط السعودي للطيران متيحة لعملائها أفضل الخدمات"}/>
    

 <div className='types'>
  
   <Fade delay={200}>
    <h1 className='ked'> ⭐⭐⭐⭐⭐ برامج الخمس نجوم 10 أيام- 9 ليالي </h1>
    <Mekka title={"هيلتون دابل تري أو أنجم مكة أو ما يماثله"} img={tr} para={"   مدة الاقامة: خمس ليالي || الوجبات: بالافطار "}/>
    <Madina title={" رؤوف المدينة أو العقيق المدينة أو ما يماثله"} img={sm} para={"  مدة الاقامة: أربع ليالي || الوجبات: بالافطار " }/> 
    <h2 className='date' >تاريخ الرحلة: من يوم 22 جمادى الأولي 1445 هجري الى 29 جمادي الأولي 1445 هجري</h2>
    <h2 className='date'>تاريخ الرحلة: من يوم 6 ديسمبر 2023 الى 13 ديسمبر 2023</h2>
    <ul>
      <li>سعر الثنائي:64800 جنيه مصري-</li>
      <li>سعر الثلاثي:59800 جنيه مصري-</li>
      <li>سعر الرباعي:55500 جنيه مصري-</li>
    </ul>
      </Fade> 
    </div>
      
    <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'> ⭐⭐⭐⭐ برامج الأربع نجوم 10 أيام- 9 ليالي </h1>
   <Mekka title={"ايلاف المشاعر أو الشهداء أو ما يماثله"} img={er} para={"   مدة الاقامة: خمس ليالي || الوجبات: بالافطار "}/>
   <Madina title={"الساحة أو سجي المدينة أو ما يماثله"} img={ty} para={"  مدة الاقامة: أربع ليالي|| الوجبات: بالافطار " }/> 
   <h2 className='date' >تاريخ الرحلة: من يوم 22 جمادى الأولي 1445 هجري الى 29 جمادي الأولي 1445 هجري</h2>
    <h2 className='date'>تاريخ الرحلة: من يوم 6 ديسمبر 2023 الى 13 ديسمبر 2023</h2>
   <ul>
     <li>سعر الثنائي:55500 جنيه مصري-</li>
     <li>سعر الثلاثي:52500 جنيه مصري-</li>
     <li>سعر الرباعي:49500 جنيه مصري-</li>
   </ul>
     </Fade> 
   </div>
 


   <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'> ⭐⭐⭐ برامج الثلاثة نجوم 15 يوم- 14 ليلة </h1>
   <Mekka title={"أبراج الكسوة-مجموعة الضيافة أو ما يماثله"} img={ka} para={"مدة الاقامة: 11 ليلة || الوجبات: بدون "}/>
   <Madina title={"حياة طيبة أو اعمار طيبة أو ما يماثله"} img={hty} para={"  مدة الاقامة: ثلاث ليال || الوجبات: بدون " }/> 
   <h2 className='date' >تاريخ الرحلة: من يوم 22 جمادى الأولي 1445 هجري الى 29 جمادي الأولي 1445 هجري</h2>
    <h2 className='date'>تاريخ الرحلة: من يوم 6 ديسمبر 2023 الى 13 ديسمبر 2023</h2>
   <ul>
     <li>سعر الثنائي:36500 جنيه مصري-</li>
     <li>سعر الثلاثي:33500 جنيه مصري-</li>
     <li>سعر الرباعي:30500 جنيه مصري-</li>
   </ul>
     </Fade> 
   </div>



   <div className='types'>
  
  <Fade delay={200}>
  <h1 className='ked'>  برامج المستوي الاقتصادي-ب-15 يوم - 14 ليلة </h1>
   <Mekka title={"أبراج الخير أو مجموعة مسك أو أو ما يماثله بالمواصلات للحرم"} img={kaq} para={"مدة الاقامة: 11 ليلة || الوجبات: بدون "}/>
   <Madina title={"اعمار المدينة أو بارادايس أو ما يماثله"} img={htyq} para={"  مدة الاقامة: ثلاث ليال || الوجبات: بدون " }/> 
   <h2 className='date' >تاريخ الرحلة: من يوم 22 جمادى الأولي 1445 هجري الى 29 جمادي الأولي 1445 هجري</h2>
    <h2 className='date'>تاريخ الرحلة: من يوم 6 ديسمبر 2023 الى 13 ديسمبر 2023</h2>
   <ul>
     <li>سعر الثنائي:34500 جنيه مصري-</li>
     <li>سعر الثلاثي:30500 جنيه مصري-</li>
     <li>سعر الرباعي:28700 جنيه مصري-</li>
   </ul>
     </Fade> 
   </div>








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
     <h1>ملاحظات بالنسبة للبرامج فوق الاقتصادية</h1>
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
     <h1>للتواصل</h1>
      <div className='printc'>
        <ul>
          <li>هواتف الشركة: 35722066</li>
          <li>01001485673</li>
          <li>01004245835</li>
          <li>01005176087</li>
          <li>e-mail: info@almassa-travelgroup.com</li>
          <a href ="https://www.facebook.com/profile.php?id=61552124111227">أو من خلال صفحتنا علي فيسبوك </a>
          <li className='t'>مسئول التقسيط:01006501820</li>
        </ul>
<img src={con}/></div>




     </div>
     </Fade>



    </div>
  );
}

export default App;
