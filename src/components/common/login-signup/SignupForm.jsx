'use client';
import { useEffect, useState } from 'react';
import LoginContainer from './LoginContainer';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { useUpdateUserDetailsMutation } from '~/lib/slices/auth/authApiSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '~/lib/slices/auth/authSlice';

let initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  countryCode: '',
};

export default function SignupForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [updateUserDetails] = useUpdateUserDetailsMutation();
  const [formData, setFormData] = useState(initialState);
  const { user } = useSelector((state) => state.auth);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      try {
        const response = await updateUserDetails({
          name: `${formData.firstName} ${formData.lastName}`,
          countryCode: formData.countryCode,
          phoneNumber: formData.phone,
        }).unwrap();

        if (response?.success) {
          toast.success(response.message);
          dispatch(
            setUserData({
              ...user,
              name: `${formData.firstName} ${formData.lastName}`,
              phoneNumber: formData.phone,
            }),
          );

          setFormData(initialState);
          router.push('/dashboard-home');
        }
      } catch (err) {
        console.log('err', err);
        setFormData(initialState);
        if (err.status === 400) {
          toast.error(err.data.message || 'Invalid OTP.');
        } else {
          toast.error('Server Error. Please try again later.');
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (user && user?.name && typeof user?.name == 'string') {
      setFormData((prevstate) => ({
        ...prevstate,
        firstName: user?.name?.split(' ')[0],
        lastName: user?.name?.split(' ')[1],
        phone: user?.phoneNumber,
      }));
    }
  }, [user]);

  return (
    <LoginContainer title="Let's get to know you better">
      <h5 className="text-center text-md text-LuminousDark mb25">
        Let's get to know you better
      </h5>
      <form className="form-style1" onSubmit={handleSignUp}>
        <div className="row mb25">
          <div className="col-6">
            <div className="mb25">
              <input
                type="text"
                className={`form-control`}
                placeholder="Enter First Name"
                name="firstName"
                onChange={(e) =>
                  setFormData((prevstate) => ({
                    ...prevstate,
                    [e.target.name]: e.target.value,
                  }))
                }
                required
                value={formData?.firstName}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb25">
              <input
                type="text"
                className={`form-control`}
                placeholder="Enter Last Name"
                name="lastName"
                onChange={(e) =>
                  setFormData((prevstate) => ({
                    ...prevstate,
                    [e.target.name]: e.target.value,
                  }))
                }
                required
                value={formData?.lastName}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="mb10">
              <PhoneInput
                country={'in'}
                inputClass="form-control"
                placeholder="phone"
                value={formData.phone}
                onChange={(phone, code) => {
                  setFormData((prevstate) => ({
                    ...prevstate,
                    phone: phone,
                    countryCode: code.dialCode,
                  }));
                }}
                enableSearch
                searchPlaceholder="Enter country code or name"
              />
            </div>
          </div>
        </div>

        <button
          className="roofi-btn btn-roofi-primary"
          style={{ width: '100%' }}
          type="submit"
        >
          Proceed
        </button>
      </form>
      <p className="text-roofiLuminousGrey mt10">
        By continuing, you agree to ours{' '}
        <strong className="underline">Tncs </strong>
        and <strong className="underline">Privacy Policy</strong>
      </p>
    </LoginContainer>
  );
}
