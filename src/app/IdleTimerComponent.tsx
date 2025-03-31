'use client';

import { useRouter } from 'next/navigation';
// components/IdleTimerComponent.js
import React, { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logout } from '~/lib/slices/auth/authSlice';

const IdleTimerComponent = ({ timeout = 1000 * 60 * 60 }) => {
  const dispatch = useDispatch();

  // default to 15 minutes
  const [isTimedOut, setIsTimedOut] = useState(false);
  const router = useRouter();

  const handleOnIdle = () => {
    setIsTimedOut(true);
    // Log out or redirect user
    // Example: clear session and redirect to login
    // Your logout logic here
    toast.info('Session Expired.');
    setTimeout(() => {
      dispatch(logout(''));
      toast.success('Logged out successfully.');
      // router.refresh();
      // router.push('/');
      localStorage.clear();
      sessionStorage.clear();
      window.location.replace('/');
    }, 1500);
  };

  const handleOnActive = () => {
    if (isTimedOut) {
      // Reset timeout if user becomes active again
      setIsTimedOut(false);
    }
  };

  const handleOnAction = () => {
    if (isTimedOut) {
      // Reset timeout if user interacts with the page
      setIsTimedOut(false);
    }
  };

  useIdleTimer({
    timeout,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
  });

  return null; // This component does not render anything
};

export default IdleTimerComponent;
