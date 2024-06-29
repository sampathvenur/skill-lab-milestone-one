import axios from 'axios';

export const login = (formData, history) => async (dispatch) => {
  try {
    const response = await axios.post('/api/users/login', formData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });

    switch (response.data.result.role) {
      case 'student':
        history.push('/student-portal');
        break;
      case 'parent':
        history.push('/parent-portal');
        break;
      case 'teacher':
        history.push('/teacher-portal');
        break;
      case 'admin':
        history.push('/admin-dashboard');
        break;
      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};