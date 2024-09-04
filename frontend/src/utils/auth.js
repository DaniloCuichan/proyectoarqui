export const login = async (email, password) => {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        mutation {
          loginUsuario(correo_electronico: "${email}", password: "${password}") {
            token
            usuario {
              id_usuario
            }
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  if (data.loginUsuario) {
    localStorage.setItem('token', data.loginUsuario.token);
    return true;
  }
  return false;
};

export const isAuthenticated = () => !!localStorage.getItem('token');
