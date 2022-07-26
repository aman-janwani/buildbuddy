// pages/signin.jsx
import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
} from "next-auth/react";
import Image from "next/image";
import Head from "next/head";

export default function SignIn({ providers }) {
  return (
    <div className="bg-white w-screen h-screen text-buildbuddyPurple flex items-center justify-center">
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/1.ico" />
      </Head>
      <div className="bg-buildbuddyYellowLight flex flex-col p-5 rounded-xl h-[75vh] text-center w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[30vw] m-auto">
        <Image
          src="/logo/3.svg"
          alt="logo"
          width={200}
          height={200}
          className="justify-self-start"
        />
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex-grow flex items-center">
            <button
              onClick={() => signIn(provider.id)}
              className="bg-white w-full justify-self-end text-center flex p-0 justify-center h-fit rounded-lg"
            >
              <Image
                src="/images/googleLogo.svg"
                alt={provider.name}
                width={75}
                height={75}
              />
            </button>
          </div>
        ))}
      </div>
      <div className="fixed hidden lg:block bottom-0 right-0">
        <Image
          className="fixed"
          src="/images/loginImage.svg"
          alt="logo"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  return {
    props: {
      providers: await getProviders(),
      csrfToken: await getCsrfToken(context),
    },
  };
}
