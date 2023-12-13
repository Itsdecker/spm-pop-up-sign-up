'use client';

import { supabase } from '@/utils/supabase/client';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SpmLogo from '@/components/SpmLogo';

const OnboardingForm: NextPage = () => {
  const [formValues, setFormValues] = useState({
    dealerName: '',
    dealerAddress: '',
    city: '',
    state: '',
    zip: '',
    dealerPhone: '',
    dealerWebsite: '',
    preferredOffer: '',
    ipAddress: '',
    websiteCompanyContact: '',
    itContact: '',
    billingContact: '',
    crmEmail: '',
    crmProvider: '',
    crmUsername: '',
    crmPassword: '',
    cardholderName: '',
    cardholderAddress: '',
    cardholderCity: '',
    cardholderState: '',
    cardholderZip: '',
    creditCardType: '',
    creditCardNumber: '',
    expirationDate: '',
    cvvCode: '',
    signature: '',
    date: '',
  });
  const router = useRouter();

  // Handle input change
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Here you can use the formValues object to send the data to your API or server

    const { data, error } = await supabase()
      .from('spm_onboarding_form_new') // Replace with your table name
      .insert([{ ...formValues }]);

    if (error) {
      console.error('There was an error inserting', error);
    } else {
      router.push('/success');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4 py-4 bg-gray-100 sm:px-6 lg:px-8'>
      {/* Centering the logo and slightly moving it to the left */}
      <div className="flex justify-center w-full mb-8">
        <div style={{ maxWidth: '500px', width: '100%', marginLeft: '-30px' }}> {/* Adjust marginLeft to move logo slightly to the left */}
          <SpmLogo />
        </div>
      </div>

      <div className='w-full max-w-full space-y-8'>
        {/* Adjust the rounding here */}
        <div className='bg-white rounded-md shadow'> {/* For moderate rounding */}
          <div className='px-4 py-5 sm:px-6 bg-gray-50'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              SPM Pop-Up Registration
            </h3>
            <p className='max-w-2xl mt-1 text-sm text-gray-500'>
              Please fill in the details below.
            </p>
          </div>
          <div className='border-t border-gray-200'>
            <form onSubmit={handleSubmit} className='px-4 py-5 sm:p-6'>
              {/* Dealer Information */}
              <div className='grid grid-cols-6 gap-6'>
                {/* Dealer Name */}
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='dealer-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Dealer Name
                  </label>
                  <input
                    type='text'
                    name='dealerName'
                    id='dealer-name'
                    autoComplete='organization'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.dealerName}
                    onChange={handleChange}
                  />
                </div>

                {/* Dealer Address */}
                <div className='col-span-6'>
                  <label
                    htmlFor='dealer-address'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Dealer Address
                  </label>
                  <input
                    type='text'
                    name='dealerAddress'
                    id='dealer-address'
                    autoComplete='street-address'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.dealerAddress}
                    onChange={handleChange}
                  />
                </div>

                {/* City, State, Zip */}
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium text-gray-700'
                  >
                    City
                  </label>
                  <input
                    type='text'
                    name='city'
                    id='city'
                    autoComplete='address-level2'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.city}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='state'
                    className='block text-sm font-medium text-gray-700'
                  >
                    State
                  </label>
                  <input
                    type='text'
                    name='state'
                    id='state'
                    autoComplete='address-level1'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.state}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='zip'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Zip
                  </label>
                  <input
                    type='text'
                    name='zip'
                    id='zip'
                    autoComplete='postal-code'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.zip}
                    onChange={handleChange}
                  />
                </div>

                {/* Dealer Phone & Website */}
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='dealer-phone'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Dealer Phone
                  </label>
                  <input
                    type='tel'
                    name='dealerPhone'
                    id='dealer-phone'
                    autoComplete='tel'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.dealerPhone}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='dealer-website'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Dealer Website
                  </label>
                  <input
                    type='url'
                    name='dealerWebsite'
                    id='dealer-website'
                    autoComplete='url'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.dealerWebsite}
                    onChange={handleChange}
                  />
                </div>

                {/* Preferred Offer */}
                <div className='col-span-6'>
                  <label
                    htmlFor='preferred-offer'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Preferred Offer
                  </label>
                  <input
                    type='text'
                    name='preferredOffer'
                    id='preferred-offer'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    placeholder='$500 off is the recommended start'
                    value={formValues.preferredOffer}
                    onChange={handleChange}
                  />
                </div>

                {/* IP Address at Dealership */}
                <div className='col-span-6'>
                  <label
                    htmlFor='ip-address'
                    className='block text-sm font-medium text-gray-700'
                  >
                    IP Address at the dealership
                  </label>
                  <input
                    type='text'
                    name='ipAddress'
                    id='ip-address'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    placeholder='Google: What is my ip?'
                    value={formValues.ipAddress}
                    onChange={handleChange}
                  />
                </div>

                {/* Website Company Contact */}
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='website-company-contact'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Website Company Contact
                  </label>
                  <input
                    type='text'
                    name='websiteCompanyContact'
                    id='website-company-contact'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.websiteCompanyContact}
                    onChange={handleChange}
                  />
                </div>

                {/* IT Contact at the Dealership */}
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='it-contact'
                    className='block text-sm font-medium text-gray-700'
                  >
                    IT Contact at the Dealership
                  </label>
                  <input
                    type='text'
                    name='itContact'
                    id='it-contact'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.itContact}
                    onChange={handleChange}
                  />
                </div>

                {/* Billing Contact */}
                <div className='col-span-6'>
                  <label
                    htmlFor='billing-contact'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Billing Contact at the Dealership
                  </label>
                  <input
                    type='text'
                    name='billingContact'
                    id='billing-contact'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.billingContact}
                    onChange={handleChange}
                  />
                </div>

                {/* CRM Lead Routing E-mail Address */}
                <div className='col-span-6'>
                  <label
                    htmlFor='crm-email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    CRM Lead Routing E-mail Address
                  </label>
                  <input
                    type='email'
                    name='crmEmail'
                    id='crm-email'
                    autoComplete='email'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.crmEmail}
                    onChange={handleChange}
                  />
                </div>

                {/* CRM Login */}
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='crm-provider'
                    className='block text-sm font-medium text-gray-700'
                  >
                    CRM Provider
                  </label>
                  <input
                    type='text'
                    name='crmProvider'
                    id='crm-provider'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.crmProvider}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='crm-username'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Username
                  </label>
                  <input
                    type='text'
                    name='crmUsername'
                    id='crm-username'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.crmUsername}
                    onChange={handleChange}
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='crm-password'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='crmPassword'
                    id='crm-password'
                    className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                    value={formValues.crmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Credit Card Authorization */}
              <div className='pt-6 mt-6 border-t border-gray-200'>
                <h4 className='text-lg font-medium text-gray-900'>
                  Credit Card Authorization
                </h4>
                <div className='grid grid-cols-6 gap-6 mt-4'>
                  {/* Cardholder Name */}
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='cardholder-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Cardholder Name
                    </label>
                    <input
                      type='text'
                      name='cardholderName'
                      id='cardholder-name'
                      className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                      value={formValues.cardholderName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Cardholder Address */}
                  <div className='col-span-6'>
                    <label
                      htmlFor='cardholder-address'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Cardholder Address
                    </label>
                    <input
                      type='text'
                      name='cardholderAddress'
                      id='cardholder-address'
                      className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                      value={formValues.cardholderAddress}
                      onChange={handleChange}
                    />
                  </div>

                  {/* City, State, Zip */}
                  <div className='col-span-6 sm:col-span-2'>
                    <label
                      htmlFor='cardholder-city'
                      className='block text-sm font-medium text-gray-700'
                    >
                      City
                    </label>
                    <input
                      type='text'
                      name='cardholderCity'
                      id='cardholder-city'
                      className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                      value={formValues.cardholderCity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-2'>
                    <label
                      htmlFor='cardholder-state'
                      className='block text-sm font-medium text-gray-700'
                    >
                      State
                    </label>
                    <input
                      type='text'
                      name='cardholderState'
                      id='cardholder-state'
                      className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                      value={formValues.cardholderState}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-2'>
                    <label
                      htmlFor='cardholder-zip'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Zip
                    </label>
                    <input
                      type='text'
                      name='cardholderZip'
                      id='cardholder-zip'
                      className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                      value={formValues.cardholderZip}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Credit Card Details */}
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='credit-card-type'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Credit Card Type
                    </label>
                    <input
                      type='text'
                      name='creditCardType'
                      id='credit-card-type'
                      className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                      value={formValues.creditCardType}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='credit-card-number'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Credit Card Number
                    </label>
                    <input
                      type='text'
                      name='creditCardNumber'
                      id='credit-card-number'
                      className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                      value={formValues.creditCardNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-2'>
                    <label
                      htmlFor='expiration-date'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Expiration Date
                    </label>
                    <input
                      type='text'
                      name='expirationDate'
                      id='expiration-date'
                      className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                      value={formValues.expirationDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-2'>
                    <label
                      htmlFor='cvv-code'
                      className='block text-sm font-medium text-gray-700'
                    >
                      CVV Code
                    </label>
                    <input
                      type='text'
                      name='cvvCode'
                      id='cvv-code'
                      className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                      value={formValues.cvvCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Signature and Date */}
              <div className='pt-6 mt-6 border-t border-gray-200'>
                <div className='flex justify-between gap-4'>
                  <div className='w-full'>
                    <label
                      htmlFor='signature'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Signature/Digital Signature
                    </label>
                    <input
                      type='text'
                      name='signature'
                      id='signature'
                      className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm'
                      value={formValues.signature}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='w-full'>
                    <label
                      htmlFor='date'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Date
                    </label>
                    <input
                      type='date'
                      name='date'
                      id='date'
                      className='block w-full p-2 mt-1 bg-gray-200 border-gray-300 shadow-sm sm:text-sm '
                      value={formValues.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className='px-4 py-3 text-right sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-800 bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
