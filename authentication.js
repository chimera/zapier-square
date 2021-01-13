module.exports = {
  test: {
    body: {},
    url: 'https://connect.squareup.com/v2/locations',
    removeMissingValuesFrom: {},
    headers: {
      Authorization: 'Bearer {{bundle.authData.access_token}}',
      Accept: 'application/json',
    },
    params: {},
    method: 'GET',
  },
  oauth2Config: {
    authorizeUrl: {
      url: 'https://connect.squareup.com/oauth2/authorize',
      params: {
        state: '{{bundle.inputData.state}}',
        redirect_uri: '{{bundle.inputData.redirect_uri}}',
        response_type: 'code',
        client_id: '{{process.env.CLIENT_ID}}',
      },
      method: 'GET',
    },
    refreshAccessToken: {
      body: {
        client_secret: '{{process.env.CLIENT_SECRET}}',
        grant_type: 'refresh_token',
        refresh_token: '{{bundle.authData.refresh_token}}',
        client_id: '{{process.env.CLIENT_ID}}',
      },
      url: 'https://connect.squareup.com/oauth2/token',
      removeMissingValuesFrom: {},
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      params: {},
      method: 'POST',
    },
    getAccessToken: {
      body: {
        code: '{{bundle.inputData.code}}',
        client_secret: '{{process.env.CLIENT_SECRET}}',
        redirect_uri: '{{bundle.inputData.redirect_uri}}',
        client_id: '{{process.env.CLIENT_ID}}',
        grant_type: 'authorization_code',
      },
      url: 'https://connect.squareup.com/oauth2/token',
      removeMissingValuesFrom: {},
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      params: {},
      method: 'POST',
    },
    autoRefresh: true,
    scope:
      'BANK_ACCOUNTS_READ,CUSTOMERS_READ,CUSTOMERS_WRITE,EMPLOYEES_READ,EMPLOYEES_WRITE,INVENTORY_READ,INVENTORY_WRITE,ITEMS_READ,ITEMS_WRITE,MERCHANT_PROFILE_READ,ORDERS_READ,ORDERS_WRITE,PAYMENTS_READ,PAYMENTS_WRITE,PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS,PAYMENTS_WRITE_IN_PERSON,SETTLEMENTS_READ,TIMECARDS_READ,TIMECARDS_WRITE,TIMECARDS_SETTINGS_READ,TIMECARDS_SETTINGS_WRITE',
  },
  type: 'oauth2',
  connectionLabel: '',
};
