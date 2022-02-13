export interface Action {
  sender: string;
  senderType: string;

  receiver: string;
  receiverType: string;

  amount: number;
}

export interface Plan {
  id: string;
  name: string;
  actions: Action[];
}
