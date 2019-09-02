export interface Userdetails {
    email: string;
    phone: number;
    country: string;
    services: [ServiceModel];
    servicesname: [string];
    newServices:string;
    issubscribed: boolean;
    isfreetrailaproove: boolean;
    isexpire: boolean;
    isSubscriptionaproove: boolean;
    fromdate: Date;
    enddate: Date;
    startdate: Date ;
    amountrecive: string;
    IP: string;
    totalamount: string;
  }

  export  interface ServiceModel {
    name: string;
    servicetype: string;
    price: string;
    selected: boolean;
    pricetype: string;
  }