import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';
import React from 'react'
import One from '../components/one';
import Two from '../components/two';
import Three from '../components/three';

const Name = ({users}) => {
    const router = useRouter();
    console.log("users", users);
    const design = () => {
      if (users.query === "one") {
        return (
          <One data={users}/>
        )
      } else if (users.query === "two") {
        return (
          <Two data={users}/>
        )
      } else if (users.query === "three") {
        return (
          <Three data={users}/>
        )
      }
    }
  return (
    <div>
        {design()}
    </div>
  )
}

export default Name


export const getServerSideProps = async (context) => {
  const prisma = new PrismaClient();
  const slug = context.params.slug;
  const users = await prisma.portfolio.findUnique({
    where: {
      slug: slug,
    },
    select: {
      id: true,
      name: true,
      userEmail: true,
      position: true,
      query: true,
      backgroundColor: true,
      textColor: true,
      image: true,
      about: true,
      slug: true,
      projects: true,
      work: true,
      skills: true,
      testimonials: true,
      contact: true,
      links: true,
      user: true,
    },
  });
  if (!users) {
    return {
      notFound: true,
    };
  }
    
  return {
    props: { 
      users
     },
  };
};