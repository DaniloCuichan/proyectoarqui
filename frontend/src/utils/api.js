export const fetchSolicitudes = async () => {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      query: `
        query {
          solicitudesCredito {
            id_solicitud
            monto
            estatus
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  return data.solicitudesCredito;
};
