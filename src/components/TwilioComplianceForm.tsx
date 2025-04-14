import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, MessageSquare, XCircle, ArrowLeft } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  optIn: boolean;
}

interface TwilioComplianceFormProps {
  onBack?: () => void;
}

const TwilioComplianceForm: React.FC<TwilioComplianceFormProps> = ({ onBack }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    optIn: false,
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const validatePhoneNumber = (phone: string) => {
    // Basic US phone number validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };
  
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is changed
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.optIn) {
      newErrors.optIn = 'You must consent to receive text messages';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Direct email approach instead of Formspree
      const response = await fetch("https://formsubmit.co/ajax/jose@eosync.io", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email || "no-email@provided.com",
          phone: formData.phoneNumber,
          optIn: formData.optIn ? "Yes" : "No",
          message: `New EOS Text Message Opt-In. Phone: ${formData.phoneNumber}. Email: ${formData.email || "Not provided"}`,
          _subject: `EOS Text Message Opt-In: ${formData.firstName} ${formData.lastName}`
        })
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        setSubmitError("There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError("There was a problem submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      optIn: false,
    });
    setIsSuccess(false);
    setSubmitError('');
    setErrors({});
  };
  
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      resetForm();
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="p-2 rounded-full bg-indigo-100 mr-4">
          <MessageSquare size={24} className="text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Text Message Opt-In</h2>
      </div>
      
      <p className="text-gray-600 mb-6">
        Sign up to receive important updates about EOS implementation and resources via text message.
      </p>
      
      {isSuccess ? (
        <div className="text-center py-10">
          <div className="mb-4 bg-green-50 border border-green-200 rounded-md p-4 inline-flex items-start mx-auto">
            <CheckCircle2 size={24} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-green-700 font-medium">
                Thank you for signing up!
              </p>
              <p className="text-green-600 mt-1">
                Your information has been sent to jose@eosync.io and you will receive text messages about EOS updates and resources.
              </p>
            </div>
          </div>
          <button
            onClick={handleBack}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {submitError && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
              <XCircle size={20} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-red-700">
                {submitError}
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.firstName ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                  errors.lastName ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.phoneNumber ? 'border-red-300' : 'border-gray-300'
              }`}
            />
            {errors.phoneNumber ? (
              <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
            ) : (
              <p className="mt-1 text-xs text-gray-500">Format: (123) 456-7890</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.email ? 'border-red-300' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          
          <div className="mb-8">
            <div className={`flex items-start ${errors.optIn ? 'border-l-4 border-red-500 pl-3' : ''}`}>
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="optIn"
                  name="optIn"
                  checked={formData.optIn}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="optIn" className="font-medium text-gray-700">
                  I consent to receive text messages about EOS *
                </label>
                <p className="text-gray-500">
                  By checking this box, you consent to receive text messages at the provided phone number. Message and data rates may apply. Message frequency varies. Reply STOP to cancel at any time.
                </p>
              </div>
            </div>
            {errors.optIn && (
              <p className="mt-1 text-sm text-red-600">{errors.optIn}</p>
            )}
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle size={20} className="text-indigo-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-indigo-800">Important Information</h3>
                  <div className="mt-2 text-sm text-indigo-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>You can unsubscribe at any time by replying STOP to any message</li>
                      <li>We comply with the Telephone Consumer Protection Act (TCPA)</li>
                      <li>Your information will be kept secure and will not be shared with third parties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Subscribe to Text Updates'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TwilioComplianceForm;