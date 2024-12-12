

import Swal from 'sweetalert2';

const BASE_URL = 'http://10.11.1.67:8000/api/v1';

let TOKEN= null;
if (typeof window !== 'undefined') {
  TOKEN = localStorage.getItem('token');
}

const fetchData = async (
  endpoint='',
  q= '', // Optional query string
  page= '', // Optional page query string
  method='GET', // Default to GET method
  body, // Optional request body
  options = {},
)=> {
  try {
    const url = `${BASE_URL}/${endpoint}${q}${page}`;
    const headers = {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/json, application/xml, text/plain, text/html, */*',
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      method,
      headers: endpoint.startsWith('admin/procurement')|| endpoint === 'admin/procurementhistory' ? {
        Authorization: `Bearer ${TOKEN}`,
        Accept: 'application/json, application/xml, text/plain, text/html, */*',
      } : headers,
      body: body && (endpoint.startsWith('admin/procurement') || endpoint === 'admin/procurementhistory') ? body : JSON.stringify(body),
      ...options,
    });

    if (!response.ok) {
      if (response.status === 400) {
        // localStorage.removeItem('token');
        // localStorage.removeItem('user');
      }

      const error= await response.json();
      showErrorToast(`Error: ${error.error}`);
      throw new Error(error.message);
    }

    if (['POST', 'PATCH', 'DELETE'].includes(method)) {
      showSuccessToast('Success: Request was successful');
      if (endpoint === 'admin/web-login' || endpoint === 'register') {
        
      }else {
        window.location.reload();
      }
    }

    return await response.json();
  } catch (error) {
    showErrorToast(`Error: ${error.message}`);
 
  }
};

const showErrorToast = (message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: 'error',
    title: message,
  });
};

const showSuccessToast = (message) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: 'success',
    title: message,
  });
};

export default fetchData;
