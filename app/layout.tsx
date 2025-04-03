import "./globals.css";
import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
export const metadata: Metadata = {
  title: "Div Group",
  description:
    "Biz sizga biznesingizni rivojlantirish uchun sifatli va hamyonbop narxlardagi web sayt yaratish xizmatlarini taklif qilamiz!",
};
/*
export const metadata: Metadata = {
  title: "Sayt yaratish",
  description:
    "Bugungi kunda onlayn mavjudlik har qanday biznes muvaffaqiyatining kalitidir. Biz sizga maqsadlarga erishishda ishonchli yordamchingiz bo'ladigan sayt yaratishda yordam beramiz.",
};
export const metadata: Metadata = {
  title: "SMM",
  description:
    "Auditoriyangizni kengaytiring, brend xabardorligini oshiring, faollikni va savdoni oshiring. yaxshilang.",
};
export const metadata: Metadata = {
  title: "CRM va ERP",
  description:
    "Vaqt va resurslarni tejang Ish samaradorligini oshirish va imkoniyatlarni kengaytiring",
};
export const metadata: Metadata = {
  title: "Web sayt",
  description:
    "Sizning biznesingizning Internetdagi yuzi. Tovar va xizmatlarni sotish platformasi. Umid va Ishonchni shakllantirish vositasi",
};
*/
import { Roboto } from "next/font/google";
const rubik = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className={rubik.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
