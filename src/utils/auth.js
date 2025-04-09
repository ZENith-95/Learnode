// Authentication utilities for managing user session

// Set user data in localStorage
export const setUserData = (userData) => {
  try {
    localStorage.setItem('studyCircleUser', JSON.stringify(userData));
    return true;
  } catch (error) {
    console.error('Error storing user data:', error);
    return false;
  }
};

// Get user data from localStorage
export const getUserData = () => {
  try {
    const userData = localStorage.getItem('studyCircleUser');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};

// Check if user is logged in
export const isLoggedIn = () => {
  return !!getUserData();
};

// Clear user data (logout)
export const clearUserData = () => {
  try {
    localStorage.removeItem('studyCircleUser');
    return true;
  } catch (error) {
    console.error('Error clearing user data:', error);
    return false;
  }
}; 