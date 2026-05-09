export type CallType = "incoming" | "outgoing" | "missed";
export type SimSlot = "SIM1" | "SIM2";

export interface Contact {
  id: string;
  name: string;
  avatar?: string;
  verified?: boolean;
}

export interface CallLog {
  id: string;
  name: string;
  avatar?: string;
  verified?: boolean;
  spam?: boolean;
  type: CallType;
  time: string;
  sim: SimSlot;
  carrier: string;
}
