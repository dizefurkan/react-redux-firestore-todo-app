# Qooper - Todo App

![Qooper - Todo App](/screenshot/onboard.gif)

#### How to start the server on local:

`1- Clone the repository`
`2- cd ./qooper-todo-app`
`3- npm install`
`4- npm run start`

---

1. Bootstrap React TypeScript with Creat React App
   npx create-react-app ./ --template typescript

2. I create my own UI Reusable Components.
   For this i use styled-components.
   I create a theme for colors, font-size or etc.
   Also create grid layout system. for Layout. (Col, Row system.).
   For Icons i copy svg to codebase. and use it.
   I follow the best practices for as much as I can.

3. Create the routes.
   Also create folder structure.

   page

   - home
   - sign-in

4. Build the Register form.
   Note: I save User Input Data on LocalStorage in Browser. If i have a time, may be i can save in firestore. In this way we can see the user informations on the database. But for know this is not possible...

5. Build the HomePage. (List Page)
   I create todo items on locale (not api usign). but state managed on Redux.

6. I implement the firestore.
   Then i convert to locale state to firestore.
   I create, update and delete. Then snapshot fire, i save to redux. Then i read data from redux.

7. I deploy and host in vercel.

I tried to explain it simply as i cloud.

Also i add a picture on cloud firestore structure.
![Qooper - Firestore Database](/screenshot/firestore-database.png)
