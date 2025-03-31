import dynamic from 'next/dynamic';

const OTPVerificationForm = dynamic(
  () => import('../../../components/common/login-signup/OTPVerificationForm'),
  {
    ssr: false,
  },
);
export const metadata = {
  title: 'Verify OTP  || Roofi AI - Fractional Property Ownership Platform',
};

const OTPVerification = () => {
  return <OTPVerificationForm />;
};

export default OTPVerification;
