export interface Action {
  typeOfAction: string;

  sender: string;
  senderType: string;
  senderID: number;

  receiver?: string;
  receiverType?: string;
  receiverID?: number;

  amount: number;
}

export interface Plan {
  name: string;
  actions: Action[];
}
