import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans=Geist({variable:"--font-geist-sans",subsets:["latin"]});
const geistMono=Geist_Mono({variable:"--font-geist-mono",subsets:["latin"]});
const siteUrl="https://mateus-lolas-architect.mateus-lolas-unb.chatgpt.site";
export const metadata:Metadata={
  metadataBase:new URL(siteUrl), title:"Mathew Loulas — AI Systems & Venture Architect",
  description:"Portfolio of Mathew Loulas (Mateus Lolas): human-governed AI systems, venture building, public leadership, education and social impact.",
  alternates:{canonical:"/"}, keywords:["Mathew Loulas","Mateus Lolas","AI systems architect","agentic AI","AI product builder","human-in-the-loop AI","Mindfax"],
  authors:[{name:"Mathew Loulas",url:siteUrl}], robots:{index:true,follow:true},
  openGraph:{title:"Mathew Loulas — AI Systems & Venture Architect",description:"Human-governed AI systems, venture building and institutional leadership.",url:siteUrl,siteName:"Mathew Loulas — International Portfolio",type:"profile",images:[{url:"/og.png",width:1536,height:1024,alt:"Mathew Loulas — AI Systems & Venture Architect"}]},
  twitter:{card:"summary_large_image",title:"Mathew Loulas — AI Systems & Venture Architect",description:"Human-governed AI systems, venture building and institutional leadership.",images:["/og.png"]}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;}
