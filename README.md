# Hello Everyone 👋

 Build buddy Is One Stop Solution For Digital Portfolios, Where you do not need coding knowledge just 
 create an account and start 🚀.

## Inspiration


I have seen many developers who dislike writing code for their portfolios & if they like also but they struggle to keep their portfolios up to date. So I thought to Help them Build and Manage their Portfolio ** Free** and **Easly**
 
by the way, I'm also that type of person 😂


## Problem Statement

As I already told you My project will help users to build their portfolios in minutes & help them to manage them in seconds. many people struggle to build their portfolios and some struggle to manage them.

I came up with a solution for both types of people.

By using **Build Buddy** you will be able to create portfolios and manage them Easily Also you will get a unique URL for your Portfolio.

## How did I build It?

### Challenges I Faced

I was new to Database World. So, I faced some problems:

#### 1.  Creating Relations in the database

Firstly, was thinking that it's a huge task, I don't know how to create Relations, so would I be able to complete the app?

**But ** I was wrong it's Very Easy to create relations in PlanetScale!

##### **One to One:**

```
model User {
  id      Int      @id @default(autoincrement())
  profile Profile?
}

model Profile {
  id     Int  @id @default(autoincrement())
  user   User @relation(fields: [userId], references: [id])
  userId Int  @unique // relation scalar field (used in the `@relation` attribute above)
}
``` 
[One-to-one relations Docs](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/one-to-one-relations)


##### **One to Many :**

```
model User {
  id    Int    @id @default(autoincrement())
  posts Post[]
}

model Post {
  id       Int  @id @default(autoincrement())
  author   User @relation(fields: [authorId], references: [id])
  authorId Int
}
``` 
[One-to-many relations Docs](https://www.prisma.io/docs/concepts/components/prisma-schema/relations/one-to-many-relations)


#### In my case, I used these Two types of relations

### How does it work?

#### 1. Landing page


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659333900798/g4mDHTYjB.png)

#### 2. Login 

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659333449686/u_LAqWysL.png)

This is the custom login page by Next Auth, you can click on Google to log in with your Google account. 

You see how it's a very easy login.

#### 3. dashboard


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659333876980/lsB9hsg3k.png)


After you log in you will the dashboard link click on it. Now you can see your build here.

If you didn't create a portfolio yet so it will show start with some templates. 

If you have created then it will show a thumbnail of your build by clicking on it you can edit it.

#### 4. Editing Content

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659334138697/kqvPbMS8aQ.png)

As, you can see there are 6 tabs by clicking on every tab you can edit its content by clicking on About you can edit the name, Position, description, etc.



#### 5. Live link Button


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659334220443/zUKRldPlV.png)

by clicking on this button you can see Your Portfolio is live on the internet you can share this link wherever you want.

#### 6. Adding Your Projects

By going on Projects tabs you can even add your projects. You just need to click on Add One more button And then one popup will show up Then you can upload the image, and enter the name, description, and links.

example: 
![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659334556161/3RxXri8Lp.png) 

Also, you can add Your **Testimonials.** Same as Projects.

**Deleting feature: ** Sorry To say but I'm Working on deleting the feature it will be available to you soon 😉

##### There are more features you can log in and see

### Now let's Come On Tech Stack

#### Tech Used 

Database [PlanetScale](https://planetscale.com/)

Framework [Next Js](https://nextjs.org/)

CSS Framework [Tailwind CSS](https://tailwindcss.com/)

ORM [Prisma](https://prisma.io/)

Auth [Next-Auth](https://next-auth.js.org/)

Hosting [vercel](https://vercel.com/)

Icons [React Icons](https://react-icons.github.io/)

#### **Database:**

I have used **PlanetScale** As My database with Prisma ORM This Combination is Amazing I would recommend you all to try PlanetScale. 

It is easy to learn, Fast & Amazing

#### **Auth:**

I Have used NextAuth For Authenticating the User.

Also While building the app I found out one Interesting thing About NextAuth. Its** Adapters!**
NextAuth Adapters Are useful Just need one line of code and BOOM 💥!
Whenever users log in all data will automatically store in your database.

The best thing is That It Supports Prisma That Means It works with **PlanetScale**. This thing helped me a lot

#### More features in the queue

- More New Templates
-   Live Preview
- Something Amazing 😉

## Conclusion

Thank you so much for reading My Article 😊 ,
Also, Thank You to **[Hashnode](https://hashnode.com/)**  & **[PlanetScale](https://planetscale.com/)** for Organising this Amazing Hackathon
I learn a lot of new things.

Also Wating for feedback from you all.

## Some Important Links :
- #### [Github](https://github.com/aman-janwani/buildbuddy) 
- #### [Build Buddy](https://buildbuddy.vercel.app/) 
