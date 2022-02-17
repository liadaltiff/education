export interface Action {
  typeOfAction: string;

  sender: string;
  senderType: string;

  receiver?: string;
  receiverType?: string;

  amount: number;
}

export interface Plan {
  name: string;
  actions: Action[];
}
