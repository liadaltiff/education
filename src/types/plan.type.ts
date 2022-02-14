export interface Action {
  sender: string;
  senderType: string;

  receiver: string;
  receiverType: string;

  amount: number;
}

export interface Plan {
  _id: string;
  name: string;
  actions: Action[];
}
