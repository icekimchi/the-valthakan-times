'use client';

import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import PricingCard from '@/components/PricingCard';
import { PLANS, BillingCycle } from "@/constants/plans";
import Footer from '@/components/Footer';
import ServiceCard from "@/components/ServiceCard";

export default function Page() {
  const [cycle, setCycle] = useState<BillingCycle>('annual');
  const plans = PLANS[cycle];
  const router = useRouter();

  return (
    <>
    <main className="flex flex-col min-h-screen items-center justify-center px-6 py-10 pb-6">
      <button
        onClick={() => router.back()}
        className="
          absolute top-4 right-4
          text-indigo-200/70 hover:text-white
          transition
        "
      >
        <RxCross2 size={28} />
      </button>

      <div className="w-full space-y-6">
        {/* header */}
        <div className="text-center">
          <h1 className="heading-sp-h1 text-white font-serif">Upgrade with Patreon</h1>
          <p className="mt-4 text-base font-['Eczar'] text-[color:var(--color-blue-gray-400)]">
            Support The Valthakan Times and unlock the same premium content on Patreon.
          </p>
        </div>

        {/* Monthly / Annually toggle */}
        <div className="flex rounded-[2px] bg-[#120a33] p-1 text-xs font-['inter'] font-medium">
          <button
            className={`flex-1 px-3 py-2 transition ${
              cycle === 'monthly'
                ? 'bg-indigo-500 text-white'
                : 'text-indigo-200/60'
            }`}
            onClick={() => setCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={`flex-1 px-3 py-2 rounded-[2px] transition ${
              cycle === 'annual'
                ? 'bg-indigo-500 text-white shadow'
                : 'text-indigo-200/60'
            }`}
            onClick={() => setCycle('annual')}
          >
            Annually
          </button>
        </div>

        {/* Plancard */}
        <div className="space-y-4">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
      
      <div className="h-px w-full my-10 bg-[color:var(--color-indigo-900)]" />

      <div
        className="
          w-full max-w-6xl px-5 mb-10
          flex flex-col items-center gap-8
          md:flex-row md:justify-center md:items-stretch"
      >
        <div className="text-center">
          <h1 className="text-5xl text-white font-serif">Upgrade with Patreon</h1>
          <p className="mt-4 text-base font-['Eczar'] text-[color:var(--color-blue-gray-400)]">
            Support The Valthakan Times and unlock the same premium content on Patreon.
          </p>
        </div>

        <ServiceCard
          serviceName="Patreon"
          serviceSubtitle="Valthakan Literary Universe"
          backgroundImage="/patreon.png"
          badge="/patreon_badge.svg"
          serviceLink="https://www.patreon.com/collection/1503875?view=condensed"
        />
      </div>
    </main>
    <Footer/>
    </>
  );
}