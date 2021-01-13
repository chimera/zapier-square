const perform = (z, bundle) => {
  const options = {
    url: 'https://connect.squareup.com/v2/locations',
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

    if (results['locations']) {
      return results['locations'];
    }

    return [];
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      status: 'ACTIVE',
      name: 'Chimera Art Space',
      country: 'US',
      created_at: '2018-10-13T03:36:49Z',
      address: {
        address_line_1: '321 Jesse St',
        country: 'US',
        administrative_district_level_1: 'CA',
        postal_code: '95472',
        locality: 'FREESTONE',
      },
      capabilities: ['CREDIT_CARD_PROCESSING'],
      timezone: 'America/Los_Angeles',
      currency: 'USD',
      language_code: 'en-US',
      business_name: 'Chimera Art Space',
      merchant_id: 'K9WNFTDEDDSJC',
      type: 'PHYSICAL',
      id: 'S4X6J0SWAX2GR',
      website_url: '',
    },
    outputFields: [
      { key: 'status' },
      { key: 'name' },
      { key: 'country' },
      { key: 'created_at' },
      { key: 'address__address_line_1' },
      { key: 'address__country' },
      { key: 'address__administrative_district_level_1' },
      { key: 'address__postal_code' },
      { key: 'address__locality' },
      { key: 'capabilities[]0' },
      { key: 'capabilities[]1' },
      { key: 'capabilities[]2' },
      { key: 'capabilities[]3' },
      { key: 'capabilities[]4' },
      { key: 'capabilities[]5' },
      { key: 'capabilities[]6' },
      { key: 'capabilities[]7' },
      { key: 'capabilities[]8' },
      { key: 'capabilities[]9' },
      { key: 'capabilities[]10' },
      { key: 'capabilities[]11' },
      { key: 'capabilities[]12' },
      { key: 'capabilities[]13' },
      { key: 'capabilities[]14' },
      { key: 'capabilities[]15' },
      { key: 'capabilities[]16' },
      { key: 'capabilities[]17' },
      { key: 'capabilities[]18' },
      { key: 'capabilities[]19' },
      { key: 'capabilities[]20' },
      { key: 'capabilities[]21' },
      { key: 'timezone' },
      { key: 'currency' },
      { key: 'language_code' },
      { key: 'business_name' },
      { key: 'merchant_id' },
      { key: 'type' },
      { key: 'id' },
      { key: 'website_url' },
    ],
  },
  noun: 'Location',
  display: {
    hidden: true,
    important: false,
    description: 'Gets locations from Square.',
    label: 'Get Locations',
  },
  key: 'get_locations',
};
