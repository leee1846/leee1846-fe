export const postLogin = (params: { id: string; pw: string }) => {
  if (params.id && params.pw) {
    return {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJzaXhzaG9wXzAwMSJ9.gwRgLjntXAupLH-nZve3zIte_k3LT0AgGcybmqE9Ceo',
      user: {
        id: 'sixshop_001',
        name: 'SixshopFE',
      },
    };
  }

  return {
    error: '404',
  };
};
