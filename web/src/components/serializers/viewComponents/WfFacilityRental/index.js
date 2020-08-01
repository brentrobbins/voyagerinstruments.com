import React, {useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {navigate} from 'gatsby-link'
import Helmet from 'react-helmet'
import Recaptcha from 'react-recaptcha'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// import PortableText from '../serializers/portableText'
import ContentComponents from '../../contentComponents/index'

import styles from '../../../Page/page.module.css'

const Page = ({title, content, thankYou, emailto, subject}) => {
  const data = useStaticQuery(graphql`
    {
      sanityWebform(_id: {eq: "8c0d3d11-44ee-47aa-b173-ab62f0a3ce43"}) {
        id
        title
        formSettings {
          thankyou
          emailto
          subject
        }
      }
    }
  `)

  function encode (data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  // State
  const [formValues, setFormValues] = useState({})
  const [isVerified, setIsVerified] = useState(false)
  const [formErrors, setFormErrors] = useState(false)
  const [recaptchaResponse, setRecaptchaResponse] = useState(null)

  // Google Recaptcha
  let recaptchaLoaded = function () {
    // console.log('Loaded')
  }
  let expiredCallback = function () {
    // console.log('expired')
    setIsVerified(false)
    setRecaptchaResponse(null)
  }
  let verifyCallback = function (response) {
    // console.log(response)
    if (response) {
      setIsVerified(true)
      setRecaptchaResponse(response)
    } else {
      setIsVerified(false)
      setRecaptchaResponse(null)
    }
  }

  const handleDateChange = (date) => {
    setFormValues({...formValues, rental_start_date: date, rental_start_date_: date.toLocaleString()})
  }
  const handleDateChange2 = (date) => {
    setFormValues({...formValues, rental_end_date: date, rental_end_date_: date.toLocaleString()})
  }

  const handleChange = e => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }
  const handleSubmit = e => {
    e.preventDefault()
    // console.log({e})

    if (isVerified &&
      formValues.first_name &&
       formValues.last_name &&
       formValues.address &&
       formValues.city &&
       formValues.state &&
       formValues.zip &&
       formValues.email &&
       formValues.phone) {
      // console.log('valid form')
      // console.log({formValues})
      setFormErrors(false)

      const form = e.target
      fetch('/.netlify/functions/email', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: encode({
          'to': data.sanityWebform.formSettings.emailto,
          'from': 'no-reply@voyagerinstruments.com',
          'subject': data.sanityWebform.formSettings.subject,
          ...formValues,
          recaptcha: recaptchaResponse
        })
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => console.error(error))
    } else {
      // console.log('invalid form')
      setFormErrors(true)
    }
  }

  return (
    <>
      <Helmet>
        <script key={`recaptcha`} src='https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit' async defer />
      </Helmet>

      {content && <ContentComponents blocks={content} />}

      <form
        name={'voyagerinstruments.com Facility Rental Form'}
        method='post'
        action={data.sanityWebform.formSettings.thankyou}
        onSubmit={handleSubmit}
      >

        <div hidden>
          <label>
            Don’t fill this out:{' '}
            <input name={'bot-field'} onChange={handleChange} />
          </label>
        </div>

        <h4>Applicant Contact Information:</h4>

        <div className={styles.fieldWrapper}>

          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'first_name'}>
              First Name *
            </label>
            <div className='control'>
              <input
                className={styles.customInput}
                type={'text'}
                name={'first_name'}
                onChange={handleChange}
                id={'first_name'}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'last_name'}>
              Last Name *
            </label>
            <div className='control'>
              <input
                className={styles.customInput}
                type={'text'}
                name={'last_name'}
                onChange={handleChange}
                id={'last_name'}
                required
              />
            </div>
          </div>
        </div>

        {/* Street Address City */}
        <div className={styles.fieldWrapper}>
          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'address'}>
              Street Address *
            </label>
            <div className='control'>
              <input
                className={styles.customInput}
                type={'text'}
                name={'address'}
                onChange={handleChange}
                id={'address'}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'city'}>
              City *
            </label>
            <div className='control'>
              <input
                className={styles.customInput}
                type={'text'}
                name={'city'}
                onChange={handleChange}
                id={'city'}
                required
                placeholder='Fort Collins'
              />
            </div>
          </div>
        </div>

        {/* State Zip Code */}
        <div className={styles.fieldWrapper}>
          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'state'}>
              State *
            </label>
            <div className='control'>
              <input
                className={styles.customInput}
                type={'text'}
                name={'state'}
                onChange={handleChange}
                id={'state'}
                required
                placeholder='Colorado'
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'zip'}>
              Zip Code *
            </label>
            <div className='control'>
              <input
                className={styles.customInput}
                type={'text'}
                name={'zip'}
                onChange={handleChange}
                id={'zip'}
                required
              />
            </div>
          </div>
        </div>

        {/* Email Phone */}
        <div className={styles.fieldWrapper}>
          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'email'}>
              Email *
            </label>
            <div className='control'>
              <input
                className={styles.customInput}
                type={'text'}
                name={'email'}
                onChange={handleChange}
                id={'email'}
                required
              />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'phone'}>
              Phone Number
            </label>
            <div className='control'>
              <input
                className={styles.customInput}
                type={'text'}
                name={'phone'}
                onChange={handleChange}
                id={'phone'}
              />
            </div>
          </div>

        </div>

        <h4>Organization Information:</h4>
        {/* Org Name and Commercial or Non Prof */}
        <div className={styles.fieldWrapper}>
          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'organization_name'}>
              Organization Name *
            </label>
            <div className='control'>
              <input
                className={styles.customInput}
                type={'text'}
                name={'organization_name'}
                onChange={handleChange}
                id={'organization_name'}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'commercial_or_nonprofit'}>
              Commercial or Nonprofit
            </label>
            <div className='control'>
              <select className={styles.customSelect} name={'commercial_or_nonprofit'}
                onChange={handleChange}
                id={'commercial_or_nonprofit'} required=''> <option value='' default=''>Select </option><option value='Commercial'>Commercial </option><option value='Nonprofit'>Nonprofit </option></select>
            </div>
          </div>
        </div>

        <h4>Rental Details:</h4>
        <div className={styles.fieldFullWrapper}>
          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'what_type_of_event_will_this_be'}>
              What type of event will this be? *
            </label>
            <div className='control'>
              <textarea
                className={styles.customTextarea}
                name={'what_type_of_event_will_this_be'}
                onChange={handleChange}
                id={'what_type_of_event_will_this_be'}
                required
                rows='4'
              />
            </div>
          </div>
        </div>

        {/* Type of Rooms/Spaces: */}
        <div className={styles.fieldFullWrapper}>
          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'type_of_rooms_spaces'}>
              Type of Rooms/Spaces:
            </label>
            <div className='control'>
              <select className={styles.customSelect} name={'type_of_rooms_spaces'}
                onChange={handleChange}
                id={'type_of_rooms_spaces'} required=''> <option value='' default=''>Select </option><option value='Common-Space'>Common Space </option><option value='Learning-Studios'>Learning Studios </option><option value='Conference-Room'>Conference Room </option></select>
            </div>
          </div>
        </div>

        {/* Rental Start Date   &   Rental End Date */}
        <div className={styles.fieldWrapper}>
          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'rental_start_date'}>
              Rental Start Date *
            </label>
            <div className='control'>
              <DatePicker
                className={styles.customInput}
                showTimeSelect
                selected={formValues.rental_start_date}
                onChange={handleDateChange}
                onSelect={handleDateChange}
                dateFormat='MMMM d, yyyy h:mm aa'
                name='rental_start_date'
                autoComplete='off'
                minDate={new Date()}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'rental_end_date'}>
              Rental End Date *
            </label>
            <div className='control'>
              <DatePicker
                className={styles.customInput}
                showTimeSelect
                selected={formValues.rental_end_date}
                onChange={handleDateChange2}
                onSelect={handleDateChange2}
                dateFormat='MMMM d, yyyy h:mm aa'
                name='rental_end_date'
                required
                timeStep='15'
                autoComplete='off'
                minDate={new Date()}
              />
            </div>
          </div>

        </div>
        {/* Type of Rooms/Spaces  &  Headcount:  */}
        <div className={styles.fieldWrapper}>
          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'type_of_rooms_spaces'}>
              Type of Rooms/Spaces
            </label>
            <div className='control'>
              <select className={styles.customSelect} name={'type_of_rooms_spaces'}
                onChange={handleChange}
                id={'type_of_rooms_spaces'} required=''> <option value='' default=''>Select </option><option value='Common-Space'>Common Space </option><option value='Learning-Studios'>Learning Studios </option><option value='Conference-Room'>Conference Room </option></select>
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'headcount'}>
              Headcount:  *
            </label>
            <div className='control'>
              <input
                className={styles.customInput}
                type={'number'}
                name={'headcount'}
                onChange={handleChange}
                id={'headcount'}
                required
              />
            </div>
          </div>

        </div>
        {/* Additional Details About Your Event:  */}
        <div className={styles.fieldFullWrapper}>
          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'additional_details_about_your_event'}>
              Additional Details About Your Event? *
            </label>
            <div className='control'>
              <textarea
                className={styles.customTextarea}
                name={'additional_details_about_your_event'}
                onChange={handleChange}
                id={'additional_details_about_your_event'}
                required
                rows='4'
              />
            </div>
          </div>
        </div>

        <div>
          <br />

          <Recaptcha
            sitekey={process.env.GATSBY_GOOGLE_RECAPTCHA_PUBLIC}
            render='explicit'
            verifyCallback={verifyCallback}
            onloadCallback={recaptchaLoaded}
            expiredCallback={expiredCallback}
          />
        </div>

        <div className={styles.field}>
          <button disabled={formValues.first_name &&
       formValues.last_name &&
       formValues.address &&
       formValues.city &&
       formValues.state &&
       formValues.zip &&
       formValues.email &&
       formValues.phone ? false : 'disabled'} className={styles.customButton} type='submit'>
            Send
          </button>
        </div>
        {formErrors && (
          <div className={styles.errors}><p>Unable to submit form. Please make sure all of your fields are filled out.</p></div>
        )}

      </form>

    </>
  )
}
export default Page
