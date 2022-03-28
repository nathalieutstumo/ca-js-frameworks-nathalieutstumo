import Head from 'next/head'
import Image from 'next/image'
import Header from "../../components/header";
import React from 'react';
// import ReactDOM from 'react-dom';
// import { Formik, Field, Form } from 'formik';
import LoginForm from '../../components/Form/LoginForm';

export default function Home() {
  return (
    <div>
      <Header>
      </Header>
      <div >
      <LoginForm/>
      </div>
      
    </div>
  )
}
