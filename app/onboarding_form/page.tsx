"use client"
import AuthButton from '@/components/AuthButton';
import { NextPage } from 'next';
import { useState } from 'react';

const OnboardingForm: NextPage = () => {
    const [formData, setFormData] = useState({
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
        crmProvider: '',
        crmUsername: '',
        crmPassword: '',
        creditCardType: '',
        creditCardNumber: '',
        expirationDate: '',
        cvvCode: '',
        cardholderName: '',
        cardholderAddress: '',
        cardholderCity: '',
        cardholderState: '',
        cardholderZip: '',
        signature: '',
        date: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="container mx-auto max-w-2xl mt-10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white bg-opacity-70 shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Website Popup Onboarding Form</h2>

                {/* Form fields and sections here... */}

                <div className="mb-6">
                    <label htmlFor="dealerName" className="block text-sm font-semibold mb-2 text-gray-700">Dealer Name:</label>
                    <input type="text" id="dealerName" name="dealerName" onChange={handleChange} required className="shadow-sm appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400" />
                </div>

                {/* ... other fields ... */}

                <div className="flex items-center justify-between mt-10">
                    <button className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" type="submit">
                        Submit Form
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OnboardingForm;
