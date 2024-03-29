
import AddAdviceButton from "@/components/AddAdviceButton/addAdviceButton";
import Advice from "@/components/Advice/advice";
import Checklist from "@/components/Checklist/checklist";
import Image from 'next/image';
import SunIcon from '../images/sun-icon-yellow-1.png';

// Checklist Dummy data
// const checkListDataA = ["1st and last month rent + security deposit", "$1,000 to turn on utilities", "3 months worth of expenses in primary account or at a minimal, $3,000 in saving account."];
// const checkListDataB = ["couch", "bed & mattress (new)", "dresser"];

// Advice Dummy data
//const AdviceData = [{"advice":"Buy only what you Need. Expand slowly. Example is you may not need the entire living room furnish. A simple tv stand and love couch may be enough for now.", "likes": 5, "id": 1}, {"advice":"Goodwill and stores like it are your friends. Avoid unneccesary debt. Example is a $50 affordable slightly dented working dryer is the right fit for now.", "likes": 2, "id": 2}]

async function getAdvice () {
  const response = await fetch('http://localhost:8080/getAdvice', { cache: 'no-store' });
  const data = await response.json();
  return data;
}

async function getChecklistA () {
  const response = await fetch('http://localhost:8080/getChecklistAData', { cache: 'no-store' });
  const data = await response.json();
  return data;
}

async function getChecklistB () {
  const response = await fetch('http://localhost:8080/getChecklistBData', { cache: 'no-store' });
  const data = await response.json();
  return data;
}

export default async function Home() {
  const AdviceData = await getAdvice();
  const checkListDataA = await getChecklistA();
  const checkListDataB = await getChecklistB();

  return (
    <main className=" px-4 grid grid-row-4 grid-column-1 lg:grid-row-3 lg:grid-column-2 m-2 h-screen">
      <section className="bg-slate-300  lg:col-start-1 lg:col-end-2 lg:col-span-1 row-start-1 row-end-1 lg:row-start-1 lg:row-end-1 lg:row-span-1 text-center">
        <Image className="absolute -top-32 -left-32 -z-10" priority={false} src={SunIcon} width={250} alt="" />
        <h1 className="text-3xl font-bold text-brown ">First Time Renter's Checklist</h1>
        <p className="text-lg text-mediumGray">Love means preparing you for success!!!</p>
      </section>
      <section className="bg-lime-300 row-start-4 row-end-4 lg:col-start-1 lg:col-end-2 lg:col-span-1 lg:row-start-1 lg:row-end-2 ">
        <Advice list={AdviceData} />
      </section>
      <section className="bg-sky-300 row-start-2 row-end-2 row-span-1 lg:col-start-2 lg:col-end-2 lg:row-span-2 mt-8 lg:mt-0">
        <h2 className='font-bold text-2xl text-brown mb-4 text-center underline lg:hidden'>Checklists</h2>
        <Checklist containerTitle={"Must have Finances"} list={checkListDataA} database={"A"} />
        <Checklist containerTitle={"Need to have Furniture"} list={checkListDataB} database={"B"} />
      </section>
    </main>
  )
}
