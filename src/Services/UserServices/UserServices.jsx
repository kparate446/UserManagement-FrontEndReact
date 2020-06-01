import axios from 'axios';

export function userLogin (loginDTO) {
  return axios.post ('http://localhost:8080/userapi/loginusers', loginDTO, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
}

export function forgotPassword (forgotPasswordDTO) {
  return axios.post (
    'http://localhost:8080/userapi/forgotpassword',
    forgotPasswordDTO,
    {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  );
}

export function addUser (registrationDto) {
  return axios.post (
    'http://localhost:8080/userapi/addusers',
    registrationDto,
    {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  );
}

