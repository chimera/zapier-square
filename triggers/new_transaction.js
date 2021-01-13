const perform = (z, bundle) => {
  const options = {
    url: `https://connect.squareup.com/v2/locations/${bundle.inputData.location_id}/transactions`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.access_token}`,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    if (results['transactions']) {
      const options2 = {
        url: `https://connect.squareup.com/v2/locations/${bundle.inputData.location_id}/transactions/${results.transactions[0].id}`,
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${bundle.authData.access_token}`,
        },
        params: {},
      };
      return z.request(options2).then((response) => {
        response.throwForStatus();
        const result2 = z.JSON.parse(response.content);

        return [result2['transaction']];
      });
    }

    return [];
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        list: false,
        required: true,
        dynamic: 'get_locations.id.Location',
        label: 'Location',
        helpText: 'Choose a location to query.',
        key: 'location_id',
        type: 'string',
        altersDynamicFields: false,
      },
    ],
    sample: {
      product: 'REGISTER',
      created_at: '2019-09-23T20:05:45Z',
      tenders: [
        {
          amount_money: { currency: 'USD', amount: 6000 },
          type: 'CARD',
          created_at: '2019-09-23T20:05:37Z',
          card_details: {
            status: 'CAPTURED',
            entry_method: 'SWIPED',
            card: {
              fingerprint:
                'sq-1-98Hdcz_1zXF6CRh6JfFRMT56Jn3UEN9xKvrJvR9ARLZM0BdMjgNyfSqfhWayQjJ6iA',
              card_brand: 'VISA',
              last_4: '8368',
            },
          },
          processing_fee_money: { currency: 'USD', amount: 165 },
          customer_id: '1933X9BF991VZCT0MF248FW2BR',
          location_id: 'S4X6J0SWAX2GR',
          id: 'krSSOqdID6nXjNFOT5MdzvMF',
          transaction_id: 'OSkDqYeujSVKdRCGClvrUb1eV',
        },
      ],
      client_id: '91D8FF31-B1A7-464D-A656-E4856090228E',
      location_id: 'S4X6J0SWAX2GR',
      id: 'OSkDqYeujSVKdRCGClvrUb1eV',
    },
    outputFields: [
      { key: 'product' },
      { key: 'created_at' },
      { key: 'tenders[]amount_money__currency' },
      { key: 'tenders[]amount_money__amount' },
      { key: 'tenders[]location_id' },
      { key: 'tenders[]created_at' },
      { key: 'tenders[]id' },
      { key: 'tenders[]processing_fee_money__currency' },
      { key: 'tenders[]processing_fee_money__amount' },
      { key: 'tenders[]customer_id' },
      { key: 'tenders[]type' },
      { key: 'tenders[]card_details__status' },
      { key: 'tenders[]card_details__entry_method' },
      { key: 'tenders[]card_details__card__last_4' },
      { key: 'tenders[]card_details__card__card_brand' },
      { key: 'tenders[]card_details__card__fingerprint' },
      { key: 'tenders[]transaction_id' },
      { key: 'client_id' },
      { key: 'location_id' },
      { key: 'id' },
    ],
  },
  noun: 'Transaction',
  display: {
    hidden: false,
    important: false,
    description: 'Triggers when a new transaction is created.',
    label: 'New Transaction (deprecated)',
  },
  key: 'new_transaction',
};
