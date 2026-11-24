export function adminpage() {
  return `
    <div class="w-full py-12 px-6 flex flex-col items-center text-center">
      <h1 class="text-3xl font-bold">หน้าแอดมิน</h1>
      <p class="mt-2 text-slate-600">จัดการข้อมูลเว็บไซต์</p>

      <!-- กล่องครอบปุ่มเพื่อให้เรียงแนวนอนตรงกลางและมีระยะห่าง -->
      <div class="mt-6 flex flex-wrap justify-center gap-3">
        <a href="#/"
          class="inline-block rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
          ← กลับหน้าแรก
        </a>

        <a href="#/contact"
          class="inline-block rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800">
          ไปหน้าติดต่อ
        </a>

        <a href="#/about"
          class="inline-block rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-800">
          ไปหน้าเกี่ยวกับ
        </a>
      </div>
    </div>
  `
}