import { About, CarAbout, EnergyAbout } from "@/assets";

export const about_imgs = [
  {
    img: About,
    alt: "image_about_university",
  },
  {
    img: CarAbout,
    alt: "image_about_car_charging",
  },
  {
    img: EnergyAbout,
    alt: "image_about_solar_energy",
  },
];
export const ABOUT_HTML = `
<div class="flex flex-col gap-4 text-lg">
  <h4 class="text-xl text-center">
  <strong> O‘zbekiston Respublikasi Energetika vazirligi huzuridagi 
    “Qayta tiklanuvchi energiya manbalari milliy ilmiy-tadqiqot instituti”</strong>
  </h4>
  <p>
    O‘zbekiston Respublikasi Prezidentining 2021 yil 9 aprelda 5063-sonli 
    “O‘zbekiston Respublikasida qayta tiklanuvchi va vodorod energetikasini rivojlantirish chora-tadbirlari to‘g‘risida” gi qarori imzolandi va shu qaror asosida Institut tashkil etildi.
  </p>
  <p>
    Ushbu qarorga asosan Fanlar akademiyasining “Quyosh energiyasi xalqaro instituti” MChJ negizida O‘zbekiston Respublikasi Energetika vazirligi huzurida davlat muassasasi shaklidagi Qayta tiklanuvchi energiya manbalari milliy ilmiy-tadqiqot institutini (keyingi o‘rinlarda – Institut) tashkil etish va institut tuzilmasida Vodorod energetikasi ilmiy-tadqiqot markazini hamda Qayta tiklanuvchi va vodorod energetikasi texnologiyalarini sinash va sertifikatlash laboratoriyasini tashkil etish belgilangan.
  </p>
  <h3><strong>Institutning asosiy vazifalari</strong></h3>
  <ul class="flex flex-col gap-4">
    <li>
      qayta tiklanuvchi energiya manbalaridan foydalanish imkoniyatlarini kengaytirish va vodorod energetikasini rivojlantirishning ustuvor yo‘nalishlarini shakllantirish, ushbu sohalarda fundamental va amaliy tadqiqotlarni o‘tkazish hamda innovatsion loyihalarni ishlab chiqish;
    </li>
    <li>
      qayta tiklanuvchi energiya manbalari va vodoroddan olingan energiyani elektr hamda issiqlik energiyasiga aylantirish hisobiga ulardan iqtisodiyotning yuqori texnologik sohalari va tarmoqlarida samarali foydalanish usullarini o‘rganish va joriy etish;
    </li>
    <li>
      qayta tiklanuvchi energiya va vodorodni ishlab chiqarish, yetkazib berish va ulardan samarali foydalanish masalalari bo‘yicha normativ-huquqiy hujjatlar loyihalari hamda texnik jihatdan tartibga solish sohasidagi normativ hujjatlarni ishlab chiqish va (yoki) ularni xalqaro (davlatlararo, mintaqaviy) standartlar talablariga moslashtirish;
    </li>
    <li>
      ilg‘or davlatlarning mazkur sohalardagi ilmiy muassasalari, markazlari hamda ekspertlari bilan hamkorlik o‘rnatish va ular ishtirokida tadqiqotlarni tashkil qilish, shuningdek, investitsiya loyihalarini ishlab chiqish, amalga oshirish va ularda ishtirok etish;
    </li>
    <li>
      mahalliy va xorijiy oliy ta’lim tashkilotlari bilan birgalikda ilmiy izlanishdan ishlab chiqarishgacha bo‘lgan jarayonlarni o‘zaro bog‘lovchi yaxlit tizimni shakllantirish va yuqori malakali ilmiy kadrlarni tayyorlash;
    </li>
    <li>
      qayta tiklanuvchi energiya manbalari va vodorodni ishlab chiqaruvchi, ulardan foydalanuvchi hamda ushbu turdagi energiya bilan ishlovchi uskuna, qurilma va texnologiyalarni sinovdan o‘tkazish va sertifikatlash.
    </li>
  </ul>
</div>
`;

export const ABOUT_HTML_RU=`<div class="flex flex-col gap-4 text-lg">
  <h4 class="text-xl text-center">
    <strong> Национальный научно-исследовательский институт возобновляемых источников энергии 
    при Министерстве энергетики Республики Узбекистан </strong>
  </h4>
  <p>
    9 апреля 2021 года был подписан указ Президента Республики Узбекистан № 5063 
    "О мерах по развитию возобновляемой и водородной энергетики в Республике Узбекистан", 
    на основе которого был создан Институт.
  </p>
  <p>
    Согласно данному указу, на базе Общество с ограниченной ответственностью 
    «Международный институт солнечной энергии» Академии наук Республики Узбекистан, 
    при Министерстве энергетики Республики Узбекистан был организован 
    Национальный научно-исследовательский институт возобновляемых источников энергии 
    (далее — Институт), с созданием в его структуре Научно-исследовательского центра водородной энергетики 
    и Лаборатории испытаний и сертификации технологий возобновляемых и водородных источников энергии.
  </p>
  <h3><strong>Основные задачи Института</strong></h3>
  <ul class="flex flex-col gap-4">
    <li>
      Расширение возможностей использования возобновляемых источников энергии и формирование приоритетных направлений развития водородной энергетики, проведение фундаментальных и прикладных исследований в этих областях, а также разработка инновационных проектов;
    </li>
    <li>
      Исследование и внедрение эффективных методов использования возобновляемых источников энергии и водородной энергии для преобразования их в электрическую и тепловую энергию в высокотехнологичных отраслях и сферах экономики;
    </li>
    <li>
      Разработка проектов нормативно-правовых актов в области производства, поставки и эффективного использования возобновляемых источников энергии и водорода, а также нормативных документов в области технического регулирования, и (или) их приведение в соответствие с международными (межгосударственными, региональными) стандартами;
    </li>
    <li>
      Установление сотрудничества с научными учреждениями, центрами и экспертами передовых стран в этих областях, организация исследований с их участием, а также разработка, реализация и участие в инвестиционных проектах;
    </li>
    <li>
      Формирование единой системы, связывающей научные исследования с производством, совместно с местными и зарубежными высшими учебными заведениями, а также подготовка высококвалифицированных научных кадров;
    </li>
    <li>
      Испытание и сертификация оборудования, устройств и технологий для производства и использования возобновляемых источников энергии и водорода.
    </li>
  </ul>
</div>
`