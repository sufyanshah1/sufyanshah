import type { CallLog, Contact } from "./types";

export const recommended: Contact[] = [
  { id: "1", name: "Ayesha Khan", verified: true },
  { id: "2", name: "Bilal Ahmed", verified: false },
  { id: "3", name: "Sana Malik", verified: true },
  { id: "4", name: "Hamza Sheikh", verified: true },
  { id: "5", name: "Zara Iqbal", verified: false },
  { id: "6", name: "Usman Ali", verified: true },
  { id: "7", name: "Fatima Noor", verified: true },
];

export const callLogs: CallLog[] = [
  { id: "c1", name: "Ayesha Khan", verified: true, type: "incoming", time: "10:30 AM", sim: "SIM1", carrier: "Jazz" },
  { id: "c2", name: "Unknown +92 300 1234567", spam: true, type: "missed", time: "9:48 AM", sim: "SIM2", carrier: "Zong" },
  { id: "c3", name: "Bilal Ahmed", type: "outgoing", time: "Yesterday", sim: "SIM1", carrier: "Jazz" },
  { id: "c4", name: "Sana Malik", verified: true, type: "incoming", time: "Yesterday", sim: "SIM2", carrier: "Zong" },
  { id: "c5", name: "Office Reception", type: "missed", time: "2 days ago", sim: "SIM1", carrier: "Jazz" },
  { id: "c6", name: "Hamza Sheikh", verified: true, type: "outgoing", time: "2 days ago", sim: "SIM2", carrier: "Zong" },
  { id: "c7", name: "Delivery Rider", type: "incoming", time: "3 days ago", sim: "SIM1", carrier: "Jazz" },
  { id: "c8", name: "Zara Iqbal", type: "outgoing", time: "3 days ago", sim: "SIM2", carrier: "Zong" },
  { id: "c9", name: "Telemarketer", spam: true, type: "missed", time: "4 days ago", sim: "SIM1", carrier: "Jazz" },
];

export const initials = (name: string) =>
  name
    .replace(/[^a-zA-Z ]/g, "")
    .trim()
    .charAt(0)
    .toUpperCase() || "?";
