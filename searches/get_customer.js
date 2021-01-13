const perform = (z, bundle) => {
  const options = {
    url: `https://connect.squareup.com/v2/customers/${bundle.inputData.customer_id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.access_token}`,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    if (results) {
      return [results];
    } else {
      return [];
    }
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        required: false,
        list: false,
        label: 'Customer ID',
        key: 'customer_id',
        type: 'string',
        altersDynamicFields: false,
      },
    ],
    sample: {
      customer: {
        family_name: 'Johnstone',
        preferences: { email_unsubscribed: false },
        created_at: '2019-09-23T20:05:47.064Z',
        updated_at: '2019-09-23T20:05:47Z',
        given_name: 'Kathleen',
        groups: [
          { id: 'K9WNFTDEDDSJC.REACHABLE', name: 'Reachable' },
          { id: 'gv2:AEXS60RVA9170N4DG3H7X1F4FG', name: 'Instant Profile' },
        ],
        creation_source: 'INSTANT_PROFILE',
        id: '1933X9BF991VZCT0MF248FW2BR',
      },
    },
    outputFields: [
      { key: 'customer__family_name' },
      { key: 'customer__preferences__email_unsubscribed' },
      { key: 'customer__created_at' },
      { key: 'customer__updated_at' },
      { key: 'customer__given_name' },
      { key: 'customer__groups[]id' },
      { key: 'customer__groups[]name' },
      { key: 'customer__creation_source' },
      { key: 'customer__id' },
    ],
  },
  noun: 'Customer',
  display: {
    hidden: false,
    important: true,
    description: 'Finds a customer by ID',
    label: 'Get Customer',
  },
  key: 'get_customer',
};
