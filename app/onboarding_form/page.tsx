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
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center py-4 px-4 sm:px-6 lg:px-8'>
      {/* Centering the logo and slightly moving it to the left */}
      <div className="mb-8 w-full flex justify-center">
        <div style={{ maxWidth: '500px', width: '100%', marginLeft: '-30px' }}> {/* Adjust marginLeft to move logo slightly to the left */}
          <SpmLogo />
        </div>
      </div>

      <div className='max-w-full w-full space-y-8'>
        {/* Adjust the rounding here */}
        <div className='bg-white shadow rounded-md'> {/* For moderate rounding */}
          <div className='px-4 py-5 sm:px-6 bg-gray-50'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              SPM Pop-Up Registration
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-gray-500'>
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                    className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
                    value={formValues.crmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Credit Card Authorization */}
              <div className='mt-6 border-t border-gray-200 pt-6'>
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
                      className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                      className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                      className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                      className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                      className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                      className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                      className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                      className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
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
                      className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
                      value={formValues.cvvCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Signature and Date */}
              <div className='mt-6 border-t border-gray-200 pt-6'>
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
                      className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2'
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
                      className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-200 p-2 '
                      value={formValues.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className='px-4 py-3 text-right sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-800 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
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
