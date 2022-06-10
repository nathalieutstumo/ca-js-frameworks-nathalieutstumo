This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# JS frameworks course assignment

![image](https://i.postimg.cc/XGPdkVNZ/Skjermbilde-2022-06-10-kl-15-57-18.png)

## Description

The project was created for my second year semester project. This assignment is my first project using next.js and is just for displaying information.

## Built With

You can list a the tech stack that you've used over here

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org)
- [Formik](https://formik.org/)
- [NextAuth](https://next-auth.js.org/)
- [Yup](https://github.com/jquense/yup)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Installing

This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

1. Clone the repo:

```bash
git clone https://github.com/nathalieutstumo/ca-js-frameworks-nathalieutstumo.git
```

2. Install the dependencies:

```
npm i next react react-dom
```

```
npm i formik --save
```

```
npm i yup
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Contributing

The project is utilising next.js and global styling in a global.css file. There is no css written other than body and a tags. The folder structure is simple with all pages in a folder with the same name, that can be found in the root of the project, and contains folders for each page on the site. All the page folders contain an index.js file where the main code for that page is found. In the pages/people folder there is also a [id].js file which is used to fetch the id’s from the api. The pages/api folder contains hello.js and a folder called auth. In the pages/api/auth folder there is a […nextauth].js file where the providers for the nextAuth is added.

In the root of the project you will also find a components folder which contains two folders.
The components/form folder contains a folder called validation with a file called loginSchema.js which is for validation and error messages when logging in. components/form also contains three files. FormLabel.js wich is for the labels in the form. InputField.js wich is for the input fields in the form. And LoginForm.js which is the form itself.
The components/header folder is the second folder inside components and contains an index.js file which is the code for the header and exports the header component so we can use it in the pages.

## Contact

This is where you can leave your social links for people to contact you, such as a LinkedIn profile or Twitter link e.g.

[My Twitter page](www.twitter.com)

[My LinkedIn page](www.linkedin.com)
