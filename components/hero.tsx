// import { NextLogo } from "./next-logo";
// import { SupabaseLogo } from "./supabase-logo";

export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      {/* <div className="flex gap-8 justify-center items-center">
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <NextLogo />
        </a>
      </div> */}
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Asisten wisata digitalmu — cepat, praktis, informatif.{" "}
        <a
          href="/auth/login"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Masuk
        </a>{" "}
        atau{" "}
        <a
          href="/auth/sign-up"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Daftar
        </a>
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
