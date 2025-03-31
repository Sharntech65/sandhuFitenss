'use client';
import Link from 'next/link';
import LoginContainer from './LoginContainer';
import { useCountDown } from '../../../hooks/useCountDown';
import { useState } from 'react';
import { useVerifyOtpMutation } from '~/lib/slices/auth/authApiSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function OTPVerificationForm() {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const { isActive, resetTimer, formattedTime } = useCountDown(60);
  const [verifyOtp] = useVerifyOtpMutation();
  const UserEmail = localStorage.getItem('userRegisterzEmail');
  const userDirection = localStorage.getItem('userDirection');
  const handleOtp = async (e) => {
    try {
      e.preventDefault();
      if (!otp) {
        toast.error('Please enter OTP.');
        return;
      }

      try {
        const response = await verifyOtp({
          otp: Number(otp),
          email: UserEmail,
        }).unwrap();
        if (response?.success) {
          toast.success(response.message);
          setOtp('');
          userDirection == 'login' && response?.name && response?.phoneNumber
            ? router.push('/dashboard-home')
            : router.push('/signup');
        }
      } catch (err) {
        console.log('err', err);
        setOtp('');
        if (err.status === 400) {
          toast.error(err.data.message || 'Invalid OTP.');
        } else {
          toast.error('Server Error. Please try again later.');
        }
      }
    } catch (error) {}
  };

  return (
    <LoginContainer>
      <div className="d-flex flex-column gap-2">
        <h5 className="text-center text-md text-LuminousDark">
          Enter OTP to verify
        </h5>
        <h5 className="text-center text-sm">
          {`Enter 4 digit OTP sent to you on ${UserEmail}`}
        </h5>
        <Link href={'/login'}>
          <h5 className="text-sm text-center text-primary text-semibold -mt-10">
            Change
          </h5>
        </Link>
      </div>

      <form className="form-style1">
        <div className="mb10">
          <input
            type="number"
            className={`form-control`}
            placeholder="Enter OTP"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
          />
        </div>

        {!isActive ? (
          <h5
            className="text-sm text-center cursor-pointer text-primary text-semibold mb25"
            onClick={() => resetTimer(5)}
          >
            Resend OTP
          </h5>
        ) : (
          <p className="text-center mb25">
            Resend OTP in {formattedTime} seconds
          </p>
        )}

        <button
          className="roofi-btn btn-roofi-primary"
          style={{ width: '100%' }}
          onClick={(e) => handleOtp(e)}
        >
          Proceed
        </button>
      </form>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <p className="d-flex justify-content-center align-items-center gap-2">
          <Link href="/login">
            <span className="back_btn">Back to login</span>
          </Link>
        </p>
      </div>
    </LoginContainer>
  );
}
