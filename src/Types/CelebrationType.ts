export interface ICelebration {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status: TStatus;
  category: TCategory;
}

export type TStatus = "In-progress" | "Pending" | "Completed";
export type TCategory = "Family Time" | "BBQ Party" | "Games";
