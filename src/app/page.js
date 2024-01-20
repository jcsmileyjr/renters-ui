

export default function Home() {
  /**
   * 1. Seperate sections via Grid by color - Done
   * 2. Setup main title
   * 3. Create dummy components: AddTip, Advice, Checklist
   * 3a. Include dummy data where needed
   * 3b. No colors yet, just bacic structure
   * 3c. Place components on main page
   * 
   */
  return (
    <main className="grid grid-row-3 grid-column-2 mt-2">
      <section className="bg-slate-300 col-start-1 col-end-1 row-start-1 row-end-1 row-span-1 text-center">
        <h1 className="text-3xl font-bold text-brown ">First Time Renter's Checklist</h1>
        <p className="text-sm text-mediumGray">Love means preparing you for success!!!</p>
      </section>
      <section className="bg-red-300 col-start-1 col-end-1 row-start-2 row-end-2 ">Add Advice</section>
      <section className="bg-lime-300 col-start-1 col-end-1 row-start-3 row-end-3 ">Advice</section>
      <section className="bg-sky-300 col-start-2 col-end-2 row-span-3">Checklist</section>
    </main>
  )
}
