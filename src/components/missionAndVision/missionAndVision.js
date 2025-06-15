import React from 'react';
import './missionAndVision.css';

const MissionVission = () => {
  const language = localStorage.getItem('language') || 'en';

  return (
    <>
      {language === 'en' ? (
        <div className="mission-vission_cards">
          <div className="mission-vission_card">
            <strong>Mission</strong>
            <div>
              <p>
                Center Up’s mission is to create a dynamic, inclusive, and wide-ranging educational environment where every child and young person has the opportunity to unlock their full potential.<br />
                We believe that early access to quality education, hands-on experiences, and personal development tools can shape confident, capable, and socially responsible individuals.
              </p>
              <ul>
                <li>Discover their skills and interests</li>
                <li>Find direction in choosing their future profession</li>
                <li>Develop essential skills such as communication, teamwork, critical thinking, and leadership</li>
                <li>Gain new experiences, knowledge, and friendships</li>
              </ul>
              <p>
                At Center Up, we aim not only to educate but to inspire—empowering every young person with the knowledge, tools, confidence, and community support needed to dream boldly and act decisively.<br />
                Through our mission, we are committed to shaping a generation that leads with values, vision, and purpose.
              </p>
            </div>
          </div>
          <div className="mission-vission_card">
            <strong>Vision</strong>
            <div>
              <p>
                We strive to become one of the most impactful and trusted educational platforms in the region.<br />
                Center Up envisions a generation of youth who are:
              </p>
              <ul>
                <li>Confident and equipped with strong knowledge</li>
                <li>Able to navigate the modern job market</li>
                <li>Willing and capable of investing in their personal development</li>
                <li>Building a future where values matter more than just outcomes</li>
              </ul>
              <p>
                Our goal is to create an educational platform and environment where every young person can discover the fields they are passionate about, participate in relevant programs, and have the opportunity for self-development and lifelong learning.<br />
                We aspire to become the organization where every young individual can unlock their full potential, develop professional and personal skills, and step-by-step reach their dreams.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mission-vission_cards">
          <div className="mission-vission_card">
            <strong>Առաքելություն</strong>
            <div>
              <p>
                Center Up-ի առաքելությունն է ստեղծել դինամիկ, ընդգրկուն և բազմակողմանի կրթական միջավայր, որտեղ յուրաքանչյուր երեխա և երիտասարդ կունենա հնարավորություն բացահայտելու իր ողջ ներուժը։<br />
                Մենք հավատում ենք, որ որակյալ կրթությունը, գործնական փորձառությունն ու անձնական զարգացումը կարող են ձևավորել ինքնավստահ, կարողունակ և պատասխանատու անհատներ։
              </p>
              <ul>
                <li>Բացահայտել իր հմտություններն ու հետաքրքրությունները</li>
                <li>Կողմնորոշվել իր ապագա մասնագիտության հարցում</li>
                <li>Զարգացնել կարևոր հմտություններ՝ հաղորդակցում, թիմային աշխատանք, քննադատական մտածողություն և առաջնորդություն</li>
                <li>Ձեռք բերել նոր փորձ, գիտելիքներ և ընկերներ</li>
                <li>Հասնել բոլոր նպատակներին</li>
              </ul>
              <p>
                Center Up-ում մեր նպատակն է ոչ միայն կրթել, այլ նաև ոգեշնչել՝ հզորացնելով յուրաքանչյուր երեխայի և երիտասարդի՝ իրենց երազանքներին համարձակորեն հետևելու և վստահ քայլեր ձեռնարկելու համար։<br />
                Մենք տրամադրում ենք անհրաժեշտ գիտելիքներ, գործիքներ, ինքնավստահություն և աջակցություն՝ օգնելով նրանց դառնալ նախաձեռնող, նպատակասլաց ու գիտակից անհատներ։<br />
                Մեր առաքելության միջոցով մենք պարտավորվում ենք ձևավորել մի սերունդ, որը կառաջնորդվի արժեքներով, տեսլականով և նպատակով։
              </p>
            </div>
          </div>
          <div className="mission-vission_card">
            <strong>Տեսլական</strong>
            <div>
              <p>
                Մենք ձգտում ենք դառնալ տարածաշրջանում ամենաազդեցիկ և վստահելի կրթական հարթակներից մեկը։<br />
                Center Up-ի տեսլականն է ունենալ երիտասարդ սերունդ, որն՝
              </p>
              <ul>
                <li>Ինքնավստահ է և ուժեղ գիտելիքներով զինված</li>
                <li>Գիտի ինչպես գտնել իր տեղը ժամանակակից աշխատաշուկայում</li>
                <li>Ունի կարողություն և պատրաստակամություն ներդրում ունենալու իր անձնական զարգացման մեջ</li>
                <li>Ձևավորում է ապագա, որտեղ առաջնորդում են արժեքները, ոչ թե պարզապես արդյունքները</li>
              </ul>
              <p>
                Մեր նպատակն է ստեղծել այնպիսի կրթական հարթակ և միջավայր, որտեղ յուրաքանչյուր երիտասարդ կկարողանա գտնել իրեն հետաքրքրող ոլորտները, մասնակցել դրանց համապատասխան ծրագրերին և ունենալ ինքնազարգացման ու շարունակական կրթության հնարավորություններ։<br />
                Մենք ձգտում ենք դառնալ այն կազմակերպությունը, որտեղ յուրաքանչյուր երիտասարդ կարող է բացահայտել իր ներուժը, զարգացնել մասնագիտական և անձնական հմտություններն ու քայլ առ քայլ մոտենալ իր երազանքներին։
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MissionVission;