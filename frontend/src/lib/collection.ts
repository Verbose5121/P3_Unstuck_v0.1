import { Database } from "./database.types";

export type UserDetails = Database["public"]["Tables"]["user_details"]["Row"];
export type Expedition = Database["public"]["Tables"]["expeditions"]["Row"];
export type Topic = Database["public"]["Tables"]["topics"]["Row"];
