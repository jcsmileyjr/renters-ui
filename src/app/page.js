
import AddAdvice from "@/components/AddAdvice/addAdvice";
import Advice from "@/components/Advice/advice";
import Checklist from "@/components/Checklist/checklist";

// Checklist Dummy data
const checkListDataA = ["1st and last month rent + security deposit", "$1000 to turn on utilities", "$3000 saving"];
const checkListDataB = ["couch", "bed & mattress (new)", "dresser"];

// Advice data
const AdviceData = [{"advice":"Buy only what you Need. Expand slowly. Example is you may not need the entire living room furnish. A simple tv stand and love couch may be enough for now.", "likes": 5, "id": 1}, {"advice":"Goodwill and stores like it are your friends. Avoid unneccesary debt. Example is a $50 affordable slightly dented working dryer is the right fit for now.", "likes": 2, "id": 2}]

export default function Home() {
  /**
   * 1. Seperate sections via Grid by color - Done
   * 2. Setup main title - Done
   * 3. Create dummy components: AddTip, Advice, Checklist
   * 3a. Include dummy data where needed
   * 3b. Setup basic structure (UI & initial Styling) - no functionality
   * 3c. Place components on main page
   * 
   */
  return (
    <main className="grid grid-row-3 grid-column-3 m-2">
      <section className="bg-slate-300 col-start-1 col-end-3 col-span-2 row-start-1 row-end-1 row-span-1 text-center">
        <h1 className="text-3xl font-bold text-brown ">First Time Renter's Checklist</h1>
        <p className="text-sm text-mediumGray">Love means preparing you for success!!!</p>
      </section>
      <section className="bg-red-300 col-start-1 col-end-3 col-span-2 row-start-2 row-end-2">
        <AddAdvice />
      </section>
      <section className="bg-lime-300 col-start-1 col-end-3 col-span-2 row-start-3 row-end-3 ">
        <Advice list={AdviceData} />
      </section>
      <section className="bg-sky-300 col-start-3 col-end-3 row-span-3">
        <Checklist containerTitle={"Must have Finances"} list={checkListDataA} />
        <Checklist containerTitle={"Need to have Furniture"} list={checkListDataB} />
      </section>
    </main>
  )
}
