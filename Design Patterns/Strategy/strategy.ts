/**
 * The strategy pattern is like an advanced version of if-else statement
 */

interface CustomerInfoType {
  country: string
  emailAddress: string
  name: string
  accountNumber?: number
  address?: string
  cardNumber?: number
  city?: string
  routingNumber?: number
  state?: string
}

export default class PaymentMethodStrategy {
  static BankAccount(customerInfo: CustomerInfoType) {
    const {name, accountNumber, routingNumber} = customerInfo;
  }

  static BitCoin(customerInfo: CustomerInfoType) {
    const {emailAddress, accountNumber} = customerInfo;
  }

  static CreditCard(customerInfo: CustomerInfoType) {
    const {name, cardNumber, emailAddress} = customerInfo;
  }

  static MailIn(customerInfo: CustomerInfoType) {
    const {name, address, city, state} = customerInfo;
  }

  static Paypal(customerInfo: CustomerInfoType) {
    const {emailAddress} = customerInfo;
  }
}