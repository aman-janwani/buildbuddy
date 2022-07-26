import Head from "next/head";
import Image from "next/image";
import DigitalPortfolios from "../components/DigitalPortfolios";
import HeroSection from "../components/HeroSection";
import Linkesy from "../components/Linkesy";
import Navbar from "../components/Navbar";
import { useSession} from "next-auth/react";

export default function Home() {
  
  const { data: session } = useSession();

  return (
    <div className="font-['Cairo'] font-bold">
      {session ? (
        <Head>
          <title>Hey! {session.user.name} | Start with </title>
          <link rel="icon" href="/1.ico" />
        </Head>
      ) : (
        <Head>
          <title>Home</title>
          <link rel="icon" href="/1.ico" />
        </Head>
      )}
      <main className="">
        <section className="h-screen">
          <Navbar session={session} />
          <HeroSection />
        </section>
        {/* Digital Portfolios */}
        <section className="bg-buildbuddyYellowLight">
          <DigitalPortfolios />
        </section>
        {/* Linkesy */}
        <section className="bg-buildbuddyBlueLight">
          <Linkesy session={session} />
        </section>
      </main>
    </div>
  );
}
