const perform = (z, bundle) => {
  /*
var after = new Date();
after.setDate(after.getDate() - 1);
var before = new Date();
before.setDate(before.getDate() + 1);
*/

  const options = {
    url: `https://connect.squareup.com/v2/orders/search`,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.access_token}`,
      'Content-Type': 'application/json',
    },
    params: {},
    body: {
      location_ids: [`${bundle.inputData.location_id}`],
      query: {
        filter: {
          //        "date_time_filter": {
          //        "closed_at": {
          //          "start_at": after.toISOString(),
          //          "end_at": before.toISOString()
          //        }
          //        },

          state_filter: {
            states: ['COMPLETED'],
          },
        },
        sort: {
          sort_field: 'CLOSED_AT',
          sort_order: 'DESC',
        },
      },
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    if (results['orders']) {
      return results['orders'];
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
        key: 'location_id',
        type: 'string',
        altersDynamicFields: false,
      },
    ],
    sample: {
      status: 'COMPLETED',
      line_items: [
        {
          total_discount_money: { currency: 'USD', amount: 0 },
          name: 'Amber Class Payment',
          gross_sales_money: { currency: 'USD', amount: 6000 },
          total_money: { currency: 'USD', amount: 6000 },
          total_tax_money: { currency: 'USD', amount: 0 },
          note: 'Beginning/intermediate sign off',
          variation_name: 'Regular',
          catalog_object_id: 'MZ2EEXO4PXIAVFRP2UKWTRHZ',
          quantity: '1',
          base_price_money: { currency: 'USD', amount: 6000 },
          uid: '006DA19B-6FF9-4A7F-AD6A-48AA08506779',
        },
      ],
      return_amounts: {
        service_charge_money: { currency: 'USD', amount: 0 },
        tax_money: { currency: 'USD', amount: 0 },
        total_money: { currency: 'USD', amount: 0 },
        discount_money: { currency: 'USD', amount: 0 },
        tip_money: { currency: 'USD', amount: 0 },
      },
      total_discount_money: { currency: 'USD', amount: 0 },
      net_amounts: {
        service_charge_money: { currency: 'USD', amount: 0 },
        tax_money: { currency: 'USD', amount: 0 },
        total_money: { currency: 'USD', amount: 6000 },
        discount_money: { currency: 'USD', amount: 0 },
        tip_money: { currency: 'USD', amount: 0 },
      },
      total_money: { currency: 'USD', amount: 6000 },
      created_at: '2019-09-23T20:05:45Z',
      updated_at: '2019-09-23T20:05:45Z',
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
      total_tax_money: { currency: 'USD', amount: 0 },
      total_service_charge_money: { currency: 'USD', amount: 0 },
      closed_at: '2019-09-23T20:05:45Z',
      total_tip_money: { currency: 'USD', amount: 0 },
      location_id: 'S4X6J0SWAX2GR',
      id: 'OSkDqYeujSVKdRCGClvrUb1eV',
    },
    outputFields: [
      { key: 'status' },
      { key: 'line_items[]total_discount_money__currency' },
      { key: 'line_items[]total_discount_money__amount' },
      { key: 'line_items[]name' },
      { key: 'line_items[]variation_name' },
      { key: 'line_items[]base_price_money__currency' },
      { key: 'line_items[]base_price_money__amount' },
      { key: 'line_items[]total_tax_money__currency' },
      { key: 'line_items[]total_tax_money__amount' },
      { key: 'line_items[]note' },
      { key: 'line_items[]gross_sales_money__currency' },
      { key: 'line_items[]gross_sales_money__amount' },
      { key: 'line_items[]catalog_object_id' },
      { key: 'line_items[]uid' },
      { key: 'line_items[]total_money__currency' },
      { key: 'line_items[]total_money__amount' },
      { key: 'line_items[]quantity' },
      { key: 'return_amounts__service_charge_money__currency' },
      { key: 'return_amounts__service_charge_money__amount' },
      { key: 'return_amounts__tax_money__currency' },
      { key: 'return_amounts__tax_money__amount' },
      { key: 'return_amounts__total_money__currency' },
      { key: 'return_amounts__total_money__amount' },
      { key: 'return_amounts__discount_money__currency' },
      { key: 'return_amounts__discount_money__amount' },
      { key: 'return_amounts__tip_money__currency' },
      { key: 'return_amounts__tip_money__amount' },
      { key: 'total_discount_money__currency' },
      { key: 'total_discount_money__amount' },
      { key: 'net_amounts__service_charge_money__currency' },
      { key: 'net_amounts__service_charge_money__amount' },
      { key: 'net_amounts__tax_money__currency' },
      { key: 'net_amounts__tax_money__amount' },
      { key: 'net_amounts__total_money__currency' },
      { key: 'net_amounts__total_money__amount' },
      { key: 'net_amounts__discount_money__currency' },
      { key: 'net_amounts__discount_money__amount' },
      { key: 'net_amounts__tip_money__currency' },
      { key: 'net_amounts__tip_money__amount' },
      { key: 'location_id' },
      { key: 'created_at' },
      { key: 'updated_at' },
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
      { key: 'id' },
      { key: 'total_service_charge_money__currency' },
      { key: 'total_service_charge_money__amount' },
      { key: 'closed_at' },
      { key: 'total_tip_money__currency' },
      { key: 'total_tip_money__amount' },
      { key: 'total_money__currency' },
      { key: 'total_money__amount' },
      { key: 'total_tax_money__currency' },
      { key: 'total_tax_money__amount' },
    ],
  },
  noun: 'Order',
  display: {
    hidden: false,
    important: true,
    description: 'Triggers when a new order is created.',
    label: 'New Order',
  },
  key: 'new_order',
};
