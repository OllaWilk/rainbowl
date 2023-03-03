export const select = {
  handlebasTemplate: {
    menuProduct: '#template-menu-product',
    cartProduct: '#template-cart-product',
    bookingWidget: '#template-booking-widget',
  },
  containerOf: {
    menu: '#product-list',
    cart: '#cart',
    pages: '#pages',
    booking: '.booking-wrapper',
  },
  menuProduct: {
    clickable: '.product__customize',
    form: '.product__order',
    cartButton: '[href="#add-to-cart"]',
    priceElem: '.product__base-price .price',
    imageWrapper: '.product__images',
    amountWidget: '.widget-amount',
  },
  all: {
    menuProductsActive: '#product-list > .product.active',
    formInputs: 'input, select',
    errorinfo: '.alert-info',
  },
  widgets: {
    amount: {
      input: 'input.amount-input',
      linkDecrease: 'a[href="#less"]',
      linkIncrease: 'a[href="#more"]',
    },
  },
  cart: {
    toggleTrigger: '.cart__summary',
    productList: '.cart__order-summary',
    totalNumber: '.cart__total-number',
    totalPrice:
      '.cart__total-price strong, .cart__order-total .cart__order-price-sum',
    subtotalPrice: '.cart__order-subtotal .cart__order-price-sum',
    deliveryFee: '.cart__order-delivery .cart__order-price-sum ',
    form: '.cart__order',
    formSubmit: '.cart__order [type="submit"]',
    phone: '[name="phone"]',
    address: '[name="address"]',
  },
  cartProduct: {
    amountWidget: '.widget-amount',
    price: '.cart__product-price',
    edit: '[href="#edit"]',
    remove: '[href="#remove"]',
  },
  page: {
    noConnection: '.no-connection',
  },
  nav: {
    links: '.navigation_list a',
  },
  booking: {
    peopleAmount: '.people-amount',
    hoursAmount: '.hours-amount',
  },
};

export const classNames = {
  menuProduct: {
    wrapperActive: 'active',
    imageVisible: 'active',
  },
  cart: {
    wrapperActive: 'active',
  },
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  },
};

export const settings = {
  amountWidget: {
    defaultMin: 1,
    defaultMax: 10,
    defaultValue: 1,
  },
  cart: {
    deliveryFee: 15,
  },
  db: {
    url: '//localhost:3131',
    product: 'product',
    order: 'order',
    booking: 'booking',
    event: 'event',
  },
};

export const templates = {
  menuProduct: Handlebars.compile(
    document.querySelector(select.handlebasTemplate.menuProduct).innerHTML
  ),
  cartProduct: Handlebars.compile(
    document.querySelector(select.handlebasTemplate.cartProduct).innerHTML
  ),
  bookingWidget: Handlebars.compile(
    document.querySelector(select.handlebasTemplate.bookingWidget).innerHTML
  ),
};
