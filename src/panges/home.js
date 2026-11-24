export function homepage() {
  return `
    <div class="w-full py-12 px-6 flex flex-col items-center text-center">
      <h1 class="text-3xl font-bold">หน้าแรก</h1>
      <p class="mt-2 text-slate-600">ยินดีต้อนรับ</p>

      <div class="mt-6 flex flex-wrap justify-center gap-3">
        <a href="#/about"
          class="inline-block rounded-lg bg-sky-700 px-6 py-3 font-semibold text-white hover:bg-slate-800">
          ไปหน้าเกี่ยวกับ
        </a>

        <a href="#/contact"
          class="inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-slate-800">
          ไปหน้าติดต่อ
        </a>

       
      </div>
    <div class="w-full py-12 px-6 flex flex-col items-center text-center">
  `
}