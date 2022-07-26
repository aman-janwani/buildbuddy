import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Navbar from "../../components/Navbar";
import Home from "..";
import { Tab } from "@headlessui/react";

const Edit = () => {
  const { data: session } = useSession();

  const router = useRouter();

  if (!session) {
    return <Home />;
  }

  return (
    <div className="font-['Cairo'] font-bold">
      <Head>
        <title>Edit</title>
      </Head>
      <Navbar session={session} />
      <main className="">
        {/* Tabs */}
        <div className="bg-red-200">
          <Tab.Group>
            <Tab.List>
              <Tab
                className={({ selected }) =>
                  selected ? "bg-blue-500 text-white" : "bg-white text-black"
                }
              >
                Tab 1
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected ? "bg-blue-500 text-white" : "bg-white text-black"
                }
              >
                Tab 2
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected ? "bg-blue-500 text-white" : "bg-white text-black"
                }
              >
                Tab 3
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
    </div>
  );
};

export default Edit;
