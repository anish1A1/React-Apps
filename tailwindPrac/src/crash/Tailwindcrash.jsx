

export default function Tailwindcrash() {

    return (
        <>

        <div>
            

<ul className="bg-green-50 m-3 flex gap-3 ">
  <li className="bg-blue-300 p-2  first:bg-slate-400 border-x-8">Item 1</li>

  
  <li className="bg-blue-300 p-2 first:bg-slate-400 odd:bg-blue-900 even:bg-gray-700">Item 2</li>
  <li className="bg-blue-300 p-2 first:bg-slate-400 odd:bg-blue-900 even:bg-gray-700">Item 3</li>

  <li className="bg-blue-300 p-2 first:bg-slate-400 odd:bg-blue-900 even:bg-gray-700">Item 4</li>

  <li className="bg-blue-300 p-2 first:bg-slate-400 odd:bg-blue-900 even:bg-gray-700">Item 5</li>

  <li className="bg-blue-300 p-2 last:bg-stone-500 ">Item 6</li>

</ul>

<div className="mt-4 mx-6 bg-purple-100 px-6 py-8 rounded-lg shadow-xl ring-1 ring-slate-300 ">
  <h3 className="text-base font-medium tracking-tight text-slate-900">This is a text element</h3>
  <p className="mt-2 text-sm text-slate-500">This is a text </p>

  <button 
  id="toggleDark"
  className="rounded-lg bg-gray-300 mt-6 px-2 py-4 font-medium text-sm text-blue-500"
  
  >Toggle Dark Mode</button>
</div>
        </div>
        </>
    );
}