import React from 'react';
import { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import {
  ContactUsContainer,
  ContactForm,
  Label,
  Input,
  Errors,
  TextArea,
  Heading,
  SubmitButton,
  Output,
} from './ContactUsElement';
const validate = (values) => {
  const errors = {}
  if (!values.from_name) {
    errors.from_name = 'Required'
  } else if (values.from_name.length < 5) {
    errors.from_name = 'Must be more than 5 characters or more'
  }

  if (!values.reply_to) {
    errors.reply_to = 'Required'
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.reply_to)
  ) {
    errors.reply_to = 'Invalid email address'
  }

  if (!values.phone) {
    errors.phone = 'Required'
  } else if (values.phone.length < 11) {
    errors.phone = 'Phone number cannot be less than 11 characters'
  }

  if (!values.message) {
    errors.message = 'Required'
  }

  return errors
}


const ContactUsSection = ({ id, title }) => {
  const [buttonState, setButtonState] = useState('')
  const formik = useFormik({
    
    initialValues: {
      from_name: '', //USER NAME 
     // to_name: 'omaokeke28@gmail.com', //ADMIN EMAIL
      phone: '', //Phone number
      reply_to: '', //USER EMAIL
      message: '' //Message
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      debugger;
      try {
        emailjs.send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          values,
          process.env.REACT_APP_USER_ID

          )
          .then(() => {
            setButtonState('Message sent successfully!');
            console.log('SUCCESS!');
            setTimeout(resetForm(), 15000);
          })
      } catch {
        setButtonState('Failed to send');
        console.log('FAILED...');
      }
    },
  });

  return (
    <ContactUsContainer id={id}>
      <Heading>{title}</Heading>
      <ContactForm onSubmit={formik.handleSubmit}>
        <Label htmlFor="from_name">Name</Label>
        <Input
          id="from_name"
          name="from_name"
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.from_name}
        />
      
        {formik.touched.from_name && formik.errors.from_name ? (
          <Errors>{formik.errors.from_name}</Errors>
        ) : null}
        <Label htmlFor="reply_to">Email</Label>
        <Input
          id="reply_to"
          name="reply_to"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.reply_to}
        />
        {formik.touched.reply_to && formik.errors.reply_to ? (
          <Errors>{formik.errors.reply_to}</Errors>
        ) : null}
        <Label htmlFor="phone">Phone number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <Errors>{formik.errors.phone}</Errors>
        ) : null}
        <Label htmlFor="message">Message</Label>
        <TextArea
          id="message"
          name="message"
          placeholder="Enter your message"
          rows="6"
          cols="50" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        ></TextArea>
        {formik.touched.message && formik.errors.message ? (
          <Errors>{formik.errors.message}</Errors>
        ) : null}
        <SubmitButton disabled={formik.isSubmitting} type="submit">
          Send Message
        </SubmitButton>
        <Output id="output">{buttonState}</Output>
      </ContactForm>
    </ContactUsContainer>
  )
}

export default ContactUsSection
