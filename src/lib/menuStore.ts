import { useSyncExternalStore } from "react";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  available: boolean;
};

const initial: MenuItem[] = [
  { id: "1", name: "Truffle Mushroom Pasta", description: "Hand-rolled tagliatelle tossed in a velvety truffle cream with wild mushrooms and parmesan.", price: 18.5, category: "Mains", available: true },
  { id: "2", name: "Smoked Paprika Wings", description: "Crispy wings glazed with smoked paprika, honey, and a squeeze of lime.", price: 12, category: "Starters", available: true },
  { id: "3", name: "Burrata & Heirloom Tomato", description: "Creamy burrata over heirloom tomatoes, basil oil, and toasted sourdough.", price: 14, category: "Starters", available: true },
  { id: "4", name: "Espresso Tonic", description: "Double shot espresso poured over chilled tonic with orange peel.", price: 6, category: "Drinks", available: false },
  { id: "5", name: "Salted Caramel Tart", description: "Dark chocolate ganache, salted caramel, and a buttery shortbread crust.", price: 9, category: "Desserts", available: true },
];

let state: MenuItem[] = initial;
const listeners = new Set<() => void>();

function emit() { listeners.forEach((l) => l()); }

export const menuStore = {
  getAll: () => state,
  add: (item: Omit<MenuItem, "id">) => {
    state = [...state, { ...item, id: crypto.randomUUID() }];
    emit();
  },
  update: (id: string, patch: Partial<MenuItem>) => {
    state = state.map((i) => (i.id === id ? { ...i, ...patch } : i));
    emit();
  },
  remove: (id: string) => {
    state = state.filter((i) => i.id !== id);
    emit();
  },
  subscribe: (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};

export function useMenu() {
  return useSyncExternalStore(menuStore.subscribe, menuStore.getAll, menuStore.getAll);
}

const ADJ = ["hand-crafted", "wood-fired", "slow-cooked", "house-made", "garden-fresh", "small-batch"];
const NOTES = ["with a hint of citrus", "served sizzling hot", "balanced with herbs and spice", "finished with a drizzle of olive oil", "paired with seasonal greens"];

export function generateAIDescription(name: string, category: string): string {
  const a = ADJ[Math.floor(Math.random() * ADJ.length)];
  const n = NOTES[Math.floor(Math.random() * NOTES.length)];
  const cat = category.toLowerCase();
  return `A ${a} ${name.toLowerCase()} from our ${cat} selection, ${n}. Crafted to delight every guest.`;
}