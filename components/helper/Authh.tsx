export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    window.location.href = '/'; 
  };
  