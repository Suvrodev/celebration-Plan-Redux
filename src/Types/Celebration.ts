export interface ICelebratin {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status: TStatus;
  category: TCategoty;
}

export type TStatus = "In-progress" | "Pending" | "Completed";
export type TCategoty = "Family Time" | "BBQ Party" | "Games";
